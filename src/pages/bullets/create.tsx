import { type NextPage } from "next";
import Input from "../../components/Input";
import Button from "../../components/Button";

export const CreateBullet: NextPage = () => {
  return (
    <div>
      <h1>todo: Create Bullet</h1>
      <div>this requires a checklist (and task template) for context(</div>
      <Input
        label={"Name"}
        className={"mt-4"}
        inputProps={{ className: "border-red-400" }}
      ></Input>
      <div>description</div>
      <div>estimated time</div>
      <Button>Create</Button>
    </div>
  );
};

export default CreateBullet;
