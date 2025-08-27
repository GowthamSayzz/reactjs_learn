import Footer from "./Shared/Footer";
import Header from "./Shared/Header";

function Layout() {
    return (
        <div className="container">
            <div className="row">
                <Header />
            </div>
            <div className="row mt-t mb-5">
                <div className="col-6 mt-5">
                    <h3>Login Form</h3>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" placeholder="Email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" placeholder="Password" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-warning">Login</button>
                    </div>
                </div>
                <div className="col-6 mt-5">
                    <h3>Signup Form</h3>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="text" placeholder="First Name" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="text" placeholder="Last Name" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mobile Number</label>
                        <input type="text" placeholder="Mobile Number" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" placeholder="Email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" placeholder="Password" className="form-control" />
                    </div>
                    <div class="mb-3 d-flex align-items-center">
                        <label class="form-label me-3 mb-0">Gender</label>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="genderMale" value="male" checked />
                            <label class="form-check-label" for="genderMale">Male</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="genderFemale" value="female" />
                            <label class="form-check-label" for="genderFemale">Female</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <button className="btn btn-primary">Signup</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <Footer />
            </div>
        </div>
    )
}

export default Layout;