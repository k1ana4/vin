import '../App.css';

const Welcome = ({ message }) => {
    return (
        <h1 className = "welcome-msg" >{message}</h1>
    )
}

Welcome.defaultProps = {
    message: "Hello, user",
}

export default Welcome