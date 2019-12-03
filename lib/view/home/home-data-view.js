'use babel';
$ = jQuery = require('jquery');

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

	create_line(element, title)
	{
		var h3 = document.createElement('h3');
		h3.textContent = title;
		element.appendChild(h3);
		var line = document.createElement('div');
		element.appendChild(line);
		var span = document.createElement('span');
		element.appendChild(span);
		return (span);
	}

	set_logtime(logtime)
	{
		this.logtime_span = this.create_line(this.logtime, 'Week Logtime');
		$(this.logtime_span).fadeOut("slow", () => {
			this.logtime_span.textContent = logtime;
			$(this.logtime_span).fadeIn();
		});
	}

	set_location(location)
	{
		this.location_span = this.create_line(this.location, 'Location');
		$(this.location_span).fadeOut("slow", () => {
			this.location_span.textContent = location;
			$(this.location_span).fadeIn();
		});
	}

	set_wallet(wallet)
	{
		this.wallet_span = this.create_line(this.wallet, 'Wallet');
		$(this.wallet_span).fadeOut("slow", () => {
			this.wallet_span.textContent = wallet + '₳';
			$(this.wallet_span).fadeIn();
		});
	}

	set_eval_point(eval_point)
	{
		this.eval_point_span = this.create_line(this.eval_point, 'Evaluation points')
		$(this.eval_point_span).fadeOut("slow", () => {
			this.eval_point_span.textContent = eval_point;
			$(this.eval_point_span).fadeIn();
		});
	}

	set_cursus(cursus)
	{
		this.cursus_span = this.create_line(this.cursus, 'Cursus');
		$(this.cursus_span).fadeOut("slow", () => {
			this.cursus_span.textContent = cursus;
			$(this.cursus_span).fadeIn();
		});
	}

	set_blackhole(day)
	{
		var div = document.createElement('div');
		this.blackhole.appendChild(div);
		var element = document.createElement('span');
		element.textContent = 'BlackHole in';
		div.appendChild(element);
		this.blackhole_day = document.createElement('h3');
		div.appendChild(this.blackhole_day);

		this.smiley = document.createElement('img');
		this.blackhole.appendChild(div);
		this.blackhole.appendChild(this.smiley);
		$(this.blackhole).fadeOut("slow", () => {
			this.blackhole_day.textContent = day +' days left';
			this.blackhole_day.setAttribute("blackhole_color", (day > 40 ? 'green' : (day < 10 ? 'red' : 'orange')));
			this.smiley.src = 'https://nightsquad.space/assets/img/' + (day > 40 ? 'smile_good.svg' : (day < 10 ? 'smile_bad.svg' : 'smile_mid.svg'));
			$(this.blackhole).fadeIn();
		});
	}

	set_data(logtime, location, wallet, eval_point, cursus, blackhole)
	{
		this.logtime_value = logtime;
		this.location_value = location;
		this.wallet_value = wallet;
		this.eval_point_value = eval_point;
		this.cursus_value = cursus;
		this.blackhole_value = blackhole;
		this.set_logtime(logtime);
		this.set_location(location);
		this.set_wallet(wallet);
		this.set_eval_point(eval_point);
		this.set_cursus(cursus);
		this.set_blackhole(blackhole);
	}

	update_data(logtime, location, wallet, eval_point, cursus, blackhole)
	{
		if (this.logtime_value != logtime)
		{
			this.logtime_value = logtime;
			$(this.logtime_span).fadeOut("slow", () => {
				this.logtime_span.textContent = logtime;
				$(this.logtime_span).fadeIn();
			});
		}
		if (this.location_value != location)
		{
			this.location_value = location;
			$(this.location_span).fadeOut("slow", () => {
				this.location_span.textContent = location;
				$(this.location_span).fadeIn();
			});
		}
		if (this.wallet_value != wallet)
		{
			this.wallet_value = wallet;
			$(this.wallet_span).fadeOut("slow", () => {
				this.wallet_span.textContent = wallet + '₳';
				$(this.wallet_span).fadeIn();
			});
		}
		if (this.eval_point_value != eval_point)
		{
			this.eval_point_value = eval_point;
			$(this.eval_point_span).fadeOut("slow", () => {
				this.eval_point_span.textContent = eval_point;
				$(this.eval_point_span).fadeIn();
			});
		}
		if (this.cursus_value != cursus)
		{
			this.cursus_span.textContent = cursus;
			$(this.cursus_span).fadeOut("slow", () => {
				this.cursus_span.textContent = cursus;
				$(this.cursus_span).fadeIn();
			});
		}
		if (this.blackhole_value != blackhole)
		{
			this.blackhole_value = blackhole;
			$(this.blackhole).fadeOut("slow", () => {
				this.blackhole_day.textContent = blackhole +' days left';
				this.blackhole_day.setAttribute("blackhole_color", (blackhole > 40 ? 'green' : (blackhole < 10 ? 'red' : 'orange')));
				this.smiley.src = 'https://nightsquad.space/assets/img/' + (blackhole > 40 ? 'smile_good.svg' : (blackhole < 10 ? 'smile_bad.svg' : 'smile_mid.svg'));
				$(this.blackhole).fadeIn();
			});
		}
	}

	getElement()
	{
		return this.data;
	}

}
