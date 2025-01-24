/////////bgimage////////////
function updateBackgroundImage() {
    const body = document.querySelector('body');
    const now = new Date();
    const hour = now.getHours();

    if(hour > 3 && hour < 5){
        body.style.backgroundImage="url('assets/img/mid.jpg')";
    } else if(hour >= 5 && hour < 12){
        body.style.backgroundImage="url('assets/img/morn.jpg')";
    } else if(hour >= 12 && hour < 18){
        body.style.backgroundImage="url('assets/img/2.jpg')";
    } else if(hour >= 18 && hour < 20){
        body.style.backgroundImage="url('assets/img/eve.jpg')";
    } else {
        body.style.backgroundImage="url('assets/img/night.jpg')";
    }
}

updateBackgroundImage();

/////////bgimage////////////


function updateTextColor() {
    const body = document.querySelector('body');
    const now = new Date();
    const hour = now.getHours();

    if (hour > 3 && hour < 5) {
        body.style.color = "white";
    } else if (hour >= 5 && hour < 12) {
        body.style.color = "black";
    } else if (hour >= 12 && hour < 18) {
        body.style.color = "black";
    } else if (hour >= 18 && hour < 20) {
        body.style.color = "white";
    } else if (hour >= 20 && hour <=3){
        body.style.color = "white";

    }
}

updateTextColor();
setInterval(updateTextColor, 60000);


////////////greetin text/////////////



function greetingtxt(){
    const demo1 = document.querySelector("#demo1");
    const now = new Date();
    const hour = now.getHours();

    if(hour > 3 && hour < 5){
        demo1.innerHTML="y r u wake biiiachhhh :/ , wanna talk ?";
    } else if(hour >= 5 && hour < 12){
        demo1.innerHTML="Good Morning Buddy , sleep well  ? 😴";
    } else if(hour >= 12 && hour < 18){
        demo1.innerHTML="Afternoon , wassuppp mateee ? 😃 ";
    } else if(hour >= 18 && hour < 20){
        demo1.innerHTML="yo its evening , wanna grab a coffee ? ☕";
    } else {
        demo1.innerHTML="another quiet night , huh ?? 💤";
    }
}
greetingtxt();


////////////greetin text/////////////


///////////social media click////////
let flag = true;

function sm() {
    const socialmedia = document.querySelector(".descBox>h4>a");
    const tag = document.querySelector(".myTag");

    socialmedia.addEventListener('click', () => {
        if (flag) {
            tag.style.opacity = '1';
            tag.style.visibility = 'visible';
        } else {
            tag.style.opacity = '0';
            tag.style.visibility = 'hidden';
        }
    });
    flag = !flag; 
}

sm();




///////////social media click////////



//////////time///////////
    function Clock() {
        const clockElement = document.getElementById('demo2');
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = hours + ":" + minutes + ":" + seconds;
    }
    setInterval(Clock, 1000);
    Clock();
//////////time///////////


/////////day///////////


    function datee(){
        const date = document.querySelector("#demo3")
        function Day(){
            const date = document.querySelector('#demo3')
            const now = new Date()
            const day = (now.getDay())+1       
            let temp = ""
            switch(day){
                case 1 : temp = "Sunday";break;
                case 2 : temp = "Monday";break;
                case 3 : temp = "Tuesday";break;
                case 4 : temp = "Wednesday";break;
                case 5 : temp = "Thursday";break;
                case 6 : temp = "Friday";break;
                case 7 : temp = "Saturday";break;
            }
            return temp
        }
        Day()
        function Month(){
            const date = document.querySelector('#demo3')
            const now = new Date()
            const month = (now.getMonth())+1
            let temp = ""
            switch(month){
                case 1 : temp = "January"
                case 1 : temp = "February"
                case 1 : temp = "March"
                case 1 : temp = "April"
                case 1 : temp = "May"
                case 1 : temp = "June"
                case 1 : temp = "July"
                case 1 : temp = "August"
                case 1 : temp = "September"
                case 1 : temp = "October"
                case 1 : temp = "November"
                case 1 : temp = "November"
            }
            return temp
        }
        Month()
        function DayInMonth(){
            const date = document.querySelector('#demo3')
            const now = new Date()
            const dayInMonth = now.getDate()
            return dayInMonth
        }
        DayInMonth()
        date.innerHTML= Day() + " , " + Month() + " , " + DayInMonth()
    }
    datee()



/////////day///////////

////////////////////////CLOCK////////////////////
const oraMutato = document.querySelector("#hour");
const percMutato = document.querySelector("#minute");
const msMutato = document.querySelector("#second");

function runTheClock(){
    const date = new Date();
    const ora = date.getHours();
    const perc = date.getMinutes();
    const ms = date.getSeconds();

    const oraPoz = (ora * 30) + (perc / 2); // 30 degrees per hour
    const percPoz = (perc * 6) + (ms / 10); // 6 degrees per minute
    const msPoz = ms * 6; // 6 degrees per second

    oraMutato.style.transform = "rotate(" + oraPoz + "deg)";
    percMutato.style.transform = "rotate(" + percPoz + "deg)";
    msMutato.style.transform = "rotate(" + msPoz + "deg)";
}

setInterval(runTheClock, 1000); // Call every second

////////////////////////CLOCK////////////////////


///////////BackGround///////////////////


function background(){
    const now = new Date()
    const hour = now.getHours()
    const LeftBox = document.querySelector('.leftBox')
    const circle = document.querySelector('.circle')
    const midCircle = document.querySelector('.mid-circle')
    const hourMarks = document.querySelector('.hour-marks')
    const hourArm = document.querySelector('.hour-arm')
    const minuteArm = document.querySelector('.minute-arm')
    const secondArm = document.querySelector('.second-arm')
    const svg1 = document.querySelector('.svg1')
    const svg2 = document.querySelector('.svg2')
    const svg3 = document.querySelector('.svg3')
    
    if ( hour >= 5 && hour < 12){
        LeftBox.style.color='black'
        circle.style.stroke='black'
        midCircle.style.fill='black'
        hourMarks.style.stroke='black'
        hourArm.style.stroke='black'
        minuteArm.style.stroke='black'
        secondArm.style.stroke='black'
        svg1.style.fill='black'
        svg2.style.fill='black'
        svg3.style.fill='black'
    }
    
    
}
background()
console.log(background());


///////////BackGround///////////////////
