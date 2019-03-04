# AlgoPreps
Basic algorithms and data structures refresher in JavaScript

## Notes: 
Our javascript code needs an environment that executes it. Actually, we have two different ones: node.js and any browser. The both have javascript interpreter and can execute our code.

When we use the browser to execute code, for example from a script element, a loaded script or with code on the console (dev tools in chrome, for example), then a web page has been loaded and the environment has created the DOM and added a global constant document that allows us to access and interact with the document.

When we use node.js then no such document exists. There is no webpage, there is no document constant, we can't interact with a DOM because no DOM exists. We're not in the browser. The browser is the one that creates it.

So, in short and simplified - all code that interacts with a DOM has to be executed in the browser and after the DOM has been created (= the web page is loaded). We can't use those scripts with node.js

## Hosting javascript files on broswer
 
 For hosting files via server using npm package
 `live-server`

## DOM Manipulation
Document Object Model

Document refers to HTML document.
Object refers to JavaScript object that models a HTML document. Its not an object created by us, it is provided by the browser.

- Remove `<p>` from document:
    - Query and remove
        - Get this element from DOM by querying it.
             - `document.querySelector('p')` -> write the tag name in quotes.
            - `const p = document.querySelector('p')`
            - `p.remove()` removes the element
        - Do what you intend with the element
        - `document.querySelector()` matches the first element
    
    - Query all and remove
        - `const paragraphs = document.querySelectorAll('p')`
        - Returns array of all the matching elements.
        
        ```
        paragraphs.forEach(function (p) {
            p.remove()
        })
        ```
    - For reading and writing the value
        - `console.log(p.textContent)`
        - `p.textContent = 'asdfgh'`
    - `remove()` method removes the element

## Adding elements via the DOM
- `document.createElement()` creates new element.