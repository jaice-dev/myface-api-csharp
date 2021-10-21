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

export { getPosts }