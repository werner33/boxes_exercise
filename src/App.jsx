import {useState} from 'react';

import './App.css'

function PromoCard ({title="This is the default title.", blueTitle, showButton}) {
  return (
    <div className="promo-card" >
      <h3 style={{'color' : blueTitle ? 'blue' : 'black' }}>{title}</h3>
      <p>This is a cool topic.</p>
      {showButton && <button>Buy Me!</button> }
    </div>
  )
}

function App() {
  return (
    <div className="promo-card-container">
      <PromoCard title="This is a Great Deal!" showButton />
      <PromoCard title="Come Visit!" blueTitle />
      <PromoCard blueTitle showButton />
    </div>
  )
}

export default App;
