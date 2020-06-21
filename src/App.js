import React, { useState } from "react";
function App() {
  const [greatIndex, setGreatIndex] = useState(0);
  const imageArray = [
    "https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2020/4/13/ecab8c7af42a439d9043b0ade6e1f05b_18.jpg",
    "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg"
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
    }, 1000);
  };

  const handleAutoBackward = () => {
    setInterval(() => {
      handleBackward();
    }, 1000);
  };
  return (
    <div>
      <h1>Cat gallery</h1>

      <img className="image" src={imageArray[greatIndex]} />
      <div>
        <button onClick={handleAutoBackward}> auto backward</button>
        <button onClick={handleForward}>forward</button>
        <button onClick={handleBackward}>backward</button>
        <button onClick={handleAutoForward}>Auto forward</button>
      </div>
    </div>
  );
}
export default App;
