'use babel';

import NightsquadPackageView from './nightsquad-package-view';
import { CompositeDisposable } from 'atom';
$ = jQuery = require('jquery');

function checkConnected(view) {
	view.showLoading();
	var user_id;
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
							var cursus_name = null;
							var blackhole;
							user_id = json.id;
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
							view.set_data(json.location, json.wallet, json.correction_point, cursus_name, blackhole);
						}
					}).then(function() {
						setTimeout(function () {
							$.ajax({
								url : 'https://api.nightsquad.space/getCoalitionById',
								type : 'POST',
								dataType: 'JSON',
								data: {
									user_id: user_id
								},
								success : function(json, statut) {
									console.log(json);
									var coa;
									json.forEach(function(coalition){
										if (coalition.coalition_id >= 45 && coalition.coalition_id <= 48)
										{
											coa = coalition;
										}
									});
									view.set_user_coalition(coa);
								}
							}).then(function(){
								setTimeout(function(){
									$.ajax({
										url : 'https://api.nightsquad.space/getCoalitions',
										type : 'POST',
										dataType: 'JSON',
										//data: {
										//	user_id: user_id
										//},
										success : function(json, statut) {
											console.log(json);
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
										view.hideLoading();
										$.ajax({
											url : 'https://api.nightsquad.space/disconnect',
											type : 'POST',
											dataType: 'JSON',
											success : function(json, statut) {
												view.hideHome();
												view.showConnection();
												return (0);
											}
										});
									});
									view.hideLoading();
									view.showHome();
								}, 1000);
							});
						}, (1000));
					});
				}, 1000);
			}
			else {
				view.hideLoading();
				view.showConnection();
			}
		}
	});
};

export default {

  nightsquadPackageView: null,
  is_activate: false,
  modalPanel: null,
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
	var subscriptions = this.subscriptions;
	$(document).ready(function (){
		let elem;
		atom.workspace.getPanes().forEach(function (pane) {
			if (pane.getElement().children[0].getAttribute('location') == 'left')
				elem = pane.getElement();
		});
		elem.parentNode.insertBefore(view.getElement(), elem);
		// console.log(atom.workspace.getPanes()[1].getElement());
		// this.modalPanel = atom.workspace.getPanes()[1].parent.({
	    //    item: this.nightsquadPackageView.getElement(),
	    //    visible: false
	    // });
		view.createHome();
		view.getConnectButton().addEventListener('click', function(){
			$.ajax({
				url : 'https://api.nightsquad.space/tryConnection',
				type : 'POST',
				dataType: 'JSON',
				success : function(json, statut) {
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
	if (this.is_activate)
	{
		this.deactivate();
		this.is_activate = false;
	}
	else
		this.newPackageView({});
    return (0);
  }

};
