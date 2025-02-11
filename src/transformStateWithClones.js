'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let stateObject = { ...state };
  const ObjectChangesHistory = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      stateObject = Object.assign(stateObject, action.extraData);
    } else if (action.type === 'removeProperties') {
      stateObject = { ...stateObject };

      for (const removedProperty of action.keysToRemove) {
        delete stateObject[removedProperty];
      }
    } else if (action.type === 'clear') {
      stateObject = {};
    }
    ObjectChangesHistory.push({ ...stateObject });
  }

  return ObjectChangesHistory;
}

module.exports = transformStateWithClones;
