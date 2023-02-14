import { api } from "../../../utils/api";
import Link from "next/link";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";

export default function ListTaskTemplates() {
  const taskTemplates = api.taskTemplate.getAll.useQuery();

  if (!taskTemplates.isSuccess) {
    return <div>No task templates</div>;
  }

  return (
    <div>
      <div>Task Templates:</div>
      {taskTemplates.data.map((item) => (
        <div key={item.id}>
          <Link href={`/tasks/templates/${item.id}`}>{item.name}</Link>
        </div>
      ))}
      {JSON.stringify(taskTemplates.data)}
      <div>
        <CreateTaskTemplate/>
      </div>
    </div>
  );
}

function CreateTaskTemplate() {
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
