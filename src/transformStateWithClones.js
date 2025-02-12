'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let stateCopy = { ...state };
  const ObjectChangesHistory = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        stateCopy = Object.assign(stateCopy, action.extraData);
        break;

      case 'removeProperties':
        for (const removedProperty of action.keysToRemove) {
          delete stateCopy[removedProperty];
        }
        break;

      case 'clear':
        stateCopy = {};
        break;

      default:
        continue;
    }
    ObjectChangesHistory.push({ ...stateCopy });
  }

  return ObjectChangesHistory;
}

module.exports = transformStateWithClones;
