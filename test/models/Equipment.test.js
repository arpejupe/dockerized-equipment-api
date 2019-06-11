const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');
const Equipment = require('../../api/models/equipment.model');

let equipment;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

beforeEach(async () => {
  equipment = await Equipment.build({
    title: 'test',
    description: 'testing',
  }).save();
});

test('Equipment is created correctly', async () => {
  expect(equipment.title).toBe('test');
  expect(equipment.description).toBe('testing');
  await equipment.destroy();
});

test('Equipment is updated correctly', async () => {
  await equipment.update({
    title: 'test updated',
  });

  expect(equipment.title).toBe('test updated');

  await equipment.destroy();
});
