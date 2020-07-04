console.log('This is code.js')

let dropBtn = document.getElementById('drop-btn')
let Card2Btn = document.getElementById('drop-btn-card-2')

dropBtn.addEventListener('click', toggle)
Card2Btn.addEventListener('click', toggleCard2)



function toggle() {
    console.log('Button clicked');

    let x = document.getElementById("drop-content")
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleCard2() {
    console.log('Button clicked');

    let x = document.getElementById("drop-content-card-2")
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
