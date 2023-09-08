import "./FilterCheckbox.css";
function FilterCheckbox() {
  return (
    <section className="filterCheckbox">
      <label className="filterCheckbox__checkbox" >
        <input
          className="filterCheckbox__input"
          type="checkbox"
          id="checkbox"
        ></input>
        <span className="filterCheckbox__text">Короткометражки</span>
      </label>
    </section>
  );
}
export default FilterCheckbox;
