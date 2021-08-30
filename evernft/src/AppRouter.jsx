import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import config from "./config";
import CreateNFT from "./pages/CreateNFT";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import MainApp from "./pages/MainApp";
import Stacking from "./pages/Stacking ";
import NftDetails from "./pages/NftDetails";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={config.routes.root} component={LandingPage} exact />
        <Route path={config.routes.create} component={CreateNFT} />
        <Route path={config.routes.app} component={MainApp} />
        <Route path={config.routes.user} component={NftDetails} />
        <Route path={config.routes.staking} component={Stacking} />
        <Route path={config.routes.dashboard} component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
