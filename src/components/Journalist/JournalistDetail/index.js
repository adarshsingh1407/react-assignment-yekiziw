import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function JournalistDetail(props) {
  const { id } = useParams();
  return <div>JournalistDetail: {id}</div>;
}

JournalistDetail.propTypes = {};

export default JournalistDetail;
