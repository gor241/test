class Api {
	constructor() {
		this.url = "https://reqres.in/api/users";
	}
	getCarts() {
		return fetch(`${this.url}`);
	}
	getPaginationCarts(page) {
		return fetch(`${this.url}?page=${page}`);
	}
}