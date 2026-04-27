// ==================== GLOBAL STATE ====================
let currentFilters = {
    search: '',
    mealType: 'all',
    difficulty: 'all',
    cost: 'all',
    diet: 'veg',
    cuisine: 'indian'
};

// ==================== INITIALIZATION ====================
window.onload = function() {
    // Get user preferences from localStorage
    const dietPref = localStorage.getItem('dietPreference') || 'veg';
    const cuisinePref = localStorage.getItem('cuisinePreference') || 'indian';
    
    currentFilters.diet = dietPref;
    currentFilters.cuisine = cuisinePref;
    
    // Update hero title based on preferences
    updateHeroTitle();
    
    // Render initial recipes
    renderRecipes();
};

// ==================== UPDATE HERO TITLE ====================
function updateHeroTitle() {
    const { diet, cuisine } = currentFilters;
    
    const titles = {
        'veg-indian': {
            title: 'Vegetarian Indian Recipes',
            subtitle: 'Discover authentic homemade dishes | घर का स्वादिष्ट खाना'
        },
        'veg-continental': {
            title: 'Vegetarian Continental Recipes',
            subtitle: 'Explore flavors from Europe & Americas | यूरोपीय व्यंजन'
        },
        'nonveg-indian': {
            title: 'Non-Vegetarian Indian Recipes',
            subtitle: 'Traditional meat & seafood delicacies | पारंपरिक मांसाहारी व्यंजन'
        },
        'nonveg-continental': {
            title: 'Non-Vegetarian Continental Recipes',
            subtitle: 'Classic meat dishes from around the world | विश्व के मांसाहारी व्यंजन'
        }
    };
    
    const key = `${diet}-${cuisine}`;
    const content = titles[key];
    
    document.getElementById('hero-title').textContent = content.title;
    document.getElementById('hero-subtitle').textContent = content.subtitle;
}

// ==================== FILTER FUNCTIONS ====================
function filterRecipes() {
    currentFilters.search = document.getElementById('search-input').value.toLowerCase();
    renderRecipes();
}

function filterByMealType(type) {
    currentFilters.mealType = type;
    updateActiveButton(event.target, 'meal');
    renderRecipes();
}

function filterByDifficulty(level) {
    currentFilters.difficulty = level;
    updateActiveButton(event.target, 'difficulty');
    renderRecipes();
}

function filterByCost(category) {
    currentFilters.cost = category;
    updateActiveButton(event.target, 'cost');
    renderRecipes();
}

function updateActiveButton(clickedBtn, filterType) {
    // Remove active class from all buttons in the group
    const parent = clickedBtn.parentElement;
    parent.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    clickedBtn.classList.add('active');
}

// ==================== RENDER RECIPES ====================
function renderRecipes() {
    const grid = document.getElementById('recipe-grid');
    const noResults = document.getElementById('no-results');
    
    // Filter recipes based on current filters
    let filteredRecipes = recipes.filter(recipe => {
        // Diet and Cuisine filter (from localStorage)
        if (recipe.diet !== currentFilters.diet) return false;
        if (recipe.cuisine !== currentFilters.cuisine) return false;
        
        // Search filter
        if (currentFilters.search) {
            const searchLower = currentFilters.search;
            const matchesName = recipe.name.toLowerCase().includes(searchLower);
            const matchesHindi = recipe.nameHindi.includes(currentFilters.search);
            const matchesTags = recipe.tags.some(tag => tag.toLowerCase().includes(searchLower));
            if (!matchesName && !matchesHindi && !matchesTags) return false;
        }
        
        // Meal type filter
        if (currentFilters.mealType !== 'all' && recipe.mealType !== currentFilters.mealType) {
            return false;
        }
        
        // Difficulty filter
        if (currentFilters.difficulty !== 'all' && recipe.difficulty !== currentFilters.difficulty) {
            return false;
        }
        
        // Cost filter
        if (currentFilters.cost !== 'all' && recipe.costCategory !== currentFilters.cost) {
            return false;
        }
        
        return true;
    });
    
    // Update results count
    document.getElementById('results-count').textContent = 
        `Showing ${filteredRecipes.length} recipe${filteredRecipes.length !== 1 ? 's' : ''}`;
    
    // Show/hide no results message
    if (filteredRecipes.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    } else {
        grid.style.display = 'grid';
        noResults.style.display = 'none';
    }
    
    // Render recipe cards
    grid.innerHTML = filteredRecipes.map(recipe => createRecipeCard(recipe)).join('');
}

// ==================== CREATE RECIPE CARD ====================
function createRecipeCard(recipe) {
    const costIcons = {
        'budget': 'Budget -',
        'moderate': 'Moderate -',
        'premium': 'Premium -'
    };
    
    const difficultyColors = {
        'easy': '#4CAF50',
        'medium': '#FF9800',
        'hard': '#F44336'
    };
    
    return `
        <div class="recipe-card">
            <div class="card-image-container">
                <img 
                    src="${recipe.image}" 
                    alt="${recipe.name}" 
                    class="card-image"
                    onerror="this.src='https://via.placeholder.com/400x300/FFE5B4/FF6F00?text=${encodeURIComponent(recipe.name)}'"
                >
                <span class="card-badge">${recipe.diet === 'veg' ? 'Veg' : 'Non-Veg'}</span>
               
            </div>
            
            <div class="card-content">
                <h3 class="card-title">${recipe.name}</h3>
                <p class="card-title-hindi">${recipe.nameHindi}</p>
                
                <div class="card-meta">
                    
                    <span class="meta-item">
                        <span class="meta-icon">Time -</span>
                        ${recipe.cookTime}
                    </span>
                    <span class="meta-item">
                        <span class="meta-icon" style="color: ${difficultyColors[recipe.difficulty]}">●</span>
                        ${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
                    </span>
                </div>
                
                <div class="card-tags">
                    ${recipe.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                
                <div class="card-footer">
                    <span class="cost-badge">
                        ${costIcons[recipe.costCategory]} ${recipe.costRange}
                    </span>
                    <button class="view-recipe-btn" onclick="viewRecipe(${recipe.id})">
                        View Recipe →
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ==================== VIEW RECIPE (Placeholder) ====================
function viewRecipe(recipeId) {
    window.location.href = `recipe-detail.html?id=${recipeId}`;
}

// ==================== TOGGLE FAVORITE ====================
function toggleFavorite(event, recipeId) {
    event.stopPropagation(); // Prevent card click
    
    const btn = event.currentTarget;
    
    // Toggle heart icon
    if (btn.textContent === '♡') {
        btn.textContent = '♥';
        btn.style.color = '#F44336';
        
        // Save to localStorage
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (!favorites.includes(recipeId)) {
            favorites.push(recipeId);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    } else {
        btn.textContent = '♡';
        btn.style.color = '';
        
        // Remove from localStorage
        let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        favorites = favorites.filter(id => id !== recipeId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

// ==================== CHANGE PREFERENCES ====================
function changePreferences() {
    // Clear preferences and go back to diet selection
    if (confirm) {
        localStorage.removeItem('dietPreference');
        localStorage.removeItem('cuisinePreference');
        window.location.href = 'dietentrypage.html';
    }
}

// ==================== OPEN CHATBOT (Placeholder) ====================
function openChatbot() {
    alert('AI Chef Chatbot coming soon! 🤖\n\nYou\'ll be able to:\n• Get recipe suggestions from leftover ingredients\n• Ask cooking questions\n• Get personalized meal plans\n• Find ingredient substitutions');
    
    // TODO: Open chatbot modal/panel
    console.log('Opening AI Chef chatbot...');
}