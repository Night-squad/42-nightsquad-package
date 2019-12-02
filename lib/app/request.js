/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   request.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: lmartin <lmartin@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/02 06:50:48 by lmartin           #+#    #+#             */
/*   Updated: 2019/12/02 07:47:07 by lmartin          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

module.exports = {

	// Get all coalitions (it means ALL COALITIONS (US, FR, BE, etc..))
	getCoalitions: async function()
	{
		return new Promise ((resolve, reject) => {
			$.ajax({
				url : 'https://api.nightsquad.space/getCoalitions',
				type : 'POST',
				dataType: 'JSON',
				success : function(json, statut) {
					resolve(json);
				}
			});
		});
	},

	// Get User Profile
	getMe: async function()
	{
		return new Promise ((resolve, reject) => {
			$.ajax({
				url : 'https://api.nightsquad.space/getMe',
				type : 'POST',
				dataType: 'JSON',
				success : function(json, statut) {
					resolve(json);
				}
			});
		});
	},

	// Try to connect to database
	tryConnection: async function()
	{
		return new Promise ((resolve, reject) => {
			$.ajax({
				url : 'https://api.nightsquad.space/tryConnection',
				type : 'POST',
				dataType: 'JSON',
				success : function(json, statut) {
					resolve(json);
				}
			});
		});
	},

	// Check if you are connected or not
	isConnected: async function()
	{
		return new Promise ((resolve, reject) => {
			$.ajax({
				url : 'https://api.nightsquad.space/isConnected',
				type : 'POST',
				dataType: 'JSON',
				success : function(json, statut) {
					resolve(json);
				}
			});
		});
	},

	// Disconnect the logged account
	disconnect: async function()
	{
		return new Promise ((resolve, reject) => {
			$.ajax({
				url : 'https://api.nightsquad.space/disconnect',
				type : 'POST',
				dataType: 'JSON',
				success : function(json, statut) {
					resolve(json);
				}
			});
		});
	}

};
