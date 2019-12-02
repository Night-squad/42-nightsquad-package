'use babel';

export default class LoadingView {

	constructor() {
		this.loading = document.createElement('div');
		this.loading.classList.add('loading');
		this.loading.innerHTML = '<lottie-player src="https://nightsquad.space/assets/json/lottie.json"  background="transparent" speed="1" style="height: 100%; width: 100%;" loop autoplay > </lottie-player>';
	}

	show(view) {
		view.appendChild(this.loading);
	}

	hide(view) {
		if (view.contains(this.loading))
			view.removeChild(this.loading);
	}

}
