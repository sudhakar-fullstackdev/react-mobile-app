import { AppProvider } from './context/AppContext';
import TransferFlow from './pages/TransferFlow/TransferFlow';

function App() {
  return (
    <AppProvider>
      <TransferFlow/>   
    </AppProvider>
  );
}

export default App;
