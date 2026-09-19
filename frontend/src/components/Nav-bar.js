import '../App.css';
import defaultIcon from '../icons/default-icon.png'
import profile from '../icons/profile-icon.png';
import community from '../icons/community-icon.png';
import badges from '../icons/badges-icon.png';

const Nav = () => {
    return (
        <nav className = 'nav-bar'>
            <ul className='res-button'>
                <img src = {defaultIcon} alt = 'resume icon' className = "plus-button" ></img>
                <li>Resume</li>
            </ul>
            <ul className='opp-button'>
                <img src = {defaultIcon} alt = 'opportunities icon' className = "plus-button" ></img>
                <li>Opportunities</li>
                
            </ul>
            <ul className='prof-button'>
                <img src = {profile} alt = 'profile icon' className = "plus-button" ></img>
                <li>My Profile</li>
            </ul>
            <ul className='comm-button'>
                <img src = {community} alt = 'community icon' className = "plus-button" ></img>
                <li>Community</li>
            </ul>
            <ul className='badg-button'>
                <img src = {badges} alt = 'badges icon' className = "plus-button" ></img>
                <li>Badges</li>
            </ul>
        </nav>
    )
}

export default Nav
