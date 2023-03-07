import { useState } from "react";
import { api } from "../utils/api";
import { Button } from "./Button";
import Input from "./Input";

export function CreateTaskTemplate() {
  const [taskTemplateName, setTaskTemplateName] = useState("");

  const createTaskTemplateMutation =
    api.taskTemplate.createTaskTemplate.useMutation();

  const handleCreateTaskTemplate = () => {
    createTaskTemplateMutation.mutate({
      name: taskTemplateName,
    });
  };

  return (
    <div>
      <Input
        label={"create task template"}
        value={taskTemplateName}
        onChange={(ev) => {
          setTaskTemplateName(ev.target.value);
        }}
      />
      <Button
        onClick={() => {
          handleCreateTaskTemplate();
        }}
      >
        Create Task template
      </Button>
    </div>
  );
}
