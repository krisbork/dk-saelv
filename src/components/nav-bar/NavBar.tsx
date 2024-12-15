import React, {useState} from 'react';
import "./NavBar.css";
import {Link, useLocation} from "react-router-dom";
import logo from "../../assets/images/saelv_logo_v2_small_web.svg"

function NavBar() {
    const [isChecked, setChecked] = useState(true);
    const { pathname } = useLocation();
    
    return (
        <header>
            <div className="nav-body">
                <h2>
                    <Link to={"/"} onClick={() => setChecked(true)}>
                        <img src={logo} alt="Sælv Logo"/>
                    </Link>
                </h2>
            </div>
            <input type="checkbox" className="nav-toggle" checked={isChecked}/>
            <label className="nav-toggle-label" onClick={() => setChecked(!isChecked)}>
                <span/>
                <span/>
                <span/>
            </label>
            <nav>
                <ul className="nav-items">
                    <li><Link className={(pathname === "/faq") ? "link-selected" : ""} to={"/faq"} onClick={() => setChecked(true)}>FAQ</Link></li>
                    <li><Link className={(pathname === "/privatlivspolitik") ? "link-selected" : ""} to={"/privatlivspolitik"} onClick={() => setChecked(true)}>Privatlivspolitik</Link></li>
                    <li><Link className={(pathname === "/om") ? "link-selected" : ""} to={"/om"} onClick={() => setChecked(true)}>Om</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
