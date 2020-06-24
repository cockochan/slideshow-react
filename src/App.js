import React, { useState } from "react";
function App() {
  const [greatIndex, setGreatIndex] = useState(0);
  const [waiting, setWaiting]=useState()
  const imageArray = [
    "./pics/394108_179405985495099_194997137_n.jpg",
    "./pics/395565_179405452161819_1380352913_n.jpg",
    "./pics/395565_179405452161819_1380352913_n.jpg"
  ];

  const handleForward = () => {
    console.log(greatIndex)
    if (greatIndex < imageArray.length - 1) {
      let newIndex = greatIndex+1;
      console.log(newIndex)
      setGreatIndex(newIndex);
    } else {
      // setGreatIndex(0);
      console.log('zero')
    }
  };

  const handleBackward = () => {
    if (greatIndex > 0) {
      console.log('back')
      setGreatIndex(greatIndex - 1);
    } else {
      console.log('back2')
      setGreatIndex(imageArray.length - 1);
      
    }
  };

  const handleAutoForward = () => {
    if(waiting) {return}
    const newInterval =  setInterval(() => {
      handleForward();
    }, 2000); 
    setWaiting(newInterval)
  };

  const handleAutoBackward = () => {
    setTimeout(() => {
      handleBackward();
      handleAutoBackward();
    },2000);
  };

  // const handleStop= () => {
  //   setInterval(null)
  // };
  return (
    <div>
      <h1>Cat gallery</h1>

      <img alt='whateverYouWantToSee' className="image" src={imageArray[greatIndex]} />
      <div>
        <button onClick={handleAutoBackward}> auto backward</button>
        <button onClick={handleBackward}>backward</button>
        <button onClick={handleForward}>forward</button>
        <button onClick={handleAutoForward}>Auto forward</button>
      </div>
    </div>
  );
}
export default App;
