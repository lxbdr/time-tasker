import { useRouter } from "next/router";
import { api } from "../../utils/api";
import { useState } from "react";

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
    <div>
      <h1>{data.name}</h1>
      <div className="mt-3">
        Tasks:
        <ul className={"p-4 border border-red-400"}>
          {data.tasks.map((task) => (
            <li key={task.id}>
              {task.name}
              <div>Checklists</div>
              <ul className={"p-4  border border-blue-400"}>
                {task.checklists.map((checklist) => (
                  <li key={checklist.id}>
                    <div>{checklist.name}</div>
                    <div>Bullets:</div>
                    <ul className={"p-4 border border-green-400"}>
                      {checklist.bullets.map((bullet) => (
                        <li key={bullet.id}>
                          <input type="checkbox" />  {bullet.name}
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
      <div className="mt-3">
        <h2>Task Templates hinzufügen</h2>
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
            <button
              onClick={() => {
                handleAddTaskTemplate();
              }}
            >
              Task Template hinzufügen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
