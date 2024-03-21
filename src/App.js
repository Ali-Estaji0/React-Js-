import { useState } from "react";
import "./App.css";
import {
  AddContact,
  Contact,
  Contacts,
  Navbar,
  EditContact,
  ViewContact,
} from "./Components/Index.jsx";
const App = () => {
  const [loading, setloading] = useState(true);
  const [getContact, setContact] = (useState = useState([]));

  return (
    <div className="App">
      <Navbar />
      <Contact Contatc={getContact} loading={loading} />
    </div>
  );
};
export default App;
