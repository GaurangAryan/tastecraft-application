// ==================== GLOBAL STATE ====================
let currentDes = null;
let baseServings = 4;
let currentServings = 4;
let desTimerInterval = null;
let desTimerSeconds  = 0;
let desTimerRunning  = false;
let desTimerDuration = 0;

// ==================== INIT ====================
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const desId = urlParams.get('id');
    if (!desId) { window.location.href = 'desserts.html'; return; }
    currentDes = desserts.find(d => d.id === desId);
    if (!currentDes) { window.location.href = 'desserts.html'; return; }

    const match = (currentDes.serves || '4').match(/\d+/);
    baseServings = match ? parseInt(match[0]) : 4;
    currentServings = baseServings;

    renderDessert();
    checkDesFavStatus();
};

// ==================== RENDER ====================
function renderDessert() {
    const d = currentDes;
    const heroImg   = document.getElementById('des-hero-image');
    const heroEmoji = document.getElementById('des-hero-emoji');
    heroEmoji.textContent = d.emoji;
    if (d.image) {
        heroImg.src = d.image; heroImg.alt = d.name;
        heroImg.style.display = 'block'; heroEmoji.style.display = 'none';
        heroImg.onerror = function() { this.style.display='none'; heroEmoji.style.display='flex'; };
    }
    document.title = `${d.name} - TasteCraft`;
    document.getElementById('des-name').textContent       = d.name;
    document.getElementById('des-name-hindi').textContent = d.nameHindi;
    document.getElementById('des-time').textContent       = d.prepTime;
    document.getElementById('des-cost').textContent       = d.costRange;
    document.getElementById('des-cals').textContent       = `${d.calories} kcal`;

    const originBadge = document.getElementById('des-origin-badge');
    originBadge.textContent = d.originLabel;
    originBadge.className   = `meta-badge des-origin-badge origin-${d.origin}`;

    document.getElementById('des-total-cost').textContent = d.costRange;
    document.getElementById('current-servings').textContent = currentServings;

    renderDesIngredients();
    renderDesNutrition();
    renderDesInstructions();
    renderDesTips();
    renderDesSimilar();
}

// ==================== SERVINGS ADJUSTER (same as recipes page) ====================
function adjustServings(change) {
    const newServings = currentServings + change;
    if (newServings < 1 || newServings > 12) return;
    currentServings = newServings;
    document.getElementById('current-servings').textContent = currentServings;
    renderDesIngredients();
}

