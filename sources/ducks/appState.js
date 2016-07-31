// Actions
const SET = 'iot-frontend/appState/SET';

const initialState = {
  modeId: 'network'
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
    default: return state;
  }
}

// Action Creators
export function setAppMode(id) {
  return { type: SET, payload: {id} };
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
