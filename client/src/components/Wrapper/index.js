import React from "react";

const Wrapper = props => {
  return (
    <>
      <section className="fog">
        <div className="absolute-bg" />
        <div className="fog-container" />
        <div className="fog-img fog-img-first" />
        <div className="fog-img fog-img-first" />
        {props.children}
      </section>
    </>
  );
};

export default Wrapper;
