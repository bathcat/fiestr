# Review

00. FREE SQUARE
01. What does it mean that React is not a framework but a library?
* Doesn't include a lot of plumbing-- such as: routing, http stuff, security, ssr, code splitting.


03. Why is `useState` even necessary?
* Store state between sessions
```jsx
//Sleazy do not do
export const App = ()=>{
	let [i, setI] = useState(0);
	i++;
	return 
	<button onClick={()=>setI(i+1)}>{i}</h1>
}
```

05. Can you use React without JSX? 
Yes. But it's not very practical.

02. What's a hook? What are the rules of hooks?
* Fuction calling react libraries 
* `useEffect` `useState` `useRef`
* Has use prefix
* Rules of hooks:
  - Called from functional components OR other hooks
  - Top level
  - No: conditional invocation, no loops 


06. When does React render?
  - Initial render when the component loads - aka Mount
  - When the state changes.

07. What's reconciliation?
* Flushing changes from the virtual dom to the actual browser
  - 'paint'

08. How does React know if state has been changed?
- Setter method of some `useState()`
- Props


04. How do you share state across components?
- Props - toward leaves
- Events - toward root
- Maybe via context & reducers


09. What's the deal with `PropsWithChildren`

```jsx

const Child = ()=><h1>Hello World</h1>;

const Parent = ({children}:PropsWithChildren) =>
	<div>{children}</div>

const App = ()=><Parent><Child/></Parent>


```


10. What's 'spread syntax'?
const x = {a:1};
const y = {...x};


const xs = [1,2,3];
const ys = [...xs];


