import React from 'react';
import ContainerCss from './Container.css';
import starImage from '../resources/icon-star.svg';

export default function Container(props) {
    
    if(props.value === 'false'){
    return(     
    <>
    <link rel="stylesheet" href={ContainerCss} />
    <div className='main-container'>
        <img src = {starImage} id = 'star-image' alt ='star'/>
        <div className='rating-title'>
        How did we do ?
        </div>
        <div className='rating-description'>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve  our offering!
       </div>
       <div className='rating-level'>
        <button id = 'rating-one' className='rating-numbers' onClick={() => {props.rate('1'); changeButtonColor('rating-one')}}>1</button>
        <button id = 'rating-two' className='rating-numbers' onClick={() => {props.rate('2'); changeButtonColor('rating-two')}}>2</button>
        <button id = 'rating-three' className='rating-numbers' onClick={() => {props.rate('3'); changeButtonColor('rating-three')}}>3</button>
        <button id = 'rating-four' className='rating-numbers' onClick={() =>{ props.rate('4');changeButtonColor('rating-four')} }>4</button>
        <button id = 'rating-five' className='rating-numbers' onClick={() => {props.rate('5');changeButtonColor('rating-five')}}>5</button>
       </div>
       <button id = 'rating-submit' onClick={()=>{props.changeRating('true')}}>
        SUMBIT
       </button>
    </div>
    </>
    );
 
   
  } 
    else return (<>
                </>);

}

const changeButtonColor = (id)=>{
     document.getElementById(id).style.backgroundColor = '#E27020';
     document.getElementById(id).style.color = '#ffffff';

     if(id !== 'rating-one'){
        document.getElementById('rating-one').style.backgroundColor = '#29292A';
        document.getElementById('rating-one').style.color = '#9D9D9D';
     }
     if(id !== 'rating-two'){
        document.getElementById('rating-two').style.backgroundColor = '#29292A';
        document.getElementById('rating-two').style.color = '#9D9D9D';
     }
     if(id !== 'rating-three'){
        document.getElementById('rating-three').style.backgroundColor = '#29292A';
        document.getElementById('rating-three').style.color = '#9D9D9D';
     }
     if(id !== 'rating-four'){
        document.getElementById('rating-four').style.backgroundColor = '#29292A';
        document.getElementById('rating-four').style.color = '#9D9D9D';
     }
     if(id !== 'rating-five'){
        document.getElementById('rating-five').style.backgroundColor = '#29292A';
        document.getElementById('rating-five').style.color = '#9D9D9D';
     }
     
     
}