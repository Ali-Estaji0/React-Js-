import {
  Currentline,
  Cyan,
  Orange,
  Pink,
  Red,
  purple,
} from "../../Helpers/Colors";
const Contatc = () => {
  return (
    <div className="col mdd-6">
      <div style={{ backgroundColor: Currentline }} className="card my-2">
        <div className="card-body">
          <div className="row align-items-center d flex justify-content-around">
            <div className="col-md-4 col-sm-4">
              <img
                src="https://via.placeholder.com/200"
                alt=""
                style={{ border: "1px solid ${purple}" }}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 col-sm-7">
              <ul className="list-group">
                <li className="lsit-group-item list-group-item-dark">
                  نام و نام خانوادگی :{" "}
                  <span className="fw-bold">یونس قربانی</span>
                </li>
                <li className="lsit-group-item list-group-item-dark">
                  شماره موبایل: <span className="fw-bold">09122285476</span>
                </li>
                <li className="lsit-group-item list-group-item-dark">
                  ادرس ایمیل :{" "}
                  <span className="fw-bold">dr.stop@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
              <button className="btn my-1" style={{ backgroundColor: Orange }}>
                <i className="fa fa-eye" />
              </button>
              <button className="btn my-1" style={{ backgroundColor: Cyan }}>
                <i className="fa fa-pen" />
              </button>
              <button className="btn my-1" style={{ backgroundColor: Red }}>
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contatc;
