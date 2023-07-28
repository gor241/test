class Slider {
  constructor(imageUrls) {
    // Создаём конструкт
    this.imageUrls = imageUrls;
    this.currentSlideIndex = 0;
    this.sliderImage = document.getElementById('slider-image');
    this.prevButton = document.getElementById('prev-btn');
    this.nextButton = document.getElementById('next-btn');

    this.showSlide();

    // Вешаем события на кнопки
    this.prevButton.addEventListener('click', () => this.previousSlide());
    this.nextButton.addEventListener('click', () => this.nextSlide());
  }

  // Присваиваем изображение по умолчанию
  showSlide() {
    const currentImageUrl = this.imageUrls[this.currentSlideIndex];
    this.sliderImage.src = currentImageUrl;
  }
  // Предыдущий слайд
  previousSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
    this.showSlide();
  }
  // Следующий слайд
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.imageUrls.length;
    this.showSlide();
  }
}

// Создаем экземпляр слайдера и передаем массив ссылок на картинки
const imageUrls = [
  '../images/1.jpg',
  '../images/2.jpg',
  '../images/3.jpg',
];
const slider = new Slider(imageUrls);