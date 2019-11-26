'use babel';

import NightsquadPackageView from './nightsquad-package-view';
import { CompositeDisposable } from 'atom';
$ = jQuery = require('jquery');

function checkConnected(view) {
	//var user_id;
	$.ajax({
		url : 'https://api.nightsquad.space/isConnected',
		type : 'POST',
		dataType: 'JSON',
		success : function(json, statut) {
			if (json.response == "true")
			{
				setTimeout(function () {
					$.ajax({
						url : 'https://api.nightsquad.space/getMe',
						type : 'POST',
						dataType: 'JSON',
						success : function(json, statut) {
							console.log(json);
							view.hideConnection();
							// view.set_login(json.login);
							var cursus_name;
							var blackhole;
							//user_id = json.id;
							json.cursus_users.forEach(function (cursus) {
								if (cursus.cursus_id == 21)
								{
									view.set_xp(cursus.level);
									cursus_name = cursus.cursus.name;
									blackhole = parseInt(((((Date.parse(cursus.blackholed_at) - (new Date).getTime()) / 1000 ) / 60) / 60) / 24);
								}
							});
							view.set_data(json.location, json.wallet, json.correction_point, cursus_name, blackhole);
						}
					}).then(function() {
						setTimeout(function () {
							$.ajax({
								url : 'https://api.nightsquad.space/getCoalitions',
								type : 'POST',
								dataType: 'JSON',
								//data: {
								//	user_id: user_id
								//},
								success : function(json, statut) {
									var tab = [{},{},{},{}];
									var i = 0;
									json.forEach(function(coalition){
										if (coalition.id >= 45 && coalition.id <= 48)
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
								}
							});
							view.getDisconnect().addEventListener("click", function(){
								$.ajax({
									url : 'https://api.nightsquad.space/disconnect',
									type : 'POST',
									dataType: 'JSON',
									success : function(json, statut) {
										view.hideHome();
										checkConnected(view);
										return (0);
									}
								});
							});
							view.showHome();
						}, (1000));
					});
				}, 1000);
			}
			else {
				view.showConnection();
			}
		}
	});
};

export default {

  nightsquadPackageView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
	$(document).ready(function (){
	    this.nightsquadPackageView = new NightsquadPackageView(state.nightsquadPackageViewState);
		let elem;
		atom.workspace.getPanes().forEach(function (pane) {
			if (pane.getElement().children[0].getAttribute('location') == 'left')
				elem = pane.getElement();
		});
		elem.parentNode.insertBefore(this.nightsquadPackageView.getElement(), elem);
		// console.log(atom.workspace.getPanes()[1].getElement());
		// this.modalPanel = atom.workspace.getPanes()[1].parent.({
	    //    item: this.nightsquadPackageView.getElement(),
	    //    visible: false
	    // });

	    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
	    this.subscriptions = new CompositeDisposable();

	    // Register command that toggles this view
	    this.subscriptions.add(atom.commands.add('atom-workspace', {
	      	'nightsquad-package:toggle': () => this.toggle()
	    }));
		this.nightsquadPackageView.createHome();
		var view = this.nightsquadPackageView;
		this.nightsquadPackageView.getConnectButton().addEventListener('click', function(){
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
		});
		checkConnected(this.nightsquadPackageView);
	});
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.nightsquadPackageView.destroy();
  },

  serialize() {
    return (0);
  },

  toggle() {
    console.log('NightsquadPackage was toggled!');
    return (0);
  }

};
