let cubes = document.querySelectorAll(".cubes");
let btn = document.querySelector(".btn")
let result = document.querySelector(".result")

let turnofx = false;
let winconditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

cubes.forEach(button =>{
   btn.addEventListener("click",()=>{
    button.innerHTML = ""
   })
})

cubes.forEach(cube  => {
    cube.addEventListener("click", () => {
        if (!turnofx) {
            cube.innerHTML = "X"
            turnofx = true
        }
        else {
            cube.innerHTML = "O"
            turnofx = false
        }
        cube.classList.add("disabled")
        checkWin();
    });
});

function checkWin() {
    for (const win of winconditions) {
        let val1 = cubes[win[0]].innerHTML;
        let val2 = cubes[win[1]].innerHTML;
        let val3 = cubes[win[2]].innerHTML;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                result.innerText = (`winner is ${val1}`)
            action()
            }
        }
    }
}

function action() {
    cubes.forEach(cube => {
        cube.style.pointerEvents = "none";
    });
}