const texts = [
  "I hope this message finds you well! 😊",
  "I built this to show how much I love you! ❤️",
  "You mean a lot to me! 🌹",
  "You are the most wonderful coach anyone would ever have! 🌟",
  "Happy Birthday, coach Fransisca Jegede! 🎉",
  "You are truly amazing! ✨",
  "Your kindness is unmatched! 💖",
  "You brighten every room! 🌟",
  "You're a gift to everyone around you! 🎁",
  "Your smile lights up the world! 😊",
  "You have a heart of gold! 💛",
  "Your style is next-level and absolutely mind-blowing! 💥",
  "Built with love by Bada Oluwadamilola. We all love you! ❤️"
];

let currentIndex = 0;
const contentElement = document.querySelector('.content');

// Function to display each text with elegant animations
function showNextText() {
  // If there is already text, animate it out first
  if (contentElement.textContent) {
    contentElement.classList.remove('animateIn');
    contentElement.classList.add('animateOut');
    
    // Wait for the out-animation to complete before updating the text
    setTimeout(() => {
      updateText();
    }, 1500);
  } else {
    updateText();
  }
}

function updateText() {
  // Check if it's the last message
  if (currentIndex === texts.length) {
    // Display replay icon and stop the interval
    displayReplayIcon();
    clearInterval(textInterval);
    return;
  }
  
  // Update the text and animate it in
  contentElement.textContent = texts[currentIndex];
  contentElement.classList.remove('animateOut');
  contentElement.classList.add('animateIn');
  
  // Move to the next text
  currentIndex++;
}


// Start the sequence immediately, then repeat every 5 seconds
showNextText();
let textInterval = setInterval(showNextText, 5000);