import React, { useEffect } from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home, Detail, NotFound } from './pages'
import { ErrorContainer } from './containers/'
import { useSelector } from 'react-redux'
import { errorSelector } from './selectors'
import { ROUTES } from './constants'

export const App = () => {
    const { HOME, DETAILS, NOTFOUND } = ROUTES
    const { notFoundError } = useSelector(errorSelector)
    const history = useHistory()

    const handleGoToHome =() => history.push('/')

    useEffect(() => {
        if (notFoundError) history.push('/not-found')
    }, [notFoundError, history])

    return (
        <>
        <Navbar handleGoToHome={handleGoToHome}/>
        <Switch>
            <Route exact path={HOME} component={Home} />
            <Route exact path={DETAILS} component={Detail} />
            <Route exact path={NOTFOUND} component={NotFound} />
            <Redirect to={NOTFOUND} />
        </Switch>
        <ErrorContainer />
        </>
    )
}