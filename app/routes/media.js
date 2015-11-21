import Ember from 'ember';

export default Ember.Route.extend({

	titleToken: 'Media',

	renderTemplate() {

		this.render( 'admin', {
			controller: 'media'
		});

	},

	model() {
		console.log( this.store.query( 'file' ) );
	}

});
