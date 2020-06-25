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
    "./pics/jeka.jpg",
  
    "./pics/419621_178440538924977_1347282475_n.jpg",
    "./pics/DSC_3665.jpg",
    "./pics/ALP_0392.png",
    './pics/50934388_2326403780925794_8182476207179169792_o.jpg',
    "./pics/katia.jpg",
    "./pics/kidaero.jpg",
    "./pics/19620133_10207321750321200_7708502522419890689_o.jpg",
    "./pics/_CUB9815.jpg",
    "./pics/zoya.jpg"

    

  ];

  const handleForward = () => {
    console.log(greatIndex)
    if (greatIndex < imageArray.length - 1) {
      let newIndex = greatIndex+1;
    
      setGreatIndex(newIndex);
    } else {
      setGreatIndex(0);

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
      <div style={{height:'2px', width:'40%', alignSelf:'flex-end', backgroundColor:'red', marginTop:'35px'}}></div>
      <div style={{display:'flex',flexDirection:'row',width:'100%', alignText:'center', alignItems:'center' }}>
      <div style={{width:'15px', height:'35px',backgroundColor:'orange', color:'white', fontWeight:'bolder'}}></div>
      <div style={{width:'15px', height:'35px',backgroundColor:'red', color:'white', fontWeight:'bolder'}}></div><div style={{width:'15px', height:'35px',backgroundColor:'violet', color:'white', fontWeight:'bolder'}}></div>
      <div style={{width:'15px', height:'35px',backgroundColor:'red', color:'white', fontWeight:'bolder'}}></div><div style={{width:'15px', height:'35px',backgroundColor:'violet', color:'white', fontWeight:'bolder'}}></div>
      <p style={{fontWeight:'bolder', color:'violet', paddingTop:0, marginLeft:'15px', fontSize:'24px'}}>My photography gallery</p>
      
     </div><div style={{height:'2px', width:'20%', alignSelf:'flex-end', backgroundColor:'blue', marginTop:'35px'}}></div></div>
      <img style={{marginLeft:'35px',height:'500px', width:'auto'}} alt='whateverYouWantToSee' className="image" src={imageArray[greatIndex]} />
      <div style={{marginLeft:'35px'}}>
        <button style={{backgroundColor:'black',color:'white', bordr:'none',fontWeight:'bolder'}} onClick={handleAutoBackward}> auto backward</button>
        <button style={{backgroundColor:'black',color:'white', bordr:'none',fontWeight:'bolder'}}onClick={handleBackward}>backward</button>
        <button style={{backgroundColor:'black',color:'white', bordr:'none',fontWeight:'bolder'}}onClick={handleForward}>forward</button>
        <button style={{backgroundColor:'black',color:'white', bordr:'none',fontWeight:'bolder'}}onClick={handleAutoForward}>Auto forward</button>
        <button style={{backgroundColor:'red', color: 'white', fontWeight:'bolder', borderColor:'pink'}}onClick={handleStop}>stop</button>
        </div>
       
        </div>
   
  );
}
export default App;
