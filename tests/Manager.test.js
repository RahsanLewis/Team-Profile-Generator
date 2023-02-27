const Manager = require("../lib/manager")

test('It should return manager', () => {

  const manager = new Manager('Tim', '27', 'tim@abc.com', '27')

  const role = manager.getRole()

  expect(role).toBe('Manager')
})
