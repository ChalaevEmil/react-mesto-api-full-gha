import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const ref = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar: ref.current.value,
    });
  }

  React.useEffect(() => {
    ref.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onCloseClick={props.onCloseClick}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name={"avatar"}
      form={"placeData"}
      title={"Обновить аватар"}
      buttonText={"Сохранить"}
      children={
        <>
          <input
            ref={ref}
            type="url"
            placeholder="Ссылка на изображение"
            id="input-avatar-link"
            className="popup__input popup__input_el_avatar-url"
            name="input-description"
            required
          />
          <span className="input-avatar-link-error">
            Необходимо заполнить данное поле
          </span>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
