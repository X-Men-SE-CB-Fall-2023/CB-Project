import { useState } from "react";
import "./App.css";


function App() {
  return (
    <>
      <Credential/>
    </>
  );
}

const Credential = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const onSubmitHandler = () => {
    let formData = [userName, password]
    console.log(formData) 
  }
  return (
    <div>
      <input type="text" value={userName} onChange={(e) => {setUserName(e.target.value)}} className="input input-primary" placeholder="Username"/>
      <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}className="input input-primary" placeholder="Password"/>
      <button onClick={onSubmitHandler} className="btn btn-primary">Login</button>
    </div>
  );
}

export default App;
