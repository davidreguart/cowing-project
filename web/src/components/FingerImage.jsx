import { useState } from 'react';

function FingerImage() {

  const [currentImg, setCurrentImg] = useState('/finger.png')

  const handleReplaceFinger = () => {
    if (currentImg === '/finger.png') {
      setCurrentImg('/dead_finger.png');
    } else {
      setCurrentImg('/finger.png');
    }
  }

  return (
    <div>
      <img
        className='py-4 px-4'
        src={currentImg}
        alt="Finger"
        onClick={handleReplaceFinger}
      />
    </div>
  )
}

export default FingerImage;