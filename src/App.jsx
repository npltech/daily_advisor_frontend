import './App.css'
import Loader from './components/Loader';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div>
      <Loader />
      <AppRoutes />
    </div>
  );
}

export default App;

