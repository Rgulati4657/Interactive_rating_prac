# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

  - [Useful resources](#useful-resources)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![(desktop_view_thankyou.png)]
![(desktop_view_.png)]
![(desktop_view_selected_active.png)]
![(desktop_view_hover.png)]
![(mobile_view_thankyou.png)]
![(mobile_view_selected_rate.png)]
![(mobile_view_rate.png)]

### Links

- Solution URL: [(https://github.com/Rgulati4657/Interactive_rating_prac)]
- Live Site URL: [(https://interactive-rating-prac.vercel.app/)]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript


### What I learned
i learnt how to implement the javascript code to utilise our need in the practice problems.
```js
but.addEventListener("click", () => {
    if(checkerbool == false){
        but.style.cursor = "pointer";
        thankcont.classList.remove("thankyou");
        ratecont.classList.add("rate");
    }
}
)
```
### Useful resources

-This Time i completely made it without using any outer resources.

## Author


- GitHub - [(https://github.com/Rgulati4657)]
- Frontend Mentor - [(https://www.frontendmentor.io/profile/Rgulati4657)]
