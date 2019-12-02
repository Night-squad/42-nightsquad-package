'use babel';

export default class HomeCoalitionsView {

	constructor() {
		this.coalition = document.createElement('div');
		this.coalition.classList.add('coalition');
		this.coalition.classList.add('left-item');

		this.user_coalition = document.createElement('div');
		this.user_coalition.classList.add('user_coalition');
		this.user_coalition.classList.add('line');
		this.coalition.appendChild(this.user_coalition);

		this.coalition_tab = document.createElement('div');
		this.coalition_tab.classList.add('coalition_tab');
		this.coalition.appendChild(this.coalition_tab);
		this.first = document.createElement('div');
		this.first.classList.add('line');
		this.coalition_tab.appendChild(this.first);
		this.second = document.createElement('div');
		this.second.classList.add('line');
		this.coalition_tab.appendChild(this.second);
		this.third = document.createElement('div');
		this.third.classList.add('line');
		this.coalition_tab.appendChild(this.third);
		this.fourth = document.createElement('div');
		this.fourth.classList.add('line');
		this.coalition_tab.appendChild(this.fourth);
	}

	set_user_coalition(coalition)
	{
		var img = document.createElement('img');
		if (coalition.coalition_id == 45)
			img.src = 'https://nightsquad.space/assets/img/federation_ban.svg';
		if (coalition.coalition_id == 46)
			img.src = 'https://nightsquad.space/assets/img/alliance_ban.svg';
		if (coalition.coalition_id == 47)
			img.src = 'https://nightsquad.space/assets/img/order_ban.svg';
		if (coalition.coalition_id == 48)
			img.src = 'https://nightsquad.space/assets/img/assembly_ban.svg';
		this.user_coalition.appendChild(img);
		var span_score = document.createElement('span');
		span_score.classList.add('score');
		var trophy = document.createElement('img');
		trophy.src = 'https://nightsquad.space/assets/img/trophy.svg';
		trophy.classList.add('trophy');
		this.user_coalition.appendChild(trophy);
		span_score.textContent = coalition.score;
		this.user_coalition.appendChild(span_score);
		var span_rank = document.createElement('span');
		var rank = document.createElement('img');
		rank.src = 'https://nightsquad.space/assets/img/grade.svg';
		rank.classList.add('grade');
		this.user_coalition.appendChild(rank);
		span_rank.textContent = coalition.rank;
		span_rank.classList.add('rank');
		this.user_coalition.appendChild(span_rank);
	}

	set_coalition(coalition, element)
	{
		element.style.borderLeft = coalition.color + ' 2px solid';
		var h3 = document.createElement('h3');
		h3.textContent = coalition.name;
		element.appendChild(h3);
		var span = document.createElement('span');
		span.textContent = coalition.score;
		element.appendChild(span);
	}

	set_all_coalitions(tab)
	{
		this.set_coalition(tab[0], this.first);
		this.set_coalition(tab[1], this.second);
		this.set_coalition(tab[2], this.third);
		this.set_coalition(tab[3], this.fourth);
	}

	getElement()
	{
		return this.coalition;
	}

}
