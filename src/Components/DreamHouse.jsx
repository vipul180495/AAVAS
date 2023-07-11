// import React from "react";
// //import BackgroundVideo from './BackgroundVideo';

// const DreamHouse = () => {
//   return (
//       <div className="mission">
//         {/* <BackgroundVideo /> */}
//         "Our mission is to provide reliable and affordable
//                     rental solutions that exceed our customers' expectations. We aim to achieve this by offering a diverse
//                     range of high-quality rental options, exceptional customer service, and flexible
//                     rental terms that meet the needs of each individual customer. We strive to build
//                     long-lasting relationships with our customers and be recognized as a trusted partner
//                     for all their rental needs"</div>
//   );
// };

// export default DreamHouse;

import React, { useEffect } from "react";
//import BackgroundVideo from './BackgroundVideo';

const DreamHouse = () => {
  useEffect(() => {
    const speakDreamHouseText = () => {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance("Our mission is to provide reliable and affordable rental solutions that exceed our customers' expectations. We aim to achieve this by offering a diverse range of high-quality rental options, exceptional customer service, and flexible rental terms that meet the needs of each individual customer. We strive to build long-lasting relationships with our customers and be recognized as a trusted partner for all their rental needs.");
      synth.speak(utterance);
    };

    speakDreamHouseText();

    return () => {
      const synth = window.speechSynthesis;
      synth.cancel();
    };
  }, []);

  return (
    <div className="mission">
      {/* <BackgroundVideo /> */}
      "Our mission is to provide reliable and affordable
      rental solutions that exceed our customers' expectations. We aim to achieve this by offering a diverse
      range of high-quality rental options, exceptional customer service, and flexible
      rental terms that meet the needs of each individual customer. We strive to build
      long-lasting relationships with our customers and be recognized as a trusted partner
      for all their rental needs"
    </div>
  );
};

export default DreamHouse;
