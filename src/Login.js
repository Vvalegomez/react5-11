import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export class Login extends Component{
    render(){
    return(
        <body className="bg-gradient-primary">
            <div className="container">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Bienvenido!</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Ingrese su usario.."></input>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Contraseña"></input>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck"></input>
                                                    <label className="custom-control-label" for="customCheck">Recordar</label>
                                                </div>
                                            </div>
                                            <button to="/Inicio" className="btn btn-primary btn-user btn-block">Ingresar
                                            </button>
                                            <hr></hr>
                                        </form>
                                        <hr></hr>
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Olvido su contraseña?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        );
    }
}
