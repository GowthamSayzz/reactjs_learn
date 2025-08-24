import Logo from './Logo.png';

function Footer(){
    return(
        <div className="container shadow rounded-3">
            <footer className="row p-3">
                <div className="col mt-2">
                    <img src = {Logo} width="150px" alt="logo"></img>
                    <p className='mt-3'>one stop solution for all kind of online shopping</p>
                </div>
                <div className="col">
                    <h5>Company</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link" href="/about">Products</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Reviewers</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Sellers</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Carrers</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Resources</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link" href="/about">Marketing</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Inventory</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Support</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Shipping</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Social Connect</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link" href="/about"><i className="bi bi-youtube"></i> Youtube</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about"><i className="bi bi-linkedin"></i> LinkedIn</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about"><i className="bi bi-instagram"></i> Instagram</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Contact</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link" href="/about">supportecomcart@gmail.com</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">8247636368</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Look for Appointment</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">Store Visit</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;