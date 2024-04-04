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
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
};
form.addEventListener('input', sendToLocalStorage);

const submitForm = event => {
  event.preventDefault();

  const formEmail = form.elements.email.value;
  const formMessage = form.elements.message.value;
  if (formEmail && formMessage) {
    const savedData = localStorage.getItem(localStorageKey);

    console.log('Submitted Data:', JSON.parse(savedData));

    localStorage.removeItem(localStorageKey);
    form.reset();
  }
};
form.addEventListener('submit', submitForm);
