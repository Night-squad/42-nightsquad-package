'use babel';
import ConnectionView from './connection-view';
import LoadingView from './loading-view';
import HomeView from './home-view';
import lottiefile from './lottieplayer';
$ = jQuery = require('jquery');

export default class NightsquadPackageView {

  	constructor(serializedState) {
    	// Create root element
    	this.element = document.createElement('div');
    	this.element.classList.add('nightsquad-package');

		/** CONNECTION **/
		this.connectionView = new ConnectionView();

		/** LOADING PART **/
		this.loadingView = new LoadingView();

		this.getTitle = () => '42 UI';
	}

	createHome()
	{
		this.homeView = new HomeView();
	}

	getHome()
	{
		return this.homeView;
	}

	set_data(logtime, location, wallet, eval_point, cursus, blackhole)
	{
		this.homeView.getData().set_data(logtime, location, wallet, eval_point, cursus, blackhole);
	}

	set_user_coalition(coalition)
	{
		this.homeView.getCoalitions().set_user_coalition(coalition);
	}

	set_all_coalitions(tab)
	{
		this.homeView.getCoalitions().set_all_coalitions(tab);
	}

	update_all_coalitions(tab)
	{
		this.homeView.getCoalitions().update_all_coalitions(tab);
	}

	set_xp(xp)
	{
		this.homeView.getXP().set_xp(xp);
	}

	hideHome()
	{
		this.homeView.hide(this.element);
		this.createHome();
	}

	showHome()
	{
		this.homeView.show(this.element);
	}

	hideConnection() {
		this.connectionView.hide(this.element);
	}

	showConnection() {
		this.connectionView.show(this.element);
	}

	getConnectButton() {
		return this.connectionView.getConnectButton();
	}

	hideLoading()
	{
		this.loadingView.hide(this.element);
	}

	showLoading()
	{
		this.loadingView.show(this.element);
	}

	getDisconnect() {
		return this.homeView.getXP().getDisconnect();
	}

	serialize() {return (this.element);}

	destroy()
	{
		this.hideHome();
		this.hideConnection();
		if (this.element)
			this.element.remove();
	}

	getElement() {
		return this.element;
	}
}
