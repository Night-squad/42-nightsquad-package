/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   connection.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: lmartin <lmartin@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/02 07:48:55 by lmartin           #+#    #+#             */
/*   Updated: 2019/12/02 16:58:52 by lmartin          ###   ########.fr       */
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
				home.setHomeInterface(view)
				//setInterval(() => {
					//view.hideHome();
				//	home.updateHomeInterface(view);
				//}, 60000);
				view.getDisconnect().addEventListener("click", function(){
					request.disconnect().then(function(json) {
						view.hideHome();
						view.showConnection();
					});
				});
				view.hideLoading();
				view.showHome();
			}
			else {
				view.hideLoading();
				view.showConnection();
			}
		});
	}

};
