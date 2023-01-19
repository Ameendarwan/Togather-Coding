import AppRoutes from "routes/appRoutes";
import { Provider } from "react-redux";
import { store } from "redux/storeConfig/store";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
