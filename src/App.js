import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";
import SigninSignupPage from "./pages/signin-signup-page/signin-signup-page";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
