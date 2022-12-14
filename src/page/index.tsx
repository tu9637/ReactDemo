import { decremented, incremented } from '../store/reducers/counterSlice';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/types/store';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
const Demo = () => {
  const dispatch = useDispatch();
  const {value} = useSelector((state: RootState) => state.counterSlice);
  console.log('测试打印' )
  return (
    <div style={{ backgroundColor: '#8df', height: '100vh', color: 'red' }}>
      <div>这是Demo{value}</div>
      <button
        onClick={() => {
          dispatch(incremented());
        }}
      >
        加
      </button>
      <button
        onClick={() => {
          dispatch(decremented());
        }}
      >
        减
      </button>
      <DatePicker defaultValue={dayjs('2022/12/12') } />
    </div>
  );
};
export default Demo;