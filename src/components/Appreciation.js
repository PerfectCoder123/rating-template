import React from "react";
import AppreciationCss from './Appreciation.css';
import thankYou from '../resources/thankyou.svg';

export default function Appreciation(props) {
    if(props.rated === 'true')
    return(
    <>
    <link rel="stylesheet" href={AppreciationCss} />
    <div className="appreciation-container">
    <img src = {thankYou} id = 'thankyou-image' alt ='thankyou'/>
     <div id="rating-block">you selected {props.value} out of 5</div>
     <p id = "thankyou-block">Thank you!</p>
     <p id = "thankyou-description-block">We appreciate you taking the time to give rating. If you ever need more support,dont't hesitate to get in touch</p>
    </div>
    </>
    );
    else return(<></>);
}