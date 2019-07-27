# Employees Reviews
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Controls

### carousel
Swiped, employee avatar page opens by double-clicking,
it also closes the comment form (if it was open).
### list
Single-click to choose item, scrolled.
### employee page
Displays current info & 5 last comments. On click 'add comment' opens form.
### comment form
Input data is verified by the validator: title (required, 5-80 characters), 
phone(required, only real with +7/8 international format), text(no more than 128 characters).
Invalid data makes submit button disabled.
