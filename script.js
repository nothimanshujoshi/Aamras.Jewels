document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header Effect ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
            header.style.padding = '10px 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '0';
        }
    });

    // --- Product Page Gallery Swap ---
    const thumbnails = document.querySelectorAll('.thumb');
    const mainImage = document.querySelector('.main-image');

    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                // Remove active class from all
                thumbnails.forEach(t => t.classList.remove('active'));
                // Add active class to clicked
                thumb.classList.add('active');
                // Simulate image swap (in real life, change background-image or src)
                mainImage.textContent = `Main Product Image ${index + 1}`;
            });
        });
    }

    // --- Product Page Quantity Selector ---
    const qtyMinus = document.querySelector('.minus');
    const qtyPlus = document.querySelector('.plus');
    const qtyInput = document.querySelector('.qty-input');

    if (qtyMinus && qtyPlus && qtyInput) {
        qtyMinus.addEventListener('click', () => {
            let currentValue = parseInt(qtyInput.value);
            if (currentValue > 1) {
                qtyInput.value = currentValue - 1;
            }
        });

        qtyPlus.addEventListener('click', () => {
            let currentValue = parseInt(qtyInput.value);
            qtyInput.value = currentValue + 1;
        });
    }

    // --- Quick Add Button Simulation ---
    const quickAddBtns = document.querySelectorAll('.quick-add, .add-to-cart-btn');
    const cartCount = document.querySelector('.cart-count');

    quickAddBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Basic micro-animation
            const originalText = btn.textContent;
            btn.textContent = 'Added! 🤍';
            btn.style.backgroundColor = '#C5A47E';
            btn.style.color = '#fff';
            
            // Update cart count
            if (cartCount) {
                let count = parseInt(cartCount.textContent);
                cartCount.textContent = count + 1;
                cartCount.style.transform = 'scale(1.3)';
                setTimeout(() => { cartCount.style.transform = 'scale(1)'; }, 200);
            }

            // Reset button
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }, 1500);
        });
    });
});