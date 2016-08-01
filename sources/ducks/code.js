// Actions
const SET_CURRENT = 'iot-frontend/code/SET_CURRENT';

var initial = {
  current: `local log    = require("log")
local server = require("http.server")
local json   = require("json")
local config = require("config")

local devices_mock = {
   {
      id       = "fe80::5054:ff:fecb:288c",
      lastSeen = 666,
      caps     = {
         "tempterature"
      }
   }
}

local function json_response(body, code)
   return {
      status  = code or 200,
      headers = { ["content-type"] = "application/json; charset=utf8" },
      body    = json.encode(body),
   }
end

local function get_devices(request)
   return json_response(devices_mock, 200)
end

local function main()
   local server = server.new(
      config.http.addr,
      config.http.port
   )

   server:route(
      { path = "/api/devices" },
      get_devices
   )

   server:start()
end

main()`
}

// Reducer
export default function reducer(state = initial, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload.code
      }
    default: return state;
  }
}

// Action Creators
export function setCurrent(code) {
  return { type: SET_CURRENT, payload: {code} };
}

export const submit = () => (dispatch, getState) => {
  fetch('/api/apps', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Code',
      code: getState().code.current
    })
  })
    .then(res => res.json())
    .then(console.log.bind(console));
}
