## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

Im remaking this landing page from frontend mentor

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"


## My process

I planned it to use semantic html and variable paddings and widths to help with responsiveness.
For the error message, I just used a template string to display it. And for the button, I put both the button and input in a container and switched between position relative and static in the media queries.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Calc function
- Javascript

### What I learned
I learnt about positions and this really helped in styling the form part of the page. i also got more practice with the calc function to make a padding the varies with screen size. I got some practice in with regular expressions to check the email format.

```css
body {
  background-color: var(--dark-blue);
  padding: calc(7 /100 * var(--main-w));
  position: relative;
}

button{
  position: static;
  width: 100%;
  margin-top: 15px;
}
```
```js
function emailFormat(email) {
  //learn how to translate regular expressions
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email)
}
```

### Continued development

I would like more practice with regular expressions because I can only use it on inputs with type text and I want to change that

## Author

- Frontend Mentor - [@ScarAgathor](https://www.frontendmentor.io/profile/ScarAgathor)
