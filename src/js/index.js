//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter({digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix}){

    return ( 
    
    <div class="largePart">

<div className="calendar">
                <i className="far fa-clock"></i>
            </div>
<div className= "number6">{digitSix}</div>
<div className= "number5">{digitFive}</div>
<div className= "number4">{digitFour}</div>
<div className= "number3">{digitThree}</div>
<div className= "number2">{digitTwo}</div>
<div className= "number1">{digitOne}</div>

    </div>);
}



let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(() => {
    const six = Math.floor(counter / 100000);
    const five = Math.floor(counter / 10000);
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    counter++;
    
    root.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={four} digitSix={six}/>
    );
}, 1000);

