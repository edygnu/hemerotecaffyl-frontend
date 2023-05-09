import React from "react";
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3" style={{backgroundColor: 'rgba(128, 128, 128, 0.61)'}}>
                        <img src="img/logo.jpg" alt="logo" width="280" height="280"/>
                    </div>
                    <div className="col-9" style={{backgroundImage: `url("img/0111.jpg")`}}>
                        <h1>Hemeroteca</h1>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;