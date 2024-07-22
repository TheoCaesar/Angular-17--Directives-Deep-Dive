import { Directive, ElementRef, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]', //attrs selector for anchors
    standalone: true, 
    host: {
        "(click)": "onClickLink($event)",
    }
})
export class SafeLinkDirective{
    queryParam = input<string>('directives-deep-dive apk'); //input with a default value
    constructor(){
        console.log('a safelink directive')
    }

    onClickLink(event:MouseEvent){
        //get and update address with params
        (event.target as HTMLAnchorElement).href +=  `?from${this.queryParam()}`
        const leavePage = window.confirm('Do you want to leave this page?');
        return (leavePage) 
    }
}