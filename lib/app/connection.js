/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   connection.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: lmartin <lmartin@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/02 07:48:55 by lmartin           #+#    #+#             */
/*   Updated: 2019/12/08 08:06:32 by lmartin          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var request = require('./request.js');
var home = require('./home.js');

module.exports = {

	// Check if user is connected or not, if it is show Home
	checkConnected: function(view)
	{
		view.hideConnection();
		view.showLoading();
		request.isConnected().then(function(json) {
			if (json.response == "true")
			{
				home.setHomeInterface(view);
				view.showHome();
				var refresh = setInterval(() => {
					home.updateHomeInterface(view, refresh, module.exports.checkConnected);
				}, 10000);
				//setInterval(() => {
				//	view.hideHome();
				//	home.setHomeInterface(view);
				//	view.showHome();
				//}, 5000);
				view.getDisconnect().addEventListener("click", function(){
					request.disconnect().then(function(json) {
						view.hideHome();
						view.showConnection();
						clearInterval(refresh);
					});
				});
				view.hideLoading();
				view.showHome();
			}
			else {
				request.authorize_api().then((json) => {
					if (json != '<!DOCTYPE html><html><head><title>You\'re now connected.</title><script src="/javascripts/close.js"></script></head><h1></h1><p>If this window don\'t close itself, you can now close it :)</p></html>')
					{
						view.hideLoading();
						view.showConnection();
					}
					else
						module.exports.checkConnected(view);
				});
			}
		});
	}

};
