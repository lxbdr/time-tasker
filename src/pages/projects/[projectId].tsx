import { useRouter } from "next/router";
import { api } from "../../utils/api";

export default function SingleProjectPage() {
  const router = useRouter();
  const { projectId } = router.query;

  if (typeof projectId !== "string") {
    return <div>Waiting</div>;
  }

  return (
    <div>
      <Project projectId={projectId} />
    </div>
  );
}

export function Project(props: { projectId: string }) {
  const { projectId } = props;

  const projectQuery = api.project.getProject.useQuery({
    id: projectId,
  });

  if (!projectQuery.data) {
    return <div>Keine Daten gefunden.</div>;
  }

  const data = projectQuery.data;

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}
