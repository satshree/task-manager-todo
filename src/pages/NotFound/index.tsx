import Box from "../../components/Box";
import LinkButton from "../../components/Button/LinkButton";
import { getRoute } from "../../routes";

function NotFound() {
  return (
    <Box center={true} style={{ flexDirection: "column" }}>
      <div style={{ fontSize: "28px" }}>Page Not Found</div>
      <br />
      <br />
      <LinkButton to={getRoute("home")}>Home</LinkButton>
    </Box>
  );
}

export default NotFound;
