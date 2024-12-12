// Функция для отображения окна prompt
function showPrompt() {
    const promptContainer = document.getElementById('prompt-container');
    promptContainer.style.display = 'flex'; // Показываем окно
  }
  
  // Функция для скрытия окна prompt
  function hidePrompt() {
    const promptContainer = document.getElementById('prompt-container');
    promptContainer.style.display = 'none'; // Скрываем окно
  }
  
  // Обработчики для кнопок
  document.getElementById('confirm-btn').addEventListener('click', () => {
    alert('Вы подтвердили!');
    hidePrompt(); // Скрываем окно
  });
  
  document.getElementById('cancel-btn').addEventListener('click', () => {
    alert('Вы отменили!');
    hidePrompt(); // Скрываем окно
  });
  
  // Пример вызова окна через 3 секунды
  setTimeout(showPrompt, 3000); // Окно появится через 3 секунды
  