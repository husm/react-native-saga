import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';

class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { state, actions } = this.props;
    return (
      <Counter
        counter={state.count}
        {...actions}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(counterActions, dispatch)
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
