'use babel';
$ = jQuery = require('jquery');

export default class NightsquadPackageView {

  	constructor(serializedState) {
    	// Create root element
    	this.element = document.createElement('div');
    	this.element.classList.add('nightsquad-package');

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
	serialize() {return (this.element)}

	// Tear down any state and detach
	destroy() {
		this.element.remove();
	}

	createHome()
	{
		/** CONNECTED INTERFACE ~ HOME SWEET HOME **/
		this.home = document.createElement('div');
		this.home.classList.add('home');

		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('wrapper');
		this.home.appendChild(this.wrapper);

		/** CALENDAR **/
		this.calendar = document.createElement('div');
		this.calendar.classList.add('calendar');
		this.calendar.classList.add('left-item');

		/** MY-DATA **/
		this.data = document.createElement('div');
		this.data.classList.add('my-data');
		this.data.classList.add('right-item');

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

		this.coalition_tab = document.createElement('div');
		this.coalition_tab.classList.add('coalition_tab');
		this.coalition.appendChild(this.coalition_tab);
		this.first = document.createElement('div');
		this.first.classList.add('line');
		this.coalition_tab.appendChild(this.first);
		this.second = document.createElement('div');
		this.second.classList.add('line');
		this.coalition_tab.appendChild(this.second);
		this.third = document.createElement('div');
		this.third.classList.add('line');
		this.coalition_tab.appendChild(this.third);
		this.fourth = document.createElement('div');
		this.fourth.classList.add('line');
		this.coalition_tab.appendChild(this.fourth);

		/** COMING **/
		this.coming = document.createElement('div');
		this.coming.classList.add('coming');
		this.coming.classList.add('right-item');

		this.wrapper.appendChild(this.calendar);
		this.wrapper.appendChild(this.data);
		this.wrapper.appendChild(this.coalition);
		this.wrapper.appendChild(this.coming);

		/** CIRCLE XP **/
		this.xp = document.createElement('div');
		this.xp.classList.add('progress-circle');
		this.disconnect = document.createElement('div');
		this.disconnect.classList.add('disconnect');
		this.disconnect.id = "disconnect";
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
		this.xp.appendChild(this.disconnect);

		this.xp.addEventListener("mouseover", function(){
			$('#disconnect').fadeIn("fast");
		});
		this.xp.addEventListener("mouseleave", function(){
			$('#disconnect').fadeOut("fast");
		});
		this.home.appendChild(this.xp);
	}

	set_location(location)
	{
		var h3 = document.createElement('h3');
		h3.textContent = 'Location';
		this.location.appendChild(h3);
		var line = document.createElement('div');
		this.location.appendChild(line);
		var element = document.createElement('span');
		element.textContent = location;
		this.location.appendChild(element);
	}

	set_wallet(wallet)
	{
		var h3 = document.createElement('h3');
		h3.textContent = 'Wallet';
		this.wallet.appendChild(h3);
		var line = document.createElement('div');
		this.wallet.appendChild(line);
		var element = document.createElement('span');
		element.textContent = wallet + '₳';
		this.wallet.appendChild(element);
	}

	set_eval_point(eval_point)
	{
		var h3 = document.createElement('h3');
		h3.textContent = 'Evaluation points';
		this.eval_point.appendChild(h3);
		var line = document.createElement('div');
		this.eval_point.appendChild(line);
		var element = document.createElement('span');
		element.textContent = eval_point;
		this.eval_point.appendChild(element);
	}

	set_cursus(cursus)
	{
		var h3 = document.createElement('h3');
		h3.textContent = 'Cursus';
		this.cursus.appendChild(h3);
		var line = document.createElement('div');
		this.cursus.appendChild(line);
		var element = document.createElement('span');
		element.textContent = cursus;
		this.cursus.appendChild(element);
	}

	set_blackhole(day)
	{
		var div = document.createElement('div');
		this.blackhole.appendChild(div);
		var element = document.createElement('span');
		element.textContent = 'BlackHole in';
		div.appendChild(element);
		var h3 = document.createElement('h3');
		h3.textContent = day +' days left';
		h3.setAttribute("blackhole_color", (day > 40 ? 'green' : (day < 10 ? 'red' : 'orange')));
		div.appendChild(h3);

		var smiley = document.createElement('img');
		smiley.src = 'https://nightsquad.space/assets/img/' + (day > 40 ? 'smile_good.svg' : (day < 10 ? 'smile_bad.svg' : 'smile_mid.svg'))
		this.blackhole.appendChild(div);
		this.blackhole.appendChild(smiley);
	}

	set_data(location, wallet, eval_point, cursus, blackhole)
	{
		this.set_location(location);
		this.set_wallet(wallet);
		this.set_eval_point(eval_point);
		this.set_cursus(cursus);
		this.set_blackhole(blackhole);
	}

	set_coalition(coalition, element)
	{
		element.style.borderLeft = coalition.color + ' 2px solid';
		var h3 = document.createElement('h3');
		h3.textContent = coalition.name;
		element.appendChild(h3);
		var span = document.createElement('span');
		span.textContent = coalition.score;;
		element.appendChild(span);
	}

	set_all_coalitions(tab)
	{
		this.set_coalition(tab[0], this.first);
		this.set_coalition(tab[1], this.second);
		this.set_coalition(tab[2], this.third);
		this.set_coalition(tab[3], this.fourth);
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

	hideHome()
	{
		if (this.element.contains(this.home))
			this.element.removeChild(this.home);
		this.home.remove();
		this.createHome();
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

	getDisconnect() {
		return this.disconnect;
	}

}
