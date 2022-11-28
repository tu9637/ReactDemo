import { decremented, incremented } from '../store/reducers/counterSlice';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/types/store';
const Demo = () => {
  const dispatch = useDispatch();
  const {value} = useSelector((state: RootState) => state.counterSlice);
  return (
    <div style={{backgroundColor:'#8df',height:'100vh',color:'red'}}>
      <div>这是Demo{value}</div>
      <button onClick={()=>{ dispatch(incremented()) }}>加</button>
      <button onClick={()=>{ dispatch(decremented()) }}>减</button>
    </div>
  );
};
export default Demo;