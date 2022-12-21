const checkbox = document.querySelector(".label");
const bodyColor = document.querySelector("body");
const btn = document.querySelector("button");

// checkbox.addEventListener("click", function() {
//     bodyColor.classList.toggle("black");
//     console.log(bodyColor);
//     // bodyColor.style.backgroundColor = "black";
// })

// function bgColor() {
//     btn.addEventListener('click', () => {
//         console.log("clicked");
//         bodyColor.style.backgroundColor = "black";
//     });
// }

// bgColor();


const linearColor = () =>{
    console.log(this);
    bodyColor.classList.toggle("black");
}

checkbox.addEventListener("click", linearColor);