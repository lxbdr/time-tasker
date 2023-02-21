import { api } from "../../utils/api";
import { CreateProject } from "../../components/CreateProject";
import Link from "next/link";

export default function ListProjectsPage() {
  const getAllProjectsQuery = api.project.getAllProjects.useQuery();

  return (
    <div>
      Liste aller Projekte
      {getAllProjectsQuery.data &&
        getAllProjectsQuery.data.map((project) => (
          <div key={project.id}>
            <Link href={`/projects/${project.id}`}>{project.name}</Link>
          </div>
        ))}
      <div>
        <CreateProject />
      </div>
    </div>
  );
}
