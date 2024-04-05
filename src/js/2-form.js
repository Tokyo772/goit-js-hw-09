const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

function loadForm() {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
}

loadForm();

const sendToLocalStorage = () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};
form.addEventListener('input', sendToLocalStorage);

const submitForm = event => {
  event.preventDefault();

  const formEmail = form.elements.email.value.trim();
  const formMessage = form.elements.message.value.trim();
  if (formEmail && formMessage) {
    const savedData = localStorage.getItem(localStorageKey);

    console.log('Submitted Data:', JSON.parse(savedData));

    localStorage.removeItem(localStorageKey);
    form.reset();
  }
};
form.addEventListener('submit', submitForm);
