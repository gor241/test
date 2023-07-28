const nameRegex = /^[A-Za-zА-Яа-я]{3,30}$/;
const phoneRegex = /^(\+)?\d{10,15}$/;
const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{8,40}$/;

const form = document.getElementById('registration-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  errorMessage.textContent = '';

  const nameInput = form.elements.name;
  const phoneInput = form.elements.phone;
  const passwordInput = form.elements.password;
  const confirmPasswordInput = form.elements.confirmPassword;

  if (!nameRegex.test(nameInput.value)) {
    errorMessage.textContent = 'Неверное имя. Имя должно содержать только буквы (кириллицу или латиницу) и иметь длину от 3 до 30 символов.';
    return;
  }

  if (!phoneRegex.test(phoneInput.value)) {
    errorMessage.textContent = 'Неправильный номер телефона. Номер телефона должен содержать от 10 до 15 цифр и может начинаться со знака плюс.';
    return;
  }

  if (!passwordRegex.test(passwordInput.value)) {
    errorMessage.textContent = 'Неверный пароль. Пароль должен иметь длину от 8 до 40 символов и содержать как минимум одну заглавную букву и одну цифру.';
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    errorMessage.textContent = 'Пароли не совпадают.';
    return;
  }

  // Если все данные валидны, то отправляем форму
  // В этом примере форма просто сабмитится, но вы можете добавить свою логику отправки на сервер или другие действия.
  form.submit();
});