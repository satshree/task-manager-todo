import { getRoute } from "../../routes";
import LinkButton from "../../components/Button/LinkButton";

function Home() {
  return (
    <div>
      Home
      <br />
      <br />
      <LinkButton to={getRoute("components")}>Go to components</LinkButton>
    </div>
  );
}

export default Home;
