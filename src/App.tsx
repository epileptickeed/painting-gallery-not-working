import stylesDark from './App.module.scss';
import Home from './pages/Home';

function App() {
  return (
    <div className={stylesDark.main_wrapper}>
      <Home />
    </div>
  );
}

export default App;
