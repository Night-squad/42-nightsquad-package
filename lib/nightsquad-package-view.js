'use babel';

export default class NightsquadPackageView {

  	constructor(serializedState) {
    	// Create root element
    	this.element = document.createElement('div');
    	this.element.classList.add('nightsquad-package');

    	// Create message element
		this.logo = document.createElement('img');
		this.logo.src = 'https://devdio.fr/42/logo.png'
		this.logo.classList.add('logo');

		/** CONNECTED INTERFACE **/
		this.home = document.createElement('div');
		this.home.classList.add('home');

		this.login = document.createElement('div');
		this.home.appendChild(this.login);


		/** CONNECTION **/
    	this.connectButton = document.createElement('button');
    	this.connectButton.textContent = 'Connect';
    	this.connectButton.classList.add('connectButton');
		this.getTitle = () => '42 UI';
	}
	// Returns an object that can be retrieved when package is activated
	serialize() {}

	// Tear down any state and detach
	destroy() {
		this.element.remove();
	}

	set_login(login)
	{
		this.login.textContent = login;
	}

	showHome()
	{
		this.element.appendChild(this.home);
	}

	hideConnection() {
		if (this.element.contains(this.logo))
			this.element.removeChild(this.logo);
		if (this.element.contains(this.connectButton))
			this.element.removeChild(this.connectButton);
	}

	showConnection() {
		this.element.appendChild(this.logo);
		this.element.appendChild(this.connectButton);
	}

	getConnectButton() {
		return this.connectButton;
	}

	getElement() {
		return this.element;
	}

}
