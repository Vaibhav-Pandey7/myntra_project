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