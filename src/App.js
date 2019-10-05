import React,{ Suspense } from 'react'
import { Route, Switch ,BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'
import { Spin } from 'antd'

function Loading({ error }) {
  if (error) {
    return 'Opps Error!!';
  } else {
    return (
      <Spin size='large'
        style={{
          width: '100%',
          margin: '60px auto'
        }} />)
  }
}

export default () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        {
          
          routes.map(({ name, path, exact = true, component }) => (
            <Route path={path} exact={exact} component={component} key={name} />
          ))
        }
      </Switch>
    </Suspense>
  </Router>
)