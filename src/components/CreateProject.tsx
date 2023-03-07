import { useState } from "react";
import { api } from "../utils/api";
import { Button } from "./Button";
import Input from "./Input";

export function CreateProject(props: {
  onSuccess?: () => void | Promise<void>;
}) {
  const { onSuccess } = props;

  const createProjectMutation = api.project.createProject.useMutation({
    onSuccess() {
      if (onSuccess) {
        void onSuccess();
      }
    },
  });

  const [createProject, setCreateProject] = useState("");

  const handleCreateProject = () => {
    if (!createProject) {
      return;
    }

    createProjectMutation.mutate({
      name: createProject,
    });

    setCreateProject("");
  };

  return (
    <div>
      <Input
        label={"Neues Projekt"}
        value={createProject}
        onChange={(ev) => {
          setCreateProject(ev.target.value);
        }}
      />
      <Button
        onClick={() => {
          handleCreateProject();
        }}
      >
        Neues Projekt erstellen
      </Button>
    </div>
  );
}
