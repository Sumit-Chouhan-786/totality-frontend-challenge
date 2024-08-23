
<!--================================== Project Approach ==========================-->

1. Create a Next.js App:
    Start by creating a new Next.js application and name it -totality-frontend-challenge.

2. Set Up Folder Structure:
   - Inside the project, create a "components" folder to organize all the UI components, which will be styled using Tailwind CSS.
     - SignUp Component: Build the UI for user sign-up.
     - Login Component: Create the UI for user login.
     - PropertyCard Component: Design a card to display individual properties that users can book.
     - PropertyListCard Component: Manage state and map the property data to display a list of "PropertyCard" components.
     - Cart Component: Create a component to handle the rooms that users have booked.
     - Checkout Component: Develop the UI for processing the payment for the booked rooms.

3. Create Routes:
   - Set up the necessary routes to navigate between different pages:
     - SignUp Route: Directs users to the sign-up page.
     - Login Route: Directs users to the login page.
     - Home Route: After users successfully sign up or log in, they are redirected to the property booking page.

4. Implement Toastify for Notifications:
   - Use Toastify to provide real-time notifications to users for various actions, such as:
     - Successful Sign-Up/Login: Notify the user when they have successfully signed up or logged in.
     - Booking Confirmation: Display a notification when a property is successfully added to the cart.
     - Quantity Updates: Notify the user when the quantity of a booked property is increased or decreased.
     - Checkout Success: Notify the user upon successful payment during checkout.
     - Error Handling: Display error notifications when an action fails (e.g., trying to book a property that's already fully booked).


<!--================================================== Logical Approach ===============================-->

1. State Management:
   - Use React hook `useState` to manage the project state.
     - Bookings State: Keep track of the properties that the user has booked.
     - State Handlers:
       - BOOK_HANDLER: Adds a property to the `bookings` state or increases the quantity if the property is already booked.
       - QUANTITY_INCREASE_HANDLER: Increases the quantity of a booked property.
       - QUANTITY_DECREASE_HANDLER: Decreases the quantity of a booked property, and removes it from the cart if the quantity reaches zero.
       - REMOVE_HANDLER: Completely removes a property from the `bookings` state.

2. Component Logic
   - PropertyList Component:
     - Filter properties based on user input (e.g., location, price, number of bedrooms) and display them using `PropertyCard`.
     - When a user clicks "Book Now," the property is added to the cart using the `BOOK_HANDLER`.
   
   - Cart Component:
     - Display the list of booked properties, with options to increase, decrease, or remove items.
     - Handle user actions using `QUANTITY_INCREASE_HANDLER`, `QUANTITY_DECREASE_HANDLER`, and `REMOVE_HANDLER`.
   
   - Checkout Component:
     - Calculate the total cost of all booked properties and display it.
     - (Future Implementation) Include functionality to process payments and confirm bookings.

3. Routing Logic:
   - Ensure that after a user signs up or logs in successfully, they are automatically redirected to the property booking page (Home route).

4. Error Handling and Edge Cases:
   - Implement error handling for common issues, such as booking more properties than available or trying to proceed to checkout with an empty cart.
   - Display clear error messages to guide the user.

5. Potential Enhancements:
   - Add more filtering options like amenities or property type.
   - Implement user authentication to save bookings under a user profile.
   - Build an admin panel to manage properties and bookings.



















