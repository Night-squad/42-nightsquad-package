'use babel';

export default class HomeDataView {

	constructor() {
		this.data = document.createElement('div');
		this.data.classList.add('my-data');
		this.data.classList.add('right-item');

		this.logtime = document.createElement('div');
		this.logtime.classList.add('line');
		this.data.appendChild(this.logtime);

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
	}

	set_logtime(logtime)
	{
		var h3 = document.createElement('h3');
		h3.textContent = 'Week Logtime';
		this.logtime.appendChild(h3);
		var line = document.createElement('div');
		this.logtime.appendChild(line);
		var element = document.createElement('span');
		element.textContent = logtime;
		this.logtime.appendChild(element);
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

	set_data(logtime, location, wallet, eval_point, cursus, blackhole)
	{
		this.set_logtime(logtime);
		this.set_location(location);
		this.set_wallet(wallet);
		this.set_eval_point(eval_point);
		this.set_cursus(cursus);
		this.set_blackhole(blackhole);
	}

	update_data(logtime, location, wallet, eval_point, cursus, blackhole)
	{
		
		return (0);
	}

	getElement()
	{
		return this.data;
	}

}
