import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';

// Based on comment - 'Also requires <html class="has-navbar-fixed-top">'
document.documentElement.classList.add('has-navbar-fixed-top');

const Root = () => (
  <Router>
    <App />
  </Router>
);

createRoot(document.getElementById('root') as HTMLElement).render(<Root />);
