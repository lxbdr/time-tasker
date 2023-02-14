import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { TaskTemplateSchema } from "../../server/models/TaskTemplate";
import { api } from "../../utils/api";

const Home: NextPage = () => {
  const [taskTemplates, setTaskTemplates] = useState<TaskTemplateSchema[]>([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState("");

  const availableTaskTemplatesQuery = api.taskTemplate.getAll.useQuery();

  const availableTaskTemplates = availableTaskTemplatesQuery.data || [];

  function addTaskTemplate(id: number) {
    // find id
    const selectedTemplate = availableTaskTemplates.find((el) => el.id === id);
    if (!selectedTemplate) {
      console.error("invalid selected template id");
      return;
    }

    setTaskTemplates([...taskTemplates, selectedTemplate]);
  }

  function handleAddTaskTemplate() {
    addTaskTemplate(Number.parseInt(selectedTemplateId));
  }

  return (
    <>
      <Head>
        <title>Neues Projekt erstellen</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
        <div>Neues Projekt anlegen</div>
        <div>
          <label htmlFor="">
            <div>Projektname</div>
            <input type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            <div>Projektbeschreibung</div>
            <textarea name="description" id=""></textarea>
          </label>
        </div>
        <div>
          <h2>Taskvorlagen hinzufügen</h2>
          <select
            name=""
            id=""
            value={selectedTemplateId}
            onChange={(ev) => {
              const val = ev.target.value;
              setSelectedTemplateId(val);
            }}
            className={""}
          >
            <option value={""} disabled>
              Bitte wählen
            </option>
            {availableTaskTemplates.map((task) => (
              <option key={task.name} value={task.id}>
                {task.name}
              </option>
            ))}
          </select>
          <button type="button" onClick={handleAddTaskTemplate}>
            Template hinzufügen
          </button>
          <div>Hinzugefügte Templates</div>
          <ul>
            {taskTemplates.map((taskTemplate) => (
              <li key={taskTemplate.id}>
                <h3>{taskTemplate.name}</h3>
                <div>Checklisten:</div>
                <ul>
                  {taskTemplate.checklists.map((checklist) => (
                    <li key={checklist.id}>{checklist.name}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            type={"button"}
            className={"rounded bg-green-400 p-2 text-sm text-white"}
          >
            Projekt anlegen
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
