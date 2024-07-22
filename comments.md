# Directives
These are simply ways to enhance the abilities of elements - be it their attributes, props or features. 
Components are basically directives with templates.
There are 2 types of directives - structural (ngIf & ngFor) and attributes (ngModel).
Structural directives change the DOM structure and are preceded with an asterisks. Current versions of angular dont have structural directives any more.

## Custom Directives
angular cli - ng g d ${directive-name}
wrapped by a Directive decorator, we could pass it some object configs just like components.
* selector could have a value of element selectors or attr selectors, we went with the latter scoped on top of an anchor element.
* standalone - set to true for non module based applications, older versions wouldn't have this key value pair (or set it to false) and we will have to import our directive class inside an NgModule 

* NB: standalone and the selector are the bare minimum configs for directives.