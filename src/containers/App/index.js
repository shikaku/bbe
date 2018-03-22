import React, { Component } from 'react'
import { connect } from 'react-redux'
import App from 'src/components/App'
import { actions as appActions } from 'src/services/app'

const mapStateToProps = (state) => ({
  appState: state.app_state,
})

class AppContainer extends Component {
  constructor(props) {
    super(props);
    props.dispatch(appActions.init());
  }
  render() {
    const { children, appState } = this.props;
    return appState === 'loaded' ? children : null
  }
}

export default connect(mapStateToProps)(AppContainer)
