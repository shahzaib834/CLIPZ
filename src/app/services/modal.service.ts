import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable()
export class ModalService {
  constructor() {}

  private modals: IModal[] = [];

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((element) => {
      return element.id !== id;
    });
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find((element) => element.id === id)?.visible;
  }

  openModal(id: string) {
    const modal = this.modals.find((element) => element.id === id);
    if (modal) {
      modal.visible = true;
    }
  }

  closeModal(id: string) {
    console.log(this.modals);
    const modal = this.modals.find((element) => element.id === id);
    if (modal) {
      modal.visible = false;
    }
  }
}
