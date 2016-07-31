import React from 'react';

import Relations from 'containers/relations';
import Devices from 'containers/Devices';
import MainMenu from 'containers/MainMenu';
import AppCode from 'containers/AppCode';

const App = ({currentModeId}) => (
  <div>
    <MainMenu/>
    {
      (function functionName(currentModeId) {
        switch (currentModeId) {
          case 'network':
            return <Relations />;
          case 'devices':
            return <Devices />;
          case 'apps':
            return <AppCode />;
          default:
            return '';
        }
      })(currentModeId)
    }
  </div>
)

export default App;
