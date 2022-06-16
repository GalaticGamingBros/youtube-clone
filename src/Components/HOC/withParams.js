import { useNavigationType, useParams } from "react-router-dom";

const withParams = (Component) => {
  return function (props) {
    const params = useParams();
    const navigate = useNavigationType();

    return <Component params={params} {...props} navigate={navigate} />;
  };
};

export default withParams;
