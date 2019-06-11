const Equipment = require('../models/equipment.model');

const EquipmentController = () => {
  const create = async (req, res) => {
    const { body } = req;
    try {
      const equipment = await Equipment.create({
        title: body.title,
        description: body.description,
      });
      return res.status(200).json({ equipment });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const read = async (req, res) => {
    const { params } = req;
    try {
      if (params.id && typeof params.id !== 'number') {
        console.log('ERROR', params.id);
        return res.status(500).json({ msg: 'Error: Invalid ID' });
      }
      const equipment = await Equipment.findAll({
        where: {
          id: params.id,
        },
      });
      console.log('NO ERROR');
      return res.status(200).json({ equipment });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const readAll = async (req, res) => {
    try {
      const equipment = await Equipment.findAll();
      return res.status(200).json({ equipment });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const update = async (req, res) => {
    const { body, params } = req;
    const newEquipment = {
      title: body.title,
      description: body.description,
    };
    try {
      await Equipment.update(
        newEquipment,
        {
          where: { id: params.id },
        },
      );
      const response = { equipment: newEquipment, msg: `Equipment with id ${params.id} updated.` };
      return res.status(200).json(response);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const remove = async (req, res) => {
    const { params } = req;
    try {
      await Equipment.destroy({
        where: {
          id: params.id,
        },
      });
      return res.status(200).json({ msg: `Equipment with id ${params.id} deleted.` });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    create,
    read,
    readAll,
    update,
    remove,
  };
};

module.exports = EquipmentController;
