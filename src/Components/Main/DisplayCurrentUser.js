import "./DisplayCurrentUser.scss";

const displayCurrentUser = (currentUser) => {
  return (
    <div className="currentUserContainer">
      {currentUser.currentUser.username ? (
        <p>
          Currently Logged In As:{" "}
          <strong className="currentUsersName">
            {currentUser.currentUser.username}
          </strong>
        </p>
      ) : null}
    </div>
  );
};

export default displayCurrentUser;
