import React from "react";
import Layout from "@component/components/layouts/layout";

const WhoWeAre: React.FC = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <h1 className="text-center">Who We Are</h1>
      </div>
    </Layout>
  );
};

export default WhoWeAre;
