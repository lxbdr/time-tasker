import { api } from "../../../utils/api";
import Link from "next/link";
import { CreateTaskTemplate } from "../../../components/CreateTaskTemplate";

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
      <div>
        <CreateTaskTemplate />
      </div>
    </div>
  );
}

