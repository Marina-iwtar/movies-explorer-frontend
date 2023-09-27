import "./FilterCheckbox.css";
function FilterCheckbox({onChange,onMoviesShort}) {
  

console.log(onMoviesShort);
  return (
    <div className="filterCheckbox">
      <label htmlFor="checkbox" className={`filterCheckbox__checkbox ${onMoviesShort ? "filterCheckbox__checkbox_active":""}`}>
        <input
          className="filterCheckbox__input"
          type="checkbox"
          id="checkbox"
                  onClick={onChange}
        ></input>
        <span className="filterCheckbox__text">Короткометражки</span>
      </label>
    </div>
  );
}
export default FilterCheckbox;
