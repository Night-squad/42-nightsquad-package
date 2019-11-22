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

    	const connectButton = document.createElement('button');
    	connectButton.textContent = 'Connect';
    	connectButton.classList.add('connectButton');
		this.element.appendChild(logo);
    	this.element.appendChild(connectButton);
		this.getTitle = () => '42 UI';
	}
	// Returns an object that can be retrieved when package is activated
	serialize() {}

	// Tear down any state and detach
	destroy() {
		this.element.remove();
	}

	getElement() {
		return this.element;
	}

}
