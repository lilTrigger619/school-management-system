import {TailSpin} from "react-loader-spinner";

export default function Loader(){
  return(
  <>
    <main style={Style}>
      <div className="m-auto w-1/2 flex justify-center align-center ">
        <TailSpin 
          color="blue"
          height={80}
          width={80}
          aria-label="loading"
        />
      </div>
    </main>
  </>
  )
};

const Style={
  minHeight : "100vh",
  width: "100%",
};
