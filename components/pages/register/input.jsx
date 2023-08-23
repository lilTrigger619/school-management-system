import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export default function S_input ({required, type, error, InputLabelProps, placeholder, label, onChange, name, value, helperText, InputProps,}) {
  const Styles = useStyles();
  return (
    <div className="flex justify-center  items-center max-w-full my-4 mx-auto">
      {/**<Typography variant="body1" className='mx-11'>{label??'Label'}</Typography>**/}
      <TextField 
			required={required}
		  className={Styles.input}
		  type={type}
		  placeholder={placeholder}
		  label={label}
		  onChange={onChange}
		  name={name}
		  helperText={helperText}
		  InputProps={InputProps}
		  error={error}
		  InputLabelProps={InputLabelProps}
		/>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  input: {
    textAlign: "center",
    //border: '.4px solid black',
    //borderRadius: '10px',
    padding: theme.spacing(1),
    width: "23rem",
    backgroundColor: "#f6f4eb",
    "&&:focus": {
      borderColor: "#3e51b5",
      borderWidth: ".3rem",
    },
  },
}));
