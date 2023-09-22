let bgimage = document.querySelector(".bgimage");
let loding = document.querySelector(".loding");

console.log(loding.textContent)

let num = 0.1
let textnumber = 20;
const increment = () => {
    bgimage.style.opacity = 0 + num;
    num += 0.1;
    console.log(num)
    loding.textContent = `${textnumber}%`
    textnumber += 10;
    if (num >= 1) {
        clearInterval(setibt); // Stop the interval when num >= 1
        loding.style.display = "none"
    }
}



let setibt = setInterval(() => {
    increment()
}, 100);

