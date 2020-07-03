import React, { useState } from 'react';
import './App.css';
import ImagesContext from './imgsContext'

function App() {
  // Use of useState toa maintain the state of img index value..
  let [index, setIndex] = useState(0)
  let imgs = React.useContext(ImagesContext)
  return (
    // <ImagesContext.Provider>
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
    // </ImagesContext.Provider >
  );

}

export default App;
