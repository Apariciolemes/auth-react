import Routes from './routes';
import { ToastContainer } from 'react-toastify';
export function App() {
  return (
    <>
      <ToastContainer toastClassName="sucess" />
      <Routes />
    </>
  );
}

