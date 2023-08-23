import Axios from 'axios';
import Cookie from 'cookie';

const requestHandler = (req, res)=>{
  if(req.method == "GET"){
    const user = process.env.Backend + "/student";


  }else{
    console.log(req.method) 
  }
};


export default requestHandler;
