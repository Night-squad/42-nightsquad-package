'use babel';

export default class HomeXPView {

	constructor() {
		this.xp = document.createElement('div');
		this.xp.classList.add('progress-circle');
		this.disconnect = document.createElement('div');
		this.disconnect.classList.add('disconnect');
		this.disconnect.id = "disconnect";
		this.img_disconnect = document.createElement('img');
		this.img_disconnect.classList.add('img_disconnect');
		this.img_disconnect.src = 'https://nightsquad.space/assets/img/logout.svg';
		this.disconnect.appendChild(this.img_disconnect);
		this.level = document.createElement('div');
		this.level.classList.add('level');
		this.percentage = document.createElement('div');
		this.percentage.classList.add('percentage');
		this.masque = document.createElement('div');
		this.masque.classList.add('progress-masque');
		this.barre = document.createElement('div');
		this.barre.classList.add('progress-barre');
		this.sup50 = document.createElement('div');
		this.sup50.classList.add('progress-sup50');
		this.xp.appendChild(this.level);
		this.xp.appendChild(this.percentage);
		this.xp.appendChild(this.masque);
		this.masque.appendChild(this.barre);
		this.masque.appendChild(this.sup50);
		this.xp.appendChild(this.disconnect);

		this.xp.addEventListener("mouseover", function(){
			$('#disconnect').fadeIn("fast");
		});
		this.xp.addEventListener("mouseleave", function(){
			$('#disconnect').fadeOut("fast");
		});
	}

	set_xp(xp)
	{
		this.xp_value = xp;
		$(this.xp).fadeOut("slow", () => {
			this.xp.setAttribute("data-value", 0);
			this.level.setAttribute("level", parseInt(xp));
			this.percentage.setAttribute("data-value", parseInt((xp % 1) * 100));
			$(this.xp).fadeIn("slow", () => {
				var xpBar = this.xp;
				for (var i = 0; i < parseInt((xp % 1) * 100); i += 1) {
					(function(ind) {
						setTimeout(function(){
							xpBar.setAttribute("data-value", ind);
						}, 10 * ind);
					})(i);
				}
			});
		});
	}

	update_xp(xp)
	{
		if (this.xp_value != xp)
		{
			this.xp_value = xp;
			$(this.xp).fadeOut("slow", () => {
				this.xp.setAttribute("data-value", 0);
				this.level.setAttribute("level", parseInt(xp));
				this.percentage.setAttribute("data-value", parseInt((xp % 1) * 100));
				$(this.xp).fadeIn("slow", () => {
					var xpBar = this.xp;
					for (var i = 0; i < parseInt((xp % 1) * 100); i += 1) {
						(function(ind) {
							setTimeout(function(){
								xpBar.setAttribute("data-value", ind);
							}, 10 * ind);
						})(i);
					}
				});
			});
		}
	}

	getDisconnect() {
		return this.disconnect;
	}

	getElement()
	{
		return this.xp;
	}

}
