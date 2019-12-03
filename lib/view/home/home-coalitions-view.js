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
		this.first_h3 = document.createElement('h3');
		this.first_span = document.createElement('span');
		this.first.appendChild(this.first_h3);
		this.first.appendChild(this.first_span);
		this.coalition_tab.appendChild(this.first);
		this.second = document.createElement('div');
		this.second.classList.add('line');
		this.second_h3 = document.createElement('h3');
		this.second_span = document.createElement('span');
		this.second.appendChild(this.second_h3);
		this.second.appendChild(this.second_span);
		this.coalition_tab.appendChild(this.second);
		this.third = document.createElement('div');
		this.third.classList.add('line');
		this.third_h3 = document.createElement('h3');
		this.third_span = document.createElement('span');
		this.third.appendChild(this.third_h3);
		this.third.appendChild(this.third_span);
		this.coalition_tab.appendChild(this.third);
		this.fourth = document.createElement('div');
		this.fourth.classList.add('line');
		this.fourth_h3 = document.createElement('h3');
		this.fourth_span = document.createElement('span');
		this.fourth.appendChild(this.fourth_h3);
		this.fourth.appendChild(this.fourth_span);
		this.coalition_tab.appendChild(this.fourth);
	}

	set_user_coalition(coalition)
	{
		this.coalition_id = coalition.coalition_id;
		this.coalition_img = document.createElement('img');
		$(this.coalition_img).fadeOut("slow", () => {
			if (coalition.coalition_id == 45)
				this.coalition_img.src = 'https://nightsquad.space/assets/img/federation_ban.svg';
			if (coalition.coalition_id == 46)
				this.coalition_img.src = 'https://nightsquad.space/assets/img/alliance_ban.svg';
			if (coalition.coalition_id == 47)
				this.coalition_img.src = 'https://nightsquad.space/assets/img/order_ban.svg';
			if (coalition.coalition_id == 48)
				this.coalition_img.src = 'https://nightsquad.space/assets/img/assembly_ban.svg';
			$(this.coalition_img).fadeIn();
		});
		this.user_coalition.appendChild(this.coalition_img);
		this.my_score = coalition.score;
		this.span_score = document.createElement('span');
		this.span_score.classList.add('score');
		var trophy = document.createElement('img');
		trophy.src = 'https://nightsquad.space/assets/img/trophy.svg';
		trophy.classList.add('trophy');
		this.user_coalition.appendChild(trophy);
		$(this.span_score).fadeOut("slow", () => {
			this.span_score.textContent = coalition.score;
			$(this.span_score).fadeIn();
		});
		this.user_coalition.appendChild(this.span_score);
		this.span_rank = document.createElement('span');
		var rank = document.createElement('img');
		rank.src = 'https://nightsquad.space/assets/img/grade.svg';
		rank.classList.add('grade');
		this.user_coalition.appendChild(rank);
		this.my_rank = coalition.rank;
		$(this.span_rank).fadeOut("slow", () => {
			this.span_rank.textContent = coalition.rank;
			$(this.span_rank).fadeIn();
		});
		this.span_rank.classList.add('rank');
		this.user_coalition.appendChild(this.span_rank);
	}

	update_user_coalition(coalition)
	{
		if (this.coalition_id != coalition.coalition_id)
		{
			this.coalition_id = coalition.coalition_id;
			$(this.coalition_img).fadeOut("slow", () => {
				if (coalition.coalition_id == 45)
					this.coalition_img.src = 'https://nightsquad.space/assets/img/federation_ban.svg';
				if (coalition.coalition_id == 46)
					this.coalition_img.src = 'https://nightsquad.space/assets/img/alliance_ban.svg';
				if (coalition.coalition_id == 47)
					this.coalition_img.src = 'https://nightsquad.space/assets/img/order_ban.svg';
				if (coalition.coalition_id == 48)
					this.coalition_img.src = 'https://nightsquad.space/assets/img/assembly_ban.svg';
				$(this.coalition_img).fadeIn();
			});
		}
		if (this.my_score != coalition.score)
		{
			this.my_score = coalition.score;
			$(this.span_score).fadeOut("slow", () => {
				this.span_score.textContent = coalition.score;
				$(this.span_score).fadeIn();
			});
		}
		if (this.my_rank != coalition.rank)
		{
			this.my_rank = coalition.rank;
			$(this.span_rank).fadeOut("slow", () => {
				this.span_rank.textContent = coalition.rank;
				$(this.span_rank).fadeIn();
			});
		}
	}

	set_coalition(coalition, element, h3, span)
	{
		$(element).fadeOut("slow", () => {
			element.style.borderLeft = coalition.color + ' 2px solid';
			h3.textContent = coalition.name;
			span.textContent = coalition.score;
			$(element).fadeIn();
		});
	}

	update_coalition(coalition, element, h3, span)
	{
		$(element).fadeOut("slow", () => {
			element.style.borderLeft = coalition.color + ' 2px solid';
			h3.textContent = coalition.name;
			span.textContent = coalition.score;
			$(element).fadeIn();
		});
	}

	set_all_coalitions(tab)
	{
		this.first_value_color = tab[0].color;
		this.second_value_color = tab[1].color;
		this.third_value_color = tab[2].color;
		this.fourth_value_color = tab[3].color;
		this.first_value_name = tab[0].name;
		this.second_value_name = tab[1].name;
		this.third_value_name = tab[2].name;
		this.fourth_value_name = tab[3].name;
		this.first_value_score = tab[0].score;
		this.second_value_score = tab[1].score;
		this.third_value_score = tab[2].score;
		this.fourth_value_score = tab[3].score;
		this.set_coalition(tab[0], this.first, this.first_h3, this.first_span);
		this.set_coalition(tab[1], this.second, this.second_h3, this.second_span);
		this.set_coalition(tab[2], this.third, this.third_h3, this.third_span);
		this.set_coalition(tab[3], this.fourth, this.fourth_h3, this.fourth_span);
	}

	update_all_coalitions(tab)
	{
		if (this.first_value_color != tab[0].color || this.first_value_name != tab[0].name || this.first_value_score != tab[0].score)
		{
			this.first_value_color = tab[0].color;
			this.first_value_name = tab[0].name;
			this.first_value_score = tab[0].score;
			this.update_coalition(tab[0], this.first, this.first_h3, this.first_span);
		}
		if (this.second_value_color != tab[1].color || this.second_value_name != tab[1].name || this.second_value_score != tab[1].score)
		{
			this.second_value_color = tab[1].color;
			this.second_value_name = tab[1].name;
			this.second_value_score = tab[1].score;
			this.update_coalition(tab[1], this.second, this.second_h3, this.second_span);
		}
		if (this.third_value_color != tab[2].color || this.third_value_name != tab[2].name || this.third_value_score != tab[2].score)
		{
			this.third_value_color = tab[2].color;
			this.third_value_name = tab[2].name;
			this.third_value_score = tab[2].score;
			this.update_coalition(tab[2], this.third, this.third_h3, this.third_span);
		}
		if (this.fourth_value_color != tab[3].color || this.fourth_value_name != tab[3].name || this.fourth_value_score != tab[3].score)
		{
			this.fourth_value_color = tab[3].color;
			this.fourth_value_name = tab[3].name;
			this.fourth_value_score = tab[3].score;
			this.update_coalition(tab[3], this.fourth, this.fourth_h3, this.fourth_span);
		}
		return (0);
	}

	getElement()
	{
		return this.coalition;
	}

}
