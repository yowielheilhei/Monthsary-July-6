function revealMessage() {
    const envelope = document.getElementById('envelope-wrapper');
    const timerContainer = document.getElementById('countdown-timer');
    const timerText = document.getElementById('timer-text');
    const flower = document.getElementById('flower-container');
    const messageScreen = document.getElementById('message-screen');

    // 1. Fade out the envelope
    envelope.style.opacity = '0';
    envelope.style.pointerEvents = 'none';

    setTimeout(() => {
        envelope.classList.add('hidden');
        timerContainer.classList.remove('hidden');
        timerContainer.style.opacity = '1';
        
        // 2. Start the Countdown
        let count = 3;
        timerText.innerText = count;
        
        const countdownInterval = setInterval(() => {
            count--;
            if (count > 0) {
                timerText.innerText = count;
            } else {
                // Stop counting when we hit 0
                clearInterval(countdownInterval);
                
                // 3. Fade out the timer
                timerContainer.style.opacity = '0';
                
                setTimeout(() => {
                    timerContainer.classList.add('hidden');
                    
                    // 4. Trigger the flower pop-up animation
                    flower.classList.remove('hidden');
                    void flower.offsetWidth; 
                    flower.classList.add('bloom');
                    
                    // 5. Reveal the message section and scroll down
                    setTimeout(() => {
                        messageScreen.classList.remove('hidden');
                        messageScreen.classList.add('visible');
                        messageScreen.scrollIntoView({ behavior: 'smooth' });
                    }, 2500); 
                    
                }, 500); // Wait half a second for timer to fade away
            }
        }, 1000); // Counts down every 1000ms (1 second)

    }, 500); // Wait for envelope to fade out before starting timer
}