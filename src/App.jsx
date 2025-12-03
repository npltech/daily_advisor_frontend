import './App.css'
import Loader from './components/Loader';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className='h-full'>
      <Loader />
      <AppRoutes />
    </div>
  );
}

export default App;

