
 const shapes = document.querySelectorAll('.shape');

 function toggleAnimation() {
   this.classList.toggle('animate');
 }

 shapes.forEach(shape => shape.addEventListener('click', toggleAnimation));