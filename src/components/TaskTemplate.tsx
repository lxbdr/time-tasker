import { api } from "../utils/api";
import { AddBullet } from "./AddBullet";
import { CreateChecklist } from "./CreateChecklist";

export function TaskTemplate(props: { taskTemplateId: number }) {
  const { taskTemplateId } = props;

  const taskTemplate = api.taskTemplate.get.useQuery({
    id: taskTemplateId,
  });

  if (!taskTemplate.isSuccess) {
    return <div>Error!</div>;
  }

  if (!taskTemplate.data) {
    return <div>TaskTemplate has no data</div>;
  }

  const data = taskTemplate.data;

  return (
    <div>
      <h1 className={`text-xl`}>
        Single Task Template: {taskTemplate.data.name}
      </h1>
      <h2 className={`mb-2 text-xl`}>Checklisten</h2>
      <ul className={`mb-3 rounded border p-4`}>
        {data.checklists.map((checklist) => (
          <li key={checklist.id} className={`mb-3 rounded border p-4`}>
            <h3 className={`mb-2 border-b text-lg`}>{checklist.name}</h3>
            <ul>
              {checklist.bullets.map((bullet) => (
                <li key={bullet.id}>{bullet.name}</li>
              ))}
            </ul>
            <AddBullet
              onSuccess={async () => {
                await taskTemplate.refetch();
              }}
              taskTemplateId={taskTemplateId}
              checklistId={checklist.id}
            />
          </li>
        ))}
      </ul>
      <div>
        <CreateChecklist
          taskTemplateId={taskTemplateId}
          onSuccess={async () => {
            await taskTemplate.refetch();
          }}
        />
      </div>
      <div>Voraussetzungen</div>
      hier eine checkllist mit dem namen hinzufügen
      <div>Qualitaetscheck</div>
      <div>Qualitaetscheck Bullets</div>
    </div>
  );
}
