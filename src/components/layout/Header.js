import React from "react";

const Header = (props) => {
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3" style="background-color: rgba(128, 128, 128, 0.61)">
                        <img src="img/logo.jpg" alt="logo" width="280" height="280">
                    </div>
                    <div class="col-9" style="background-image: url(img/0111.jpg)">
                        <h1>Hemeroteca</h1>
                    </div>
                </div>
            </div>
        </>


    );
}

export default Header;