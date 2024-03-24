import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="container-fluid p-0">
                <div className="row">
                    {/* <div className="col-12"> */}
                        <nav className="navbar navbar-expand-md navbar-dark" style={{ backgroundColor: 'gray', height: '50px', paddingTop: '15px' }}>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="navbar-nav custom-navbar" style={{ display: 'flex', flexDirection: 'row',  }}>
                
                                <li className="nav-item" style={{ margin: '0 10px' }}>
                                        <Link className="nav-link text-white" to="/DashBoard" style={{ textDecoration: 'none' }}>DashBoard</Link>
                                    </li>
                                    <li className="nav-item" style={{ margin: '0 10px' }}>
                                        <Link className="nav-link text-white" to="/VideoEditor" style={{ textDecoration: 'none' }}>VideoEditor</Link>
                                    </li>
                                   
                                </div>

                            </div>
                        </nav>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
