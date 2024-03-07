import Box from "../../components/Box";
import Button from "../../components/Button";
import Label from "../../components/Label";
import SmallLabel from "../../components/SmallLabel";
import Title from "../../components/Title";

import style from "./style.module.css";

function ComponentList() {
  return (
    <div className={style.page}>
      <Box center={true}>Remove this page on final submission</Box>
      <br />
      <br />
      <Title>This is a title</Title>
      <Title bold={true}>This is a bold title</Title>
      <Label>This is a Label</Label>
      <SmallLabel>This is a Small Label</SmallLabel>
      <br />
      <Box center={true}>
        <Button>Button</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
      </Box>
      <br />
      <Box>
        <Label>This is a just a box</Label>
      </Box>
      <br />
      <Box border={true}>
        <Label>This is a border box</Label>
      </Box>
      <br />
      <Box center={true} border={true}>
        <Label>This is a border box centered</Label>
      </Box>
    </div>
  );
}

export default ComponentList;
