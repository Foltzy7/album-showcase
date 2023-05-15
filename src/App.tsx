import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import ErrorBoundary from "./pages/errors/error-boundary";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { store } from "./store/store";
import About from "./pages/about";
import Header from "./components/layout/header";
import Page from "./components/page/page";
import { RecoilRoot } from "recoil";
import Aspirations from "./pages/aspirations";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="parallax1">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-12">
            <BrowserRouter basename="/">
              <RecoilRoot>
                <ErrorBoundary>
                  <Provider store={store}>
                    <div>
                      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                      <Switch>
                        <Route path="/about">
                          <Page name="about">
                            <Header />
                            <About />
                          </Page>
                        </Route>
                        <Route path="/aspirations">
                          <Page name="aspirations">
                            <Header />
                            <Aspirations />
                          </Page>
                        </Route>
                        <Route path="/">
                          <Page name="home">
                            <Header />
                            <Home />
                          </Page>
                        </Route>
                      </Switch>
                    </div>
                  </Provider>
                </ErrorBoundary>
              </RecoilRoot>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
