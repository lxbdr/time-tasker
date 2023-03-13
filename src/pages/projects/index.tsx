import { CreateProject } from "../../components/CreateProject";
import Projects from "../../components/Projects";
import { api } from "../../utils/api";


export default function ListProjectsPage() {
  const getAllProjectsQuery = api.project.getAllProjects.useQuery();

  return (
    <>
      <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Liste aller Projekte
      </h1>
      {getAllProjectsQuery.isSuccess && <Projects projects={getAllProjectsQuery.data} />}
      <div>
        <CreateProject />
      </div>
    </>
  );
}
