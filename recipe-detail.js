// ==================== GLOBAL STATE ====================
let currentRecipe = null;
let baseServings = 4;
let currentServings = 4;
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let timerDuration = 0;

// ==================== INITIALIZATION ====================
window.onload = function() {
    //Get recipe ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = parseInt(urlParams.get('id'));
    
    if (!recipeId || isNaN(recipeId)) {
       alert('Recipe not found!');
       window.location.href = 'mainapp.html';
       return;
    }
    
    // Find recipe in data
    currentRecipe = recipes.find(r => r.id === recipeId);
    
    if (!currentRecipe) {
       alert('Recipe not found!');
       window.location.href = 'mainapp.html';
    return;
    }
    
    // Store base servings
    baseServings = currentRecipe.servings || 4;
    currentServings = baseServings;
    
    ///Render the recipe
    renderRecipe();
    
    //Check if recipe is favorited
    checkFavoriteStatus();
};


// ==================== RENDER RECIPE ====================
function renderRecipe() {
    // Hero Section
    document.getElementById('recipe-image').src = currentRecipe.image;
    document.getElementById('recipe-image').alt = currentRecipe.name;
    document.getElementById('recipe-image').onerror = function() {
        this.src = `https://via.placeholder.com/1200x500/FFE5B4/FF6F00?text=${encodeURIComponent(currentRecipe.name)}`;
    };
    
    document.getElementById('recipe-name').textContent = currentRecipe.name;
    document.getElementById('recipe-name-hindi').textContent = currentRecipe.nameHindi;
    //document.getElementById('recipe-rating').textContent = currentRecipe.rating;
    document.getElementById('recipe-time').textContent = currentRecipe.cookTime;
    document.getElementById('recipe-difficulty').textContent = 
        currentRecipe.difficulty.charAt(0).toUpperCase() + currentRecipe.difficulty.slice(1);
    document.getElementById('recipe-diet-badge').textContent = 
        currentRecipe.diet === 'veg' ? 'Veg' : 'Non-Veg';
    document.getElementById('recipe-cost').textContent = currentRecipe.costRange;
    document.getElementById('recipe-calories').textContent = `${currentRecipe.calories} cal`;
    
    // Set difficulty color
    const difficultyColors = {
        'easy': '#2ECC71',
        'medium': '#FF8C42',
        'hard': '#E74C3C'
    };
    document.querySelector('#recipe-difficulty').previousElementSibling.style.color = 
        difficultyColors[currentRecipe.difficulty];
    
    // Servings
    document.getElementById('current-servings').textContent = currentServings;
    
    // Render sections
    renderIngredients();
    renderNutrition();
    renderInstructions();
    renderTips();
    renderSimilarRecipes();
}

// ==================== RENDER INGREDIENTS ====================
function renderIngredients() {
    const ingredientsList = document.getElementById('ingredients-list');
    const servingRatio = currentServings / baseServings;
    
    ingredientsList.innerHTML = currentRecipe.ingredients.map(ing => {
        // Parse amount (handle numbers with units)
        let adjustedAmount = ing.amount;
        const numMatch = ing.amount.match(/[\d.]+/);
        if (numMatch) {
            const num = parseFloat(numMatch[0]);
            const adjustedNum = (num * servingRatio).toFixed(num % 1 === 0 ? 0 : 1);
             adjustedAmount = ing.amount.replace(numMatch[0], adjustedNum);
        }
        
        const costColors = {
            'low': '#2ECC71',
            'medium': '#FF8C42',
            'high': '#E74C3C'
        };
        
        return `
            <li class="ingredient-item">
                <input type="checkbox" class="ingredient-checkbox" id="ing-${ing.name}">
                <div class="ingredient-info">
                    <label for="ing-${ing.name}" class="ingredient-name">${ing.name}</label>
                </div>
                <div>
                    <span class="ingredient-amount">${adjustedAmount}</span>
                    <span class="ingredient-cost" style="color: ${costColors[ing.cost]}">
                        ${ing.cost === 'low' ? '' : ing.cost === 'medium' ? '' : ''}
                    </span>
                </div>
            </li>
        `;
    }).join('');
    
    // Update total cost
    document.getElementById('total-cost').textContent = currentRecipe.costRange;
}

