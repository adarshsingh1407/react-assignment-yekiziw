import React from "react";
import PropTypes from "prop-types";
import ListValuesRenderer from "../../../common/ListValuesRenderer";

function JournalistCard(props) {
  const { journalist = {} } = props;
  return (
    <div className="row my-3">
      <div className="col-12 card journalist-card">
        <div className="row my-3">
          <div className="col-md-3">
            <div className="text-center">
              <img
                className="avatar img-fluid"
                src={journalist.imageUrl}
                alt={journalist.name}
              />
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-12 fs-2 fw-bold text-center text-md-left">
                {journalist.name}
              </div>
            </div>
            <div className="row">
              <ListValuesRenderer
                label="Locations"
                list={journalist.locations}
                propertyKey="name"
              />
              <ListValuesRenderer
                label="Publications"
                list={journalist.publications}
                propertyKey="name"
              />
              <ListValuesRenderer
                label="Interests"
                list={journalist.interests}
                propertyKey="name"
              />
              <div className="col-12">
                <span className="fw-bold">Rating:</span>
                <span className="ps-1">{journalist.wizikeyRating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

JournalistCard.propTypes = {};

export default JournalistCard;
