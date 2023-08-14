import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/SliceFilters';
import css from './Form.module.css'
export const ListFilter = () => {
    const dispatch = useDispatch();
    const onFilterChange = e => {
      dispatch(updateFilter(e.target.value));
    };
  return (
      <label className= {css.filter_block}> Find contacts by name
      <input 
       onChange={onFilterChange}
        type="text"/>
    </label>
  );
};