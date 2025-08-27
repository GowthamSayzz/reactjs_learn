import { useEffect } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import axios from "axios";

function List() {

    useEffect(() => {

        async function getMycourses() {
            let coursesAuth = {
                token: localStorage.getItem("token"),
                userId: localStorage.getItem("userId")
            }
            try {
                let coursesAuthResponse = await axios.post('https://api.softwareschool.co/courses/getPurchasedCourses', coursesAuth);
                console.log(coursesAuthResponse);
            } catch(ex) {
                console.log(ex.message)
            }
        }
        getMycourses();
    }, []);



    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
                <div className="col-12 mt-5 mb-5">
                    <h3>In Demand Courses</h3>
                </div>
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default List;