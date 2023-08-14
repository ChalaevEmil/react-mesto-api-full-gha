import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      ["name"]: name,
      ["profession"]: description,
    });
    evt.target.reset();
  }

  React.useEffect(() => {
    if (props.isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [props.isOpen, currentUser]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onCloseClick={props.onCloseClick}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name={"profile"}
      form={"profileData"}
      title={"Редактировать профиль"}
      buttonText={"Сохранить"}
      children={
        <>
          <input
            id="input-profile-name"
            className="popup__input popup__input_el_name"
            type="text"
            name="name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            onChange={handleNameChange}
            value={name}
            required
          />
          <span className="input-profile-name-error">
            Необходимо заполнить данное поле
          </span>
          <input
            id="input-profile-profession"
            className="popup__input popup__input_el_profession"
            type="text"
            name="profession"
            placeholder="Вид деятельности"
            minLength="2"
            maxLength="200"
            onChange={handleDescriptionChange}
            value={description}
            required
          />
          <span className="input-profile-profession-error">
            Необходимо заполнить данное поле
          </span>
        </>
      }
    />
  );
}

export default EditProfilePopup;