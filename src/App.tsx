import React from "react";
import Layout from "./components/Layout/Layout";
import venturusLogo from "./assets/images/venturus-logo.svg";

const App = () => {
  return (
    <Layout>
      <>
        <div style={{ height: "80px", margin: "180px 0" }}>
          <img src={venturusLogo} alt="Venturus" />
        </div>
      </>
    </Layout>
  );
};

export default App;
