//import Dashboard from "../views/Dashboard";

//This variable accepts url parameter I want to nativate to
const navigateTo = url => 
{
//pushState() method of the history object
//used to modify the browser's history and change the URL without triggering a full page reload
//state object(optional), title(optional), url
  history.pushState(null , null, url);
  route();
}

//route function
const route = () => 
{
    //array of route objects
   const routes =
    [
   //The view parameter gets excecuted when the path parameter matches the url
    { path: "/", view: () => console.log("Viewing Home")},
    { path: "/studentProfile", view: () => console.log("Viewing studentProfile")},
    { path: "/qualifications", view: () => console.log("Viewing qualifications")},
    //{ path: "/qualification", view: () => console.log("Viewing qualification")},
    { path: "/experiences", view: () => console.log("Viewing experiences")},
    //{ path: "/experience", view: () => console.log("Viewing experience")},
    { path: "/referees", view: () => console.log("Viewing referees")},
    //{ path: "/referee", view: () => console.log("Viewing referee")}
   ];

   const currentPath = location.pathname; // Get the current URL's pathname

    // Iterate through the routes to find a match
    for (const route of routes) {
        //"strict equality" or "strict comparison" operator. It's used to compare both the value and the data type of two operands. 
        if (route.path === currentPath) {
            console.log(`Matched route: ${route.path}`);
            route.view(); // Execute the associated view function
            return; // Exit the loop since we found a match
        }
    }

    // If no match is found
    console.log("No matching route found.");
};
//"popstate" event is fired when the user navigates using back/forward navigation
// The "route" function is called to update the view based on the current URL
window.addEventListener("popstate", route);
// Call the router function
//document represents the entire webpage
//addEventListener is used to attach an event listener to a specific element.Currentyly attaching it to the document object.
//DOMContentLoaded is the event you're listening for. It is fired by the browser when the HTML document has been completely loaded and parsed, including all its resources like stylesheets and images.
document.addEventListener("DOMContentLoaded", () => 
{
    route();
    // Listen for click events on the body of the document
    document.body.addEventListener("click", e =>
    {
        // Check if the clicked element has the attribute data-link
        if (e.target.matches("[data-link]")){
            // Prevent the default behavior of the clicked link (prevents page reload)
            e.preventDefault();
            // Call the navigateTo function with the URL from the clicked link
            navigateTo(e.target.href);
        }
    });
});
   






