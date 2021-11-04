const employee = {
    name: "Pace",
    streetAddress: "Address is this"
  };
    function updateEmployeeWithKeyAndValue(magic, whatLine, thisItem) {
    return { ...magic, ...{ [whatLine]: thisItem } }
  }
    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
      return employee;
  }
   function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee }
      delete newObj[key];
      return newObj;
  }
    function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
      return employee;
  }

 