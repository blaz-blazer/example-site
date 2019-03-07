import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }

  events() {
    //click the open modal button
    this.openModalButton.click(this.openModal.bind(this));
    //click the x modal button
    this.closeModalButton.click(this.closeModal.bind(this));
    //any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass('modal--is-visible');
    //prevent link click
    return false;
  }

  closeModal() {
    this.modal.removeClass('modal--is-visible');
    //prevent link click
    return false;
  }
}

export default Modal;
