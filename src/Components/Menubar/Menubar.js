import React from 'react';
import './Menubar.css'

const Menubar = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-2">Logo</div>
                    <div className="col-md-10 menu-container d-flex justify-content-center">
                        <li className='items ms-4 p-2'>Home</li>
                        <li className='items ms-4 p-2'>Contact</li>
                        <li className='items ms-4 p-2'>Cart <sup>{props.count}</sup></li>
                        <li className='items ms-4 p-2'>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;