import App from "../App";
import Spinnergif from "../Assests/Spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={Spinnergif}
        className="d-block m-auto"
        style={{ width: "200px" }}
      />
    </>
  );
};
export default App;
