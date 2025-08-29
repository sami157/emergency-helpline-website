## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
### Answer:
The main difference between them lies on the method of how each one filters the desired element(s) from rest of the document.
**getElementById** provides a single element based on the ID that's passed to it, as IDs are unique. **getElementsByClassName** provides all the elements having the specified class as an HTML collection.
**querySelectorAll** provides all the elements that matches the specific query, which is a css style expression. This can be used to get more specific components within the document. **querySelector** does a similar thing, but gives only the first element that matches the query.
## 2. How do you **create and insert a new element into the DOM**?
### Answer:
New element can be created using the <createElement()> method in javascript. The type of the element needs to be specified (e.g. div, p, h1 etc.). A new element can be inserted by appending it as a child to an existing element. The method used here is called appendChild(), which adds the specified child element to a parent element.
## 3. What is **Event Bubbling** and how does it work?
### Answer:
## 4. What is **Event Delegation** in JavaScript? Why is it useful?
### Answer:
## 5. What is the difference between **preventDefault() and stopPropagation()** methods?
### Answer: