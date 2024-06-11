import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar({ setCategory, setQuery }) {
    const [searchInput, setSearchInput] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setQuery(searchInput);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary" style={{ padding: "10px", fontSize: "25px" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <span className='badge bg-secondary fs-3'>News Magazine</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#" onClick={() => setCategory('technology')} activeClassName="active">
                                Technology
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#" onClick={() => setCategory('sports')} activeClassName="active">
                                Sports
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#" onClick={() => setCategory('business')} activeClassName="active">
                                Business
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#" onClick={() => setCategory('health')} activeClassName="active">
                                Health
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="#" onClick={() => setCategory('entertainment')} activeClassName="active">
                                Entertainment
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex ms-auto" onSubmit={handleSearchSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button className="btn btn-outline-success bg-danger text-white" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
