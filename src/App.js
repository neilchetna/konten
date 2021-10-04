import Signup from "./Components/Signup";
import Ledger from "./Components/Ledger";
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
