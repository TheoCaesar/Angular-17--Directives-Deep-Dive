# Directives
These are simply ways to enhance the abilities of elements - be it their attributes, props or features. 
Components are basically directives with templates.
There are 2 types of directives - structural (ngIf & ngFor) and attributes (ngModel).
Structural directives change the DOM structure and are preceded with an asterisks. Current versions of angular dont have structural directives any more.

## Custom (Attr) Directives
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

# Dependency Injection in Directives
a perfect example of DI in this will be injecting our host element (an anchor element enhanced by directives). this should allow us access some of the html props and methods like target, href etc. We could enhance the readability of the code.

## Custom (Structural) Directive
created by the cli, we get an input variable of type Permistion and configured by an alias appAuth.
we also inject our auth service for comparison of the logged in user type and the corresponding input property in our directive.
we then get an effect function to set up a subscription to listen to any changes between the signal values within our service or input variable. 

in our app component we place our directive on a paragraph tag to display if we have an admin user log in.
currently all we are doing is to log stuff to console if conditions are met, so our paragraph contents are going to read the same nonetheless, hence acting as an attribute directive for now.

### making directive Structural.
To make our directive structural in nature we will have to replace our console logs with changes in the template. 
To do this we have to: 
1. inject template ref and view container ref classes into our custom directive; preferrably with the inject method. 
2. in our effect method, we compare our logged in user's permision with that of the input variable and if they are the same we display our message with the createEmbeddedView method which takes our template ref instance as an argument; else we only invoke the clear method.
3. the template Ref is basically geting what we want added to our dom and for it to work we need to use the ng-template selector to wrap the block of code we need rendered if need be. On the ng template selector we have our directive selector (sans *) sit on it and its this that we want to access with the injection of our template reference.
4. to make it easier and shorter we could use our asterisks as syntactic sugar to have angular create an ng-template selector for us under the hood by preceding our directive selector with an asterisks and it should work fine.

NB: while this shortens your code, any value passed as an input to our directive is going to be treated as a TS expression; hence we could have a property created within the class or use embedded strings in our case