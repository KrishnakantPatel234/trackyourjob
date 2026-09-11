import { createRoot } from 'react-dom/client';
import './index.css';
import AppRoutes from './routes/AppRoutes.jsx';
import { Provider } from 'react-redux';
import { store } from './app/Store.jsx';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
      <ToastContainer position="top-center" autoClose={3000} />
    </QueryClientProvider>
  </Provider>
);

