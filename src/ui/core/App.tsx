import React  from 'react';
import { CoreAppShell } from 'poc-core-system';

import { useLoadExtensions } from './useLoadExtensions';

function App() {
  const { ready } = useLoadExtensions();

  return ready ? <CoreAppShell /> : <p>Loading...</p>;
}


export default App;
