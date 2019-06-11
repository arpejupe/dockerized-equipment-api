// const request = require('supertest');
const { spy, stub } = require('sinon');
const chai = require('chai');

chai.should();

const {
  beforeAction,
  afterAction,
} = require('../setup/_setup');

const EquipmentController = require('../../api/controllers/equipment.controller');
const Equipment = require('../../api/models/equipment.model');

const equipmentController = EquipmentController();

// let api;
let status;
let json;
let res;
let req;
let equipment;

beforeAll(async () => {
  await beforeAction();
});

afterAll(() => {
  afterAction();
});

describe('Equipment | create', async () => {
  beforeEach(async () => {
    status = stub();
    json = spy();
    res = { json, status };
    status.returns(res);
  });

  it('should return status ok when valid equipment object provided', async () => {
    req = {
      body: {
        title: 'test 1',
        description: 'testing 1',
      },
    };
    await equipmentController.create(req, res);

    expect(status.calledWith(200)).toBeTruthy();

    equipment = await Equipment.findById(1);

    expect(equipment.title).toBe(req.body.title);

    await equipment.destroy();
  });
});

describe('Equipment | get by id', async () => {
  beforeEach(async () => {
    status = stub();
    json = spy();
    res = { json, status };
    status.returns(res);

    equipment = await Equipment.build({
      title: 'test 1',
      description: 'testing 1',
    }).save();
  });

  it('should return error when parameter not provided', async () => {
    req = {
      params: { id: 'Im string' },
    };
    await equipmentController.read(req, res);
    expect(json.calledWith({ msg: 'Error: Invalid ID' }));
    expect(status.calledWith(500)).toBeTruthy();

    await equipment.destroy();
  });

  it('should return status ok when parameter provided', async () => {
    req = {
      params: { id: 1 },
    };
    await equipmentController.read(req, res);
    expect(status.calledWith(200)).toBeTruthy();

    await equipment.destroy();
  });
});
