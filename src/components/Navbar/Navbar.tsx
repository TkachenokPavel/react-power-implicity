import './style.scss'
import logo from '../assets/logo.svg'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <img className='navbar__logo' src={logo} alt="nav logo" />
            <ul className="navbar__list">
                <li className='navbar__item'>
                    <a href="!#" className="navbar__link">Features</a>
                </li>
                <li className='navbar__item'>
                    <a href="!#" className="navbar__link">Partners</a>
                </li>
                <li className='navbar__item'>
                    <a href="!#" className="navbar__link">Stories</a>
                </li>
            </ul>
            <button className="navbar__btn-download" type="button">Download for free</button>
        </nav>
    )
}
