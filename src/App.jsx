import './styles/App.css';
import { RootStoreContext } from './stores/root-store-context';
import RootStore from './stores/root-store.js';
import { observer } from 'mobx-react-lite';
import Wrapper from './components/Wrapper';

const App = observer(() => {
  const rootStore = new RootStore();

  return (
      <RootStoreContext.Provider value={rootStore}>
        <Wrapper />
      </RootStoreContext.Provider>
  );
});

export default App;