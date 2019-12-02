'use babel';

export default class ConnectionView {

	constructor() {
		this.logo = document.createElement('img');
		this.logo.src = 'https://nightsquad.space/assets/img/logo.svg'
		this.logo.classList.add('logo');
		this.barConnect = document.createElement('div');
		this.barConnect.classList.add('barConnect');
		this.connectButton = document.createElement('button');
		this.connectButton.textContent = 'Connect';
		this.connectButton.classList.add('connectButton');
		this.linkwebsite = document.createElement('a');
		this.linkwebsite.href = 'https://nightsquad.space/';
		this.website = document.createElement('img');
		this.website.classList.add('website');
		this.website.src = 'https://nightsquad.space/assets/img/www.svg';
		this.linkwebsite.appendChild(this.website);
		this.linkgithub = document.createElement('a');
		this.linkgithub.href = 'https://github.com/Night-squad';
		this.github = document.createElement('img');
		this.github.classList.add('github');
		this.github.src = 'https://nightsquad.space/assets/img/github.svg';
		this.linkgithub.appendChild(this.github);
		this.barConnect.appendChild(this.linkgithub);
		this.barConnect.appendChild(this.connectButton);
		this.barConnect.appendChild(this.linkwebsite);
	}

	show(view) {
		view.appendChild(this.logo);
		view.appendChild(this.barConnect);
	}

	hide(view) {
		if (view.contains(this.logo))
			view.removeChild(this.logo);
		if (view.contains(this.barConnect))
			view.removeChild(this.barConnect);
	}

	getConnectButton() {
		return (this.connectButton);
	}

}
