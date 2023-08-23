import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import { useState, useEffect } from "react";
import { Image } from "next/image";

export default function FormPage7({ hidden, setProfileImage }) {
  const [ImageSrc, setImageSrc] = useState("");

  const imageHandler = (e)=>{
    if(e.target.files[0]){
      const File = e.target.files[0];
      setProfileImage(File);
      const fReader = new FileReader();
      fReader.readAsDataURL(File);
      fReader.onload = ()=>{
        setImageSrc(fReader.result);
      }
    };
  };
  return (
    <>
      <div className={hidden ? "hidden" : ""}>
        <Typography variant="h4"> Profile image </Typography>
        <TextField type="file"   accept="image/*" onChange={imageHandler}/>
        <img src={ImageSrc ? ImageSrc : "/user.png"} width="300px" height="400px"/>
      </div>
    </>
  );
}
