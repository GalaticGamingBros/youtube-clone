import { Modal } from "react-bootstrap";
import "./SearchResults.scss";

const searchResults = (props) => {
  return (
    <div>
      <div className="search-results-containter">
        <div
          className={
            props.thumbnailsArr.length < 1 ? "no-search-results" : "showResults"
          }
        >
          {props.thumbnailsArr.length < 1 || props.thumbnailsArr === ""
            ? "No search results yet!"
            : props.thumbnailsArr}
        </div>
      </div>
      {props.errors ? (
        <Modal show={props.isOpen} onHide={props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>ERROR CODE: 400</Modal.Title>
          </Modal.Header>
          <Modal.Body>something went wrong</Modal.Body>
        </Modal>
      ) : null}
    </div>
  );
};

export default searchResults;
