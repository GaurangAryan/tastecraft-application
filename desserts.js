// ==================== STATE ====================
let desState   = { difficulty: 'all', search: '' };
let desCuisine = 'all';   // set from localStorage

// ==================== INIT ====================
window.onload = function () {
    desCuisine = localStorage.getItem('cuisinePreference') || 'all';
    renderDesserts();
};

// ==================== RENDER ====================
function renderDesserts() {
    const grid  = document.getElementById('des-grid');
    const noRes = document.getElementById('des-no-results');
    const count = document.getElementById('des-count');

    const diffColors = { easy: '#000000', medium: '#000000',  hard: '#000000'};

    let list = desserts.filter(d => {
        const matchCuisine = desCuisine === 'all' || d.origin === desCuisine;
        const matchDiff    = desState.difficulty === 'all' || d.difficulty === desState.difficulty;
        const matchSearch  = d.name.toLowerCase().includes(desState.search) ||
                             d.nameHindi.includes(desState.search) ||
                             d.tags.some(t => t.toLowerCase().includes(desState.search));
        return matchCuisine && matchDiff && matchSearch;
    });

    count.textContent = `Showing ${list.length} dessert${list.length !== 1 ? 's' : ''}`;

    if (!list.length) { grid.innerHTML = ''; noRes.style.display = 'block'; return; }
    noRes.style.display = 'none';

    grid.innerHTML = list.map((d, i) => {
        const hasImg   = d.image && !d.image.includes('placeholder');
        const imgHtml  = hasImg
            ? `<img src="${d.image}" alt="${d.name}" class="card-image" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
            : '';
        const emojiHtml = `<div class="card-emoji-display" style="${hasImg ? 'display:none' : 'display:flex'}">${d.emoji}</div>`;
        const diffColor = diffColors[d.difficulty] || '#FF9800';
        const diffLabel = d.difficulty.charAt(0).toUpperCase() + d.difficulty.slice(1);

        return `<div class="recipe-card des-card" style="animation-delay:${i * 0.08}s" onclick="viewDessert('${d.id}')">
            <div class="card-image-container">
                ${imgHtml}${emojiHtml}
                <span class="card-badge diff-badge" style="background:${diffColor};color:#fff;">${diffLabel}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${d.name}</h3>
                <p class="card-title-hindi">${d.nameHindi}</p>
                <div class="card-meta">
                    <span class="meta-item"><span class="meta-icon">Time -</span>${d.prepTime}</span>
                    <span class="meta-item">${d.calories} kcal</span>
                </div>
                <div class="card-tags">${d.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}</div>
                <div class="card-footer">
                    <span class="cost-badge">${d.costRange}</span>
                    <button class="view-recipe-btn">View Recipe &#8594;</button>
                </div>
            </div>
        </div>`;
    }).join('');
}

// ==================== FILTERS ====================
function filterByDiff(diff, btn) {
    desState.difficulty = diff;
    document.getElementById('diff-btns').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderDesserts();
}

function filterDesserts() {
    desState.search = document.getElementById('des-search').value.toLowerCase();
    renderDesserts();
}

function viewDessert(id) { window.location.href = 'dessert-detail.html?id=' + id; }
