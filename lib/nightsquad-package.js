'use babel';

import NightsquadPackageView from './nightsquad-package-view';
import { CompositeDisposable } from 'atom';

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

	this.nightsquadPackageView.getConnectButton().addEventListener('click', function(){
		console.log("Fuck");
	})
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
