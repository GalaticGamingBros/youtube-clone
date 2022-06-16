const searchResults = (props) => {
  return (
    <div>
      <div className="search-results-containter">
        <div
          className={
            props.thumbnailsArr.length < 1 ? "no-search-results" : "showResults"
          }
        >
          <h5>
            {props.thumbnailsArr.length < 1
              ? "No search results yet!"
              : props.thumbnailsArr}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default searchResults;
