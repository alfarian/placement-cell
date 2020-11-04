module.exports = app => {
  const student = require("../controllers/student.controller.js");
  const company = require("../controllers/company.controller.js");

  // Create a new Student
  app.post("/student", student.create);

  // Retrieve all Students
  app.get("/students", student.findAll);

  // Retrieve a single Student with studentId
  app.get("/student/:studentId", student.findOne);

  // Update a Student with studentId
  app.put("/student/:studentId", student.update);

  // Delete a Student with studentId
  app.delete("/student/:studentId", student.delete);

  // Create a new Company
  app.post("/company", company.create);

  // Retrieve all Companies
  app.get("/companies", company.findAll);

  // Retrieve a single Company with companyId
  app.get("/company/:companyId", company.findOne);

  // Update a Company with companyId
  app.put("/company/:companyId", company.update);

  // Delete a Company with companyId
  app.delete("/company/:companyId", company.delete);
};
