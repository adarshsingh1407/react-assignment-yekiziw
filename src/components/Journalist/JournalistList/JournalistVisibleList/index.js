import React from "react";
import PropTypes from "prop-types";
import JournalistCard from "./JournalistCard";

function JournalistVisibleList(props) {
  const { journalists = [] } = props;
  return (
    <div className="row">
      <div className="col-12">
        {journalists.map((journalist) => {
          return <JournalistCard journalist={journalist} />;
        })}
      </div>
    </div>
  );
}

JournalistVisibleList.propTypes = {};

export default JournalistVisibleList;
