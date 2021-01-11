import React, {useEffect} from 'react'
import {checkWin} from '../helpers/helpers'

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
    let finalMessage =''
    let revealWord = ''
    let playable = true

    if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
        finalMessage = 'Congratulations, You Win!!'
        playable = false;
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
        finalMessage = 'Unfortunately, You Lost';
        revealWord = `... the word was ${selectedWord}`;
        playable = false
    }

useEffect(() => {
    setPlayable(playable);
})

    return (
        <div className="popup-container" style= {finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{revealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
    )
}

export default Popup
