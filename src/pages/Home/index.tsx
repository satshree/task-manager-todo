import { Link } from "react-router-dom";

import { getRoute } from "../../routes";

function Home() {
  return (
    <div>
      Home
      <br />
      <Link to={getRoute("components")}>Go to components</Link>
    </div>
  );
}

export default Home;
