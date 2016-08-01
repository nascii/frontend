// Actions
const SET = 'iot-frontend/appState/SET';
const SET_CODE_ID = 'iot-frontend/appState/SET_CODE_ID';

const initialState = {
  modeId: 'network',
  appId: 'new'
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case SET:
      return {
        ...state,
        modeId: action.payload.id
      }
    case SET_CODE_ID:
      return {
        ...state,
        appId: action.payload.id
      }
    default: return state;
  }
}

// Action Creators
export function setAppMode(id) {
  return { type: SET, payload: {id} };
}

export function setCodeId(id) {
  return { type: SET_CODE_ID, payload: {id} };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}
