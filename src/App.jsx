import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import FriendsList from "./components/FriendsList";
import LoginForm from "./components/LoginForm";
import AddFriend from "./components/AddFriend";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/friends/add" component={AddFriend} />
          <PrivateRoute path="/friends" component={FriendsList} />
          <PrivateRoute path="/" component={FriendsList} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
