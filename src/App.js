import { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Play cricket",
      day: "4th Feb at 2:30pm",
      reminder: false
    },
    {
      id: 2,
      text: "Shopping",
      day: "5th Feb at 10:30pm",
      reminder: false
    },
    {
      id: 3,
      text: "Medical Checkup",
      day: "7th Feb at 4:45pm",
      reminder: false
    }
  ]);

  // delete icon 
  const handleDelete = (id) => {
    setTasks(tasks.filter(tasks => tasks.id!==id));
  };

  // onDoubleClick toggle 
  const onToggle = (id) => {
    // alert(id);
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder}:task))
  };

  // add task
  const handleTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd={handleTask}/>}
      {
        tasks.length > 0 ? (<Tasks tasks={tasks} onToggle={onToggle} onDelete={handleDelete}/>) : (
        "No Tasks To Show" )
      }
      <footer style={{color: "lightgray", textAlign: "center", marginTop: "30px"}}> &copy; Arick Ahamed 2021</footer>
    </div>
  );
}

export default App;
