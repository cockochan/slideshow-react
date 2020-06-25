import React, { useState} from 'react';
import useInterval from 'react-useinterval';

function App() {
  const [greatIndex, setGreatIndex] = useState(0);

  const [start, setStart]=useState(null)
  const [back, setBack]=useState(null)
  
  useInterval(
    () => {
      handleForward()
    },
    start ? 500 : null
  );
  useInterval(
    () => {
      handleBackward()
    },
    back ? 500 : null
  );
  const imageArray = [
    "./pics/394108_179405985495099_194997137_n.jpg",
    "./pics/395565_179405452161819_1380352913_n.jpg",
    "./pics/419621_178440538924977_1347282475_n.jpg"
  ];

  const handleForward = () => {
    console.log(greatIndex)
    if (greatIndex < imageArray.length - 1) {
      let newIndex = greatIndex+1;
    
      setGreatIndex(newIndex);
    } else {
      setGreatIndex(0);
      // console.log('zero')
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


const handleAutoForward = () => {setStart(true)
  setBack(false)};

  const handleAutoBackward = () => {setStart(false) 
    setBack(true)};

const handleStop =()=>{
  setStart(null)
  setBack(null)
}

  return (
    <div>
    <div style={{display:'flex', flexDirection:'column'}} >
      <div style={{display:'flex',flexDirection:'column',width:'100%', alignContent:'center' }}>
      <div style={{width:'15px', height:'15px',backgroundColor:'orange', color:'white', fontWeight:'bolder'}}></div>
      <div style={{width:'15px', height:'15px',backgroundColor:'red', color:'white', fontWeight:'bolder'}}></div><div style={{width:'15px', height:'15px',backgroundColor:'violet', color:'white', fontWeight:'bolder'}}></div>
      <div style={{width:'15px', height:'15px',backgroundColor:'red', color:'white', fontWeight:'bolder'}}></div><div style={{width:'15px', height:'15px',backgroundColor:'black', color:'white', fontWeight:'bolder'}}></div><h1>Cat gallery</h1>
     </div></div>
      <img style={{height:'500px', width:'auto'}} alt='whateverYouWantToSee' className="image" src={imageArray[greatIndex]} />
      <div>
        <button onClick={handleAutoBackward}> auto backward</button>
        <button onClick={handleBackward}>backward</button>
        <button onClick={handleForward}>forward</button>
        <button onClick={handleAutoForward}>Auto forward</button>
        <button style={{backgroundColor:'red', color: 'white', fontWeight:'bolder'}}onClick={handleStop}>stop(panik)</button>
        </div></div>
   
  );
}
export default App;
