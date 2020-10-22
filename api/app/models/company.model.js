const sql = require("./db.js");

// constructor
const Company = function(company) {
  this.id = company.id;
  this.name = company.name;
  this.sector = company.sector;
};

Company.create = (newCompany, result) => {
  console.log("here")
  sql.query("INSERT INTO company (name, sector) VALUES (?, ?)", [newCompany.name, newCompany.sector], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created company: ", { id: res.insertId, ...newCompany });
    result(null, { id: res.insertId, ...newCompany });
  });
};

Company.findById = (companyId, result) => {
  sql.query(`SELECT company_id, name, sector FROM company WHERE company_id = ${companyId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found company: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Company with the id
    result({ kind: "not_found" }, null);
  });
};

Company.getAll = (result) => {
  sql.query("SELECT company_id, name, sector FROM company", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("company: ", res);
    result(null, res);
  });
};

Company.updateById = (id, company, result) => {
  sql.query(
    "UPDATE company SET name = ?, sector = ? WHERE company_id = ?",
    [company.name, company.sector, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Company with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated company: ", { id: id, ...company });
      result(null, { id: id, ...company });
    }
  );
};

Company.remove = (id, result) => {
  sql.query("DELETE FROM company WHERE company_id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Company with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted company with id: ", id);
    result(null, res);
  });
};

module.exports = Company;
