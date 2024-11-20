# Employee Directory

A local organization wants to create an application that allows them to manage their employees. You are tasked with creating a proof-of-concept API using placeholder data.

## Instructions

`employees.js` contains the data that this API will be using.
Complete `server.js` to serve the following endpoints:

- `GET /` sends the string `"Hello employees!"`
- `GET /employees` sends the array of employees
- `GET /employees/:id` sends the employee with the given `id`.
  - This should 404 with a message if there is no employee with that id.
- `GET /employees/random` sends a random employee from the array.
  - Be very careful about where you write this middleware! A request is handled by the _first_ handler with a matching path.

You can test your endpoints by sending the requests in `employees.http`.

## Submission

Submit the link to your public GitHub repository.
