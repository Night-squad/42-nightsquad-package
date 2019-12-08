/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   request.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: lmartin <lmartin@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/02 06:50:48 by lmartin           #+#    #+#             */
/*   Updated: 2019/12/04 15:52:10 by lmartin          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

module.exports = {

	authorize_api: async function()
	{
		return new Promise ((resolve, reject) => {
			$.ajax({
				url : 'https://api.intra.42.fr/oauth/authorize?client_id=f32234ac42dcf5aa99863dedbe9f5e5e0906795d3115b9ca41d3ce7bf05e89ff&redirect_uri=https%3A%2F%2Fapi.nightsquad.space%2F&response_type=code',
				type : 'GET',
				success : function(json, status) {
					resolve(json);
				},
				error: function (request, error) {
			        console.log(request);
					console.log(error);
			    }
			});
		});
	},

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
	},


	test: async function()
	{
		return new Promise ((resolve, reject) => {
			$.ajax({
				url : 'https://api.nightsquad.space/test',
				type : 'POST',
				dataType: 'JSON',
				success : function(json, statut) {
					resolve(json);
				}
			});
		});
	}

};