// ==================== RENDER NUTRITION ====================
function renderNutrition() {
    document.getElementById('nutrition-calories').textContent = `${currentRecipe.calories} kcal`;
    
    const nutrition = currentRecipe.nutrition;
    document.getElementById('nutrition-protein').textContent = nutrition.protein;
    document.getElementById('nutrition-carbs').textContent = nutrition.carbs;
    document.getElementById('nutrition-fat').textContent = nutrition.fat;
    
    // Calculate bar widths (max 100g = 100%)
    const proteinNum = parseInt(nutrition.protein);
    const carbsNum = parseInt(nutrition.carbs);
    const fatNum = parseInt(nutrition.fat);
    
    document.getElementById('protein-bar').style.width = `${Math.min(proteinNum, 100)}%`;
    document.getElementById('carbs-bar').style.width = `${Math.min(carbsNum, 100)}%`;
    document.getElementById('fat-bar').style.width = `${Math.min(fatNum, 100)}%`;
}

// ==================== RENDER INSTRUCTIONS ====================
function renderInstructions() {
    const instructionsList = document.getElementById('instructions-list');
    
    // Check if recipe has detailed instructions
    if (currentRecipe.instructions && Array.isArray(currentRecipe.instructions)) {
        instructionsList.innerHTML = currentRecipe.instructions.map((inst, index) => `
            <div class="instruction-step">
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <h3 class="step-title">${inst.title || `Step ${index + 1}`}</h3>
                    <p class="step-description">${inst.description}</p>
                    ${inst.time ? `<span class="step-timer" onclick="openTimer(${parseInt(inst.time)})">Time ${inst.time}</span>` : ''}
                </div>
            </div>
        `).join('');
    } else {
        // Fallback to simple instructions array (from old data structure)
        const simpleInstructions = [
            "Prepare all ingredients as listed above",
            "Follow traditional cooking methods for this dish",
            "Cook until done and serve hot"
        ];
        
        instructionsList.innerHTML = simpleInstructions.map((inst, index) => `
            <div class="instruction-step">
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <p class="step-description">${inst}</p>
                </div>
            </div>
        `).join('');
    }
}

// ==================== RENDER TIPS ====================
function renderTips() {
    const tipsList = document.getElementById('tips-list');
    
    const tips = currentRecipe.tips || [
        "Always use fresh ingredients for best results",
        "Adjust spices according to your taste preference",
        "Serve hot for maximum flavor"
    ];
    
    tipsList.innerHTML = tips.map(tip => `
        <li class="tip-item">
            <span class="tip-icon"></span>
            <span class="tip-text">${tip}</span>
        </li>
    `).join('');
}

