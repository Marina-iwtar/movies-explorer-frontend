import "./FilterCheckbox.css";
function FilterCheckbox() {
  return (
    <div className="filterCheckbox">
      <label className="filterCheckbox__checkbox">
        <input
          className="filterCheckbox__input"
          type="checkbox"
          id="checkbox"
        ></input>
        <span className="filterCheckbox__text">Короткометражки</span>
      </label>
    </div>
  );
}
export default FilterCheckbox;
