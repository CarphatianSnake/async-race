import garage from 'view/main/tab/garage';

const onCarEdit = (target: HTMLElement): void => {
  const targetData = garage.carsList.items.find((item) => item.buttons.edit === target);

  if (targetData) {
    garage.editCarForm.activate(targetData);
  }
};

export default onCarEdit;
