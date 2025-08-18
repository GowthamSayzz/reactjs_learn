import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

function Home(){
    return(
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 mb-3">
                    <Header/>
                </div>
                <div className="col-6 mt-4 ps-4 mb-4">
                    <h3>Learn real-time work & Crack interviews easily</h3>
                    <p>
                        Daily Group Status Calls to Keep You Consistent <br/>
                        Weekly 1-on-1 Mentor Calls for Personal Guidance <br/>
                        Quizzes & Group Discussions Every 2 Weeks <br/>
                        Monthly Coding Competitions <br/>
                        Doubts & Error Support via WhatsApp + Zoom <br/>
                    </p>
                </div>
                <div className="col-6">
                    <form className="mt-4 mb-3 card shadow p-3 border-0">
                        <h3 className="text text-warning text-center">Talk With Me</h3>
                        <div className="mb-3">
                            <label className="form-label" name="email-label">Name</label> <br/>
                            <input type="text" className="form-control" name="email"></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" name="email-label">Email</label> <br/>
                            <input type="text" className="form-control" name="email"></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" name="email-label">Phone Number</label> <br/>
                            <input type="text" className="form-control" name="email"></input>
                        </div>
                        <div>
                            <button className="btn btn-warning">Submit Data</button>
                        </div>
                    </form>
                </div>
                <div className="col-12 mt-5 bg-secondary rounded-3 text-center p-5">
                    <h2>Jumbotrons with icon</h2>
                    <p>paragraph data for the jumbotron information</p>
                    <div>
                        <button className="btn btn-primary me-3">Watch Demo</button>
                        <button className="btn btn-success">Create Account</button>
                    </div>
                </div>
                <div className="col-12 mt-5">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Home;