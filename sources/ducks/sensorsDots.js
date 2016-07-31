// Actions
const LOAD = 'iot-frontend/sensorsDots/LOAD';

var dots = [
  {
    x: 200, y: 200, color: 'red'
  },
  {
    x: 400, y: 200, color: 'blue'
  }
]

// Reducer
export default function reducer(state = dots, action = {}) {
  switch (action.type) {
    default: return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function moveStart() {
  return { type: LOAD };
}
