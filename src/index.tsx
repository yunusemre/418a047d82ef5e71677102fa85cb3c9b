import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// react 18 has error use-ing useEffect
// <React.StrictMode>
//  <App />
// </React.StrictMode>;
root.render(<App />);
reportWebVitals();
