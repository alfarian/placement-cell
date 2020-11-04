const Company = require("../models/company.model.js");

// Create and Save a new Company
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  // Create a Company
  const company = new Company({
    name: req.body.name,
    sector: req.body.sector,
  });
  // Save Company in the database
  Company.create(company, (err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the Company."
      });
    else res.json(data);
  });
};

// Retrieve all Companys from the database.
exports.findAll = (req, res) => {
  Company.getAll((err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving companys."
      });
    else res.json(data);
  });
};

// Find a single Company with a companyId
exports.findOne = (req, res) => {
  Company.findById(req.params.companyId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          message: `Not found Company with id ${req.params.companyId}.`
        });
      } else {
        res.status(500).json({
          message: "Error retrieving Company with id " + req.params.companyId
        });
      }
    } else res.json(data);
  });
};

// Update a Company identified by the companyId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Company.updateById(
    req.params.companyId,
    new Company(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).json({
            message: `Not found Company with id ${req.params.companyId}.`
          });
        } else {
          res.status(500).json({
            message: "Error updating Company with id " + req.params.companyId
          });
        }
      } else res.json(data);
    }
  );
};

// Delete a Company with the specified companyId in the request
exports.delete = (req, res) => {
  Company.remove(req.params.companyId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          message: `Not found Company with id ${req.params.companyId}.`
        });
      } else {
        res.status(500).json({
          message: "Could not delete Company with id " + req.params.companyId
        });
      }
    } else res.json({ message: `Company was deleted successfully!` });
  });
};

