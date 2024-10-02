import { ThreeDots } from "react-loader-spinner";

function BtnLoader(){
    return(
        <ThreeDots
        visible={true}
        height="25"
        width="40"
        color="#fff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    )
}
export default BtnLoader;