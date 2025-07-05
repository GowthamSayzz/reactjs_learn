import { FormData } from "./FormData";
function Home(){
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-12">
                    <h3 className="mb-3">ReactJS Part 2 Examples</h3>
                    <p className="mb-3 text-success">Learned React routing, how to design components, how to return a component</p>
                    <div className="mb-3">
                        <a href='/login'>Login</a>
                    </div>
                    <div className="mb-3">
                        <a href='/signup'>Signup</a>
                    </div>
                </div>
                <div>
                    <FormData />
                </div>
            </div>
        </div>
    )
}
export default Home;