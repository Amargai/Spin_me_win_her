let rotation = 0;

function spinWheel() {
    const wheel = document.getElementById('wheel');
    const extraDegrees = Math.floor(5000 + Math.random() * 5000); // Random degree for spin
    rotation += extraDegrees;
    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = `rotate(${rotation}deg)`;

    // Calculate the stop position after the spin completes
    setTimeout(() => {
        const actualRotation = rotation % 360;
        const sectorAngle = 360 / 6;
        const stopAngle = (360 - actualRotation) % 360;
        const optionIndex = Math.floor(stopAngle / sectorAngle);
        const options = ['Vaishnavi', 'Aditi', 'Samruddi', 'Prachi', ' Pratiksha', ' Dnyashwari'];
        alert(`Your permanent crush is: ${options[optionIndex]}`);
    }, 5000); // Match the duration of the CSS transition
}
