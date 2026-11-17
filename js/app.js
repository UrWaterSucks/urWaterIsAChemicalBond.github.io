const numb = document.getElementById("count");

let valNumber = 0;
console.log(valNumber);

let state = { count: 0, lastupdated: "...", best: "..."};

numb.innerHTML=valNumber;

document.getElementById("add").addEventListener("click", (event) => {
    numb.innerHTML="";
    ++valNumber
    numb.innerHTML=valNumber;
    let state = { count: valNumber, lastupdated: Date.now(), best: valNumber};
    localStorage.setItem("state", JSON.stringify(state));
})

document.getElementById("minus").addEventListener("click", () => {
    numb.innerHTML="";
    if (valNumber > 0) {
    --valNumber;
    numb.innerHTML=valNumber;
    let state = { count: valNumber, lastupdated: Date.now(), best: valNumber};
    localStorage.setItem("state", JSON.stringify(state));
    } else {
    numb.innerHTML=0;
    let state = { count: valNumber, lastupdated: Date.now(), best: valNumber};
    localStorage.setItem("state", JSON.stringify(state));
    }
})

document.getElementById("reset").addEventListener("click", (event) => {
    numb.innerHTML="";
    valNumber=0;
    numb.innerHTML=valNumber;
    let state = { count: valNumber, lastupdated: Date.now(), best: valNumber};
    localStorage.setItem("state", JSON.stringify(state));
})



const stateReturn = JSON.parse(localStorage.getItem("state"));