// ==================== RENDER SIMILAR RECIPES ====================
function renderSimilarRecipes() {
    const similarContainer = document.getElementById('similar-recipes');
    
    // Get similar recipes (same cuisine and diet, but different recipe)
    let similarRecipes = recipes.filter(r => 
        r.id !== currentRecipe.id &&
        r.cuisine === currentRecipe.cuisine &&
        r.diet === currentRecipe.diet
    ).slice(0, 3);
    
    // If not enough, add from same diet
    if (similarRecipes.length < 3) {
        const additional = recipes.filter(r => 
            r.id !== currentRecipe.id &&
            r.diet === currentRecipe.diet &&
            !similarRecipes.includes(r)
        ).slice(0, 3 - similarRecipes.length);
        
        similarRecipes = [...similarRecipes, ...additional];
    }
    
    similarContainer.innerHTML = similarRecipes.map(recipe => `
        <div class="similar-card" onclick="viewRecipe(${recipe.id})">
            <img 
                src="${recipe.image}" 
                alt="${recipe.name}" 
                class="similar-image"
                onerror="this.src='https://via.placeholder.com/300x150/FFE5B4/FF6F00?text=${encodeURIComponent(recipe.name)}'"
            >
            <div class="similar-info">
                <h4 class="similar-name">${recipe.name}</h4>
                <div class="similar-meta">

                    <span>Time ${recipe.cookTime}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== ADJUST SERVINGS ====================
function adjustServings(change) {
    const newServings = currentServings + change;
    
    // Limit between 1 and 12
    if (newServings < 1 || newServings > 12) return;
    
    currentServings = newServings;
    document.getElementById('current-servings').textContent = currentServings;
    
    // Re-render ingredients with new amounts
    renderIngredients();
}

// ==================== TIMER FUNCTIONS ====================
function openTimer(minutes) {
    timerDuration = minutes * 60;
    timerSeconds = timerDuration;
    updateTimerDisplay();
    document.getElementById('timer-modal').style.display = 'flex';
    document.getElementById('timer-start-btn').style.display = 'inline-block';
    document.getElementById('timer-pause-btn').style.display = 'none';
}

function closeTimer() {
    if (timerRunning) {
        if (!confirm('Timer is running. Are you sure you want to close?')) {
            return;
        }
        pauseTimer();
    }
    document.getElementById('timer-modal').style.display = 'none';
    resetTimer();
}

function startTimer() {
    if (timerRunning) return;
    
    timerRunning = true;
    document.getElementById('timer-start-btn').style.display = 'none';
    document.getElementById('timer-pause-btn').style.display = 'inline-block';
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        
        if (timerSeconds <= 0) {
            pauseTimer();
            playTimerSound();
            alert('⏰ Timer finished! Your dish is ready.');
        }
    }, 1000);
}

function pauseTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    document.getElementById('timer-start-btn').style.display = 'inline-block';
    document.getElementById('timer-pause-btn').style.display = 'none';
}

function resetTimer() {
    pauseTimer();
    timerSeconds = timerDuration;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    
    document.getElementById('timer-minutes').textContent = 
        String(minutes).padStart(2, '0');
    document.getElementById('timer-seconds').textContent = 
        String(seconds).padStart(2, '0');
}

function playTimerSound() {
    // Browser notification sound
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('TasteCraft Timer', {
            body: 'Your cooking timer has finished!',
            icon: currentRecipe.image
        });
    }
}

// ==================== ACTION BUTTONS ====================
function toggleFavoriteDetail() {
    const btn = document.getElementById('favorite-btn-detail');
    const icon = btn.querySelector('.action-icon');
    
    if (icon.textContent === '♡') {
        icon.textContent = '♥';
        icon.style.color = '#E74C3C';
        
        // Save to localStorage
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (!favorites.includes(currentRecipe.id)) {
            favorites.push(currentRecipe.id);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    } else {
        icon.textContent = '♡';
        icon.style.color = '';
        
        // Remove from localStorage
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        favorites = favorites.filter(id => id !== currentRecipe.id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

function checkFavoriteStatus() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const btn = document.getElementById('favorite-btn-detail');
    const icon = btn.querySelector('.action-icon');
    
    if (favorites.includes(currentRecipe.id)) {
        icon.textContent = '♥';
        icon.style.color = '#E74C3C';
    }
}

function shareRecipe() {
    const url = window.location.href;
    const text = `Check out this ${currentRecipe.name} recipe on TasteCraft!`;
    
    // Try native share API first
    if (navigator.share) {
        navigator.share({
            title: currentRecipe.name,
            text: text,
            url: url
        }).catch(err => console.log('Share cancelled'));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(url).then(() => {
            alert('Recipe link copied to clipboard! 📤\n\nShare it with your friends.');
        });
    }
}

function printRecipe() {
    window.print();
}

function goBack() {
    window.history.back();
}

function viewRecipe(recipeId) {
    window.location.href = `recipe-detail.html?id=${recipeId}`;
}

// ==================== REQUEST NOTIFICATION PERMISSION ====================
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}