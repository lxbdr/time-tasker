import { useRouter } from "next/router";
import { api } from "../../utils/api";
import { useState } from "react";
import Container from "../../components/Container";
import Button from "../../components/Button";

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

  const taskTemplatesQuery = api.taskTemplate.getAll.useQuery();

  const addTaskTemplateMutation = api.project.addTaskTemplate.useMutation();

  const [selectedTaskTemplate, setSelectedTaskTemplate] = useState("");

  const handleAddTaskTemplate = () => {
    if (!selectedTaskTemplate) {
      return;
    }

    addTaskTemplateMutation.mutate(
      {
        taskTemplateId: selectedTaskTemplate,
        projectId: projectId,
      },
      {
        onSuccess() {
          void projectQuery.refetch();
        },
      }
    );
  };

  if (!projectQuery.data) {
    return <div>Keine Daten gefunden.</div>;
  }

  const data = projectQuery.data;

  return (
    <Container>
      <header className="mt-4 border-b pb-2">
        <div className="mb-0 text-xs uppercase tracking-widest">Project</div>
        <h1 className="text-2xl">{data.name}</h1>
      </header>
      <div className="mt-3">
        <ul className={"py-4"}>
          {data.tasks.map((task) => (
            <li key={task.id}>
              <div className="mb-0 text-xs uppercase tracking-widest">Task</div>
              <h2 className="text-xl">{task.name}</h2>
              <ul className="mt-4  py-4">
                {task.checklists.map((checklist) => (
                  <li key={checklist.id}>
                    <div className="mb-0 text-xs uppercase tracking-widest">
                      Checklist
                    </div>
                    <h3 className="text-lg">{checklist.name}</h3>
                    <ul className={"mb-6 flex flex-col space-y-3  py-4"}>
                      {checklist.bullets.map((bullet) => (
                        <li key={bullet.id}>
                          <div className="rounded bg-gray-600 p-2">
                            <input type="checkbox" /> {bullet.name}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-3 border-t py-2">
        <h2 className="mb-3">Task Templates hinzufügen</h2>
        {taskTemplatesQuery.data && (
          <div>
            <select
              value={selectedTaskTemplate}
              onChange={(ev) => {
                setSelectedTaskTemplate(ev.target.value);
              }}
              placeholder={"Auswählen"}
            >
              {taskTemplatesQuery.data.map((taskTemplate) => (
                <option key={taskTemplate.id} value={taskTemplate.id}>
                  {taskTemplate.name}
                </option>
              ))}
            </select>
            <div className="my-3">
              <Button
                onClick={() => {
                  handleAddTaskTemplate();
                }}
              >
                Task Template hinzufügen
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
