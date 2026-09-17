import '../App.css';

const Header = ({ image, title }) => {
    return (
        <header className = "top-bar">
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Vin",
}

export default Header
