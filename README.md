# Akira-Router-Practice

## Goal
1. Learn to implement React Router 

### Getting Started
1. Fork and clone this repo
2. Run `npm i`
3. Get familiar with the code and the actual app (`npm start`)
4. Run `npm i react-router-dom`
5. In `index.js` add your import and wrap your <App/> tag with <BrowserRouter>:
  - `import { BrowserRouter } from 'react-router-dom';`
  - `ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );`
  
### Let's add it to our app!
  1. With the updates to Router V6, we now need to wrap any of our `<Route>` tags in one container called `<Routes>`
  2. We need to make sure we import and destructure what we'd like to use from react-router-dom: `import { Route, Routes } from 'react-router-dom';`
  3. Within our `<Routes></Routes>` tags, we can now add our actual routes. Within the Route tag, we need to define the path and the element. The default/landing page will just be "/" and the element will just be whatever component you'd like to render including any props you'd like to pass (if any). Ex: 
  
    <Route path="/" element={
        <MainPage />
       }
     />
    
   4. Right now we're using a handleClick method to update state in App, which we then use to conditionally render our Astronomy component. Let's use router here instead. Let's import Link from `react-router-dom` and change our button to a Link. Our Link will have a to attribute (just like path and element for Route) and we will set a new path for our daily fact display (you can name this whatever you want!). 
  * This Link is basically acting as a method, saying when this element is clicked, change the URL path to `whatever-you-named-it`.
  5. Now that we have converted our button to a Link, we need to inform our Astronomy Component that it also has a job to do! We are going to wrap our entire Astronomy Component with a <NavLink> (don't forget to import and wrap the entire card but staying inside the Fragment). Our NavLink will also have a to attribute that should match the path that you named in step 4.
  6. Now let's loop back to our App Component. We have to tell App _when_ to render our Astronomy Component. When we click our Link in the `MainPage` Component we will be sent to a different URL, which we gave a "path to" but we now need to add that Route to our Routes list. Just like we rendered the `MainPage` in step 3, we will add a `<Route>` for our `<Astronomy />` Component (don't forget to add the path which must match the NavLink and any props that need to be passed).
  7. You should now be able to navigate the app exactly like before, but the URL will match the "pages" when navigating!
  
  
  ### Bonus
  1. As of now, you can only navigate to the daily fact display page, but to get back to the home page you must delete the URL path or hit the back button. Annoying! Let's add a way (using React Router not conditional rendering) to get back to the landing page from the daily fact page, so we can navigate more easily!
  
