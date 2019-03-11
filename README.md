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
- Right: Input element is an empty element.
`<Input>`
- Wrong: `<Input>Text</Input>`
- Input types: text, password etc.
- Read input's content by `value` attribute. Simliar to `textContent` which is used to read the content of html elements.

```
document.querySelector('#text-input').addEventListener('change', function (e) {
    console.log(e.target.value)
})
```

- `change event` is triggered when user focus in and out of input.
- `input event` is triggered with every letter enter/removed from input field.
- `change` fires for `<input>`, `<select>`, and `<textarea>` elements when an alteration to the element's value is committed by the user. Unlike the `input` event, the `change` event is not necessarily fired for each alteration to an element's value.


### Notes:

Here's what happens when a browser loads a website with a `<script>` tag on it:

- Fetch the HTML page (e.g. index.html)
- Begin parsing the HTML
- The parser encounters a `<script>` tag referencing an external script file.
- The browser requests the script file. Meanwhile, the parser blocks and stops parsing the other HTML on your page.
- After some time the script is downloaded and subsequently executed.
- The parser continues parsing the rest of the HTML document.

Step #4 causes a bad user experience. Your website basically stops loading until you've downloaded all scripts. If there's one thing that users hate it's waiting for a website to load.

Why does this even happen?
Any script can insert its own HTML via document.write() or other DOM manipulations. This implies that the parser has to wait until the script has been downloaded & executed before it can safely parse the rest of the document. After all, the script could have inserted its own HTML in the document.

However, most JavaScript developers no longer manipulate the DOM while the document is loading. Instead, they wait until the document has been loaded before modifying it. For example:

```
<!-- index.html -->
<html>
    <head>
        <title>My Page</title>
        <script type="text/javascript" src="my-script.js"></script>
    </head>
    <body>
        <div id="user-greeting">Welcome back, user</div>
    </body>
</html>

Javascript:

// my-script.js
document.addEventListener("DOMContentLoaded", function() { 
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    document.getElementById("user-greeting").textContent = "Welcome back, Bart";
});
```

Because your browser does not know my-script.js isn't going to modify the document until it has been downloaded & executed, the parser stops parsing.

> Antiquated recommendation

- The old approach to solving this problem was:

    Put `<script>` tags at the bottom of your `<body>,` because this ensures the parser isn't blocked until the very end.

    This approach has its own problem: the browser cannot start downloading the scripts until the entire document is parsed. For larger websites with large scripts & stylesheets, being able to download the script as soon as possible is very important for performance. If your website doesn't load within 2 seconds, people will go to another website.

    In an optimal solution, the browser would start downloading your scripts as soon as possible, while at the same time parsing the rest of your document.

- The modern approach

    Today, browsers support the `async` and `defer` attributes on scripts. These attributes tell the browser it's safe to continue parsing while the scripts are being downloaded.

```
async

<script type="text/javascript" src="path/to/script1.js" async></script>
<script type="text/javascript" src="path/to/script2.js" async></script>
```

Scripts with the `async` attribute are executed asynchronously. This means the script is executed as soon as it's downloaded, without blocking the browser in the meantime.
This implies that it's possible to script 2 is downloaded & executed before script 1.

According to http://caniuse.com/#feat=script-async, 94.57% of all browsers support this.

```
defer
<script type="text/javascript" src="path/to/script1.js" defer></script>
<script type="text/javascript" src="path/to/script2.js" defer></script>
```
Scripts with the defer attribute are executed in order (i.e. first script 1, then script 2). This also does not block the browser.

Unlike async scripts, `defer` scripts are only executed after the entire document has been loaded.

According to http://caniuse.com/#feat=script-defer, 94.59% of all browsers support this. 94.92% support it at least partially.

An important note on browser compatibility: in some circumstances IE <= 9 may execute deferred scripts out of order. If you need to support those browsers, please read this first!

Conclusion
The current state-of-the-art is to put scripts in the `<head>` tag and `use the async or defer attributes`. This allows your scripts to be downloaded asap without blocking your browser.

The good thing is that your website should still load correctly on the 6% of browsers that do not support these attributes while speeding up the other 94%.

## Rendering filtered data
- Added a `<div>` id which is a content divider
- Create a method to filter notes whose title matches the search text
- Clear the `div id` by setting innerHTML to `''`
- Add just the filtered notes

- To clear an element, use innerHTML property which allows to set new html value `document.querySelector('#notes').innerHTML = '<p>test</p>'`, renders test as value, ignore the p tags.
and for clearing it set it equal to empty string

`document.querySelector('#notes').innerHTML('')`


```
const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title

        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})
```

> Notes:

The difference between `innerHTML` and `textContent` is that innerHTML parses whatever you give it as HTML whereas textContent will consider it only text. So if you used the bold HTML tags `<b></b>` with innerHTML, you'd get bold text, but with textContent you'd get text that literally includes the characters `<b></b>`

## Working with *Forms*
