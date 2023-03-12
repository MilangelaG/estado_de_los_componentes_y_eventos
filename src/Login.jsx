import { useState } from 'react';


const Login = ({setLoged}) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  var disabled = (password.trim() === "" || user.trim() === "");

  const tryLogin = (e) => {
    e.preventDefault();
    console.log(e)
    if (user.trim() === "super@desafiolatam.com" && password.trim() === "123123123" ){
      setLoged({msg: "Accediste", color: "success"})
    }
    else{
      setLoged({msg: "Correo y Contraseña no son validos ", color:  "danger"})
    }
  }

  return (
    <div className="Login">
      <h1> Eventos y Componentes </h1>
      <form onSubmit={tryLogin}>
        <div className="form-group">
          <label htmlFor="user">
            Usuario
            <input className="form-control" name="user" onChange={(e) => setUser(e.target.value)}/>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="password">
            Contraseña
            <input type="password" className="form-control" name="password" onChange={(e) => setPassword(e.target.value)}/>
          </label>
        </div>

        <button disabled={disabled} className="btn btn-dark mt-3" type="submit">  Enviar </button>
      </form>
    </div>

  )
}
export default Login