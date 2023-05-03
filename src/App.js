import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      const updatedUsersList = [...prevUsersList];
      updatedUsersList.unshift({name: uName, age: uAge, id: Math.random().toString()});
      return updatedUsersList;
    })
  }

  if(usersList.length == 0) {
    return <div>
      <AddUser onAddUser={addUsersHandler} />
    </div>
  }

  return (
    <div>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
