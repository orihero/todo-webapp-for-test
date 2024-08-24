import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store";
import { withAuth } from "./hooks/withAuth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const ProtectedComponentWithAuth = withAuth(App);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ProtectedComponentWithAuth />
    </PersistGate>
  </Provider>
);
