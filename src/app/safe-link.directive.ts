import { Directive } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]', //attrs selector for anchors
    standalone: true
})
export class SafeLinkDirective{
    constructor(){
        console.log('a safelink directive')
    }
}