///<reference path="typings/angular2/angular2.d.ts"/>

import {
	Component,
	View,
	NgFor,
	bootstrap
} from 'angular2/angular2';

import {GuestService} from "./GuestService";
import {ToggleMessage} from "./ToggleMessage";

@Component({
	selector: "guestbook",
	appInjector: [GuestService]
})
@View({
	templateUrl: "Guestbook.html",
	directives: [NgFor, ToggleMessage]
})

class Guestbook {
	guests: Array<string>;
	service: GuestService;

	constructor(service: GuestService) {
		this.service = service;
		this.guests = service.guests;
	}

	addToGuestbook(guestName: string) {
		this.service.register(guestName);
	}

	removeGuest(guestName: string) {
		this.service.unRegister(guestName);
	}

	currentGuestCount(): number {
		return this.service.currentCount();
	}
}



bootstrap(Guestbook);
