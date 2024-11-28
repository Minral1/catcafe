const chatIcon = document.getElementById('chat-icon');
const chatWindow = document.getElementById('chat-window');
const lightThemeIcon = document.getElementById('light-theme-icon');
const darkThemeIcon = document.getElementById('dark-theme-icon');
const sendBtn = document.getElementById('send-btn');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');

chatIcon.addEventListener('click', () => {
  if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
    chatWindow.style.display = 'block';
  } else {
    chatWindow.style.display = 'none';
  }
});

lightThemeIcon.addEventListener('click', () => {
  chatWindow.classList.remove('night-theme');
  chatWindow.classList.add('day-theme');
  lightThemeIcon.style.display = 'none';
  darkThemeIcon.style.display = 'block';
});

darkThemeIcon.addEventListener('click', () => {
  chatWindow.classList.remove('day-theme');
  chatWindow.classList.add('night-theme');
  darkThemeIcon.style.display = 'none';
  lightThemeIcon.style.display = 'block';
});

sendBtn.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    const msgElement = document.createElement('div');
    msgElement.textContent = `Вы: ${message}`;
    chatMessages.appendChild(msgElement);
    chatInput.value = '';
    alert('Сообщение отправлено');
  }
});