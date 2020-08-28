import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AppRoutes from "./App.routes";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
