import React from "react";
import { Route } from "react-router";

const Welcome = props => {

    return (
        <section>
            <h1>The welcome page</h1>
            <Route path="/welcome/new-user">
                <h1>Welcome new user</h1>
            </Route>
        </section>
    );
}

export default Welcome;