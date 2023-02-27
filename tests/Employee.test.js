const Employee = require('../lib/employee');

describe('Employee class', () => {
  let employee;

  beforeEach(() => {
    employee = new Employee('Tim', '27', 'tim@abc.com');
  });

  test('It should return Employee', () => {
    const role = employee.getRole();
    expect(role).toBe('Employee');
  });

  test('It should return Tim', () => {
    const name = employee.getName();
    expect(name).toBe('Tim');
  });

  test('It should return 27', () => {
    const id = employee.getId();
    expect(id).toBe('27');
  });

  test('It should return tim@abc.com', () => {
    const email = employee.getEmail();
    expect(email).toBe('tim@abc.com');
  });
});
