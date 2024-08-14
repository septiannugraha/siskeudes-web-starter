import Login from './components/Login';
import OfflineStorage from './components/OfflineStorage';

export default function Home() {
  return (
    <main className='flex flex-col h-12 bg-green-300 items-center'>
      <h1>Siskeudes Web Starter</h1>
      {/* <OfflineStorage /> */}
      <Login/>
    </main>
  );
}
