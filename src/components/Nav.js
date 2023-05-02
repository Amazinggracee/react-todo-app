import '../App.css';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="nav">
      <h2>What are we doing today?</h2>
      <ul className="linkClass">
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/todoList" className="links">
            TodoList
          </Link>
        </li>
      </ul>
    </nav>
  );
}
