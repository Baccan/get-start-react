import React from 'react'
import { isAuthenticated } from './auth'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest} 
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
        } 
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* exact verifica se a rota possui exatamente o valor declarado em path */}
            <Route exact path="/" component={() => <h1>Hello World</h1>} />
            
            {/* tente acessar esta rota com isAuthenticated = false */}
            <PrivateRoute path="/app" component={() => <h1>Você está logado</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes