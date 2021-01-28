import { useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((store) => store.counter);

  return (
    <div className="comp">
      <h1>{counter}</h1>
    </div>
  );
};

export default Counter;
