import '../App.css';
import plus from '../icons/plus-sign.png';

const Create = () => {
    return (
        <div className = "create-card">
            <img src = {plus} alt = 'plus icon' className = "plus-button" ></img>
            <p>Create your first resume!</p> 
        </div>
    )
}

export default Create
