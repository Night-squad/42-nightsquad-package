'use babel';

export default class HomeAgendaView {

	constructor() {
		this.agenda = document.createElement('div');
		this.agenda.classList.add('agenda');
		this.agenda.classList.add('left-item');

		this.agenda_tab = document.createElement('div');
		this.agenda_tab.classList.add('agenda_tab');
		this.agenda.appendChild(this.agenda_tab);

		this.tab = [{}];
		/**
		this.first = document.createElement('div');
		this.first.classList.add('line');
		this.first_h3 = document.createElement('h3');
		this.first_span = document.createElement('span');
		this.first.appendChild(this.first_h3);
		this.first.appendChild(this.first_span);
		this.agenda_tab.appendChild(this.first);
		this.second = document.createElement('div');
		this.second.classList.add('line');
		this.second_h3 = document.createElement('h3');
		this.second_span = document.createElement('span');
		this.second.appendChild(this.second_h3);
		this.second.appendChild(this.second_span);
		this.agenda_tab.appendChild(this.second);
		this.third = document.createElement('div');
		this.third.classList.add('line');
		this.third_h3 = document.createElement('h3');
		this.third_span = document.createElement('span');
		this.third.appendChild(this.third_h3);
		this.third.appendChild(this.third_span);
		this.agenda_tab.appendChild(this.third);
		this.fourth = document.createElement('div');
		this.fourth.classList.add('line');
		this.fourth_h3 = document.createElement('h3');
		this.fourth_span = document.createElement('span');
		this.fourth.appendChild(this.fourth_h3);
		this.fourth.appendChild(this.fourth_span);
		this.agenda_tab.appendChild(this.fourth);
		**/
	}

	update_user_agenda(agenda, login)
	{
		var new_login;
		var previous_length = this.tab.length;
		for(var i in agenda)
		{
			var time = ((new Date(agenda[i].begin_at)).getTime()) - ((new Date()).getTime());
			if (login == agenda[i].corrector.login)
			{
				new_login = agenda[i].correcteds[0].login;
				this.tab[i].status = 1; // YOU CORRECT
			}
			else
			{
				new_login = agenda[i].corrector.login;
				this.tab[i].status = 0; // GET CORRECTED
			}
			if (!this.tab[i].div || (this.tab[i].name != agenda[i].team.project_gitlab_path.split(/\/|\\/).pop()) || (this.tab[i].login != new_login))
			{
				if (!this.tab[i].div)
				{
					this.tab[i].div = document.createElement('div');
					this.tab[i].div.classList.add('line');
					this.tab[i].h3 = document.createElement('h3');
					this.tab[i].span = document.createElement('span');
					this.tab[i].div.appendChild(this.tab[i].h3);
					this.tab[i].div.appendChild(this.tab[i].span);
				}
				this.tab[i].name = agenda[i].team.project_gitlab_path.split(/\/|\\/).pop();
				this.tab[i].login = new_login;
				if (this.tab[i].status == 0)
					this.tab[i].h3.textContent = ((this.tab[i].login) ? this.tab[i].login : 'someone') + ' → '+ this.tab[i].name;
				if (this.tab[i].status == 1)
					this.tab[i].h3.textContent = ((this.tab[i].login) ? this.tab[i].login : 'someone') + ' ← '+ this.tab[i].name;
			}
			var hours = parseInt(((time < 0) ? -time : time) / (1000 * 60 * 60));
			var minutes = parseInt(((time < 0) ? -time : time) / (1000 * 60) % 60);
			if (!this.tab[i].time || this.tab[i].time.hours != hours || this.tab[i].time.minutes != minutes)
			{
				this.tab[i].time = {};
				this.tab[i].time.hours = hours;
				this.tab[i].time.minutes = minutes;
				var span = this.tab[i].span;
				$(span).fadeOut("slow", () => {
					if (time >= 0)
						span.textContent = ((hours < 10) ? '0' + hours : hours) + ':' + ((minutes < 10) ? '0' + minutes : minutes);
					else
						span.textContent = '-' + (((hours < 10) ? '0' + hours : hours) + ':' + ((minutes < 10) ? '0' + minutes : minutes));
					$(span).fadeIn();
				});
			}
		}
		i = 0;
		while (this.tab[i])
		{
			if (this.agenda_tab.contains(this.tab[i].div))
				this.agenda_tab.removeChild(this.tab[i].div);
			if (!agenda[i])
				this.tab.splice(i, 1);
			else
				this.agenda_tab.appendChild(this.tab[i].div);
			i++;
		}
		var length = this.tab.length;
		if (length != previous_length && length == 0)
		{
			this.tab = [{}];
			this.tab[0].status = -1;
			this.tab[0].div = document.createElement('div');
			this.tab[0].div.classList.add('line');
			this.tab[0].h3 = document.createElement('h3');
			this.tab[0].span = document.createElement('span');
			this.tab[0].div.appendChild(this.tab[0].h3);
			this.tab[0].div.appendChild(this.tab[0].span);
			this.tab[0].name = '';
			this.tab[0].login = '';
			this.tab[0].time = 0;
			this.tab[0].h3.textContent = 'You are free';
			this.tab[0].span.textContent = '🕊️';
			this.agenda_tab.appendChild(this.tab[0].div);
		}
	}

	getElement()
	{
		return this.agenda;
	}

}
