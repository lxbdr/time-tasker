import { api } from "../../utils/api";
import { CreateProject } from "../../components/CreateProject";

export default function ListProjectsPage() {
  const getAllProjectsQuery = api.project.getAllProjects.useQuery();

  return (
    <div>
      Liste aller Projekte
      {getAllProjectsQuery.data &&
        getAllProjectsQuery.data.map((project) => (
          <div key={project.id}>{project.name}</div>
        ))}
      <div>
        <CreateProject />
      </div>
    </div>
  );
}
