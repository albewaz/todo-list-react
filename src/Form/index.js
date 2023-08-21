import { useState } from "react";
import { Form, Input, Button } from "./styled";

const TaskForm = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      return;  
    }

    addNewTask(newTaskContent.trim());
    setNewTaskContent(""); 
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        autoFocus
        name="task"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </Form>
  );
};

export default TaskForm;
