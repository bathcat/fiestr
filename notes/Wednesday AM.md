# Review

00. FREE SQUARE
01. What's the deal with `Object.is`?
* Similar to strict equality operator `===`
* Slightly stricter
* Used by react to determine if state has changed and it needs to re-render.



02. What's the deal with `useEffect`?
* Side effect
  - Logging
  - API calls fetch, local storage, focus()
* Runs after render
* Options:
  - Cleanup: You just return a callback that unsubscribes or whatever
  - Dependency array: 


04. What's the deal with 'prop drilling'?
* Share data between components via props
* Prop drilling means adding props through containers to pass to child compents

08. What's the deal with `useRef`
* Like use state keeping component data between invocations / renders
* BUT doesn't render 

05. What's the deal with `useContext`?
* Share data between components
* Plays well with useState
* Problem: Lots of nesting and prop drilling

```js
//login-context.tsx
const LoginContext = createContext(mydefaultlogin);

//App.tsx
<LoginContext.Provider value={}>

//UserMenu.tsx
cons login = useContext(LoginContext);

````

06. What's the deal with `useReducer`?
- Similar to use state
- Move all state-updating logic out of the component into a reducer.

```jsx
// reduce-planets-state.ts
const reducePlanetsState(current:Readonly<Array<Planets>>, command:PlanetCommand ){

	if(command.actionType==='setDescription'){
		return current.map{.....  }
	}
}

// satellite-button.tsx

const SatelliteButton = ({satelliteID} =>{
	const [planets, dispatch] = useReducer(initialState, reducePlanetsState);

	dispatch({

	});

};

```



03. What's the deal with 'lifting state up'?
* Share state across components
* State has to be at their closest common ancestor


07. What's the deal with `useImmerReducer`?
* Like reducer
* 3rd party library

```jsx
// reduce-planets-state.ts
const reducePlanetsState(draft:Array<Planets>, command:PlanetCommand ){

	if(command.actionType==='setDescription'){
		 draft[0]=new Planet();
		 return;
	}
}

```

09. What's the deal with `Readonly<T>`
* Typescript 'utility type'
* Goes away at runtime
* Compile-time errors on modification
* Clarify intention


```jsx
// reduce-planets-state.ts
function useUnchangingRef<T>(initialValue:T){
	const [value, setValue] = useState(initalValue);
	return Object.freeze({content: value});
}

```