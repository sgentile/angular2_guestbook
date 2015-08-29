import {Component, View} from "angular2/angular2";

@Component({
	selector: 'toggle-message',
	properties: [
		'message: message',
		'buttonText: button-text'
	]
})
@View({
	templateUrl: 'ToggleMessage.html'
})
export class ToggleMessage {
	toggle: boolean;
	constructor() {
		this.toggle = false;
	}
	toggleMessage() {
		this.toggle = !this.toggle;
	}
}
