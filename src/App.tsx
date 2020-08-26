import React from "react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AppRoutes from "./App.routes";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
