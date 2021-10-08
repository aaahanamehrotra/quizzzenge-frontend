import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Home from './Home/Home'
import About from './About/About'
import All from './All/All'
import NewQuiz from './NewQuiz/NewQuiz'
import Header from './Header/Header'
import AttQ from "./AttQ/AttQ"

function App() {
  return (
    <>
    <Router>
      <AuthProvider>
            <Header />
            <Switch>
              <PrivateRoute exact path="/profile" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <PrivateRoute path="/newquiz" component={NewQuiz}/>
              <Route path="/all" component={All}/>
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <PrivateRoute path="/quiz" component={AttQ} />
            </Switch>
        </AuthProvider>
    </Router>
    </>
  )
}

export default App
