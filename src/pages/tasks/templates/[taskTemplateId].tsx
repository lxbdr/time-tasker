import { useRouter } from "next/router";
import { TaskTemplate } from "../../../components/TaskTemplate";

export default function SingleTaskTemplate() {
  const router = useRouter();
  const { taskTemplateId } = router.query;

  if (typeof taskTemplateId !== "string") {
    return <div>Problem</div>;
  }

  return <TaskTemplate taskTemplateId={Number.parseInt(taskTemplateId)} />;
}
