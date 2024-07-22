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
* host - this is an object that can take attributes or events key value pairs.

* NB: standalone and the selector are the bare minimum configs for directives.


## Change Element behaviour with custom directives
To do this we will need to listen to events on our directive. We could do this with the HostListener decorator or host key-value pair in the config of our Directive decorator.

Our method to be triggered on click basically leverages a confirm dialog from our browser to ask if user intends to leave the page; users response is going to be a boolean and then we return the response of the boolean stored in a variable. True value navigates while false value does nothing.

## Inputs in Custom Directives
Since we are working with links, the sensible options for input values will be query params. Assuming we want to add some query params highlighting the source from which the navigated link was accessed from, we will need to use input variables for this.


* we first create an input signal variable and then assign a type of string with a default value - a safelink directive

* step 2 has us update our click method to get the target attribute of our click event, then access the href property and append a string which includes our input variable as well.

* last step has us update the input variable from whereever we intend to access our directive and we did so in three ways. 
The first had us use the regular property binding syntax with square braces, which in itself requires a TS expression for evaluation. we resolved this with embedded string.
The second mode had us do away with the prop binding square braces and then assign a regular string to it
the third mode took no property binding so as to fall on our default value. Success.

- NB: Since we are able to configure our input and output properties to use aliases we could have our directive's attr selector act as an input property as well in whatever parent element invoking it. While its possible, it is not recommended.