import React, { cloneElement, Component, Children } from 'react'
import { connect } from 'react-redux'
import omit from 'lodash/omit'

class App extends Component {
    render() {
        const { props } = this
        const noform = omit(props, 'form')
        return(
            <div className="main">
                {Children.map(this.props.children, (child) => {
                    return cloneElement(child, { ...noform })
                })}
            </div>
        )
    }
}


export default connect(state => state)(App)
