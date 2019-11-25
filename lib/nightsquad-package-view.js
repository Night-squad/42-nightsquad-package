'use babel';

export default class NightsquadPackageView {

  	constructor(serializedState) {
    	// Create root element
    	this.element = document.createElement('div');
    	this.element.classList.add('nightsquad-package');

		/** CONNECTED INTERFACE ~ HOME SWEET HOME **/
		this.home = document.createElement('div');
		this.home.classList.add('home');

		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('wrapper');
		this.home.appendChild(this.wrapper);

		var h2;
		/** CALENDAR **/
		this.calendar = document.createElement('div');
		this.calendar.classList.add('calendar');
		this.calendar.classList.add('left-item');
		h2 = document.createElement('h2');
		h2.textContent = 'Calendar';
		this.calendar.appendChild(h2);

		/** MY-DATA **/
		this.data = document.createElement('div');
		this.data.classList.add('my-data');
		this.data.classList.add('right-item');
		h2 = document.createElement('h2');
		h2.textContent = 'My Data';
		this.data.appendChild(h2);

		this.location = document.createElement('div');
		this.location.classList.add('line');
		this.data.appendChild(this.location);
		this.wallet = document.createElement('div');
		this.wallet.classList.add('line');
		this.data.appendChild(this.wallet);
		this.eval_point = document.createElement('div');
		this.eval_point.classList.add('line');
		this.data.appendChild(this.eval_point);
		this.cursus = document.createElement('div');
		this.cursus.classList.add('line');
		this.data.appendChild(this.cursus);
		this.blackhole = document.createElement('div');
		this.blackhole.classList.add('blackhole_line');
		this.data.appendChild(this.blackhole);

		// this.login = document.createElement('div');
		// this.data.appendChild(this.login);

		/** COALITION **/
		this.coalition = document.createElement('div');
		this.coalition.classList.add('coalition');
		this.coalition.classList.add('left-item');
		h2 = document.createElement('h2');
		h2.textContent = 'Coalition';
		this.coalition.appendChild(h2);

		/** COMING **/
		this.coming = document.createElement('div');
		this.coming.classList.add('coming');
		this.coming.classList.add('right-item');
		h2 = document.createElement('h2');
		h2.textContent = 'INCOMING';
		this.coming.appendChild(h2);

		this.wrapper.appendChild(this.calendar);
		this.wrapper.appendChild(this.data);
		this.wrapper.appendChild(this.coalition);
		this.wrapper.appendChild(this.coming);

		/** CIRCLE XP **/
		this.xp = document.createElement('div');
		this.xp.classList.add('progress-circle');
		this.level = document.createElement('div');
		this.level.classList.add('level');
		this.percentage = document.createElement('div');
		this.percentage.classList.add('percentage');
		this.masque = document.createElement('div');
		this.masque.classList.add('progress-masque');
		this.barre = document.createElement('div');
		this.barre.classList.add('progress-barre');
		this.sup50 = document.createElement('div');
		this.sup50.classList.add('progress-sup50');
		this.xp.appendChild(this.level);
		this.xp.appendChild(this.percentage);
		this.xp.appendChild(this.masque);
		this.masque.appendChild(this.barre);
		this.masque.appendChild(this.sup50);

		this.home.appendChild(this.xp);

		/** CONNECTION **/
		this.logo = document.createElement('img');
		this.logo.src = 'https://devdio.fr/42/logo.png'
		this.logo.classList.add('logo');
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

	set_location(location)
	{
		var h3 = document.createElement('h3');
		h3.textContent = 'Location';
		this.location.appendChild(h3);
		var element = document.createElement('span');
		element.textContent = location;
		this.location.appendChild(element);
	}

	set_wallet(wallet)
	{
		var h3 = document.createElement('h3');
		h3.textContent = 'Wallet';
		this.wallet.appendChild(h3);
		var element = document.createElement('span');
		element.textContent = wallet + '$';
		this.wallet.appendChild(element);
	}

	set_eval_point(eval_point)
	{
		var h3 = document.createElement('h3');
		h3.textContent = 'Eval Point';
		this.eval_point.appendChild(h3);
		var element = document.createElement('span');
		element.textContent = eval_point;
		this.eval_point.appendChild(element);
	}

	set_cursus(cursus)
	{
		var h3 = document.createElement('h3');
		h3.textContent = 'Cursus';
		this.cursus.appendChild(h3);
		var element = document.createElement('span');
		element.textContent = cursus;
		this.cursus.appendChild(element);
	}

	set_blackhole(day)
	{
		var h3 = document.createElement('h3');
		h3.textContent = day +' days left';
		h3.setAttribute("blackhole_color", (day > 40 ? 'green' : (day < 10 ? 'red' : 'orange')));
		this.blackhole.appendChild(h3);
		var element = document.createElement('span');
		element.textContent = 'blackhole absorption';
		this.blackhole.appendChild(element);
	}

	set_data(location, wallet, eval_point, cursus, blackhole)
	{
		this.set_location(location);
		this.set_wallet(wallet);
		this.set_eval_point(eval_point);
		this.set_cursus(cursus);
		this.set_blackhole(blackhole);
	}

	set_xp(xp)
	{
		this.xp.setAttribute("data-value", (xp % 1) * 100);
		this.level.setAttribute("level", parseInt(xp));
		this.percentage.setAttribute("data-value", (xp % 1) * 100);
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
