import { type NextPage } from "next";
import Link from "next/link";

export const CreateTask: NextPage = () => {
  return (
    <div>
      Create Task
      <h1>Create Task</h1>
      <div>Title</div>
      <div>Description</div>
      <div>Checklists</div>
      <div>Add Checklist</div>
      <div>Requirements</div>
      <Link href={"/bullets/create"}>Add Requirements Bullets</Link>
      <div>QA Checklist</div>
      <div>Add QA Bullets</div>
    </div>
  );
};

export default CreateTask;
