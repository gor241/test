const main = document.querySelector(".box__cards");
const api = new Api();
let pages = 0;

const renderUsersCards = function (data) {
  main.innerHTML = "";
  const sort = (a, b) => {
    const aTitle = a.first_name.toUpperCase();
    const bTitle = b.first_name.toUpperCase();
    if (aTitle == bTitle) return 0;
    if (aTitle < bTitle) return -1;
    if (aTitle > bTitle) return 1;
  };
  data.sort(sort);
  data.forEach((card) => {
    if (card.id) {
      const cardHTML = `<div class="box__card" style="background-image: url(${card.avatar})">
        <span style="color:red">${card.first_name}</span><br><span style="color:red">${card.last_name}</span><br>
        <span style="color:red">${card.email}</span>
      </div>`;
      main.innerHTML += cardHTML;
    }
  });
  // Выполним корректировку высоты карточек
  const cards = document.getElementsByClassName("box__card");
  for (let i = 0; i < cards.length; i++) {
    const width = cards[i].offsetWidth;
    cards[i].style.height = width * 0.6 + "px";
  }
};

const getCards = async function (page = 1) {
  try {
    const response = await api.getPaginationCarts(page);
    const data = await response.json();
    pages = data.total_pages;
    if (data.data && Array.isArray(data.data)) {
      return data.data;
    } else {
      throw new Error("Invalid data format.");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
};

// Начальная загрузка пользователей (первая страница)
getCards().then((users) => renderUsersCards(users));

// Функция для обработки события кнопки пагинации

async function handlePaginationButtonClick(page) {
  const users = await getCards(page);
  renderUsersCards(users);
}

const prevPageButton = document.getElementById("prevPage");
const nextPageButton = document.getElementById("nextPage");
let currentPage = 1;

prevPageButton.addEventListener("click", () => {
  currentPage = Math.max(1, currentPage - 1);
  handlePaginationButtonClick(currentPage);
});

nextPageButton.addEventListener("click", () => {

  if (pages > currentPage) {
    currentPage++;
    handlePaginationButtonClick(currentPage);
  }
});
