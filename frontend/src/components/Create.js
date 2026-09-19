import '../App.css';
import icon from '../plus-sign.png';

const Create = () => {
    return (
        <div className = "create-card">
            <img src = {icon} alt = 'plus icom' className = "plus-button" ></img>
            <p>Create your first resume!</p>
        </div>
    )
}

export default Create
