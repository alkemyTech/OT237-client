import { Component} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-links-input',
	templateUrl: './links-input.component.html',
	styleUrls: ['./links-input.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: LinksInputComponent
		}
	]
})
export class LinksInputComponent implements ControlValueAccessor {
	private urlList :Array<string> = [];
	public urlInput :string = '';
	onTouched = () => {

	}
	touched = false;
	disabled = false;
	onChange = (change :any) => {
	
	};
	constructor() {
	}
	public urlIsInvalid() :boolean{
		return  !RegExp("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?").test(this.urlInput);
	}
	public inputIsEmpty() :boolean{
		return this.urlInput == '';
	}
	public addToList() :void{
		if(!this.urlIsInvalid()) {
			console.log(typeof(this.urlList));
			this.urlList.push(this.urlInput);
			this.onChange(this.urlList);
		}
	}
	public getList() :Array<string> {
		return this.urlList;
	}
	public listIsEmpty() {
		return this.urlList.length == 0;
	}
	public removeFromList(urlDel :string) :void{
		this.urlList.splice(this.urlList.indexOf(urlDel),1);
		this.onChange(this.urlList);
	}
	writeValue(list :Array<string>) {
		this.urlList = list;
	}
	registerOnChange(onChange :any) {
		this.onChange = onChange;
	}
	registerOnTouched(onTouched :any) {
		this.onTouched = onTouched;
	}
	setDisabledState(disabled :boolean) {
		this.disabled = disabled;
	}
}
