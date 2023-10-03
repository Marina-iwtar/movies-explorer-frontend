import "./FilterCheckbox.css";
function FilterCheckbox({ onChange, onMoviesShort }) {
  return (
    <label htmlFor="checkbox" className="filterCheckbox__checkbox">
      <input
        className="filterCheckbox__input"
        type="checkbox"
        id="checkbox"
        onChange={onChange}
        checked={onMoviesShort}
      ></input>
      <span className="filterCheckbox__text">Короткометражки</span>
    </label>
  );
}
export default FilterCheckbox;
