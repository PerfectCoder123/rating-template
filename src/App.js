import { useState } from 'react';
import './App.css';
import Appreciation from './components/Appreciation';
import Container from './components/Container';

function App() {
  const[isRated,setRating] = useState('false');
  const[ratingStar,setRatingStar] = useState('1');
  
  return (
    <>
    <Container value = {isRated} changeRating = {setRating} rate = {setRatingStar}/>
    <Appreciation value = {ratingStar} rated = {isRated}/>
    </>
  );
}

export default App;
