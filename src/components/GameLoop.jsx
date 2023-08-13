import React, { useState, useEffect, useRef } from 'react'
import Popup from './Popup'

export default function GameLoop() {
  const [code, setCode] = useState([])
  const [guess, setGuess] = useState(new Array(4).fill(""))

  const [sX, setSX] = useState([])
  const [sC, setSC] = useState([])

  const [gCounter, setGCounter] = useState(0)

  const [toggle, setToggle] = useState(false)

  function refreshPage() {
    window.location.reload(false);
  }

  const generateCode = (length, min, max) => {
    const uniqueNumbers = [];

    for (let i = 0; i < length; i++) {
      let x = Math.floor( Math.random() * max ) + min;
      if ( uniqueNumbers.includes(x) == true ){
          i = i - 1;
      }
      else {
          if ( x > max == false ) {
              uniqueNumbers.push(x);
          }
      }
    }
    setCode(uniqueNumbers)
  }

  const checkInput = async (e, index) => {
    ["e", "E", "+", "-", "0"].includes(e.key) && e.preventDefault();
    if (e.target.value.length > 1) {
      e.target.nextSibling()
    }
    setGuess([...guess.map((d, idx) => (idx === index) ? e.target.value : d)])
  }

  const handlSubmit = () => {
    if (guess.length >= 4) {
      setGCounter(gCounter + 1)
      let scoreX = new Number(0)
      let scoreC = new Number(0)
  
      const guessNumbers = guess.map(item => parseInt(item));
  
      console.log(guessNumbers)
      for (const num of guessNumbers) {
        if (code.includes(num)) {
          scoreX++;
        }
      }
  
      for (let i = 0; i < guessNumbers.length; i++) {
        if (guessNumbers[i] === code[i]) {
          scoreC++;
        }
      }
      
      // guess.forEach(g => {
        //   if (code.includes(Number(g))) {
          //     scoreX++
          //   }
          //   if (code.indexOf(Number(g)) == guess.indexOf(Number(g))) {
            //     scoreC++
            //   }
            // });
            
      setSC([...sC, scoreC])
      setSX([...sX, scoreX])
    }
  }

  //Generate Code
  useEffect(() => {
    generateCode(4, 1, 9)
  }, [])

  useEffect(() => {
    console.log(guess)
  }, [guess])

  useEffect(() => {
    if (sC == 4 && sX == 4) {
      setToggle(!toggle)
    }
  }, [sC,sX])

  useEffect(() => {
    console.log(sX)
    console.log(sC)
  }, [sX, sC])

  useEffect(() => {
    console.log(code)
  }, [code])

  return (
    <div className='container'>
        <h1 id='title'>CRACK THE CODE</h1>
        <span>Guesses: {gCounter} </span>
      <div className="guess-input">
        {
          guess?.map( (data, index) => {
            return <input key={index} type="number" maxLength="1" value={data}  onChange={(e) => checkInput(e, index)} onKeyUp={e => {
              if (e.target.previousSibling && e.key === "Backspace") e.target.previousSibling.focus();
              if (e.target.nextSibling && e.key != "Backspace") {
                e.target.nextSibling.focus();
              }
            }}/>
          })
        }
      </div>
        <button onClick={handlSubmit}>Submit</button>
      <div className="info">
        <div className="exists">
          <p id='info'>Existing</p>
          <div className="list">
          {sX?.map((number, key) => <p key={key}>{number}</p>)}
          </div>
        </div>
        <div className="exists">
          <p id='info'>Correct Spot</p>
          <div className="list">
            {sC?.map((number, key) => <p key={key}>{number}</p>)}
          </div>
        </div>
      </div>
      <div className="pp">
        {/* <button onClick={() => setToggle(!toggle)}>Click</button> */}
        {toggle ? <Popup header="You Win!" text={gCounter} text2={code} button1="Play Again"button2="Close" fun1={refreshPage} fun2={() => setToggle(!toggle)}/> : ""}
      </div>
    </div>
  )
}
