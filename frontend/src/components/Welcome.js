import '../App.css';

const Welcome = ({ message, user }) => {
    return (
        <h1 className = "welcome-msg" >{message}, {user} </h1>
    )
}

Welcome.defaultProps = {
    message: "Hello, user",
}

export default Welcome
