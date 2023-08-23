import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
// this page will conatian health and medical info

const FormPage4 = ({ illness, allergies, disability, hidden }) => {
  return (
    <>
      <div className={`${hidden ? "hidden" : ""}`}>
        <Typography variant="h4" className="my-3">
          Medicals
        </Typography>

        {/* illness */}
        <TextField
          name="illness"
          label="illness"
          type="text"
          placeholder="eg. Pnemonia, Epplilepse, Cancer, Aids etc."
          ref={illness}
          onChange={(e) => (illness.current.value = e.target.value)}
        />

        {/*allergies */}
        <TextField
          name="allergies"
          label="allergies"
          type="text"
          ref={allergies}
          onChange={(e) => (allergies.current.value = e.target.value)}
        />

        {/*disability*/}
        <TextField
          name="disability"
          label="disability"
          placeholder="eg. Amputated limbs, Leprosy, Mute, Deaf}"
          ref={disability}
          onChange={(e) => (disability.current.value = e.target.value)}
        />
      </div>
    </>
  );
};

export default FormPage4;
