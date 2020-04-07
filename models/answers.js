'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeForms = sequelize.define(
    'Answers',
    {
      password: DataTypes.STRING,
      q1: DataTypes.INTEGER,
      q2: DataTypes.INTEGER,
      q3: DataTypes.INTEGER,
      q4: DataTypes.INTEGER,
      q5: DataTypes.INTEGER,
      q6: DataTypes.INTEGER,
      q7: DataTypes.INTEGER,
      q8: DataTypes.INTEGER,
      q9: DataTypes.INTEGER,
      q10: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  );

  class Answers extends SequelizeForms {
    static async all() {
      return await this.findAll();
    }
    static async newAnswers(body) {
      const newAnswers = await this.create({
        password: 'password',
        q1: body.q1,
        q2: body.q2,
        q3: body.q3,
        q4: body.q4,
        q5: body.q5,
        q6: body.q6,
        q7: body.q7,
        q8: body.q8,
        q9: body.q9,
        q10: body.q10,
        createdAt: new Date(),
      });

      return newAnswers;
    }
    static async single(formId) {
      const singleAnswers = await this.findAll({ where: { id: formId } });
      return singleAnswers;
    }

    //this method will search for a form with a particular ID and add an passwordId as well as a comment to it,
    static async updateAnswers(id, status) {
      await this.update(
        { status: status },
        { returning: false, where: { id: id } }
      );
    }
    static async deleteAnswers(id) {
      await this.destroy({ where: { id: id } });
    }
  }

  return Answers;
};
