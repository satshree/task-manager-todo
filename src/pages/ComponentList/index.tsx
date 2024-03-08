import Box from "../../components/Box";
import Button from "../../components/Button";
import LinkButton from "../../components/Button/LinkButton";
import Label from "../../components/Label";
import Link from "../../components/Link";
import SmallLabel from "../../components/SmallLabel";
import List from "../../components/Task/List";
import Title from "../../components/Title";

import style from "./style.module.css";

function ComponentList() {
  const toDoSample = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
  ];

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
        <LinkButton to="/">Link Button to Home</LinkButton>
      </Box>
      <Box center={true} style={{ flexDirection: "column" }}>
        <Link to="/">This is a Link (to Home)</Link>
        <br />
        <Link to="https://apple.com" target="_blank">
          This is a Link (to External Page)
        </Link>
      </Box>
      <Box>
        <Label>This is a just a box</Label>
      </Box>
      <Box border={true}>
        <Label>This is a border box</Label>
      </Box>
      <Box center={true} border={true}>
        <Label>This is a border box centered</Label>
      </Box>

      <List toDoList={toDoSample} />
    </div>
  );
}

export default ComponentList;
