/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   home.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: lmartin <lmartin@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/02 07:39:07 by lmartin           #+#    #+#             */
/*   Updated: 2019/12/03 06:24:47 by lmartin          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var request = require('./request.js');

module.exports = {

	updateHomeInterface: function(view)
	{
		request.getMe().then(function(json) {
		});
		request.getCoalitions().then(function(json) {
			var tab = [{},{},{},{}];
			var i = 0;

			// console.log(json);
			// Put every coallitions in array
			json.forEach(function(coalition){
				if (coalition._id >= 45 && coalition._id <= 48)
				{
					tab[i] = coalition;
					i++;
				}
			});
			// Sort coallitions by score
			const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
			const byValue = (a,b) => b - a;
			const toScore = e => e.score;
			const byScore = sortByMapped(toScore,byValue);
			view.update_all_coalitions(tab.sort(byScore));
		});
	},

	// Changing Home Interface with value getting with requests
	setHomeInterface: function(view)
	{
		request.getMe().then(function(json) {
			var cursus_name = null;
			var blackhole;

			console.log(json);
			// Find which cursus is 42cursus or 42
			json.cursus_users.forEach(function (cursus) {
				if ((cursus.cursus_id == 1 && cursus_name == null) || cursus.cursus_id == 21)
				{
					view.set_xp(cursus.level);
					cursus_name = cursus.cursus.name;
					blackhole = parseInt(((((Date.parse(cursus.blackholed_at) - (new Date).getTime()) / 1000 ) / 60) / 60) / 24);
				}
			});
			// get coalition score
			json.coalitions.forEach(function(coalition){
				if (coalition.coalition_id >= 45 && coalition.coalition_id <= 48)
					view.set_user_coalition(coalition);
			});
			// if location is null put Unavailable like intra krkrkrkr
			if (!json.location)
				json.location = 'Unavailable';
			view.set_data(json.week_logtime, json.location, json.wallet, json.correction_point, cursus_name, blackhole);
		});
		request.getCoalitions().then(function(json) {
			var tab = [{},{},{},{}];
			var i = 0;

			console.log(json);
			// Put every coallitions in array
			json.forEach(function(coalition){
				if (coalition._id >= 45 && coalition._id <= 48)
				{
					tab[i] = coalition;
					i++;
				}
			});
			// Sort coallitions by score
			const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
			const byValue = (a,b) => b - a;
			const toScore = e => e.score;
			const byScore = sortByMapped(toScore,byValue);
			view.set_all_coalitions(tab.sort(byScore));
		});
	},

	updateHomeInterface: function(view)
	{
		request.getMe().then(function(json) {
			var cursus_name = null;
			var blackhole;

			console.log(json);
			// Find which cursus is 42cursus or 42
			json.cursus_users.forEach(function (cursus) {
				if ((cursus.cursus_id == 1 && cursus_name == null) || cursus.cursus_id == 21)
				{
					view.set_xp(cursus.level);
					cursus_name = cursus.cursus.name;
					blackhole = parseInt(((((Date.parse(cursus.blackholed_at) - (new Date).getTime()) / 1000 ) / 60) / 60) / 24);
				}
			});
			// get coalition score
			json.coalitions.forEach(function(coalition){
				if (coalition.coalition_id >= 45 && coalition.coalition_id <= 48)
					view.set_user_coalition(coalition);
			});
			// if location is null put Unavailable like intra krkrkrkr
			if (!json.location)
				json.location = 'Unavailable';
			view.update_data(json.week_logtime, json.location, json.wallet, json.correction_point, cursus_name, blackhole);
		});
		request.getCoalitions().then(function(json) {
			var tab = [{},{},{},{}];
			var i = 0;

			console.log(json);
			// Put every coallitions in array
			json.forEach(function(coalition){
				if (coalition._id >= 45 && coalition._id <= 48)
				{
					tab[i] = coalition;
					i++;
				}
			});
			// Sort coallitions by score
			const sortByMapped = (map,compareFn) => (a,b) => compareFn(map(a),map(b));
			const byValue = (a,b) => b - a;
			const toScore = e => e.score;
			const byScore = sortByMapped(toScore,byValue);
			view.update_all_coalitions(tab.sort(byScore));
		});
	}

};
