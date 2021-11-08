import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function sHumbertoPrimo() {
    return (
        <body id="page-top">
            <div id="wrapper">
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">

                        </div>
                        <div className="sidebar-brand-text mx-3">Casa de las Guitarras</div>
                    </a>
                    <hr className="sidebar-divider my-0"></hr>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Inicio</span>
                        </a>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    <div className="sidebar-heading">
                        MENU
                    </div>
                    <li className="nav-item active">
                        <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Productos</span>
                        </a>
                        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <a className="collapse-item" href="buttons.html">Sucursal Olmos</a>
                                <a className="collapse-item active" href="cards.html">Sucursal Humbero Primo</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsetTwo" aria-expanded="true" aria-controls="collapsetTwo">
                            <i className="fas fa-fw fa-cog"></i>
                            <span>Reparaciones</span>
                        </a>
                        <div id="collapsetTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <a className="collapse-item" href="blank.html">Nueva Reparacion</a>
                                <a className="collapse-item" href="404.html">Historial de reparaciones</a>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-wrench"></i>
                            <span>Reportes</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <a className="collapse-item" href="utilities-color.html">Reporte de venta</a>
                                <a className="collapse-item" href="utilities-border.html">Reporte de compra</a>
                                <a className="collapse-item" href="utilities-other.html">Reporte de producto</a>
                            </div>
                        </div>
                    </li>
                    <hr className="sidebar-divider"></hr>

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Compras</span>
                        </a>
                        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <a className="collapse-item" href="login.html">Nueva Compra</a>
                                <a className="collapse-item" href="register.html">Historial de Compra</a>
                            </div>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="charts.html">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Proveedores</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="tables.html">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Fabricantes</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilitiess" aria-expanded="true" aria-controls="collapseUtilitiess">
                            <i className="fas fa-fw fa-wrench"></i>
                            <span>configuración</span>
                        </a>
                        <div id="collapseUtilitiess" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <a className="collapse-item" href="utilities-animation.html">Aumento porcentual</a>
                            </div>
                        </div>
                    </li>
                    <hr className="sidebar-divider d-none d-md-block"></hr>

                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>
                </ul>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>
                            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Buscar..." aria-label="Search" aria-describedby="basic-addon2">
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </input>
                                </div>
                            </form>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small" placeholder="Buscar..." aria-label="Search" aria-describedby="basic-addon2"></input>
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valentin Gomez</span>
                                        <img className="img-profile rounded-circle" src="img/undraw_profile.svg"></img>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Perfil
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Opciones
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Salir
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="card shadow mb-4">

                                </div>
                            </div>
                        </div>

                    </div>
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Casa de las Guitarras</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
            < div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Seguro que desea salir?</h5>
                            <button className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">X</span>
                            </button>
                        </div>
                        <div className="modal-body">Seleccionar salir para cerrar su sesion.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                            <a className="btn btn-primary" href="login.html">Salir</a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}