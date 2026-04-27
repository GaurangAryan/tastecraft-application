
    function selectDiet(type) {
        localStorage.setItem('dietPreference', type);
        window.location.href = 'cuisineentrypage.html';
    }

        // Add parallax effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.glass-card');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            cards.forEach((card, index) => {
                const speed = (index + 1) * 2;
                card.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });