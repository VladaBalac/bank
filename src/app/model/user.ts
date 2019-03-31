export class  User {
	_id: number;
	name: string;
	surname: string;
	cardNumber: string;
	phoneNumber: number;
	email: string;

	constructor(obj?: any){
	this._id = obj && obj._id || null;
	this.name = obj && obj.name || null;
	this.surname = obj && obj.surname || null;
	this.cardNumber = obj && obj.cardNumber || null;
	this.phoneNumber = obj && obj.phoneNumber || null;
	this.email = obj && obj.email || null
	}
}