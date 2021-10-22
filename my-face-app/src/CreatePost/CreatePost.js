import React, {useState} from "react";
import moment from "moment";
import './CreatePost.scss'
import { makePost} from "../apiRepo/postsRepo";

const CreatePost = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        // const userId = event.target.userId;
        // const message = event.target.Message;
        // const imageUrl = event.target.ImageUrl;
        // const time = moment(new Date()).format();
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        // alert(`UserId: ${inputs.UserId}. Message: ${inputs.Message} ImageUrl: ${inputs.ImageUrl}`)
        makePost(inputs)
    }


    return (
        <div className="post-form-container">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Create a New Post</legend>
                    <label htmlFor="userId">User Id</label><br/>
                    <input type="number"
                           id="userId"
                           name="UserId"
                           alt="user id input box"
                           value={inputs.UserId}
                           onChange={handleChange}
                    /><br/>

                    <label htmlFor="userMessage">Input Message</label><br/>
                    <textarea id="userMessage"
                              name="Message"
                              value={inputs.Message}
                              onChange={handleChange}
                    /><br/>

                    <label htmlFor="imageUrl">Input Image Url</label><br/>
                    <div className={"image-url-input"}>
                        <input id="imageUrl-image"
                               type="text"
                               name="ImageUrl"
                               value={inputs.ImageUrl}
                               onChange={handleChange}/><br/>
                        <input type="submit" value={"Submit"}/>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default CreatePost