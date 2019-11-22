'use babel';

export default class NightsquadPackageView {

  	constructor(serializedState) {
    	// Create root element
    	this.element = document.createElement('div');
    	this.element.classList.add('nightsquad-package');

    	// Create message element
		let logo = document.createElement('img');
		logo.src = 'https://devdio.fr/42/logo.png'
		logo.classList.add('logo');

    	this.connectButton = document.createElement('button');
    	this.connectButton.textContent = 'Connect';
    	this.connectButton.classList.add('connectButton');
		this.element.appendChild(logo);
    	this.element.appendChild(this.connectButton);
		this.getTitle = () => '42 UI';
	}
	// Returns an object that can be retrieved when package is activated
	serialize() {}

	// Tear down any state and detach
	destroy() {
		this.element.remove();
	}

	getConnectButton() {
		return this.connectButton;
	}

	getElement() {
		return this.element;
	}

}
