export function createInput(type, placeholder) {
  const input = document.createElement('input');
  input.type = type;
  input.placeholder = placeholder;
  input.classList.add('input');

  return input;
}
