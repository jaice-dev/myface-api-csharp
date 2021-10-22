import './App.scss';
import PostsPage from "./PostsPage/PostsPage";
import NavBar from "./NavBar/NavBar";
import CreatePost from "./CreatePost/CreatePost";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
      <div className="App">
          <Router>
              <NavBar />
              <Switch>
                  <Route exact path={"/posts"}>
                      <PostsPage />
                  </Route>
                  <Route path={"/posts/create"}>
                      <CreatePost />
                  </Route>
                  <Route path={""}>
                      <div>Sorry - that page doesn't exist, try these:</div>
                      <Link to={"/posts"} className={"link"}>Posts</Link>
                      <Link to={"/posts/create"} className={"link"}>Create Post</Link>
                  </Route>
              </Switch>
          </Router>
      </div>

    // <div className="App">
    //     <NavBar />
    //     <CreatePost />
    // </div>
  );
}

export default App;
