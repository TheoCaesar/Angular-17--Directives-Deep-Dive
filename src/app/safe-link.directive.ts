import { Directive } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]', //attrs selector for anchors
    standalone: true, 
    host: {
        "(click)": "onClickLink()",
    }
})
export class SafeLinkDirective{
    constructor(){
        console.log('a safelink directive')
    }

    onClickLink(){
        const leavePage = window.confirm('Do you want to leave this page?');
        return (leavePage) 
    }
}