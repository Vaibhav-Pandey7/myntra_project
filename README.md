we used map but not a traditional for loop as it dont return anything and inside jsx we need an expression not a statement

A quick reference for the specific bugs and strict React rules encountered while building this project.

### 1. The Vite Image Trap
Raw string paths for local images fail when Vite bundles the project. You must import them as variables.
```jsx
// ❌ WRONG (Fails in Vite build)
```<img src="./assets/image.png" />```

// ✅ RIGHT (Vite optimizes and hashes it)
import tshirtImg from "./assets/image.png";
```<img src={tshirtImg} alt="T-shirt" />```  

. Strict JSX Tag Rules  
React is strict XML. Void elements cannot contain text and MUST self-close. Empty components crash the app if they don't explicitly return null.  

JavaScript  
// ❌ WRONG
```<img>tshirt image</img>```
```function Header() {}``` // Returns undefined, crashes app!

// ✅ RIGHT  
```<img src={tshirtImg} alt="tshirt image" />```
```function Header() { return null; }```  

When mapping over arrays to generate UI, arrow functions require an explicit return (or implicit parentheses) and a unique key prop.   

JavaScript
// ❌ WRONG (Returns undefined, renders blank screen)   
```{arr.map((item, index) => {
  <Card prop={item} />
})}```   

// ✅ RIGHT (Explicit return + React Key)   
```{arr.map((item, index) => {
  return <Card key={index} prop={item} />
})}```   

// ✅ RIGHT (Pro-Tip: Implicit return using parentheses)   
```{arr.map((item, index) => (
  <Card key={index} prop={item} />
))}```   
   
The Horizontal Scroll Trap (CSS) 
Using width: 100vw combined with padding forces the container to be wider than the screen, causing horizontal scrollbars.   

CSS
/* ❌ WRONG */
width: 100vw; 
padding: 50px;   

/* ✅ RIGHT (Forces padding inside the width) */
width: 100%;
padding: 50px;
box-sizing: border-box;

React uses the `key` prop as a tracking ID to know exactly which items in a list were added, removed, or changed without re-rendering the entire screen.

**1. The Golden Rule (Always use with `.map`)**
You MUST provide a unique `key` to the outermost element whenever you use `.map()` to generate a list of components.
```jsx
// ✅ RIGHT: The key goes on the outermost wrapper element returned by the map loop.
{products.map((item) => (
  <div key={item._id}> 
    <Card data={item} />
  </div>
))}```

You DO NOT need keys when you are manually typing out sibling components one by one. React tracks hardcoded elements naturally.

```<div>
  <Card data={shirtData} />
  <Card data={pantsData} />
</div>```

HTML Tags vs. CSS Makeup: Trying to use CSS (style={{type: "search"}}) to change a <div> into a text box. Fix: Use Conditional Rendering (if/else) to return the correct HTML bone structure (e.g., <input>).

The Object-in-Prop Trap: Wrapping imported SVGs/Images in curly braces inside an object ({ placeholder: {profileicon} }) breaks the image link. Fix: Variables are already objects, just pass the variable directly (placeholder: profileicon).

Flexbox Row Default: Sticking an icon and text in a flex container makes them sit side-by-side. Fix: Use flexDirection: "column" to stack them vertically like a real navbar.

The HTML Attribute vs CSS Property Trap: Writing cursor="pointer" as a raw HTML attribute. Fix: cursor is a styling rule, it must go inside style={{ cursor: "pointer" }}.