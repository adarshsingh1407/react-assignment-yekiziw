import React from "react";
import PropTypes from "prop-types";

function ListValuesRenderer(props) {
  const { label = "", list = [], propertyKey = "", separator = ", " } = props;
  return (
    <div className="col-12">
      <span className="fw-bold">{label}:</span>
      <span className="ps-1">
        {list.map((l) => l[propertyKey]).join(separator)}
      </span>
    </div>
  );
}

ListValuesRenderer.propTypes = {};

export default ListValuesRenderer;
