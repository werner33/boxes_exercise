import {useState} from 'react';

import './App.css'

function App() {

  const [activeID, setActiveID] = useState(null); // 1,2,3,4,5

  // make 5 boxes 200x200 px with red background
  // set boxes in row, with 20 px gap between each
  // number each box from 1-5 with a centered white number
  // when i click on a box, it turns blue
  // when i click on any other box, it turns blue and all others are red
  // (only one is blue at a time)

  const setBoxToBlue = (event) => {
    setActiveID(event.target.id);
  }

  return (
    <div className="boxes">
      <div 
        className={ activeID === '1' ? "boxes__box active" : "boxes__box" }
        id="1"
        onClick={setBoxToBlue}
      >1</div> 
      <div 
        className={ activeID === '2' ? "boxes__box active" : "boxes__box" }
        id="2"
        onClick={setBoxToBlue}
      >2</div>
      <div 
        className={ activeID === '3' ? "boxes__box active" : "boxes__box" }
        id="3"
        onClick={setBoxToBlue}
      >3</div>
      <div 
        className={ activeID === '4' ? "boxes__box active" : "boxes__box" }
        id="4"
        onClick={setBoxToBlue}
      >4</div>
      <div 
        className={ activeID === '5' ? "boxes__box active" : "boxes__box" }
        id="5"
        onClick={setBoxToBlue}
      >5</div>
    </div>
  )

}

export default App;
