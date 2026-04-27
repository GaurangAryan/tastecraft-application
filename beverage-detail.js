// ==================== GLOBAL STATE ====================
let currentBev = null;
let baseServings = 2;
let currentServings = 2;
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let timerDuration = 0;

// ==================== INIT ====================
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bevId = urlParams.get('id');
    if (!bevId) { window.location.href = 'beverages.html'; return; }
    currentBev = beverages.find(b => b.id === bevId);
    if (!currentBev) { window.location.href = 'beverages.html'; return; }

    // Parse base servings from serves string e.g. "2 glasses" → 2
    const match = (currentBev.serves || '2').match(/\d+/);
    baseServings = match ? parseInt(match[0]) : 2;
    currentServings = baseServings;

    renderBeverage();
    checkFavStatus();
};

// ==================== RENDER ====================
function renderBeverage() {
    const b = currentBev;
    const heroImg   = document.getElementById('bev-hero-image');
    const heroEmoji = document.getElementById('bev-hero-emoji');
    heroEmoji.textContent = b.emoji;
    if (b.image) {
        heroImg.src = b.image; heroImg.alt = b.name;
        heroImg.style.display = 'block'; heroEmoji.style.display = 'none';
        heroImg.onerror = function() { this.style.display='none'; heroEmoji.style.display='flex'; };
    }
    document.title = `${b.name} - TasteCraft`;
    document.getElementById('bev-name').textContent       = b.name;
    document.getElementById('bev-name-hindi').textContent = b.nameHindi;
    document.getElementById('bev-time').textContent       = b.prepTime;
    document.getElementById('bev-cost').textContent       = b.costRange;
    document.getElementById('bev-cals').textContent       = `${b.calories} kcal`;

    const typeBadge = document.getElementById('bev-type-badge');
    typeBadge.textContent = b.typeLabel;
    typeBadge.className = `meta-badge bev-type-badge type-${b.type}`;

    document.getElementById('bev-total-cost').textContent = b.costRange;
    document.getElementById('current-servings').textContent = currentServings;

    renderIngredients();
    renderNutrition();
    renderInstructions();
    renderTips();
    renderSimilar();
}

// ==================== SERVINGS ADJUSTER (same as recipes page) ====================
function adjustServings(change) {
    const newServings = currentServings + change;
    if (newServings < 1 || newServings > 12) return;
    currentServings = newServings;
    document.getElementById('current-servings').textContent = currentServings;
    renderIngredients();
}

// ==================== INGREDIENTS (with scaling) ====================
function renderIngredients() {
    const costColors = { low: '#2ECC71', medium: '#FF8C42', high: '#E74C3C' };
    const servingRatio = currentServings / baseServings;

    document.getElementById('bev-ingredients').innerHTML =
        currentBev.ingredients.map(ing => {
            let adjustedAmount = ing.amount;
            const numMatch = ing.amount.match(/[\d.]+/);
            if (numMatch) {
                const num = parseFloat(numMatch[0]);
                const adjustedNum = (num * servingRatio).toFixed(num % 1 === 0 ? 0 : 1);
                adjustedAmount = ing.amount.replace(numMatch[0], adjustedNum);
            }
            return `
            <li class="ingredient-item">
                <input type="checkbox" class="ingredient-checkbox" id="ing-${ing.name.replace(/\s/g,'-')}">
                <div class="ingredient-info">
                    <label for="ing-${ing.name.replace(/\s/g,'-')}" class="ingredient-name">${ing.name}</label>
                </div>
                <div>
                    <span class="ingredient-amount">${adjustedAmount}</span>
                    <span class="ingredient-cost" style="color:${costColors[ing.cost]}">
                        ${ing.cost==='low'?'●':ing.cost==='medium'?'●●':'●●●'}
                    </span>
                </div>
            </li>`;
        }).join('');
}

// ==================== NUTRITION ====================
function renderNutrition() {
    const n = currentBev.nutrition;
    document.getElementById('bev-n-cals').textContent    = `${currentBev.calories} kcal`;
    document.getElementById('bev-n-protein').textContent = n.protein;
    document.getElementById('bev-n-carbs').textContent   = n.carbs;
    document.getElementById('bev-n-fat').textContent     = n.fat;
    const pVal = parseInt(n.protein), cVal = parseInt(n.carbs), fVal = parseInt(n.fat);
    const max  = Math.max(pVal, cVal, fVal, 1);
    document.getElementById('bev-protein-bar').style.width = `${(pVal/max)*100}%`;
    document.getElementById('bev-carbs-bar').style.width   = `${(cVal/max)*100}%`;
    document.getElementById('bev-fat-bar').style.width     = `${(fVal/max)*100}%`;
}

