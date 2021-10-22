const getPosts = async () => {
    try {
        const response = await fetch("https://localhost:5001/posts");
        return await response.json();
    } catch (error) {
        console.log("Oh no, it went wrong", error)
        throw error;
    } finally {
        console.log("Request finished")
    }
}

const makePost = async (inputs) => {
    try {
        const response = await fetch("https://localhost:5001/posts/create", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        })
        return await response;
    } catch (error) {
        console.log("Oh no, it went wrong", error)
        throw error;
    } finally {
        console.log("Post Request finished")
    }
}

const deletePost = async (id) => {
    try {
        const response = await fetch(`https://localhost:5001/posts/${id}`, {
            method: "DELETE",
        })
        console.log(response)
        return await response;
    } catch (error) {
        console.log("Oh no, it went wrong", error)
        throw error;
    }
}

export { getPosts, makePost, deletePost }