import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/Sidebar/Sidebar.css';
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Products from './pages/Products/Products';
import Trends from './pages/Trends';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />}/>
        <Route path='trends' element={<Trends />} />
        <Route 
          path='*'
          element={
            <section style={{ padding: "1rem" }}>
              <p>Não há nada aqui!</p>
            </section>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
  
  // old v1
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();