import SearchContact from "./Contact/SearchContact";

import {purple} from "../Helpers/Colors";
import { background } from './../Helpers/Colors';
import Contatc from "./Contact/Contacts";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-sm shadow-1g" style={{backgroundColor:background}}>
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand">
            <i className="fas fa-id-badge" style={{color:purple}}/> {" "}
            وب اپیکیشن مدیریت <br/>
            <span style={{ color:purple}}>مخاطبین</span>
            </div>
          </div>
          <div className="col">
       <SearchContact/>
       <Contatc/>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
