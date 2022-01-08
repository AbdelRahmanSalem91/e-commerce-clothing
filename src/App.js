import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";
import SigninSignupPage from "./pages/signin-signup-page/signin-signup-page";
import Header from "./components/header/Header";
import React from "react";
import { auth, createUser } from "./firebase/Firebase.util";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = { currentUser: null };
  // }

  unsubscribeAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUser(userAuth);
        onSnapshot(userRef, (snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SigninSignupPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (user) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
