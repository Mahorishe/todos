import { MyInput } from '../UI/MyInput/MyInput';
import { MySelect } from '../UI/MySelect/MySelect';
import cls from './PostFilter.module.css';

export const PostFilter = (props) => {
  const {filter, setFilter} = props
  return (
    <div className={cls.PostFilter}>
    <MyInput 
      value={filter.query}
      placeholder="Поиск..."
      onChange={(e) => setFilter({...filter, query: e.target.value})}
    />
    <MySelect 
      value={filter.sort}
      onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
      defaultValue="Сортировка" 
      options={[
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По описанию'}
      ]} 
    />
  </div>
  );
};