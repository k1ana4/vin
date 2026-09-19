import '../App.css';
import icon from '../icons/plus-sign.png'
import profile from '../icons/profile-icon.png';
import community from '../icons/community-icon.png';
import badges from '../icons/badges-icon.png';

const Nav = () => {
    return (
        <nav className = 'nav-bar'>
            <ul>
                <img src = {icon} alt = 'resume icon' className = "plus-button" ></img>
                <img src = {icon} alt = 'opportunities icon' className = "plus-button" ></img>
                <img src = {profile} alt = 'profile icon' className = "plus-button" ></img>
                <img src = {community} alt = 'community icon' className = "plus-button" ></img>
                <img src = {badges} alt = 'badges icon' className = "plus-button" ></img>
            </ul>
            <ul>
                <li>Resume</li>
                <li>Opportunities</li>
                <li>My Profile</li>
                <li>Community</li>
                <li>Badges</li>
            </ul>
        </nav>
    )
}

export default Nav
