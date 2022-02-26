import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return ( 
        <header>
            <div className="holder">
                <img src="img/logo.png" alt="Logo" width="100" class="imagentop"/>
                <h1>Plant+</h1>
            </div>
        </header>
    );
}

export default Header;