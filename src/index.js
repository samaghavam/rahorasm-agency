import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import "react-bootstrap-submenu/dist/index.css";
import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'aos/dist/aos.css';
import './index.css';
import "cors"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider dir='rtl'>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </ThemeProvider>
);

