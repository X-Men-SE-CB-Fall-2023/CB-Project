import { useState } from "react";
import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";
type formInputs = [userName:string,password:string]

function App() {
  return (
    <>
      <Credential/>
    </>
  );
}

const Credential = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formInputs>();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit: SubmitHandler<formInputs> = (data) => console.log(data)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("userName", {required: true})} type="text"  className="input input-primary" placeholder="Username"/>
        <input {...register("password", {required: true})}type="password"  className="input input-primary" placeholder="Password"/>
        <input type="submit" className="btn btn-primary" value="login"/>
      </form>
    </div>
  );
}

export default App;
