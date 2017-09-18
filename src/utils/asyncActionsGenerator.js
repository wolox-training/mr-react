import { toCamelCase } from './stringParsers';

const generateAsyncTypes = (actions) => {
  return actions.reduce((obj, { type }) => {
    obj[type] = type;
    obj[`${type}_SUCCESS`] = `${type}_SUCCESS`;
    obj[`${type}_ERROR`] = `${type}_ERROR`;
    return obj;
  }, {});

}

const generateAsyncCreators = (actions, types, service) => {
  return actions.reduce((obj, value) => {
    const functionName = toCamelCase(value.type.toLowerCase());
    obj[`${functionName}Success`] = (data) => {
      return {
        type: types[`${value.type}_SUCCESS`],
        payload: { data }
      }
    }
    obj[`${functionName}Error`] = (error) => {
      return {
        type: types[`${value.type}_ERROR`],
        payload: { error }
      }
    };
    obj[functionName] = (data) => {
      return async dispatch => {
        dispatch({ type: types[value.type] });
        service[functionName](data)
          .then((response) => {
            dispatch(obj[`${functionName}Success`](response.data));
            value.dispatchActions.forEach((action) => {
              dispatch(action);
            });
          })
          .catch((error) => {
            dispatch(obj[`${functionName}Error`](error.response.data.error));
          })
      }
    };
    return obj;
  }, {});
}

const asyncActionsGenerator = {
  generateAsyncTypes,
  generateAsyncCreators
}

export default asyncActionsGenerator;
