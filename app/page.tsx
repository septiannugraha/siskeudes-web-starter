import ErrorBoundary from './components/ErrorBoundary';
import Login from './components/Login';
import OfflineStorage from './components/OfflineStorage';
import  useErrorBoundary from './hooks/useErrorBoundary';

export default function Home() {
  return (
    <main className='flex flex-col h-12 bg-green-300 items-center'>
      <h1>Siskeudes Web Starter</h1>

      {/* <Login/> */}
    </main>
  );
}
