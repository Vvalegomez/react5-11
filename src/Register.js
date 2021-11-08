import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register(){
    return(
        <body className="bg-gradient-primary">
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Crea una cuenta!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                            placeholder="Nombre"></input>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-user" id="exampleLastName"
                                            placeholder="Apellido"></input>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                            placeholder="Email"></input>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" className="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password"></input>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control form-control-user"
                                            id="exampleRepeatPassword" placeholder="Password"></input>
                                        </div>
                                        <a href="index.html" className="btn btn-primary btn-user btn-block"></a>
                                        <hr></hr>
                                    </form>
                                    <div className="text-center">
                                        <a className="small" href="forgot-password.html">Olvido su contraseña?</a>
                                    </div>
                                    <div className="text-center">
                                        <a className="small" href="login.html">Ya tenes una cuenta? Ingresa acá!</a>
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