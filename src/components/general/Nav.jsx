import {Link} from '@tanstack/react-router';

function Nav({extra}) {
    return (
        <nav>
        <ul>
            <li><Link to="/" activeProps={{className: "active"}}>🏠 Home</Link></li>
            <li><Link to="/#skills">🧠 Skills & Experience</Link></li>
            <li><Link to="/portfolio" activeProps={{className: "active"}} activeOptions={{exact: true}}>🖼️ Portfolio</Link></li>
            {extra && extra.trim() ? <li>
                <a className="active appended" href="#">{extra}</a>
            </li> : null}
        </ul>
    </nav>
    )
}

export default Nav;