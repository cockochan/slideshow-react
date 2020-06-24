import React, { useState } from "react";
function App() {
  const [greatIndex, setGreatIndex] = useState(0);
  const imageArray = [
    "https://constantindimitrenco.files.wordpress.com/2019/07/11930909_1608799322706701_5270319554366375071_o-3.jpg?w=1200&h=&crop=1",
    "https://constantindimitrenco.files.wordpress.com/2019/07/11951470_1608799339373366_2371328067007969191_o.jpg?w=1200&h=&crop=1",
    "https://constantindimitrenco.files.wordpress.com/2019/07/alp_0927.jpg?w=1200&h=&crop=1"

  ];

  const handleForward = () => {
    if (greatIndex < imageArray.length - 1) {
      setGreatIndex(greatIndex + 1);
    } else {
      setGreatIndex(0);
    }
  };

  const handleBackward = () => {
    if (greatIndex > 0) {
      setGreatIndex(greatIndex - 1);
    } else {
      setGreatIndex(imageArray.length - 1);
    }
  };

  const handleAutoForward = () => {
    setInterval(() => {
      handleForward();
    }, 700);
  };

  const handleAutoBackward = () => {
    setInterval(() => {
      handleBackward();
    },700);
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
