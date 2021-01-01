import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './assets/main.css';

/* */

import FullWeb from './views/FullWeb.js';

render(
  <FullWeb />,
  document.getElementById('root'),
);

serviceWorker.unregister();
