import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/counter';
// import * as counterActions from '../actions/counterActions';
import * as counterActions from '../actions';

class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    console.log('render==========>', this.props);
    return (
      <Counter
        count={state.counter.count}
        apiMsg={state.apiTester.apiMsg}
        {...actions}
      />
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps===========>', state);
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps=========>', counterActions.actions);
  return {
    actions: bindActionCreators(counterActions.actions, dispatch)
    // actions: bindActionCreators(counterActions, dispatch)
  };
}

// export default connect(state => ({
//     state: state.counter
//   }),
//   (dispatch) => ({
//     actions: bindActionCreators(counterActions, dispatch)
//   })
// )(CounterApp);

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
