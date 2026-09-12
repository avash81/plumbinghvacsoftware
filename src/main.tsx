/**
 * main.tsx
 * ---------------------------------------------------------
 * React DOM mounting point and global style entry.
 *
 * Data source: N/A
 * Related: index.css, App.tsx
 *
 * Guide reference: project-implementation-guide.md, Section 6.1
 * ---------------------------------------------------------
 */

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
