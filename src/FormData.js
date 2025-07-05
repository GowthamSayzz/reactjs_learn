import { useState } from "react";

export function FormData() {

    var [courses, setCourses] = useState("");
    var [gender, setGender] = useState("");

    var [avatar, setAvatar] = useState(false);
    var [avengers, setAvengers] = useState(false);
    var [loki, setLoki] = useState(false);

    function handleCourses(e){
        setCourses(e.target.value);
    }

    function handleGender(e){
        setGender(e.target.value);
    }

    function handleAvatar(e){
        if(e.target.checked === true){
            setAvatar(true);
        }else{
            setAvatar(false);
        }
    }

    function handleAvengers(e){
        if(e.target.checked === true){
            setAvengers(true);
        }else{
            setAvengers(false);
        }
    }

    function handleLoki(e){
        if(e.target.checked === true){
            setLoki(true);
        }else{
            setLoki(false);
        }
    }



    return (
        <div className="container form-control rounded-1 border-1">
            <div className="row">
                <div className="col-3">
                    <h3 className="text-success text-start mt-2"> Form Data </h3>
                    <div>
                        <label className="mt-3">Courses</label>
                    </div>
                    <div>
                        <select className="form-select" onChange={event => handleCourses(event)}>
                            <option>Open this select menu</option>
                            <option>ReactJS</option>
                            <option>AngularJS</option>
                            <option>JavaScript</option>
                        </select>
                    </div>
                    <div className="mt-5">
                        <label className="form-label">Gender</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="Male" onChange={event=>handleGender(event)} />
                        <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="Female" onChange={event=>handleGender(event)} />
                        <label className="form-check-label">Female</label>
                    </div>
                    <div className="mt-5">
                        <label className="form-label me-3">Favourite Movies</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Avatar" onChange={event => handleAvatar(event)} />
                        <label className="form-check-label">Avatar 2</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Avengers" onChange={event => handleAvengers(event)} />
                        <label className="form-check-label">Avengers</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Loki" onChange={event => handleLoki(event)} />
                        <label className="form-check-label">Loki</label>
                    </div>
                </div>
                <div className="mt-3">
                    Course: {courses} <br/>
                    Gender: {gender} <br/>
                    Avatar: {avatar.toString()} <br/>
                    Avengers: {avengers.toString()} <br/>
                    Loki: {loki.toString()} <br/>
                </div>
            </div>
        </div>
    )
}