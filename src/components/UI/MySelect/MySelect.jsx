import cls from './MySelect.module.css';

export const MySelect = (props) => {
  const {options, defaultValue, value, onChange} = props
  return (
    <select 
      className={cls.MySelect}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map((option) => <option key={option.value} value={option.value}>{option.name}</option>)}
    </select>
  );
};