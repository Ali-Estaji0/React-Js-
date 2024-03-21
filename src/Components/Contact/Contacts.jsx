import { Currentline, Orange, Pink } from "../../Helpers/Colors";
import Contacts from "./Contact";
import Spinner from '../Spinner';
import Contatc from "./Contact";
const Contact = ({Contacts , loading}) => {
  return (
    <>
      <section className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3">
                <button className="btn mx-2" style={{ backgroundColor: Pink }}>
                  ساخت مخاطب جدید
                  <i className="fa fa-plus-circle mx-2" />
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
      {
        loading ? <Spinner/> : (
          
        <section className="container">
          <div className="row">
            {
              Contacts.length > 0 ? Contacts.map(c => (
                <Contact key={c.id} Contact={c}/>
              )) :
              (
                <div className="text-center py-5" style={{backgroundColor: Currentline}}>
                  <p className="h3" style={{color :Orange}}>
                    مخاطب یافت نشد 
                  </p>
                  <img src={require("../../Assests/NotFound.jpg")} alt="پیدا نشد" className="w-25" />
                </div>
              )
              } 
          </div>
        </section>
        )
        }
    </>
  );
};
export default Contact;
