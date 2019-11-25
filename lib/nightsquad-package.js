'use babel';

import NightsquadPackageView from './nightsquad-package-view';
import { CompositeDisposable } from 'atom';
$ = jQuery = require('jquery');

function checkConnected(view) {
	$.ajax({
		url : 'https://api.nightsquad.space/isConnected',
		type : 'POST',
		dataType: 'JSON',
		success : function(json, statut) {
			if (json.response == "true")
			{
				$.ajax({
					url : 'https://api.nightsquad.space/getMe',
					type : 'POST',
					dataType: 'JSON',
					success : function(json, statut) {
						console.log(json);
						view.hideConnection();
						view.set_login(json.login);
						json.cursus_users.forEach(function (cursus) {
							console.log(cursus);
							if (cursus.cursus_id == 21)
								view.set_xp(cursus.level);
						});
						view.showHome();
					}
				});
			}
			else {
				view.showConnection();
				view.getConnectButton().addEventListener('click', function(){
					var win = window.open("https://api.intra.42.fr/oauth/authorize?client_id=f32234ac42dcf5aa99863dedbe9f5e5e0906795d3115b9ca41d3ce7bf05e89ff&redirect_uri=https%3A%2F%2Fapi.nightsquad.space%2F&response_type=code", "Connection", "width=500,height=720");
					var timer = setInterval(function ()
					{
						if (win.closed)
						{
							checkConnected(view);
							clearInterval(timer);
						}
					}, 500);
				});
			}
		}
	});
};

export default {

  nightsquadPackageView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {

    this.nightsquadPackageView = new NightsquadPackageView(state.nightsquadPackageViewState);
	let elem = atom.workspace.getPanes()[1].getElement();
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

	checkConnected(this.nightsquadPackageView);
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.nightsquadPackageView.destroy();
  },

  serialize() {
    return {
      nightsquadPackageViewState: this.nightsquadPackageView.serialize()
    };
  },

  toggle() {
    console.log('NightsquadPackage was toggled!');
    return (0);
  }

};
