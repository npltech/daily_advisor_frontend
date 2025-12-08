import { useSelector } from 'react-redux';
import './App.css'
import Loader from './components/Loader';
import AppRoutes from './routes/AppRoutes';

function App() {
  const isLoading = useSelector((state) => state.loader.isLoading);

  return (
    <div className='h-full'>
      {isLoading && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-[9999]">
        <Loader />
      </div>}      
      <AppRoutes />
    </div>
  );
}

export default App;

