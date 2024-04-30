import React from "react";

const FullPage = () => {
  return (
    // Added return here
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      sectionsColor={["#7fff00", "#00ffff", "#29ab87"]} // Corrected property name
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi);

        return (
          <React.Fragment>
            <div className="section">
              <h3>Section 1</h3>
            </div>
            <div className="section">
              <h3>Section 2</h3>
            </div>
            <div className="section">
              <h3>Section 3</h3>
            </div>
          </React.Fragment>
        );
      }}
    />
  );
};

export default FullPage;
