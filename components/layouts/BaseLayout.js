import React, { Children } from "react";
import Header from "../shared/Header";

const BaseLayout = props => {
  const { className, Children } = props;
  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${className}`}>
        <div className="wrapper">{Children}</div>
      </main>
    </div>
  );
};
export default BaseLayout;
