import './App.css';
import {Inicio} from './Inicio';
import {Departament} from './Departament';
import {Employee} from './Employee';
import {Login} from './Login';
import {BrowserRouter, Route, Routes ,NavLink} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
     <h3 className="d-flex justify-content-center m-3">
       asd
     </h3>

     <nav className="navbar navbar-expand-sm bg-light navbar-dark">
       <ul className="navbar-nav">
         <li className="nav-item- m-1">
           <NavLink className="btn btn-light btn-outline-primary" to="/Inicio">
             Inicio
           </NavLink>
         </li>
         <li className="nav-item- m-1">
           <NavLink className="btn btn-light btn-outline-primary" to="/Departament">
             Departament
           </NavLink>
         </li>
         <li className="nav-item- m-1">
           <NavLink className="btn btn-light btn-outline-primary" to="/Employee">
             Employee
           </NavLink>
         </li>
         <li className="nav-item- m-1">
           <NavLink className="btn btn-light btn-outline-primary" to="/Login">
             Login
           </NavLink>
         </li>
       </ul>
     </nav>

     <Routes>
       <Route path='/Inicio' element={<Inicio/>}/>
       <Route path='/Departament' element={<Departament/>}/>
       <Route path='/Employee' element={<Employee/>}/>
       <Route path='/Login' element={<Login/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

