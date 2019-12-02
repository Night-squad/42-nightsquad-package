'use babel';

import NightsquadPackageView from './view/nightsquad-package-view';
import { CompositeDisposable } from 'atom';
$ = jQuery = require('jquery');

var request = require('./app/request.js');

function setHomeInterface(view)
{
	request.getMe().then(function(json) {
		console.log(json);
		var cursus_name = null;
		var blackhole;
		json.cursus_users.forEach(function (cursus) {
			if (cursus.cursus_id == 1 && cursus_name == null)
			{
				view.set_xp(cursus.level);
				cursus_name = cursus.cursus.name;
				blackhole = parseInt(((((Date.parse(cursus.blackholed_at) - (new Date).getTime()) / 1000 ) / 60) / 60) / 24);
			}
			if (cursus.cursus_id == 21)
			{
				view.set_xp(cursus.level);
				cursus_name = cursus.cursus.name;
				blackhole = parseInt(((((Date.parse(cursus.blackholed_at) - (new Date).getTime()) / 1000 ) / 60) / 60) / 24);
			}
		});
		json.coalitions.forEach(function(coalition){
			if (coalition.coalition_id >= 45 && coalition.coalition_id <= 48)
				view.set_user_coalition(coalition);
		});
		if (!json.location)
			json.location = 'Unavailable';
		view.set_data(json.location, json.wallet, json.correction_point, cursus_name, blackhole);
	});
	request.getCoalitions().then(function(json) {
		console.log(json);
		var tab = [{},{},{},{}];
		var i = 0;
		json.forEach(function(coalition){
			if (coalition._id >= 45 && coalition._id <= 48)
			{
				tab[i] = coalition;
				i++;
			}
		});
		const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
		const byValue = (a,b) => b - a;
		const toScore = e => e.score;
		const byScore = sortByMapped(toScore,byValue);
		view.set_all_coalitions(tab.sort(byScore));
	});
}

function checkConnected(view)
{
	view.hideConnection();
	view.showLoading();
	request.isConnected().then(function(json) {
		if (json.response == "true")
		{
			setHomeInterface(view);
			view.getDisconnect().addEventListener("click", function(){
				request.disconnect().then(function(json) {
					view.hideHome();
					view.showConnection();
				});
			});
			view.hideLoading();
			view.showHome();
		}
		else {
			view.hideLoading();
			view.showConnection();
		}
	});
};

export default {

  nightsquadPackageView: null,
  is_activate: false,
  last_toggle: new Date(),
  panel: null,
  subscriptions: null,

  activate(state) {
	// Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
	this.subscriptions = new CompositeDisposable();

	// Register command that toggles this view
	this.subscriptions.add(atom.commands.add('atom-workspace', {
		'nightsquad-package:toggle': () => this.toggle()
	}));
	this.newPackageView(state);
  },

  newPackageView(state)
  {
	this.is_activate = true;
	this.nightsquadPackageView = new NightsquadPackageView(state.nightsquadPackageViewState);

	var view = this.nightsquadPackageView;
	this.panel = view.getElement();
	var subscriptions = this.subscriptions;
	$(document).ready(function (){
		let elem;
		atom.workspace.getPanes().forEach(function (pane) {
			if (pane.getElement().children[0].getAttribute('location') == 'left')
				elem = pane.getElement();
		});
		elem.parentNode.insertBefore(view.getElement(), elem);
		view.createHome();
		view.getConnectButton().addEventListener('click', function(){
			request.tryConnection().then(function(json) {
				console.log(json);
				if (json.response == "true")
				{
					view.hideConnection();
					checkConnected(view);
					return (0);
				}
				else {
					var win = window.open("https://api.intra.42.fr/oauth/authorize?client_id=f32234ac42dcf5aa99863dedbe9f5e5e0906795d3115b9ca41d3ce7bf05e89ff&redirect_uri=https%3A%2F%2Fapi.nightsquad.space%2F&response_type=code", "Connection", "width=500,height=720");
					var timer = setInterval(function ()
					{
						if (win.closed)
						{
							clearInterval(timer);
							checkConnected(view);
							return (0);
						}
					}, 500);
				}
			});
		});
		checkConnected(view);
	});
  },

  deactivate() {
    this.nightsquadPackageView.destroy();
  },

  serialize() {
    return (0);
  },

  toggle() {
	if (new Date() - this.last_toggle > 100)
	{
		if (this.is_activate)
		{
			this.deactivate();
			if (this.panel)
				this.panel.remove();
			this.is_activate = false;
		}
		else
			this.newPackageView({});
		this.last_toggle = new Date();
	}
    return (0);
  }

};
