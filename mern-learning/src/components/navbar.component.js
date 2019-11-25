import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
 render() {
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <Link to="/" className="navbar-brand" href="#">WebSiteName</Link>
            </div>
            <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <Link to="/create">Create Exercise</Link>
            <Link to="/user">create User</Link> 
            </ul>
        </div>
        </nav>
    )
 };
}