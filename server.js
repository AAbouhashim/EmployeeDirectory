const http = require('http');
const employees = require('./employees'); // Import the employees list

const hostname = '127.0.0.1';
const port = 3000;

// Utility function to get a random employee
function getRandomEmployee() {
  const randomIndex = Math.floor(Math.random() * employees.length);
  return employees[randomIndex];
}

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  // Root route
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to the Employee API!' }));

  // Get all employees
  } else if (req.method === 'GET' && req.url === '/employees') {
    res.statusCode = 200;
    res.end(JSON.stringify(employees));

  // Get a specific employee by ID
  } else if (req.method === 'GET' && req.url.startsWith('/employees/')) {
    const id = req.url.split('/')[2]; // Extract the ID from the URL
    const employee = employees.find(emp => emp.id === parseInt(id, 10));

    if (employee) {
      res.statusCode = 200;
      res.end(JSON.stringify(employee));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Employee not found' }));
    }

  // Get a random employee
  } else if (req.method === 'GET' && req.url === '/employees/random') {
    const randomEmployee = getRandomEmployee();
    res.statusCode = 200;
    res.end(JSON.stringify(randomEmployee));

  // Handle unknown routes
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});