import "./DisplayCurrentUser.scss";

const displayCurrentUser = (props) => {
  return (
    <div className="currentUserContainer">
      {props.isLoggedIn ? (
        <p>
          Currently Logged In As:{" "}
          <strong className="currentUsersName">
            {props.currentUser.username}
          </strong>
        </p>
      ) : null}
    </div>
  );
};

export default displayCurrentUser;
