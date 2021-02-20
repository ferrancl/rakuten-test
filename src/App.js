import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home, Detail } from './pages'
import { ErrorMessage } from './containers/'
import { useSelector } from 'react-redux'
import { errorSelector } from './selectors'
import { NOT_FOUND_ERROR } from './constants'
import { NotFound } from './pages/NotFound'

export const App = () => {

    const error = useSelector(errorSelector)

    return (
        <>
        <Navbar />
        
        {error === NOT_FOUND_ERROR? 
            <NotFound /> :
            <>
                <Switch>
                    <Route exact path="/" >
                        <Home />
                    </Route>
                    <Route exact path="/movies/:movieId" >
                        <Detail />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>

                {error && <ErrorMessage />}
            </>
        }
        
        </>
    )
}