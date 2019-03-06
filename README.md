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

        ```
        const paragraphs = document.querySelectorAll('p')

        paragraphs.forEach(function (p) {
            if (p.textContent.includes('the')) {
                p.remove()
            }
        })
        ```

    - For reading and writing the value
        - `console.log(p.textContent)`
        - `p.textContent = 'asdfgh'`
    - `remove()` method removes the element

## Adding elements via the DOM
- `document.createElement('p')` creates new element.
    - `document.createElement('p')` is the DOM representation of paragraph so store it in a variable.

- `appendChild()`
    - Pick the place where you have to put the newly created element.
    - Add textContent to the element.
    - Append child adds the new item as the last child.

    ```
    const paragrah =  document.createElement('p')
    
    paragraph.textContent = 'This is a new element from JavaScript.'

    document.querySelector('body').appendChild(paragraph)
    ```

## Handling user interaction

`Event` is something that a user does, like clicking a button or hovering over a paragraph or scrolling on the screen.

`Event listeners` are functions which are executes when event happens.

> Steps:
- Query for the element where event listener will be attached.
    - `document.querySelector('button').addEventListener()`
    - `addEventListener()` takes 2 args, the first is the string where you put event name like click, or mouse up or change, and second arg is func to run when event happens.
    - In second arg of function, event listners pass an arg to that function, called `event`, this event object has `target` property which is representation of that DOM element.
    - For changing the text of that target element:
        - `event.target.textContent = 'Clicked'`
        - Now when btn is clicked, the text content will change from Click -> Clicked

        ```
        document.querySelector('button').addEventListener('click', function (e) {
            e.target.textContent = 'Clicked'
        })  
        ```

> Notes:

HTML attribute specifically:

```
<button onclick="dostuff"></button>
```

But there's also:

```
document.getElementById("mybutton").onclick = function () { ... }

//and

document.getElementById("mybutton").addEventListener('click'), function () { ... })
```

Always avoid the first one, there's no benefit to it, but it potentially introduces a few bugs and is really hard to maintain properly. The second and third are the same thing, but the third one lets you add multiple click listeners if you want.

Adding multiple listeners:

```
document.getElementById("mybutton").addEventListener('click'), function () { alert('Hello1') })

document.getElementById("mybutton").addEventListener('click'), function () { alert('Hello2') })  
```

________________________

## Advanced queries
Diff ways to select element from your document.

- `document.querySelector() only returns the first element matching the tag name`. 
    - Therefore `document.querySelector('button')` returns first btn only.
- `document.querySelectorAll() returns a list/array of all elements` matching the tag name.
    - To access second button from the document: 
   
    ```
    document.querySelectorAll('button')[1] 
    //returns second button
    ```
    - Add `event listener` to it: 
      
    ```
    document.querySelectorAll('button')[1].addEventListener('click', function () {
        console.log('delete all')
    })
    ```

> *Problem with this approach:*
Very `close coupling b/w structure of html file and the querySelectors` in javascript file. So if someone switches the position of button from 1st place to second, the javascript will work incorrect.
__________

*Solution:*
- Specific way to target elements rather than targeting by their `tagName`.
- Id's and classes.

*Id:*
- A `unique identifier` for each element on html page.
- An id is unique so only one element can have it.
- Setup an `id` attribute. 
    - Eg: `<button id="my-btn">Click<button>`
- For selecting an id, `document.querySelector('#my-btn')`


*Class:*
- Classes can be held by mutiple elements.
- Use class attribute
- For selecting a class, `document.querySelectorAll('.my-btn')`

Important:
- `Id's use document.querySelector()` since it's one.
- `Class use document.querySelectorAll()` since it can be multiple.

```
document.querySelector('#remove-all-btn').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})
```

> Refresher:

Single:
- p -> targets p tag
- #replace -> targets element with id replace
- .item  -> targets element with class item

Multiple:
- p#order -> targets p tag with id order
- button.inventory -> targets button with class inventory
- h1#title.application -> targets h1 with id title and class application
- h1.application#title -> targets h1 with class application and id title
________


### document.getElementById() vs. document.querySelector()

Both return a reference to the DOM node which will always provide the latest DOM details. 

```
// Create <p id="someid">Old</p> first
 
// Select both ways
const p1 = document.getElementById('someid')
const p2 = document.querySelector('p')
 
// Change it
document.querySelector('p').textContent = 'New'
 
// Both will print "New"
console.log(p1.textContent)
console.log(p2.textContent)
```

## Text inputs and live data filtering