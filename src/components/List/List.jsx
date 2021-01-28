import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { DEL_USER, EDIT_USER } from '../../redux/reducer';

const List = () => {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const delHandler = (id) => {
    dispatch({ type: DEL_USER, payload: id });
  };

  const setAciveItem = ({ id, name }) => {
    setEditId(id);
    setEditText(name);
  };

  const changeTextHandler = ({ target }) => {
    setEditText(target.value);
  };

  const saveItem = async () => {
    await dispatch({
      type: EDIT_USER,
      payload: { id: editId, name: editText },
    });
    setEditId(null);
  };

  return (
    <div className="comp">
      <ul>
        {users &&
          users.map(({ name, id }) => (
            <li key={id} onClick={() => setAciveItem({ name, id })}>
              {editId === id ? (
                <>
                  <input onChange={changeTextHandler} value={editText} />
                  <button onClick={saveItem}>SAVE</button>
                </>
              ) : (
                <>
                  {name} <button onClick={() => delHandler(id)}>DEL</button>
                </>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
