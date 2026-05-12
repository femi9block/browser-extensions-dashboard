# Frontend Mentor - Browser Extensions Manager UI Solution

This is my solution to the Frontend Mentor Browser Extensions Manager UI challenge. The project focuses on building a responsive and interactive extensions dashboard with filtering, theme switching, and reusable React components.

## Table of contents

* Overview

  * The challenge
  * Screenshot
  * Links
* My process

  * Built with
  * What I learned
  * Continued development
  * Useful resources
  * AI Collaboration
* Author

---

## Overview

### The challenge

Users should be able to:

* Toggle extensions between active and inactive states
* Filter active and inactive extensions
* Remove extensions from the list
* Switch between light and dark themes
* View responsive layouts across different screen sizes
* Experience hover and focus states for interactive elements

### Screenshot

## Screenshot

### Dark Mode
![Dark Mode](./screenshots/desktop_dark_mode_all.png)

### Light Mode
![Light Mode](./screenshots/desktop_light_mode.png)

### Mobile View
![Mobile View](./screenshots/mobile_view_dark.png)
![Mobile View](./screenshots/mobile_view_light.png)

### Links

* Solution URL: https://www.frontendmentor.io/
* Live Site URL: https://your-live-site-url.com

---

## My process

### Built with

* Semantic HTML5
* Tailwind CSS
* Flexbox
* CSS Grid
* Mobile-first workflow
* React
* Next.js

---

## What I learned

This project helped strengthen my understanding of React state management, conditional rendering, component reusability, and responsive design.

One of the major concepts I practiced was dynamically updating state using `map()` and conditional logic.

```js
const toggleExtension = (id) => {
  setExtensions(prev =>
    prev.map(item =>
      item.id === id
        ? {
            ...item,
            status:
              item.status === 'active'
                ? 'inactive'
                : 'active'
          }
        : item
    )
  );
};
```

I also improved my understanding of:

* Passing props between parent and child components
* Conditional Tailwind styling
* Theme switching using state
* Responsive layouts using Tailwind breakpoints
* Reusable UI components

---

## Continued development

In future projects, I want to continue improving:

* State management patterns in React
* Component architecture
* Accessibility practices
* API integration
* Advanced responsive layouts
* Animation and transitions

I also plan to explore TypeScript and backend integration with Next.js.

---

## Useful resources

* https://react.dev/ — Helped reinforce React component and state concepts.
* https://tailwindcss.com/docs — Useful for responsive utilities and conditional styling.
* https://nextjs.org/docs — Helpful for understanding project structure and routing.

---

## AI Collaboration

During this project, I used AI tools such as ChatGPT to assist with:

* Debugging React and Tailwind issues
* Understanding state update patterns
* Fixing conditional rendering logic
* Improving responsive layouts
* Explaining JavaScript concepts
* Refining component structure

AI was especially useful for learning why certain approaches worked rather than just providing solutions. It helped improve both my debugging process and understanding of React fundamentals.

---

## Author

* Frontend Mentor - https://www.frontendmentor.io/profile/femi9block
* GitHub - https://github.com/femi9block
