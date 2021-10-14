import Signup from "./Components/Pages/SIgnup/Signup";
import Ledger from "./Components/Pages/Dashboard/Ledger";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/ledger" component={Ledger} />
      </Switch>
    </Router>
  );
}

export default App;
