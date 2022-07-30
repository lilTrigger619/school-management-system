import Axios from "axios";
import Button from "@material-ui/core/Button";

export default function TestApi(){
  //test_api method
  const _testApi=async (key)=>{
    const _testApi = async(location)=>{
      try{
        const _VerifyResponse = await Axios.get("api/test_apis/"+location);
        console.log({_VerifyResponse});
      }catch(err){
        console.log(err.response ?? err);
      };
    };
    switch(key){
      case 'verifyApi':
        _testApi("test_verifyApi");
        break;
      case 'refreshApi':
        _testApi("test_refreshApi");
        break;
      case 'getApi':
        _testApi("test_getApi");
        break;
      case 'postApi':
        _testApi("test_postApi");
        break;
      case "putApi":
        _testApi("test_putApi");
        break;
      case "deleteApi":
        _testApi("test_deleteApi");
        break;
      case "loginApi":
        _testApi("test_loginApi");
        break;
      default :
        console.log('no key chossen');
        break;
    }

  };
  return(
    <>
      <div className="flex justify-center">
        <Button variant="contained" onClick={()=>_testApi('loginApi')}>
          test_loginApi
        </Button>
        <Button onClick={()=>_testApi('verifyApi')}>
          test_verifyApi
        </Button>
      </div>

    
    </>
  );
};

