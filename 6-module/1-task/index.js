/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.data = rows;
    console.log(this.data);
    this.template = '';
    this.render(this.data);
  }
  onButtonClick(event) {
    if (!event.target.closest('button')) return;
    event.target.closest('tr').remove();
  }
  render() {
    if (!this.elem) {
      this.elem = document.createElement('TABLE');
      this.template += `
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      `
      this.elem.insertAdjacentHTML('beforeEnd', this.template);
      this.elem.addEventListener('click', event => {
        this.onButtonClick(event);
      });
    }
    const tableBody = this.elem.querySelector('tbody');
    let bodyTemplate = '';

    for (const { name, age, salary, city } of this.data) {
      bodyTemplate += `
      <tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${salary}</td>
        <td>${city}</td>
        <td><button>X</button></td>
      </tr>
      `
    }

    tableBody.insertAdjacentHTML('beforeEnd', bodyTemplate);
    return this.elem;
  }
}