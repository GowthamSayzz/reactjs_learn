import { useState } from "react";

function Header(){
    var [navClassList, setNavClassList] = useState("collapse navbar-collapse");
    var isNavShowing = false;

    function handleNavToggle(){
        if(isNavShowing === false){
            isNavShowing = true;
            setNavClassList("navbar-collapse");
        }else{
            isNavShowing = false;
            setNavClassList("collapse navbar-collapse")
        }
    }

    return (
        <nav className="navbar shadow mt-3 navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="https://www.softwareschool.co/static/media/tl6.2441b21d3acc37b35ce6.png" width="120px" alt="logo"></img>
                </a>
                <button className="navbar-toggler" onClick={e => handleNavToggle() }>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={navClassList}>
                    <ul className="navbar-nav">
                        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="/list"  className="nav-link">Courses</a></li>
                        <li className="nav-item"><a href="/products-list"  className="nav-link">Products</a></li>
                        <li className="nav-item"><a href="/profile-update" className="nav-link">Profile</a></li>
                        <li className="nav-item"><a href="/api-practice" className="nav-link">API Products</a></li>
                        <li className="nav-item"><a href="/users" className="nav-link">Users</a></li>
                        <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
                        <li className="nav-item"><a href="/signup" className="nav-link">Sign Up</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;