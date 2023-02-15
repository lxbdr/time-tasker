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
          <Link href={`/projects/${project.id}`} key={project.id}>
            {project.name}
          </Link>
        ))}
      <div>
        <CreateProject />
      </div>
    </div>
  );
}
