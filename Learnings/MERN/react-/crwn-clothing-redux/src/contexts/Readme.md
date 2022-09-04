## IMPORTANT NOTE WHILE USING useCONTEXT.

One drawback of using context is that , suppose you use useContext() in the sign up component but you do some updates in the sign in component , because we have `useContext()` in the signup component , it signup component will keep re-rendering  causing performance issues if there are alot of functions within the signup component.

Although this function calls will cause performance issues but if you try paint flashing technique you can see that there is no re-render of the signup component. This is because there is no changes in the actual virtual dom `(beauty of virtual dom)`