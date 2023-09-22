let bgimage = document.querySelector(".bgimage");
let loding = document.querySelector(".loding");

let startingTime = Date.now()

let defaultDuration = 5000;

let updateTextAndOpcity = () => {
    let functionstartingtime = Date.now();

    let functionRunningTime = (functionstartingtime - startingTime);


    if (functionRunningTime >= defaultDuration) {
        clearInterval(setIntervaId);
        bgimage.style.opacity = 1;
        loding.textContent = `${100}%`
        loding.style.display = "none";

    } else {
        let opacity = (functionRunningTime / defaultDuration);
        bgimage.style.opacity = opacity;

        let persentage = Math.floor(opacity * 100);
        loding.textContent = `${persentage}%`
    }

}


let setIntervaId = setInterval(() => {
    updateTextAndOpcity()
}, 50);







































// ------------------------------------------------------------------



// // Get references to HTML elements with specific class names.
// let bgimage = document.querySelector(".bgimage");
// let loading = document.querySelector(".loding");

// // Record the current time.
// let startTime = Date.now();
// console.log(startTime)

// // Specify a duration in milliseconds (e.g., 5000ms = 5 seconds).
// let duration = 5000;

// // Create a function to update the opacity and loading text.
// const updateOpacityAndText = () => {
//     // Get the current time.
//     let currentTime = Date.now();
//     console.log(currentTime)

//     // Calculate how much time has elapsed since the start.
//     let elapsedTime = currentTime - startTime;
//     console.log(elapsedTime)

//     // Check if the elapsed time is greater than or equal to the specified duration.
//     if (elapsedTime >= duration) {
//         // If yes, clear the interval (stop the animation).
//         clearInterval(intervalId);

//         // Hide the loading element.
//         loading.style.display = "none";

//         // Ensure opacity is fully set to 1.
//         bgimage.style.opacity = 1;

//         // Set loading text content to "100%".
//         loading.textContent = "100%";
//     } else {
//         // Calculate the opacity based on elapsed time.
//         let opacity = elapsedTime / duration;
//         console.log(opacity)

//         // Calculate the percentage completion based on elapsed time.
//         let percentage = Math.floor(opacity * 100);
//         console.log(percentage)
//         // Set the opacity of the background image.
//         bgimage.style.opacity = opacity;

//         // Set the loading text content to show the percentage completion.
//         loading.textContent = `${percentage}%`;
//     }
// };

// // Call the updateOpacityAndText function every 100 milliseconds.
// let intervalId = setInterval(updateOpacityAndText, 100);
