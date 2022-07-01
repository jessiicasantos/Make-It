// import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Make it!</h1>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to='/'>Home</Link> |{' '}
        <Link to='/products'>Produtos</Link> | {' '}
        <Link to='/trends'>Trends</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
