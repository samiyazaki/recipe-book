import { Link  } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                <Link to="/">View Recipes</Link>
                </li>
                <li>
                    <Link to ="/create">Create Recipe</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
