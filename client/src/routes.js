import { Route, IndexRoute } from 'react-router'
import React, { Component } from 'react'
import App from './containers/App'
//You can create container of your own
class Home extends Component {
  render() {
    return(
      <div className="home">Home component ssss</div>
    )
  }
}

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
    </Route>
)

export default routes
