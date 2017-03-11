import * as apiTesterActions from './apiTesterActions';
import * as counterActions from './counterActions';

const actions = {
  ...apiTesterActions,
  ...counterActions
};

export { actions };
