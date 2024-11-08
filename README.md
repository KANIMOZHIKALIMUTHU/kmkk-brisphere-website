## Install Dependencies:
    npm install

## Run the Application:
    npm start

This will start the development server, and you can view the application by navigating to http://localhost:3000 in your browser.

## Project Structure:
src/
│
├── components/
│   ├── Header.js
│   ├── OrderForm.js
│   ├── Discover.js
│   └── Services.js
│   ├── HomePage.js
│   └── OrderFormPage.js
│
├── App.js
├── index.js
├── HomePage.css
├── OrderForm.css
├── OrderFormPage.css
└── index.css

## Code Explanation
1. App.js
    Sets up routing using React Router with routes for the home page (/) and the order form page (/order-form).
2. HomePage.js
    Contains the main booking section where users can select check-in and check-out dates.
    Navigates to the OrderFormPage when the "BOOK" button is clicked, passing the selected dates as state.
3. OrderFormPage.js
    Receives the check-in and check-out dates through the useLocation hook and displays them in the OrderForm component.
4. OrderForm.js
    Displays the passed check-in and check-out dates as read-only fields and includes a submit button for final booking confirmation.

## How to Use
   1. Select Dates on Home Page:
       Choose the check-in and check-out dates.
       Click the "BOOK" button to proceed to the order form.
   2. Review Booking on Order Form Page:
       Confirm the dates displayed in the order form.
       Submit the form to complete the booking process.
## Customization
   Styling: Modify HomePage.css, OrderForm.css, and OrderFormPage.css to change the appearance of the application.
   Components: Enhance the OrderForm or add new features as needed to extend the functionality.

## Future Enhancements
1. Add payment gateway integration for the "Click to pay token amount" feature.
2. Implement form validation and error handling.
3. Enhance user experience with additional features like guest details and special requests.