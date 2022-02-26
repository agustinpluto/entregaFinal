import { NavLink } from 'react-router-dom'
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><NavLink activeClassName="activo"
                             to="/" 
                             className={({ isActive }) => "nav-link" + (isActive ? " activo" : "")}>Home</NavLink></li>
                <li><NavLink activeClassName="activo" 
                             to="/Tutoriales" 
                             className={({ isActive }) => "nav-link" + (isActive ? " activo" : "")}>Tutoriales</NavLink></li>
                <li><NavLink activeClassName="activo" 
                             to="/Novedades" 
                             className={({ isActive }) => "nav-link" + (isActive ? " activo" : "")}>Novedades</NavLink></li>
                <li><NavLink activeClassName="activo" 
                             to="/Nosotros" 
                             className={({ isActive }) => "nav-link" + (isActive ? " activo" : "")}>Nosotros</NavLink></li>
                <li><NavLink activeClassName="activo"
                             to="/Contacto" 
                             className={({ isActive }) => "nav-link" + (isActive ? " activo" : "")}>Contacto</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;