import { useState } from "react";
import { api } from "../utils/api";
import { Button } from "./Button";
import Input from "./Input";

export function AddBullet(props: {
  onSuccess?: () => void | Promise<void>;
  taskTemplateId: string;
  checklistTemplateId: string;
}) {
  const { taskTemplateId, checklistTemplateId } = props;

  const [bulletName, setBulletName] = useState("");

  const addBulletMutation = api.taskTemplate.addBullet.useMutation({
    onSuccess() {
      if (props?.onSuccess) {
        void props.onSuccess();
      }
      setBulletName("");
    },
  });
  const handleAddBullet = () => {
    if (!bulletName) {
      return;
    }

    addBulletMutation.mutate({
      taskTemplateId,
      checklistTemplateId,
      name: bulletName,
    });
  };

  return (
    <div>
      <Input
        label={"Add bullet"}
        value={bulletName}
        onChange={(ev) => {
          setBulletName(ev.target.value);
        }}
      />
      <Button
        variant="secondary"
        size="sm"
        onClick={() => {
          handleAddBullet();
        }}
      >
        Add bullet
      </Button>
    </div>
  );
}
