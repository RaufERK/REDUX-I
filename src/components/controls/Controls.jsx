import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ADD_USER, INC, DEC } from '../../redux/reducer';
import { v4 as uuidv4 } from 'uuid';

const Controls = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');

  const addUser = () => {
    dispatch({
      type: ADD_USER,
      payload: { name: inputText, id: uuidv4() },
    });
    setInputText('');
  };

  const changeHandler = ({ target }) => {
    setInputText(target.value);
  };

  return (
    <div className="comp">
      <div className="marg">
        <input onChange={changeHandler} value={inputText} />
        <button onClick={addUser}>ADD</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: INC })}>INCREMENT</button>
        <button onClick={() => dispatch({ type: DEC })}>DECREMENT</button>
      </div>
    </div>
  );
};

export default Controls;
