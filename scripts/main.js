const buttonElem = document.querySelector('.btn_section');
const modalElem = document.querySelector('.modal');

modalElem.style.cssText = `
    display:flex;
    visibility:hidden;
    opacity:0;
    transition:opacity 300ms ease-in-out
`;

const closeModal = event => {
    const target = event.target;

    if(target == modalElem || target.closest('.modal_close')) {
        modalElem.style.visibility = 'hidden';
        modalElem.style.opacity = 0;

        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
        }, 300)
    }
}

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
};

buttonElem.addEventListener('click' , openModal);

modalElem.addEventListener('click' , closeModal);

document.querySelectorAll('.food_list_card').forEach((card) => {
    const orderButton = card.querySelector('.order_button');  // Кнопка "В корзину"
    const orderButtonsContainer = card.querySelector('.order_buttons');  // Контейнер с кнопками для счета
    const decrementButton = card.querySelector('.decrement');
    const incrementButton = card.querySelector('.increment');
    const countDisplay = card.querySelector('.count');
  
    let count = 1;  // Начальное значение счетчика
  
    // Переключение на кнопки с счетчиком и обратно
    orderButton.addEventListener('click', () => {
      orderButton.style.display = 'none';  // Скрыть кнопку "В корзину"
      orderButtonsContainer.style.display = 'flex';  // Показать контейнер с кнопками и счетчиком
    });
  
    // Функция для обновления счетчика
    const updateCountDisplay = () => {
      countDisplay.textContent = count;  // Обновляем отображение счетчика
    };
  
    // Функция для обновления текста кнопки "В корзину"
    const updateOrderButtonText = () => {
      if (count > 1) {
        orderButton.textContent = `В корзину (${count})`; // Показываем количество на кнопке
      } else {
        orderButton.textContent = 'В корзину';  // Если счетчик 1, обычный текст
      }
    };
  
    // Нажатие на "+" увеличивает счетчик
    incrementButton.addEventListener('click', () => {
      count++;
      updateCountDisplay(); // Обновляем счетчик
      updateOrderButtonText(); // Обновляем текст на кнопке "В корзину"
    });
  
    // Нажатие на "-" уменьшает счетчик
    decrementButton.addEventListener('click', () => {
      if (count > 1) {
        count--;
        updateCountDisplay(); // Обновляем счетчик
        updateOrderButtonText(); // Обновляем текст на кнопке "В корзину"
      } else {
        count = 1;  // Минимальное значение счетчика — 1
        updateCountDisplay();  // Обновляем счетчик
        orderButton.style.display = 'block';  // Показываем кнопку "В корзину"
        orderButtonsContainer.style.display = 'none';  // Скрываем счетчик и кнопки
      }
    });
  });