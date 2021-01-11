import React, {useState, useEffect} from 'react'
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header'
import Popup from './components/Popup';
import Notification from './components/Notification';

import Word from './components/Word';
import WrongLetters from './components/WrongLetters';
import {showNotification as show} from './helpers/helpers'


const words = ['application', 'programming', 'interface', 'wizard', 'computer', 'typescript', 'developer', 'javascript', 'redbull', 'node', 'software', 'design', 'technology'];

let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {

const [playable, setPlayable] = useState(true)
const [correctLetters, setCorrectLetters] = useState([])
const [wrongLetters, setWrongLetters] = useState([])
const [showNotification, setShowNotification] = useState(false)
 
useEffect(() => {
  const handleKeydown = e => {
    const { key, keyCode } = e;
    
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
  
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
           show(setShowNotification)
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
  

          } else {
            show(setShowNotification)
          }
        }
      }
    }
  
  window.addEventListener('keydown', handleKeydown)
  return () => {
    window.removeEventListener('keydown', handleKeydown)
  }
}, [correctLetters, wrongLetters, playable])

function playAgain(){
  setPlayable(true)
setCorrectLetters([])
setWrongLetters([])
const random = Math.floor(Math.random() * words.length)
selectedWord = words[random]
}
  return (
    <>
     <Header />
     <div className='game-container'>
    <Figure  wrongLetters = {wrongLetters}/>
    <WrongLetters wrongLetters = {wrongLetters} />
    <Word selectedWord= {selectedWord} correctLetters = {correctLetters}/>
     </div>
     <Popup selectedWord= {selectedWord} correctLetters = {correctLetters} wrongLetters = {wrongLetters} setPlayable={setPlayable} playAgain ={playAgain}/>
    <Notification showNotification ={showNotification} />
    </>
  );
}

export default App;
