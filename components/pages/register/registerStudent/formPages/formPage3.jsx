import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const FormPage3 = ({
  nationality,
  hometown,
  currentLocation,
  religion,
  hidden,
}) => {
  return (
    <>
      <div className={`${hidden ? "hidden" : ""}`}>
        <Typography variant="h4" className="my-3">
          About
        </Typography>

        {/* Nationality */}
        <TextField
          type="text"
          label="nationality"
          name="nationality"
          placeholder="eg. Ghanaian"
          ref={nationality}
          onChange={(e) => (nationality.current.value = e.target.value)}
        />

        {/* Current Location */}
        <TextField
          type="text"
          label="current location"
          name="current location"
          placholder="eg. Nima - Greater Accra region"
          ref={currentLocation}
          onChange={(e) => (currentLocation.current.value = e.target.value)}
        />

        {/* HomeTown */}
        <TextField
          type="text"
          label="hometown"
          name="home town"
          ref={hometown}
          placeholder="Koforidua - Eastern Region"
          onChange={(e) => (hometown.current.value = e.target.value)}
        />

        {/* Religion */}
        <TextField
          type="text"
          label="religion"
          name="religion"
          placeholder="eg. Muslim"
          ref={religion}
          onChange={(e) => (religion.current.value = e.target.value)}
        />
      </div>
    </>
  );
};

export default FormPage3;
