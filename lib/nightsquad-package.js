'use babel';

import NightsquadPackageView from './nightsquad-package-view';
import { CompositeDisposable } from 'atom';

export default {

  nightsquadPackageView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.nightsquadPackageView = new NightsquadPackageView(state.nightsquadPackageViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.nightsquadPackageView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'nightsquad-package:toggle': () => this.toggle()
    }));
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
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
