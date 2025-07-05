function ForgotPassword(){
    return(
        <div className="container">
            <h3 className="text-warning text-center mt-3">Forgot Password</h3>
            <form className="mt-3">
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" placeholder="Email"></input>
                </div>
                <div className="mb-3">
                    <button className="btn btn-warning">Reset Password</button>
                </div>
                <div className="mb-3">
                    <a href='/login'>Login</a>
                </div>
            </form>
        </div>
    )
}
export default ForgotPassword;