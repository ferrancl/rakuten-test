import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, Detail } from './pages'
import { ErrorMessage } from './containers/ErrorMessage'

export const App = () => {
    return (
        <>
        <Navbar />

        <Switch>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route exact path="/detail/:id" >
                <Detail />
            </Route>
        </Switch>

        <ErrorMessage />
        </>
    )
}