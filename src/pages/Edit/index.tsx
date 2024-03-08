import { FormEvent, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import style from "./edit.module.css";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Box from "../../components/Box";
import { getRoute } from "../../routes";
import { getState, saveState } from "../../utils/LocalStorage";
import { getTaskFromList } from "../Home";

function Edit() {
  const { id } = useParams<string>();
  const navigate = useNavigate();

  // STATES
  let allTasks = getState();
  const task = getTaskFromList(parseInt(String(id)), allTasks);
  const [title, setTitle] = useState(task.title);

  // useEffect(() => setTitle(task.title), []);

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();

    allTasks[allTasks.indexOf(task)].title = title;
    saveState(allTasks);

    navigate(getRoute("home"));
  };

  const handleNavigation = () => {
    if (window.confirm("Discard changes?")) navigate(getRoute("home"));
  };

  return (
    <div className={style["edit-page"]}>
      <Box border={true}>
        <form onSubmit={handleEdit} style={{ width: "100%" }}>
          <Input
            label="Task Title"
            placeholder="Productive Task"
            value={title}
            onChange={(title) => setTitle(title)}
            required={true}
          />
          <br />
          <Button type="submit" variant="success">
            Save Changes
          </Button>
          <Button type="button" onClick={handleNavigation}>
            Go Back
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Edit;
