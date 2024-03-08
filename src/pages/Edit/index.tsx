import { FormEvent, useEffect, useState } from "react";
import {
  useParams,
  useSearchParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { getTask } from "../../utils";

import style from "./edit.module.css";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Box from "../../components/Box";
import { getRoute } from "../../routes";

function Edit() {
  const { id } = useParams<string>();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState(params.get("title") || "");

  useEffect(() => {
    if (parseInt(String(id)) > 7) {
      setTitle(location.state.title);
    } else {
      const fetchTask = async () => await getTask(parseInt(String(id)));

      fetchTask()
        .then((data) => setTitle(data.title))
        .catch((error) => console.log(error));
    }
  }, []);

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();

    const newTask = {
      id: parseInt(String(id)),
      title,
    };

    navigate(getRoute("home"), {
      state: { newTask, allTasks: location.state.allTasks || [] },
    });
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
          <Button
          // variant="success"
          >
            Save Changes
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Edit;
