import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from 'src/components/App'
import AppLoader from 'src/containers/AppLoader'
import { actions as app } from 'src/services/app'

const mapStateToProps = (state) => ({
  appState: state.getIn(['app', 'state']),
})

class AppContainer extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    dispatch(app.loadInitialData());
  }
  render() {
    return (
      <App>
        <AppLoader />
        {this.props.appState === 'loaded' && this.props.children}
      </App>
    )
  }
}

export default withRouter(connect(mapStateToProps)(AppContainer))
