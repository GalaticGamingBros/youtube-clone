const searchResults = (props) => {
  return (
    <div>
      {props.thumbnailsArr.length < 1
        ? "No search results yet!"
        : props.thumbnailsArr}
    </div>
  );
};

export default searchResults;
