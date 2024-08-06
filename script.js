const cube = document.querySelector('.cube');

cube.addEventListener('click', () => {
  cube.style.transform = 'rotateX(' + (Math.random() * 360) + 'deg) rotateY(' + (Math.random() * 360) + 'deg) rotateZ(' + (Math.random() * 360) + 'deg)';
});
