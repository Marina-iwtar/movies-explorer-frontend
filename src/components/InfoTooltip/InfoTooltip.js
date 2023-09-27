import "./InfoTooltip.css";

function InfoTooltip({ title, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__content">
        <div className="popup__container">
          <button
            className="popup__close popup__close_image"
            type="button"
            aria-label="кнопка закрытия модального окна"
            onClick={onClose}
          ></button>
        <p className="popup__subtitle">{title}</p>
        </div>
      </div>
    </div>
  );
}
export default InfoTooltip;