// ==================== INGREDIENTS (with scaling) ====================
function renderDesIngredients() {
    const costColors = { low: '#2ECC71', medium: '#FF8C42', high: '#E74C3C' };
    const servingRatio = currentServings / baseServings;

    document.getElementById('des-ingredients').innerHTML =
        currentDes.ingredients.map(ing => {
            let adjustedAmount = ing.amount;
            const numMatch = ing.amount.match(/[\d.]+/);
            if (numMatch) {
                const num = parseFloat(numMatch[0]);
                const adjustedNum = (num * servingRatio).toFixed(num % 1 === 0 ? 0 : 1);
                adjustedAmount = ing.amount.replace(numMatch[0], adjustedNum);
            }
            return `
            <li class="ingredient-item">
                <input type="checkbox" class="ingredient-checkbox" id="ding-${ing.name.replace(/\s/g,'-')}">
                <div class="ingredient-info">
                    <label for="ding-${ing.name.replace(/\s/g,'-')}" class="ingredient-name">${ing.name}</label>
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
function renderDesNutrition() {
    const n = currentDes.nutrition;
    document.getElementById('des-n-cals').textContent    = `${currentDes.calories} kcal`;
    document.getElementById('des-n-protein').textContent = n.protein;
    document.getElementById('des-n-carbs').textContent   = n.carbs;
    document.getElementById('des-n-fat').textContent     = n.fat;
    const pVal = parseInt(n.protein), cVal = parseInt(n.carbs), fVal = parseInt(n.fat);
    const max  = Math.max(pVal, cVal, fVal, 1);
    document.getElementById('des-protein-bar').style.width = `${(pVal/max)*100}%`;
    document.getElementById('des-carbs-bar').style.width   = `${(cVal/max)*100}%`;
    document.getElementById('des-fat-bar').style.width     = `${(fVal/max)*100}%`;
}

// ==================== INSTRUCTIONS ====================
function renderDesInstructions() {
    document.getElementById('des-instructions').innerHTML =
        currentDes.instructions.map((step, i) => `
            <div class="instruction-step">
                <div class="step-number">${i+1}</div>
                <div class="step-content">
                    <h3 class="step-title">${step.title}</h3>
                    <p class="step-description">${step.description}</p>
                    ${step.time ? `<span class="step-timer" onclick="openDesTimer(${step.time})">⏱ Set ${step.time} min timer</span>` : ''}
                </div>
            </div>`).join('');
}

// ==================== TIPS ====================
function renderDesTips() {
    const tips  = currentDes.tips || [];
    const icons = ['','','','','',''];
    document.getElementById('des-tips').innerHTML =
        tips.map((tip, i) => `
            <li class="tip-item">
                <span class="tip-icon">${icons[i % icons.length]}</span>
                <span class="tip-text">${tip}</span>
            </li>`).join('');
}

// ==================== SIMILAR WITH IMAGES ====================
function renderDesSimilar() {
    const sameOrigin = desserts.filter(d => d.id !== currentDes.id && d.origin === currentDes.origin);
    const list = (sameOrigin.length >= 2 ? sameOrigin : desserts.filter(d => d.id !== currentDes.id)).slice(0, 3);

    document.getElementById('des-similar').innerHTML = list.map(d => {
        const hasImg = d.image && !d.image.includes('placeholder');
        return `<div class="similar-card" onclick="window.location.href='dessert-detail.html?id=${d.id}'">
            ${hasImg ? `<img src="${d.image}" alt="${d.name}" class="similar-image" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">` : ''}
            <div class="similar-emoji-img" style="${hasImg ? 'display:none' : 'display:flex'}">${d.emoji}</div>
            <div class="similar-info">
                <p class="similar-name">${d.name}</p>
                <div class="similar-meta"><span>⏱ ${d.prepTime}</span></div>
            </div>
        </div>`;
    }).join('');
}

// ==================== FAVORITES ====================
function toggleFavDes() {
    const btn = document.getElementById('fav-btn-des');
    const icon = btn.querySelector('.action-icon');
    let favs = JSON.parse(localStorage.getItem('des-favorites') || '[]');
    if (icon.textContent === '♡') {
        icon.textContent = '♥'; icon.style.color = '#E74C3C';
        if (!favs.includes(currentDes.id)) favs.push(currentDes.id);
    } else {
        icon.textContent = '♡'; icon.style.color = '';
        favs = favs.filter(id => id !== currentDes.id);
    }
    localStorage.setItem('des-favorites', JSON.stringify(favs));
}
function checkDesFavStatus() {
    const favs = JSON.parse(localStorage.getItem('des-favorites') || '[]');
    if (favs.includes(currentDes.id)) {
        const icon = document.querySelector('#fav-btn-des .action-icon');
        icon.textContent = '♥'; icon.style.color = '#E74C3C';
    }
}

// ==================== SHARE ====================
function shareDes() {
    const url = window.location.href;
    if (navigator.share) navigator.share({ title: currentDes.name, text: `Check out ${currentDes.name} on TasteCraft!`, url }).catch(()=>{});
    else navigator.clipboard.writeText(url).then(() => alert('Link copied! 📤'));
}

// ==================== TIMER ====================
function openDesTimer(minutes) {
    desTimerDuration = minutes * 60; desTimerSeconds = desTimerDuration;
    updateDesTimerDisplay();
    document.getElementById('des-timer-modal').style.display = 'flex';
    document.getElementById('dt-start').style.display = 'inline-block';
    document.getElementById('dt-pause').style.display = 'none';
}
function closeDesTimer() {
    if (desTimerRunning && !confirm('Timer is running. Close?')) return;
    pauseDesTimer(); document.getElementById('des-timer-modal').style.display = 'none'; resetDesTimer();
}
function startDesTimer() {
    if (desTimerRunning) return;
    desTimerRunning = true;
    document.getElementById('dt-start').style.display = 'none';
    document.getElementById('dt-pause').style.display = 'inline-block';
    desTimerInterval = setInterval(() => { desTimerSeconds--; updateDesTimerDisplay(); if (desTimerSeconds <= 0) { pauseDesTimer(); alert('⏰ Timer finished!'); } }, 1000);
}
function pauseDesTimer() {
    desTimerRunning = false; clearInterval(desTimerInterval);
    document.getElementById('dt-start').style.display = 'inline-block';
    document.getElementById('dt-pause').style.display = 'none';
}
function resetDesTimer() { pauseDesTimer(); desTimerSeconds = desTimerDuration; updateDesTimerDisplay(); }
function updateDesTimerDisplay() {
    document.getElementById('dt-min').textContent = String(Math.floor(desTimerSeconds/60)).padStart(2,'0');
    document.getElementById('dt-sec').textContent = String(desTimerSeconds%60).padStart(2,'0');
}
function goBack() { window.location.href = 'desserts.html'; }
