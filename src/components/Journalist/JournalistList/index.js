import React from "react";
import PropTypes from "prop-types";
import JournalistSearchAndSort from "./JournalistSearchAndSort";
import JournalistVisibleList from "./JournalistVisibleList";

function JournalistList(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <JournalistSearchAndSort />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <JournalistVisibleList />
        </div>
      </div>
    </div>
  );
}

JournalistList.propTypes = {};

export default JournalistList;
