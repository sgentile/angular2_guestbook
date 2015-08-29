class GuestService {
	guests: Array<string>;
	constructor(){
		if(window.localStorage.guests){
			this.guests = JSON.parse(window.localStorage.guests);
		} else {
			this.guests = ['Alice', 'Bob'];
			window.localStorage.guests = JSON.stringify(this.guests);
		}
	}

	register(guestName: string) {
		this.guests.push(guestName);
		window.localStorage.guests = JSON.stringify(this.guests);
	}

	unRegister(guestName: string) {
		var index = this.guests.indexOf(guestName);
		this.guests.splice(index, 1);
		window.localStorage.guests = JSON.stringify(this.guests);
	}

	currentCount() {
		return this.guests.length;
	}
}

export { GuestService };

