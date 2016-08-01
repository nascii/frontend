// Actions
const SET_CURRENT = 'iot-frontend/apps/SET_CURRENT';
const ADD = 'iot-frontend/apps/ADD';
const SET_CODE = 'iot-frontend/apps/SET_CODE';

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    // do reducer stuff
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload.code
      }
    case SET_CODE:
      let {id, code} = action.payload;
      let cur = state.filter(({id}) => id === id)[0];
      let index = state.indexOf(cur);
      let head = state.slice(0, index);
      let tail = state.slice(index + 1);
      let cur1 = {
        ...cur,
        code
      }

      return [
        ...head,
        cur1,
        ...tail
      ]
    case ADD:
      const all = state.slice(0, state.length - 1);

      return [
        ...all,
        action.payload,
        {
          id: 'new',
          name: 'New',
          code: ''
        }
      ]
    default: return state;
  }
}

// Action Creators
export function create(code) {
  return { type: SET_CURRENT, payload: {code} };
}

export function setCode(id, code) {
  return { type: SET_CODE, payload: {id, code} };
}

export function setCurrent(code) {
  return { type: SET_CURRENT, payload: {code} };
}

export function addApp(app) {
  return { type: ADD, payload: app };
}

export const submit = (id) => (dispatch, getState) => {
  if (id === 'new') {
    fetch('/api/apps', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Code',
        code: getState().apps.filter(({id}) => id === id)[0].code
      })
    })
      .then(res => res.json())
      .catch(res => ({
        id: 21027352,
        name: 'New Code',
        code: 'local new = 5'
      }))
      .then((app) => dispatch(addApp(app)));
  } else {
    fetch('/api/apps', {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        name: 'Code',
        code: getState().code.current
      })
    })
      .then(res => res.json())
      .then(console.log.bind(console));
  }
}
