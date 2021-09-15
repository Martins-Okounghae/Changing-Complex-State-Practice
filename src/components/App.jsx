import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event){
    const {value, name} = event.target
    setContact(prevValue =>{
      if (name ==="fName"){
        
      }
    })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input 
        name="fName" 
        placeholder="First Name"
        onChange ={}
        value = {} />


        <input name="lName"
         placeholder="Last Name"
         onChange ={}
         value ={}
          />


        <input name="email" 
        placeholder="Email"
        onChange = {}
        value ={} />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
