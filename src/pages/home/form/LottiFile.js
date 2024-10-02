import Lottie from 'react-lottie';
import lottiefile from "../../../assets/Lottie/3wwvTWqvcv.json";

function LottiFile() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottiefile,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={90}
          width={90}
        />
      </div>
    );
  }
  

export default LottiFile;