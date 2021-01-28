import Controls from "./components/controls/Controls";
import Counter from "./components/counter/Counter";
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import List from "./components/List/List";
import { SET_USERS } from './redux/reducer'

function App() {
  const dispatch = useDispatch()
  const fetchUsers = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersList = await result.json()
    dispatch({ type: SET_USERS, payload: usersList })
  }

  useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className="App">
      <List />
      <Controls />
      <Counter />
    </div>
  );
}

export default App;
