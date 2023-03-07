import Link from "next/link";

// const projects = [
//   {
//     id: 1,
//     title: 'Back End Developer',
//     department: 'Engineering',
//     closeDate: '2020-01-07',
//     closeDateFull: 'January 7, 2020',
//     applicants: [
//       {
//         name: 'Dries Vincent',
//         email: 'dries.vincent@example.com',
//         imageUrl:
//           'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Lindsay Walton',
//         email: 'lindsay.walton@example.com',
//         imageUrl:
//           'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Courtney Henry',
//         email: 'courtney.henry@example.com',
//         imageUrl:
//           'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Tom Cook',
//         email: 'tom.cook@example.com',
//         imageUrl:
//           'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Front End Developer',
//     department: 'Engineering',
//     closeDate: '2020-01-07',
//     closeDateFull: 'January 7, 2020',
//     applicants: [
//       {
//         name: 'Whitney Francis',
//         email: 'whitney.francis@example.com',
//         imageUrl:
//           'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Leonard Krasner',
//         email: 'leonard.krasner@example.com',
//         imageUrl:
//           'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Floyd Miles',
//         email: 'floyd.miles@example.com',
//         imageUrl:
//           'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: 'User Interface Designer',
//     department: 'Design',
//     closeDate: '2020-01-14',
//     closeDateFull: 'January 14, 2020',
//     applicants: [
//       {
//         name: 'Emily Selman',
//         email: 'emily.selman@example.com',
//         imageUrl:
//           'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Kristin Watson',
//         email: 'kristin.watson@example.com',
//         imageUrl:
//           'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//       {
//         name: 'Emma Dorsey',
//         email: 'emma.dorsey@example.com',
//         imageUrl:
//           'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     ],
//   },
// ]

interface Project {
  id: string;
  name: string;
}

interface ProjectsProps {
  projects: Project[];
}




export default function Projects(projects: ProjectsProps) {
  return (
    <ul role="list" className="my-4">
      {projects.projects?.map((project) => (
        <li key={project.id} className="mt-4">
          <Link href={`/projects/${project.id}`} className="block transition hover:bg-gray-100 bg-gray-200 dark:bg-gray-800  dark:hover:bg-gray-700 rounded-md">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                <div className="truncate">
                  <div className="flex text-sm">
                    <p className="truncate font-bold text-indigo-600 dark:text-indigo-400">{project.name}</p>
                    <p className="ml-1 flex-shrink-0 font-normal text-gray-500 dark:text-gray-400">in Department</p>
                  </div>
                  <div className="mt-2 flex">
                    <div className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="#AAAAAA">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <p className="ml-1 text-gray-500 dark:text-gray-400">
                        Deadline <time dateTime="2023-12-13">13.12.2023</time>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                  <div className="flex -space-x-1 overflow-hidden">
                    {/* {project.applicants.map((applicant) => (
                        <img
                          key={applicant.email}
                          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                          src={applicant.imageUrl}
                          alt={applicant.name}
                        />
                      ))} */}
                  </div>
                </div>
              </div>
              <div className="ml-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}