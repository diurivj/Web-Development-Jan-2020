import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import CreateProject from "./pages/CreateProject";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// const Home = () => <h1>Home</h1>;
// const Project = () => <h1>Project</h1>;
// const ProjectCreate = () => <h1>Create project</h1>;
const ProjectEdit = () => <h1>Update project</h1>;
// const Login = () => <h1>Login</h1>;
// const Signup = () => <h1>Signup</h1>;

const router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/project/create" component={CreateProject} exact />
        <Route path="/project/:projectId" component={Project} exact />
        <Route path="/project/edit/:projectId" component={ProjectEdit} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default router;
