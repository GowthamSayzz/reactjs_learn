import { useEffect, useState } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import axios from "axios";
import PostDetails from "./PostDetails";

function PostsList() {
    let [noOfPosts, setNoofPosts] = useState([]);

    useEffect(() => {

        async function getAllPosts() {
            let apiResponse = await axios.get('https://dummyjson.com/posts');
            let allPostData = apiResponse.data.posts.map(allposts => {
                return allposts;
            })
            setNoofPosts(allPostData);
            console.log(allPostData);
        }
        getAllPosts();
    }, [])

    let [title, setTitle] = useState("");
    let [views, setViews] = useState("");
    let [tags, setTags] = useState("");

    async function handleEdit(noOfPosts) {
        setTitle(noOfPosts.title);
        setViews(noOfPosts.views);
        setTags(noOfPosts.tags[0]);
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
                <div className="row mt-5 mb-5">
                    <div>
                        <h4>Total Posts: {noOfPosts.length}</h4>
                    </div>
                    {
                        noOfPosts.map(allPosts => {
                            return <PostDetails key={allPosts.id} allPosts={allPosts} />
                        })
                    }
                </div>
                <div className="col-8 mb-5">
                    <table className="table table-striped table-bordered border-secondary table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">Title</th>
                                <th className="text-center">Views</th>
                                <th className="text-center">Tags</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                noOfPosts.map(noOfPosts => (
                                    <tr key={noOfPosts.id}>
                                        <td className="text-center">{noOfPosts.title}</td>
                                        <td className="text-center">{noOfPosts.views}</td>
                                        <td className="text-center">{noOfPosts.tags[0]}</td>
                                        <td>
                                            <button className="btn btn-primary m-2 bi bi-pencil" onClick={e => handleEdit(noOfPosts)}></button>
                                            <button className="btn btn-danger m-2 bi bi-trash"></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-4">
                    <div className="mb-3">
                        <label>Title</label>
                        <input type="text" placeholder="Title" className="form-control" value={title} ></input>
                    </div>
                    <div className="mb-3">
                        <label>Views</label>
                        <input type="text" placeholder="Views" className="form-control" value={views}></input>
                    </div>
                    <div className="mb-3">
                        <label>Tags</label>
                        <input type="text" placeholder="Tags" className="form-control" value={tags}></input>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-warning">Update</button>
                    </div>
                </div>
                <div className="col-12">
                    <Footer />
                </div>
            </div>

        </div>
    )

}
export default PostsList;