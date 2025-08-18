import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { useState } from "react";

function ProfileUpdate(){

    let [profileFile, setProfileFile] = useState("");
    let [fileTypeError, setfileTypeError] = useState("");
    let [filesize, setFileSize] = useState("");

    function handleFileChange(fileUpload){
        setProfileFile(fileUpload.target.files[0]);
    }

    function uploadFile(){
        let filename = profileFile.name;
        let fileArray = filename.split(".");
        let extension = fileArray[fileArray.length - 1]
        console.log(extension);

        if(extension === "png" || extension === "jpg" || extension === "jpeg"){
            setfileTypeError("");
        }else{
            setfileTypeError(extension + " is not allowed");
        }

        let fileSize = profileFile.size;
        if (fileSize <= 2097152){
            setFileSize("no errors");
        }else{
            setFileSize("max 1 MB only");
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header/>
                </div>
                <div className="col-12 mt-5 mb-5">
                    <h3>Upload File</h3>
                    <div>
                        <input className="form-control" type="file" onChange={event => handleFileChange(event)}/>
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary" onClick={event => uploadFile()}>File Upload</button>
                    </div>
                    <div className="mt-2 text-danger">
                        {
                            fileTypeError
                        }
                        {
                            filesize
                        }
                    </div>
                </div>
                <div className="col-12">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default ProfileUpdate;