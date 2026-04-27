 // ============ DYNAMIC CONTENT BASED ON DIET PREFERENCE ============
        window.onload = function() {
            const diet = localStorage.getItem('dietPreference') || 'veg';
            document.body.setAttribute('data-diet', diet);
            updateContent(diet);
        }

        function updateContent(diet) {
            const indianTitle = document.querySelector('.indian-card .card-title');
            const indianHindi = document.querySelector('.indian-card .card-title-hindi');
            const continentalTitle = document.querySelector('.continental-card .card-title');
            const continentalHindi = document.querySelector('.continental-card .card-title-hindi');
            const dietIndicator = document.getElementById('diet-indicator');
            
            if (diet === 'veg') {
                // VEG CONTENT
                indianTitle.textContent = 'Indian Vegetarian';
                indianHindi.textContent = 'भारतीय शाकाहारी';
                continentalTitle.textContent = 'Continental Vegetarian';
                continentalHindi.textContent = 'कॉन्टिनेंटल शाकाहारी';
                dietIndicator.innerHTML = ' Vegetarian Recipes Selected';
                
                // Update dish tags for VEG
                document.querySelector('.indian-card .dish-tags').innerHTML = `
                    <span class="dish-tag">Palak Paneer</span>
                    <span class="dish-tag">Dal Makhani</span>
                    <span class="dish-tag">Chole Bhature</span>
                    <span class="dish-tag">Masala Dosa</span>
                `;
                
                document.querySelector('.continental-card .dish-tags').innerHTML = `
                    <span class="dish-tag">Pasta Primavera</span>
                    <span class="dish-tag">Ratatouille</span>
                    <span class="dish-tag">Greek Salad</span>
                    <span class="dish-tag">Mushroom Risotto</span>
                `;
                
            } else {
                // NON-VEG CONTENT
                indianTitle.textContent = 'Indian Non-Vegetarian';
                indianHindi.textContent = 'भारतीय मांसाहारी';
                continentalTitle.textContent = 'Continental Non-Vegetarian';
                continentalHindi.textContent = 'कॉन्टिनेंटल मांसाहारी';
                dietIndicator.innerHTML = ' Non-Vegetarian Recipes Selected';
                
                // Update dish tags for NON-VEG
                document.querySelector('.indian-card .dish-tags').innerHTML = `
                    <span class="dish-tag">Butter Chicken</span>
                    <span class="dish-tag">Mutton Biryani</span>
                    <span class="dish-tag">Tandoori Chicken</span>
                    <span class="dish-tag">Fish Curry</span>
                `;
                
                document.querySelector('.continental-card .dish-tags').innerHTML = `
                    <span class="dish-tag">Grilled Salmon</span>
                    <span class="dish-tag">Chicken Steak</span>
                    <span class="dish-tag">Beef Stroganoff</span>
                    <span class="dish-tag">Seafood Paella</span>
                `;
            }
        }

        // ============ CUISINE SELECTION ============
        function selectCuisine(cuisineType) {
            localStorage.setItem('cuisinePreference', cuisineType);
            
            // Redirect to main app (you'll create this next)
            window.location.href = 'mainapp.html';
        }

        // ============ BACK BUTTON ============
        function goBack() {
        localStorage.removeItem('dietPreference');
        localStorage.removeItem('cuisinePreference');
        window.location.href = 'dietentrypage.html';  // ← YOUR filename
}

        // ============ PARALLAX EFFECT ============
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.glass-card');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            cards.forEach((card, index) => {
                const speed = (index + 1) * 2;
                card.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });