import React from "react";
import { Route, Switch } from "react-router-dom";
import Invoice from "./Pages/Dashboard/Invoice";

import Ledger from "./Pages/Dashboard/Ledger/Ledger";
import Settings from "./Pages/Dashboard/Settings";

function Routes() {
  return (
    <Switch>
      <Route path="/ledger" exact component={Ledger} />
      <Route path="/Settings" exact component={Settings} />
      <Route path="/invoice" exact component={Invoice} />
    </Switch>
  );
}

export default Routes;
