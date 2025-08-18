import axios from "axios";
import Footer from "../Shared/Footer"
import Header from "../Shared/Header"
import { useState } from "react";

function Products() {
    let [productData, setProductData] = useState({});
    let [userData, setUserData] = useState([]);

    async function getSingleProductData() {
        let apiResponse = await axios.get('https://dummyjson.com/products/2');
        setProductData(apiResponse.data);
    }

    async function getAllusers() {
        let apiResponse = await axios.get('https://dummyjson.com/users');
        setUserData(apiResponse.data.users);
        //console.log(apiResponse);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-12">
                    <button className="btn btn-primary" onClick={event => getSingleProductData()}>Single Product Data</button>
                </div>
                <div className="col-12">
                    {
                        Object.keys(productData).length > 0 &&
                        <div>
                            <div>Price: {productData.price}</div>
                            <div>Rating: {productData.rating}</div>
                            <div>
                                {
                                    (productData?.images || []).map((image, index) => (
                                        <img key={index} src={image} alt="" width="300px" />
                                    ))
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-12">
                    <button className="btn btn-primary" onClick={users => getAllusers()}>Get Users</button>
                </div>
                <div className="col-12">
                    {
                        Object.keys(userData).length > 0 &&
                        <div className="col-12 mt-3 mb-3">
                            <table className="table table-bordered border-primary">
                                <thead>
                                    <tr>
                                        <th className="text-center">First Name</th>
                                        <th className="text-center">Last Name</th>
                                        <th className="text-center">Age</th>
                                        <th className="text-center">Designation</th>
                                        <th className="text-center">Company Address</th>
                                        <th className="text-center">Role</th>
                                        <th className="text-center">Phone Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        userData.map((user) => (
                                            <tr key={user.id}>
                                                <td className="text-center">{user.firstName}</td>
                                                <td className="text-center">{user.lastName}</td>
                                                <td  className="text-center">{user.age}</td>
                                                <td className="text-center">{user.company.department}</td>
                                                <td className="text-center">{user.address.city}</td>
                                                <td className="text-center">{user.role}</td>
                                                <td className="text-center">{user.phone}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                    }
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Products