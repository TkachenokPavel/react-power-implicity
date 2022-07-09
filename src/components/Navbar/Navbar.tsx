import './style.scss'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="navbar__logo"><img src="" alt="nav logo" /></a>
            <ul className="navbar__list">
                <a href="#" className="navbar__item">Features</a>
                <a href="#" className="navbar__item">Partners</a>
                <a href="#" className="navbar__item">Stories</a>
            </ul>
            <button className="navbar__btn-download" type="button">Download for free</button>
        </nav>
    )
}
