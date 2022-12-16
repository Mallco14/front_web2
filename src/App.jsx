import { useState, useEffect, useCallback } from 'react'
import { get } from "./services"
import './App.css'

function App() {
  const [usuarios, setUsuarios] = useState([]);

  async function setUsuarios() {
    const usuarios = await get('usuarios');
    setUsuarios(usuarios);
    //console.log(usuarios)
  }

  useEffect(() => {
    setUsuarios();
  }, [])

  return (
    <div className="App">

      <table class="table" align='left' className="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Email</th>
            <th scope="col">Profesion</th>
            <th scope="col">numero</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user,index) => (
            <tr key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.profesion}</td>
              <td>{user.numero}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}


export default App