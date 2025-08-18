import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function UsersList() {
    let [users, setUsers] = useState([]);
    let searchText = "";
    let [usersData, setUsersData] = useState([]);

    useEffect(() => {
        async function getUsers() {
            /**
             * 1.1 Using Map Function, Table Data Has Been Displayed On Screen
             */
            let apiResponse = await axios.get('https://dummyjson.com/users');
            setUsers(apiResponse.data.users);
            setUsersData(apiResponse.data.users);
        }
        getUsers();
    }, [])

    function searchFilter(data) {
        searchText = data.target.value;
        let tempData = usersData.filter(user => {
            return user.firstName.toLowerCase().includes(searchText.toLowerCase())
        });
        setUsers(tempData);
    }

    function handleSorting(){
        let tempData = users.sort((user1, user2)=>{
            if(user1.firstName.toLowerCase() > user2.firstName.toLowerCase()){
                return -1
            }else{
                return 1
            }
        })
        setUsers([...tempData])
        let tempData1 = users.sort((user1, user2)=>{
            if(user1.gender.toLowerCase() > user2.gender.toLowerCase()){
                return -1
            }else{
                return 1
            }
        })
        setUsers([...tempData1])
        let tempData2 = users.sort((user1, user2)=>{
            if(user1.email.toLowerCase() > user2.email.toLowerCase()){
                return -1
            }else{
                return 1
            }
        })
        setUsers([...tempData2])
    }

    return (
        <div className="container">
            <div className="col-12">
                <Header />
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-3">
                    <input type="text" placeholder="Search by name :)" className="form-control" onChange={search => searchFilter(search)}></input>
                </div>
                <div className="col-12 mt-3">

                    {/* ###----- 1.1 Table Data Alligned & Displayed Using Map Functions -----### */}

                    <table className="table table-striped table-bordered border-secondary table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">UserId</th>
                                <th className="text-center" onClick={sorting => handleSorting()}>Name</th>
                                <th className="text-center" onClick={sorting => handleSorting()}>Email</th>
                                <th className="text-center" onClick={sorting => handleSorting()}>Gender</th>
                                <th className="text-center">Birth Date</th>
                                <th className="text-center">Age</th>
                                <th className="text-center">Role</th>
                                <th className="text-center">Bank Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => (
                                    <tr key={user.id}>
                                        <td className="text-center">{user.id}</td>
                                        <td className="text-center">{user.firstName} {user.lastName}</td>
                                        <td className="text-center">{user.email}</td>
                                        <td className="text-center">{user.gender}</td>
                                        <td className="text-center">{user.birthDate}</td>
                                        <td className="text-center">{user.age}</td>
                                        <td className="text-center">{user.role.toUpperCase()}</td>
                                        <td className="text-center">{user.bank.cardNumber}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-12">
                <Footer />
            </div>
        </div>
    )
}

export default UsersList;