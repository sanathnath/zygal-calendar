const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dates = [];
dates.length = 35;
dates.fill("");

const calendar = document.querySelector(".calendar");
const month_selector = document.getElementById("month-selector");
const year_selector = document.getElementById("year-selector");

for(let i=0 ; i<months.length ; i++){
    const element = months[i];
    let option = document.createElement("option");
    option.innerText = element;
    option.value = element;
    month_selector.appendChild(option);
}

for (let i = 0; i < days.length; i++) {
    const element = days[i];
    let div = document.createElement("div");
    div.classList.add("boxes");
    div.innerText = element;
    calendar.appendChild(div);
}

let dt = new Date();
let m = dt.getMonth();
let y = dt.getFullYear();

createDatesArray();

function createDatesArray(){
    m = dt.getMonth();
    y = dt.getFullYear();
    d = dt.getDate();
    daysInMonth = new Date(y, m+1, 0).getDate();  //for finding how many days in a month
    firstDay = new Date(y, m, 1).getDay();  //finding first day in a month
    
    let i=firstDay, j=1;
    while(j<=daysInMonth){
        dates[i] = j;
        j++;
        i++;
    }
    displayDates(dates);
}

function displayDates(arr){
    for(let i=0 ; i<arr.length ; i++){
        const element = arr[i];
        let div = document.createElement("div");
        div.classList.add("date-boxes");
        div.innerText = element;
        calendar.appendChild(div);
    }
}

function changeMonth(event){
    m = event.target.value;
    console.log(m);
    let daysInMonth = new Date(y, months.indexOf(m)+1, 0).getDate();  //for finding how many days in a month
    let firstDay = new Date(y, months.indexOf(m), 1).getDay();  //finding first day in a month
    // console.log(firstDay );
    dates.fill("");
    let i=firstDay, j=1;
    while(j<=daysInMonth){
        dates[i] = j;
        j++;
        i++;
    }

    let elements = document.querySelectorAll(".date-boxes");
    
    for(let i=0 ; i<dates.length ; i++){
        calendar.removeChild(elements[i]);
    }

    displayDates(dates);
}