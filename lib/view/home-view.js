'use babel';
import HomeAgendaView from './home/home-agenda-view';
import HomeDataView from './home/home-data-view';
import HomeCoalitionsView from './home/home-coalitions-view';
import HomeXPView from './home/home-xp-view';

export default class HomeView {

	constructor() {
		if (this.home)
			this.home.remove();
		/** CONNECTED INTERFACE ~ HOME SWEET HOME **/
		this.home = document.createElement('div');
		this.home.classList.add('home');

		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('wrapper');
		this.home.appendChild(this.wrapper);

		/** AGENDA **/
		this.homeAgendaView = new HomeAgendaView();

		/** DATA **/
		this.homeDataView = new HomeDataView();

		/** COALITION **/
		this.homeCoalitionsView = new HomeCoalitionsView();

		/** COMING **/
		this.coming = document.createElement('div');
		this.coming.classList.add('coming');
		this.coming.classList.add('right-item');

		this.wrapper.appendChild(this.homeAgendaView.getElement());
		this.wrapper.appendChild(this.homeDataView.getElement());
		this.wrapper.appendChild(this.homeCoalitionsView.getElement());
		this.wrapper.appendChild(this.coming);

		/** CIRCLE XP **/
		this.homeXPView = new HomeXPView();

		this.home.appendChild(this.homeXPView.getElement());
	}

	getData()
	{
		return this.homeDataView;
	}

	getCoalitions()
	{
		return this.homeCoalitionsView;
	}

	getAgenda()
	{
		return this.homeAgendaView;
	}

	getXP()
	{
		return this.homeXPView;
	}

	show(view) {
		$(this.home).hide();
		view.appendChild(this.home);
		$(this.home).fadeIn("slow");
	}

	hide(view) {
		if (view.contains(this.home))
			view.removeChild(this.home);
		if (view.home)
			view.home.remove();
	}

}
