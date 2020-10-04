import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
// import UnauthedRoute from "../util/UnauthedRoute";
// import AuthedRoute from "../util/AuthedRoute";
// import login from "./login";
// import signup from "./signup";
// import page404 from "./404";
// import Dragpage from "./dragpage";
// import home from "./mainpage";
import axios from "axios";
import Dashboard from "./dashboard";
import PatientList from "./patientlist";
import FormPage from "./login";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Shedule from "./shedule";
import AddPatient from "./addPatients";
 // import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Builder from "./dragappv2";

/* Core CSS required for Ionic components to work properly */
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const user = localStorage.getItem("token");

    if (user) {
      config.headers['Authorization'] = `Bearer ${user}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

localStorage.setItem("historyIndex", -1);



const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/patientlist' component={PatientList} />
      <Route path='/login' component={FormPage} />
      <Route path='/shedule' component={Shedule} />
      <Route path='/addpatient' component={AddPatient} />
      {/* <UnauthedRoute path="/login" component={login} />
      <UnauthedRoute path="/signup" component={signup} />
      ///unauthorized routes //auth routes
      <AuthedRoute path="/home" component={home} />
      <AuthedRoute path="/app/:id" component={Dragpage} />
      <AuthedRoute path="/builder" component={Builder} />
      <UnauthedRoute path="*" component={page404} /> */}
    </Switch>
  </Router>
);

export default App;
