'use babel';

export default class HomeCalendarView {

	constructor() {
		this.calendar = document.createElement('div');
		this.calendar.classList.add('calendar');
		this.calendar.classList.add('left-item');
	}

	getElement()
	{
		return this.calendar;
	}

}
