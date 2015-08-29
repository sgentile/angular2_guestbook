var GuestService = (function () {
    function GuestService() {
        if (window.localStorage.guests) {
            this.guests = JSON.parse(window.localStorage.guests);
        }
        else {
            this.guests = ['Alice', 'Bob'];
            window.localStorage.guests = JSON.stringify(this.guests);
        }
    }
    GuestService.prototype.register = function (guestName) {
        this.guests.push(guestName);
        window.localStorage.guests = JSON.stringify(this.guests);
    };
    GuestService.prototype.unRegister = function (guestName) {
        var index = this.guests.indexOf(guestName);
        this.guests.splice(index, 1);
        window.localStorage.guests = JSON.stringify(this.guests);
    };
    GuestService.prototype.currentCount = function () {
        return this.guests.length;
    };
    return GuestService;
})();
exports.GuestService = GuestService;
