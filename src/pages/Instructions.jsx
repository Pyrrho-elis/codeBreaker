import React from 'react'

function Instructions() {
  return (
    <div className='instructions'>
      <p>Welcome to Codebreaker! Your mission is to crack the secret code hidden within a randomly generated 4-digit number. Are you up for the challenge?</p>

<p>Here's how to play:</p>

<p>1. Guess the Code: Start by entering your 4-digit guess into the input field. Try different combinations until you feel confident about your guess.</p>

<p>2. Feedback: After each guess, you'll receive valuable feedback to guide you. The "Existing" column tells you how many digits from your guess exist in the original code, regardless of their positions. The "Correct Spot" column reveals how many of those existing digits are in the correct positions.</p>

<p>3. Refine Your Strategy: Use the feedback to fine-tune your strategy. If a digit appears in the "Existing" column but not in the "Correct Spot" column, you know it's part of the code, but not in the right position. If a digit appears in both columns, you've got one in the right place!</p>

<p>4. Crack the Code: As you analyze the feedback and make subsequent guesses, you'll start to narrow down the possibilities. Keep refining your guesses until you've cracked the entire code, digit by digit.</p>

<p>5. Victory: The moment you successfully identify all the digits in the correct order, you'll emerge as the ultimate Number Codebreaker!</p>
    </div>
  )
}

export default Instructions
