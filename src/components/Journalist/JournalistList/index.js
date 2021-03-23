import React, { useEffect } from "react";
import PropTypes from "prop-types";
import JournalistSearchAndSort from "./JournalistSearchAndSort";
import JournalistVisibleList from "./JournalistVisibleList";

function JournalistList(props) {
  const {
    journalistList,
    fetchJournalistList,
    filterJournalistList,
    sortJournalistList,
  } = props;
  const {
    isLoading,
    errors,
    filters,
    sortBy,
    journalists,
    filteredJournalists,
  } = journalistList;

  // Fetch journalist list on load
  useEffect(() => {
    fetchJournalistList();
  }, [fetchJournalistList]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <JournalistSearchAndSort
            filters={filters}
            sortBy={sortBy}
            filterJournalistList={filterJournalistList}
            sortJournalistList={sortJournalistList}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <JournalistVisibleList journalists={filteredJournalists} />
        </div>
      </div>
    </div>
  );
}

JournalistList.propTypes = {};

export default JournalistList;
