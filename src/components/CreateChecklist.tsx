import { api } from "../utils/api";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export function CreateChecklist(props: {
  taskTemplateId: number;
  onSuccess?: () => void | Promise<void>;
}) {
  const { onSuccess, taskTemplateId } = props;

  const createChecklist = api.taskTemplate.createChecklist.useMutation({
    onSuccess() {
      if (onSuccess) {
        void onSuccess();
      }
    },
  });

  const [checklistName, setChecklistName] = useState("");

  const handleCreateChecklist = () => {
    if (!checklistName) {
      return;
    }

    createChecklist.mutate({
      taskId: taskTemplateId,
      name: checklistName,
    });
  };

  return (
    <div>
      <Input
        label={"Neue Checkliste"}
        value={checklistName}
        onChange={(ev) => {
          setChecklistName(ev.target.value);
        }}
      />
      <Button
        className={"mt-2"}
        onClick={() => {
          handleCreateChecklist();
        }}
      >
        Neue Checkliste erstellen
      </Button>
    </div>
  );
}
