import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

const Hats = () => {
  return <div>HaaaaaaaaTs</div>;
};

function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hats} />
      </div>
    </Switch>
  );
}

export default App;
