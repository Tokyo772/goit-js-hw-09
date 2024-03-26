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

form.addEventListener('input', () => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    console.log('Submitted Data:', JSON.parse(savedData));
  }

  localStorage.removeItem(localStorageKey);
  form.reset();
});
