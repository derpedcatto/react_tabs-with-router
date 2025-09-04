import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { Root } from './Root';

// Based on comment - 'Also requires <html class="has-navbar-fixed-top">'
document.documentElement.classList.add('has-navbar-fixed-top');

createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Root />
  </Router>,
);
