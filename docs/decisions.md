# Technical decisions/Things to consider

1. The frontend is a CRA application with Typescript. I used a container/presentation pattern for the components because I think it makes the code cleaner and the components more reusable.

2. The application's idea was a user logs in and sees the home page. I didn't create the whole login screen and functionality because I think I'd have gone way out of scope and time. I hardcoded the login information, but I'd have created an auth hook.

3. I created a utility function to fetch data and services to call that function.

4. I used Downshift for the autocomplete functionality because it has a lot of accessibility focus.

5. I use the most accessibile datepicker I could find. I wanted to display the datepicker itself all the time, not just when the user clicked the input but this datepicker's API didn't support that. Let's just imagine the datepicker is always displayed.

6. I used a compound component for the form because it gives much more flexibility and makes the form + other components(inputs, labels, etc) more reusable. With this approach, you can create different forms while changing the order, the structure, everything. Without this approach you would end up using conditionals and other things for every change that's being asked for the form. For example, let's say the PO wants to have a form with one input and one button. You can create a form with those components but then he wants to add a dropdown, only for one form, not for every form. In this case we'd start to pass props and create conditions to hide or show the components. But, with the compound component pattern you can create each form differently. One form can have a title, input and button; another form can have a label, a dropdown and a button, etc and you don't need any conditionals/props. In this case I didn't use the form a lot but the idea is the same, if we had a page to add a worker, then the form would have been ideal and I'd have added inputs, etc.

7. I didn't know if I should add a 'Pay' button in the cart or not, but it'd have had only a console log because I didn't know what functionality to give to it.

8. I know the slots are always the same, I added the datepicker to simulate a real scenario where the slots change based on the date. That's also why in your cart you can have the same therapist and slot twice, because in reality they'd be differentiated by the date and you shouldn't be able to have two appointments at the same time on the same date.
