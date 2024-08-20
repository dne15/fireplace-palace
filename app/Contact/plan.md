Make a new component called "ContactForm" and import it into the new page. To start with put all your form into this one component. The form seems to have two "groups" of inputs. This sounds like the perfect use case for a fieldset (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)

Get the whole form looking how it should first (JSX and CSS) in that one component ("ContactForm")

Now create a piece of state for one of the input fields - let's start with the first field (First Name). You could have "const [ firstName, setFirstName ] = useState("");

Now create a function called handleFirstNameChange and connect it to the input's onChange. You could have something like "onChange={(event) => handleFirstNameChange(event)}"

In that function (handleFirstNameChange) read the updated value of the input field (first name field) from the event being passed to the function. Then save the updated value back into the firstName state.

Now link up the input field's value attribute (first name field) to read from that state. That way you have a complete loop! The user typing in the field will trigger the onChange handler, the handler will update state, the updated state will come through to the input's value attribute.

Rinse and repeat for each field. You will quickly see this will make a lot of code. Try to think how you could simplify. Maybe there is a way to use the same on change handler function for each field's onChange event 👀.

Now the user should be able to fill out the form and we should have state that is tracking all the data they fill out.

It's now time to handle the onSubmit of the form (don't forget about preventing the default behaviour). When a user submits the form you should call a submit handler function.

Maybe try to do some validation in that function. Check if each field has been filled out etc.

At every step check your work using console logs. It's easy to make bugs and get lost.

    >> FORM DESIGN

Header - Design Booking
h3 - Personal Information
Fieldset 1 {
Full Name - input box
Postcode - input box
House Number - input box
City - input box
}
h3 - Contatc Info

Fieldset2 {
Phone number - input box
email - input box
}

Error message maybe

submit button

Step 1: Create the ContactForm Component

Set Up a New Page and Component:

Create a new page in your project (e.g., ContactPage.js).
Create a new component file called ContactForm.js.
Import ContactForm into the new page and render it.
Build the Initial Form Structure (JSX):

Create a form inside the ContactForm component.
Divide the inputs into two groups using <fieldset> elements.
Structure the Form:

The first fieldset might include fields like "First Name" and "Last Name".
The second fieldset might include fields like "Email" and "Message".
Each input should have a corresponding label for accessibility.

Step 2: Add Basic Styling (CSS)

Style the Form:
Apply basic styles to the form, fieldsets, inputs, and labels.
Ensure the form is responsive and visually appealing.
Step 3: Implement State Management for the First Input Field

Add State for "First Name":

Use useState to create a state variable: const [firstName, setFirstName] = useState("");.
Create a Change Handler Function:

Create a function handleFirstNameChange to handle the change event for the "First Name" field.
Update the state inside this function using setFirstName(event.target.value).
Connect the Handler to the Input:

In the "First Name" input field, use onChange={(event) => handleFirstNameChange(event)}.
Set the input's value attribute to {firstName} to link it to the state.
Step 4: Repeat for the Other Fields

Add State and Handlers for All Other Fields:

Add useState for each field (e.g., lastName, email, message).
Create change handlers for each field or refactor to use a single generic handler (see Step 5).
Link Each Input Field to Its State:

Ensure each input field has an onChange event connected to the corresponding handler.
Set the value attribute of each input to its respective state variable.
Step 5: Refactor to Simplify the Code

Create a Generic Change Handler:

Refactor the code to use a single change handler function.
Example: onChange={(event) => handleInputChange(event)}.
The handler would dynamically update the corresponding state based on the name attribute of the input field.
Update the State in the Generic Handler:

Use setState with a dynamic key to update the correct piece of state based on the input field's name.
Step 6: Implement Form Submission Logic

Add an onSubmit Handler:

Create a submit handler function handleSubmit.
Prevent the default form submission behavior using event.preventDefault().
Validate Form Data:

Inside the handleSubmit function, validate that all fields have been filled out.
Log the data or show an alert if validation fails.
Handle Successful Submission:

If all validation passes, log the form data or simulate a form submission (e.g., sending data to an API).
Step 7: Test and Debug

Test Every Step:

Use console.log statements to verify that each state update and event handler works as expected.
Test that the form state updates correctly and that validation works.
Fix Bugs and Refactor:

Address any bugs or issues that arise during testing.
Refactor code for readability and efficiency.
Step 8: Finalize the Component

Remove Debugging Logs:

Once everything works, clean up any console.log statements used for debugging.
Final Review:

Review the code to ensure it’s clean, efficient, and well-commented.
Ensure the form is fully functional and user-friendly.
Summary

This plan breaks down the implementation of a ContactForm component into manageable steps. It starts with setting up the component, adding state management, refactoring for simplicity, and finally handling form submission with validation. By following these steps, you can create a fully functional and state-managed contact form in React.
