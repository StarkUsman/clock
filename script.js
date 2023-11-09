// function updateClock() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');

//     const timeString = `${hours}:${minutes}:${seconds}`;
//     document.getElementById('clock').textContent = timeString;
//     if(seconds%2==0){
//         document.getElementById('clock').
//     }
// }

// // Update the clock every second
// setInterval(updateClock, 1000);

// // Initial call to display the clock immediately
// updateClock();

let seconds;

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    seconds = now.getSeconds().toString().padStart(2, '0'); // Assign to the global variable

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

function setBackgroundImage() {
    const backgroundImageUrl = seconds % 2 === 0 ? 'pic1.jpg' : 'pic2.jpg'; // Use a ternary operator to set the background image
    document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
}

// Update the clock and background image every second
setInterval(updateClock, 1000);
setInterval(setBackgroundImage, 1000);

// Initial call to display the clock and set the background image immediately
updateClock();
setBackgroundImage(); // Call this function to set the initial background image
// Set background image size to cover the whole screen
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center';