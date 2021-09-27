# A test application for company X

It’s your first week at X and we’ve decided to pivot into being the world’s premier
site for comparing horses. A basic REST API has been developed and it’s up to you to create
a simple proof of concept CRUD app for users to interact with the data. Details of the API
can be found in the appendix at the end. The following are a set of functional requirements
split into separate tasks.

### Task 1
List existing horses
- The user should be presented with a list of horse names
- The list should only display up to 10 horses at a time

### Task 2
Display details for a horse
- When a user clicks on a horse within the list, they should be presented with all the
details for that horse
- Fields without a value should show as empty

### Task 3
Edit a horse
- From within the view of a horse, the user should be able to edit the fields for that
horse
- The user should not be able to provide an empty name

### Task 4
Add a horse
- From the list view, the user should be able to press a button to add a horse
- Any new horse should have at least a name field. All other fields are optional
- Once added, the horse should display in the list

### Task 5
Comparing horses
- From the list, a user should be able to select two horses and bring up their stats side
by side for comparison


## How to

1. Install packages `npm install`
2. Run the application `npm run start`
3. Build `npm run build`
