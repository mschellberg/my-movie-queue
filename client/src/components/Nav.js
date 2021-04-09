import React from "react";
import logo from "../images/logo.png"

function Nav(props) {
    const tabs = ['Login']
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="Kesiah's Logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {tabs.map (tab => (
                    <li key ={tab} className="nav-item">
                        <a className="nav-link orange-button" href={`#${tab.toLowerCase()}`} onClick={() => props.handlePageChange(tab)}>{tab}<span className="sr-only">(current)</span></a>
                    </li>
                    ))}
                </ul>
                <div class="input-group">
                <input type="search" class="form-control rounded searchbar" placeholder="Search for movies..." aria-label="Search"
                    aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary orange-button">Search</button>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Nav