import * as React from 'react'
import Themer, { theme } from './theme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Auth, Login, Register, ResetPassword, Binding } from './pages'

const App = () => (
    <Themer theme={theme}>
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Auth} path="/auth" />
                <Route component={Register} path="/register" />
                <Route component={ResetPassword} path="/reset-password" />
                <Route component={Binding} path="/binding" />
            </Switch>
        </Router>
    </Themer>
)


export default App