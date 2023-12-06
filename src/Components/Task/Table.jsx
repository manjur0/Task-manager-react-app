
// const Table = ({ task, deleteTask, toggleTask }) => {
//     return (
//       <div>
//         <li key={task.id}>
//           <input
//             type="checkbox"
//             checked={task.completed}
//             onChange={() => toggleTask(task.id)}
//           />
//           <span
//             style={{
//               textDecoration: task.completed ? "line-through" : "none",
//             }}
//           >
//             {task.text}
//           </span>
//           <button onClick={() => deleteTask(task.id)}>Delete</button> <br />
//         </li>
//       </div>
//     );
// };

// export default Table;