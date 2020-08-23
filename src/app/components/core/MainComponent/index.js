import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const MainComponent = ({ children }) => {
  return (
    <main className="main-component">
      <div className="main-component__content">
        <div className="main-component__logo" />
        {children}
      </div>
    </main>
  );
};

MainComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainComponent;
