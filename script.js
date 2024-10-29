let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")

let count = 0
let total_count = 0

function increase() {
    count++

    countEl.innerText = count

    console.log("Add button clicked")
}

function save() {
    let countStr = count + " - "
    
    saveEl.textContent += countStr

    total_count += count
    totalEl.innerText = "Total count: " + total_count
    count = 0
    countEl.innerText = count

    console.log("Save button clicked")
}

function reset() {
    saveEl.textContent = "Entries: "

    console.log("Reset button clicked")
}

function erase() {
    count = 0
    total_count = 0
    countEl.innerText = 0
    saveEl.textContent = "Entries: "
    totalEl.innerText = "Total count: "

    console.log("Erase button clicked")
}

function iloveyou() {
    alert("I LOVE YOU BABYYYYYYYYY!!!!")
}