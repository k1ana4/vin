import '../App.css';
import logo from '../vinny-logo.png';

const Header = ({ title }) => {
    return (
        <div className = "top-bar">
            <img src = {logo} alt = "Logo" />
            <header>
                <h2>{title}</h2>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: "Vin",
}

export default Header
