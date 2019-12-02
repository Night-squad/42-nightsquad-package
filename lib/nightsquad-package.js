'use babel';

import NightsquadPackageView from './view/nightsquad-package-view';
import { CompositeDisposable } from 'atom';
$ = jQuery = require('jquery');

var request = require('./app/request.js');
var home = require('./app/home.js');
var connection = require('./app/connection.js');

export default {

	nightsquadPackageView: null, // View
	is_activate: false, // Toggle or not toggle window
	last_toggle: new Date(), // Anti-flood
	subscriptions: null, // Toggle shortcuts

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
		var subscriptions = this.subscriptions;
		// Wait for every atom's panels to be ready to put elem in right place
		$(document).ready(function (){
			let elem;
			atom.workspace.getPanes().forEach(function (pane) {
				if (pane.getElement().children[0].getAttribute('location') == 'left')
					elem = pane.getElement();
			});
			elem.parentNode.insertBefore(view.getElement(), elem);
			view.createHome();
			// Connection button listener
			view.getConnectButton().addEventListener('click', function(){
				request.tryConnection().then(function(json) {
					// console.log(json);
					if (json.response == "true")
					{
						view.hideConnection();
						connection.checkConnected(view);
						return (0);
					}
					else {
						var win = window.open("https://api.intra.42.fr/oauth/authorize?client_id=f32234ac42dcf5aa99863dedbe9f5e5e0906795d3115b9ca41d3ce7bf05e89ff&redirect_uri=https%3A%2F%2Fapi.nightsquad.space%2F&response_type=code", "Connection", "width=500,height=720");
						var timer = setInterval(function ()
						{
							if (win.closed)
							{
								clearInterval(timer);
								connection.checkConnected(view);
								return (0);
							}
						}, 500);
					}
				});
			});
			connection.checkConnected(view);
		});
	},

	deactivate() {
		this.nightsquadPackageView.destroy();
	},

	serialize() {
		return (0);
	},

	toggle() {
		// Anti-flood
		if (new Date() - this.last_toggle > 100)
		{
			if (this.is_activate)
			{
				this.deactivate();
				this.is_activate = false;
			}
			else
			{
				this.newPackageView({});
			}
			this.last_toggle = new Date();
		}
    	return (0);
	}

};
