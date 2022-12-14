const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dates = [];
dates.length = 35;
dates.fill("");
const years = [];

let green_div = '';
const calendar = document.querySelector(".calendar");
const month_selector = document.getElementById("month-selector");
const year_selector = document.getElementById("year-selector");

let dt = new Date();
let m = dt.getMonth();
let y = dt.getFullYear();

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

for(let i=y ; i>=1900 ; i--){
    let option = document.createElement("option");
    option.innerText = i;
    option.value = i;
    year_selector.appendChild(option);
}

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
        // console.log(element+" "+d);
        if(element != ""){
            div.setAttribute('id',element);
        }
        if(element == d && m == dt.getMonth() && y == dt.getFullYear()){
            div.style.backgroundColor = 'green';
            green_div = div;
        }
        calendar.appendChild(div);
    }
}

function changeMonth(event){
    m = Number(months.indexOf(event.target.value));
    let daysInMonth = new Date(y, m+1, 0).getDate();  //for finding how many days in a month
    let firstDay = new Date(y, m, 1).getDay();  //finding first day in a month
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

function changeYear(event){
    y = Number(event.target.value);
    console.log(y);
    let daysInMonth = new Date(y, m+1, 0).getDate();  //for finding how many days in a month
    let firstDay = new Date(y, m, 1).getDay();  //finding first day in a month
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

function changeColor(event){
    event.preventDefault();
    let val = event.target.input.value;
    let div = document.getElementById(val);
    console.log(val);
    green_div.style.backgroundColor = 'white';
    div.style.backgroundColor = 'green';
    green_div = div;

}