import React, { useEffect, useState } from 'react';

function Popup({toggle, header, text, text2, button1, button2, fun1, fun2}) {
  const [trigger, setTrigger] = useState(true);

  // const togglePopup = () => {
  //   setTrigger(!trigger)
  // }

  // const openPopup = () => {
  //   setTrigger(true);
  //   // console.log(toggle)
  // };

  // const closePopup = () => {
  //   setTrigger(false);
  //   toggle = "off"
  // };

  // useEffect(() => {
  //   if (toggle == "on") openPopup()
  //   if (toggle == "off") closePopup()
  // }, [toggle])

  return (
    <div className="popup-container">
      {trigger && (
        <div className="overlay">
          <div className="popup">
            <h1 id='popuph1'>{header}</h1>
            <p>It took you {text} Guess(s)</p>
            {text2 && <p>The Code Was {text2}!</p>}
            {button1 && <button onClick={fun1}>{button1}</button>}
            {button2 && <button onClick={fun2}>{button2}</button>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
