import { FormData } from "./FormData";
function Home() {
    var userIdKey = localStorage.getItem('userId');

    function Logout(){
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-12">
                    <h3 className="mb-3">ReactJS Examples</h3>
                    <p className="mb-3 text-success">Learned React routing, how to design components, how to return a component</p>
                    {
                        userIdKey == null && <div className="mb-3"><a href='/login'><button className="btn btn-primary me-3">Login</button></a>
                        <a href='/signup'><button className="btn btn-success me-2">Sign Up</button></a></div>
                    }
                    {
                        userIdKey != null && <div className="btn btn-danger" onClick={Logout}>Logout</div>
                    }
                    {/* <div className="mb-3">
                        <a href='/login'>Login</a>
                    </div>
                    <div className="mb-3">
                        <a href='/signup'>Signup</a>
                    </div> */}
                </div>
                <div className="mt-4">
                    <FormData />
                </div>
            </div>
        </div>
    )
}
export default Home;