// ==================== INSTRUCTIONS ====================
function renderInstructions() {
    document.getElementById('bev-instructions').innerHTML =
        currentBev.instructions.map((step, i) => `
            <div class="instruction-step">
                <div class="step-number">${i+1}</div>
                <div class="step-content">
                    <h3 class="step-title">${step.title}</h3>
                    <p class="step-description">${step.description}</p>
                    ${step.time ? `<span class="step-timer" onclick="openTimer(${step.time})">⏱ Set ${step.time} min timer</span>` : ''}
                </div>
            </div>`).join('');
}

// ==================== TIPS ====================
function renderTips() {
    const tips = currentBev.tips || [];
    const icons = ['','','','','',''];
    document.getElementById('bev-tips').innerHTML =
        tips.map((tip, i) => `
            <li class="tip-item">
                <span class="tip-icon">${icons[i % icons.length]}</span>
                <span class="tip-text">${tip}</span>
            </li>`).join('');
}

// ==================== SIMILAR WITH IMAGES ====================
function renderSimilar() {
    const sameCuisine = beverages.filter(b => b.id !== currentBev.id && b.cuisine === currentBev.cuisine);
    const list = (sameCuisine.length >= 2 ? sameCuisine : beverages.filter(b => b.id !== currentBev.id)).slice(0, 3);

    document.getElementById('bev-similar').innerHTML = list.map(b => {
        const hasImg = b.image && !b.image.includes('placeholder');
        return `<div class="similar-card" onclick="window.location.href='beverage-detail.html?id=${b.id}'">
            ${hasImg ? `<img src="${b.image}" alt="${b.name}" class="similar-image" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">` : ''}
            <div class="similar-emoji-img" style="${hasImg ? 'display:none' : 'display:flex'}">${b.emoji}</div>
            <div class="similar-info">
                <p class="similar-name">${b.name}</p>
                <div class="similar-meta"><span>⏱ ${b.prepTime}</span></div>
            </div>
        </div>`;
    }).join('');
}

// ==================== FAVORITES ====================
function toggleFavBev() {
    const btn = document.getElementById('fav-btn-bev');
    const icon = btn.querySelector('.action-icon');
    let favs = JSON.parse(localStorage.getItem('bev-favorites') || '[]');
    if (icon.textContent === '♡') {
        icon.textContent = '♥'; icon.style.color = '#E74C3C';
        if (!favs.includes(currentBev.id)) favs.push(currentBev.id);
    } else {
        icon.textContent = '♡'; icon.style.color = '';
        favs = favs.filter(id => id !== currentBev.id);
    }
    localStorage.setItem('bev-favorites', JSON.stringify(favs));
}
function checkFavStatus() {
    const favs = JSON.parse(localStorage.getItem('bev-favorites') || '[]');
    if (favs.includes(currentBev.id)) {
        const icon = document.querySelector('#fav-btn-bev .action-icon');
        icon.textContent = '♥'; icon.style.color = '#E74C3C';
    }
}

// ==================== SHARE ====================
function shareBev() {
    const url = window.location.href;
    if (navigator.share) navigator.share({ title: currentBev.name, text: `Check out ${currentBev.name} on TasteCraft!`, url }).catch(()=>{});
    else navigator.clipboard.writeText(url).then(() => alert('Link copied! 📤'));
}

// ==================== TIMER ====================
function openTimer(minutes) {
    timerDuration = minutes * 60; timerSeconds = timerDuration;
    updateTimerDisplay();
    document.getElementById('bev-timer-modal').style.display = 'flex';
    document.getElementById('t-start').style.display = 'inline-block';
    document.getElementById('t-pause').style.display = 'none';
}
function closeTimer() {
    if (timerRunning && !confirm('Timer is running. Close?')) return;
    pauseTimer(); document.getElementById('bev-timer-modal').style.display = 'none'; resetTimer();
}
function startTimer() {
    if (timerRunning) return;
    timerRunning = true;
    document.getElementById('t-start').style.display = 'none';
    document.getElementById('t-pause').style.display = 'inline-block';
    timerInterval = setInterval(() => { timerSeconds--; updateTimerDisplay(); if (timerSeconds <= 0) { pauseTimer(); alert('⏰ Timer finished!'); } }, 1000);
}
function pauseTimer() {
    timerRunning = false; clearInterval(timerInterval);
    document.getElementById('t-start').style.display = 'inline-block';
    document.getElementById('t-pause').style.display = 'none';
}
function resetTimer() { pauseTimer(); timerSeconds = timerDuration; updateTimerDisplay(); }
function updateTimerDisplay() {
    document.getElementById('t-min').textContent = String(Math.floor(timerSeconds/60)).padStart(2,'0');
    document.getElementById('t-sec').textContent = String(timerSeconds%60).padStart(2,'0');
}
function goBack() { window.location.href = 'beverages.html'; }
