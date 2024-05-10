const container = document.getElementById("dob");
console.log(container.value);
const error = document.querySelector(".error");
const age = document.querySelector(".age");





dob.addEventListener('input',()=>{
    error.style.display = "none";
    age.style.display = "block";
    getAge();
})


function getAge(){
    let val = dob.value;
    val = val.split("-");
    calcAge(Number(val[0]),Number(val[1]),Number(val[2]));
}

function calcAge(year, mon, day){ 
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if(yyyy < year){
        error.style.display = "block";
        age.style.display = "none";
        return;
    }
    if(year === yyyy && mm < mon){
        error.style.display = "block";
        age.style.display = "none";
        return;
    }
    if(year === yyyy && mm === mon && dd < day){
        console.log(day);
        error.style.display = "block";
        age.style.display = "none";
        return;
    }
    dd = Math.abs(dd - day);
    mm = Math.abs(mm - mon);
    yyyy = Math.abs(yyyy - year);
    displayAge(yyyy, mm, dd);
}

function displayAge(y, m, d){
    let yd = document.getElementById("years");
    let md = document.getElementById("months");
    let dd = document.getElementById("days");
    yd.innerText = y;
    md.innerText = m;
    dd.innerText= d;
}