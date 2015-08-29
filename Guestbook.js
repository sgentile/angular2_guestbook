///<reference path="typings/angular2/angular2.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var GuestService_1 = require("./GuestService");
var ToggleMessage_1 = require("./ToggleMessage");
var Guestbook = (function () {
    function Guestbook(service) {
        this.service = service;
        this.guests = service.guests;
    }
    Guestbook.prototype.addToGuestbook = function (guestName) {
        this.service.register(guestName);
    };
    Guestbook.prototype.removeGuest = function (guestName) {
        this.service.unRegister(guestName);
    };
    Guestbook.prototype.currentGuestCount = function () {
        return this.service.currentCount();
    };
    Guestbook = __decorate([
        angular2_1.Component({
            selector: "guestbook",
            appInjector: [GuestService_1.GuestService]
        }),
        angular2_1.View({
            templateUrl: "Guestbook.html",
            directives: [angular2_1.NgFor, ToggleMessage_1.ToggleMessage]
        }), 
        __metadata('design:paramtypes', [GuestService_1.GuestService])
    ], Guestbook);
    return Guestbook;
})();
angular2_1.bootstrap(Guestbook);
