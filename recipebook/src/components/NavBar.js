import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={styles.navbar}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={styles.navbarBrand}>Enakai's Recipe Bank</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" style={styles.navLink}>Recipes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/create" style={styles.navLink}>Create Recipe</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={styles.navLink}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const styles = {
    navbar: {
        backgroundColor: '#1ecbe1', // Vibrant color
    },
    navbarBrand: {
        fontFamily: 'Comic Sans MS', // Playful font
        fontSize: '24px',
        color: '#ffffff', // White color for contrast
    },
    navLink: {
        fontFamily: 'Comic Sans MS', // Playful font
        fontSize: '20px',
        color: '#ffffff', // White color for contrast
    }
};

export default Navbar;
