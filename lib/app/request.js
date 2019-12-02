/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   request.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: lmartin <lmartin@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/02 06:50:48 by lmartin           #+#    #+#             */
/*   Updated: 2019/12/02 07:12:08 by lmartin          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

module.exports = {

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

}
