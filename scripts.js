document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const game = document.getElementById('game');
  const playButton = document.getElementById('playButton');
  const backButton = document.getElementById('backButton');

  playButton.addEventListener('click', () => {
    menu.classList.add('hidden');
    game.classList.remove('hidden');
  });

  backButton.addEventListener('click', () => {
    game.classList.add('hidden');
    menu.classList.remove('hidden');
  });
});
