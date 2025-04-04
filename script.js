
let redLight = document.getElementById('red-light');
let yellowLight = document.getElementById('yellow-light');
let greenLight = document.getElementById('green-light');
let clutchButton = document.getElementById('clutch');
let startTimeDisplay = document.getElementById('start-time');
let car = document.getElementById('car');
let startSound = document.getElementById('start-sound');
let goSound = document.getElementById('go-sound');

let startTime = 0;
let greenTime = 0;
let clutchReleased = false;

function startRace() {
    let redTime = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;

    redLight.style.opacity = 1;
    yellowLight.style.opacity = 0.3;
    greenLight.style.opacity = 0.3;
    clutchReleased = false;

    startSound.play();

    setTimeout(() => {
        redLight.style.opacity = 0.3;
        yellowLight.style.opacity = 1;

        setTimeout(() => {
            yellowLight.style.opacity = 0.3;
            greenLight.style.opacity = 1;

            greenTime = performance.now();
            clutchButton.textContent = "ول کن کلاچ!";
            goSound.play();
        }, 1000);
    }, redTime);
}

clutchButton.addEventListener('mousedown', () => {
    if (!clutchReleased) {
        clutchButton.textContent = "نگه‌دار کلاچ";
        startRace();
    }
});

clutchButton.addEventListener('mouseup', () => {
    if (!clutchReleased && greenLight.style.opacity == 1) {
        clutchReleased = true;
        let releaseTime = performance.now();
        let reaction = (releaseTime - greenTime) / 1000;
        startTimeDisplay.textContent = reaction.toFixed(3);
        car.style.left = "60%";
    }
});
