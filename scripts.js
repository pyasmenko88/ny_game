document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('colorButton');
  button.addEventListener('click', () => {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;
  });
});
