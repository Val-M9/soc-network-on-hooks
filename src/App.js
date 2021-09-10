import { Route } from "react-router-dom";
import Header from "./components/header/Header";
import Profile from "./pages/profile/Profile";
import "./App.css";
import Users from "./pages/users/Users";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="content">
        <Route path="/profile/:userId?" render={() => <Profile />} />
        <Route path="/users" render={() => <Users />} />
      </div>
    </div>
  );
}

export default App;
