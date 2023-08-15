import Swal from "sweetalert2";

const handlePopupMessage = (msg, type, button = false) => {
  Swal.fire({
    icon: type,
    title: `${type.toUpperCase()}!`,
    text: msg,
    showConfirmButton: button,
    timer: 2000
  });
};

export const showErrorMessage = (msg, btn) => {
  handlePopupMessage(msg, 'error', btn);
}

export const showSuccessMessage = (msg, btn) => {
  handlePopupMessage(msg, 'success', btn);
}