import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Posts from "./components/Posts";
import PostItem from "./components/PostItem";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Posts} />
            <Route path="/post/:id" component={PostItem} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
