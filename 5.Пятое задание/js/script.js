function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

function toggleElements() {
  const elements = document.querySelectorAll('.box__element');
  elements.forEach(element => {
    element.style.display = element.style.display === 'none' ? 'flex' : 'none';
  });
}

const toggleBtn = document.getElementById('btn');
toggleBtn.addEventListener('click', debounce(toggleElements, 1000));