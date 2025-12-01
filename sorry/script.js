// Interactive elements for the apology website

document.addEventListener('DOMContentLoaded', function() {
    // Forgive button functionality
    const forgiveBtn = document.getElementById('forgiveBtn');
    const meterFill = document.getElementById('meterFill');
    let forgivenessLevel = 0;
    
    forgiveBtn.addEventListener('click', function() {
        if (forgivenessLevel < 100) {
            forgivenessLevel += 10;
            meterFill.style.width = forgivenessLevel + '%';
            meterFill.textContent = forgivenessLevel + '%';
            
            // Change button text when meter is full
            if (forgivenessLevel === 100) {
                forgiveBtn.textContent = "Thank You for Forgiving Me! ❤️";
                forgiveBtn.style.background = "linear-gradient(135deg, #4CAF50, #2E7D32)";
                
                // Create a celebration effect
                createHearts();
                
                // Show a message
                setTimeout(() => {
                    alert("Thank you so much for forgiving me! I promise I'll never hurt you again. You mean everything to me.");
                }, 500);
            } else if (forgivenessLevel === 50) {
                forgiveBtn.textContent = "Thank You! Please Keep Going";
            }
        }
    });
    
    // Plant flower button functionality
    const plantFlowerBtn = document.getElementById('plantFlowerBtn');
    const gardenArea = document.getElementById('gardenArea');
    const flowers = ['🌸', '🌺', '🌻', '🌷', '🌼', '💐', '🥀', '🌹'];
    
    plantFlowerBtn.addEventListener('click', function() {
        // Create a new flower element
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        
        // Random position in the garden
        flower.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        
        // Add flower to the garden
        gardenArea.appendChild(flower);
        
        // Limit the number of flowers to 15
        if (gardenArea.children.length > 15) {
            gardenArea.removeChild(gardenArea.firstChild);
        }
        
        // Show a message after planting 5 flowers
        if (gardenArea.children.length === 5) {
            const message = document.createElement('p');
            message.textContent = "Each flower represents my sincere apology.";
            message.style.fontStyle = "italic";
            message.style.color = "#c44569";
            message.style.marginTop = "10px";
            gardenArea.appendChild(message);
        }
    });
    
    // Create floating hearts for celebration
    function createHearts() {
        const heartContainer = document.querySelector('.container');
        
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.fontSize = Math.random() * 20 + 15 + 'px';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '100vh';
            heart.style.zIndex = '9999';
            heart.style.opacity = '0.8';
            heart.style.pointerEvents = 'none';
            
            heartContainer.appendChild(heart);
            
            // Animate the heart
            animateHeart(heart);
        }
    }
    
    // Animate hearts floating upwards
    function animateHeart(heart) {
        const duration = Math.random() * 3 + 2;
        const horizontalMovement = Math.random() * 100 - 50;
        
        const animation = heart.animate([
            { transform: 'translateY(0) translateX(0)', opacity: 0.8 },
            { transform: `translateY(-100vh) translateX(${horizontalMovement}px)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
        });
        
        // Remove heart after animation completes
        animation.onfinish = function() {
            heart.remove();
        };
    }
    
    // Add some initial flowers to the garden
    for (let i = 0; i < 3; i++) {
        plantFlowerBtn.click();
    }
    
    // Add a typing effect to the apology text
    const apologyText = document.querySelector('.apology-text p:first-child');
    const originalText = apologyText.textContent;
    apologyText.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            apologyText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
});