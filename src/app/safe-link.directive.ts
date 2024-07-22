import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]', //attrs selector for anchors
    standalone: true, 
    host: {
        "(click)": "onClickLink($event)",
    }
})
export class SafeLinkDirective{
    queryParam = input<string>('directives-deep-dive apk', {alias:'appSafeLink'}); //input with a default value
    private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
    constructor(){
        console.log('a safelink directive')
    }

    onClickLink(event:MouseEvent){
        // (event.target as HTMLAnchorElement).href += 
        this.hostElement.nativeElement.href += `?from${this.queryParam()}`
        const leavePage = window.confirm('Do you want to leave this page?');
        return (leavePage) 
    }
}