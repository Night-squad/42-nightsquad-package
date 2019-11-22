'use babel';

import 42NightsquadPackageView from './42-nightsquad-package-view';
import { CompositeDisposable } from 'atom';

export default {

  42NightsquadPackageView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.42NightsquadPackageView = new 42NightsquadPackageView(state.42NightsquadPackageViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.42NightsquadPackageView.getElement(),
      visible: true
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      '42-nightsquad-package:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.42NightsquadPackageView.destroy();
  },

  serialize() {
    return {
      42NightsquadPackageViewState: this.42NightsquadPackageView.serialize()
    };
  },

  toggle() {
    console.log('42NightsquadPackage was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
