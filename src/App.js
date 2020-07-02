import React, { useState } from 'react';
import './App.css';

function App() {
  let imgs = [
    "https://www.wallpapers13.com/wp-content/uploads/2015/11/Love-couple-kissing-hand-expression-of-love-romantic-couple-Wallpapers-HD-1920x1200-915x515.jpg",
    "https://www.wallpapers13.com/wp-content/uploads/2015/11/Couple-girl-guy-wind-sea-sand-beach-surf-sunset-evening-915x515.jpg",
    "https://www.wallpapers13.com/wp-content/uploads/2019/05/Happy-moments-loving-postcards-pictures-loving-couple-love-hug-toast-915x515.jpg"
  ]
  let [index, setIndex] = useState(0)
  return (
    < div className="App" >
      <h1 > Images Gallery</h1 >
      <img alt='Couple' className="img" src={imgs[index]} />
      <br />
      <div >
        <button className="btn" onClick={() => {
          if (index === 0) {
            setIndex(imgs.length - 1)
          } else {
            setIndex(--index)
          }
        }
        }> Prev Image</button >
        <button className="btn" onClick={() => {
          if (index === imgs.length - 1) {
            setIndex(0)

          } else {
            setIndex(++index)
          }

        }}> Next Image</button >
      </div >
    </div >
  );

}

export default App;
