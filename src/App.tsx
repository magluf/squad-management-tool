import React from "react";
import Layout from "./components/Layout/Layout";
import Dashboard from "./containers/Dashboard/Dashboard";

const App = () => {
  return (
    <Layout>
      <>
        <Dashboard />
      </>
    </Layout>
  );
};

export default App;
