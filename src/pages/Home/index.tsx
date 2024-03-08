import { getRoute } from "../../routes";
import Link from "../../components/Link";

function Home() {
  return (
    <div>
      Home
      <br />
      <br />
      <Link to={getRoute("components")}>Go to components</Link>
    </div>
  );
}

export default Home;
