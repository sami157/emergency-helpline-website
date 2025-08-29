## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
### Answer:
The main difference between them lies on the method of how each one filters the desired element(s) from rest of the document.
`getElementById` provides a single element based on the ID that's passed to it, as IDs are unique. `getElementsByClassName` provides all the elements having the specified class as an HTML collection.
`querySelectorAll` provides all the elements that matches the specific query, which is a css style expression. This can be used to get more specific components within the document. `querySelector` does a similar thing, but gives only the first element that matches the query.
## 2. How do you **create and insert a new element into the DOM**?
### Answer:
New element can be created using the `createElement` method in javascript. The type of the element needs to be specified (e.g. `div, p, h1` etc.). A new element can be inserted by appending it as a child to an existing element. The method used here is called `appendChild`, which adds the specified child element to a parent element.
## 3. What is **Event Bubbling** and how does it work?
### Answer:
Event bubbling is the concept of events propagating upwards within the DOM tree structure. When an event is triggered in a child element, it also activates the similar event listener(s) placed on the parent. This bubbling can be stopped by calling `stopPropagation` method on the event object. 
## 4. What is **Event Delegation** in JavaScript? Why is it useful?
### Answer:
Event delegation is the concept of attaching an event listener on the parent, instead of attaching one in every child element. As events bubble, the child element can be identified using `event.target` property of the event object. Event delegation can be used to write simpler and more efficient code.
## 5. What is the difference between **preventDefault() and stopPropagation()** methods?
### Answer:
They are two totally different things.
`preventDefault()` prevents from triggering the default behaviour of an element. It doesn't have to do anything with event propagation.
And as the name suggests, `stopPropagation()` stops an event from propagating upwards. In other words, it stops the event bubble.