// let bgimage = document.querySelector(".bgimage");
// let loding = document.querySelector(".loding");

// console.log(loding.textContent)

// let num = 0.1
// let textnumber = 20;
// const increment = () => {
//     bgimage.style.opacity = 0 + num;
//     num += 0.1;
//     console.log(num)
//     loding.textContent = `${textnumber}%`
//     textnumber += 10;
//     if (num >= 1) {
//         clearInterval(setibt); // Stop the interval when num >= 1
//         loding.style.display = "none"
//     }
// }



// let setibt = setInterval(() => {
//     increment()
// }, 100);




let bgimage = document.querySelector(".bgimage");
let loading = document.querySelector(".loding");

let startTime = Date.now();
let duration = 5000; // Set the duration in milliseconds (e.g., 5000ms = 5 seconds)

const updateOpacityAndText = () => {
    let currentTime = Date.now();
    let elapsedTime = currentTime - startTime;

    if (elapsedTime >= duration) {
        clearInterval(intervalId); // Stop the interval after the specified duration
        loading.style.display = "none";
        bgimage.style.opacity = 1; // Ensure opacity is fully set to 1 after the duration
        loading.textContent = "100%";
    } else {
        let opacity = elapsedTime / duration; // Calculate opacity based on elapsed time
        let percentage = Math.floor((elapsedTime / duration) * 100); // Calculate percentage based on elapsed time

        bgimage.style.opacity = opacity;
        loading.textContent = `${percentage}%`;
    }
};

let intervalId = setInterval(updateOpacityAndText, 100); // Update every 100 milliseconds

