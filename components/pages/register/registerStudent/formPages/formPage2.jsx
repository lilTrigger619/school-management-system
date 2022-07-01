import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";

// this form will contain the phone, email, 

const FormPage2 = ({phone, email, hidden})=>{
  return(
    <>
      <div className={` ${hidden ? "hidden" : ""}`}>
      <Typography
        className="my-3"
        variant="h4"
      >Contact</Typography>
      {/* email */}
      <TextField
        type="email"
        placeholder="eg. john.d@yahoo.com"
        label="Email"
        name="email"
        ref={email}
        onChange={e=>email.current.value=e.target.value}
      />
      
      {/* phone */}
      <TextField
        type="text"
        label="phone"
        name="phone"
        ref={phone}
        onChage={e=>phone.current.value=e.target.value}
      />
        </div>
    </>
  );
};

export default FormPage2;
