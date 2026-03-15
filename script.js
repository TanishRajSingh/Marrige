// Get elements
const curtain = document.getElementById("curtain");
const btn = document.getElementById("openBtn");
const music = document.getElementById("bgMusic");
const flowerContainer = document.getElementById("flowers");

// Button click event
btn.addEventListener("click", function () {

    // Set volume to full
    music.volume = 1.0;

    // Play background music
    music.play().catch(function(error){
        console.log("Audio could not start:", error);
    });

    // Hide curtain smoothly
    curtain.style.transition = "opacity 1s ease";
    curtain.style.opacity = "0";

    setTimeout(() => {
        curtain.style.display = "none";
    }, 1000);

    // Start flower animation
    startFlowers();
});


// Flower animation function
function startFlowers(){

    setInterval(() => {

        const flower = document.createElement("div");

        flower.classList.add("flower");

        flower.innerHTML = "🌸";

        flower.style.left = Math.random() * 100 + "vw";

        flower.style.animationDuration = (3 + Math.random() * 5) + "s";

        flowerContainer.appendChild(flower);

        // Remove flower after animation
        setTimeout(() => {
            flower.remove();
        }, 8000);

    }, 400);
}