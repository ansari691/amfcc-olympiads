const DatabaseSequence = require('../models/DatabaseSequence');

const generateSequence = async (sequenceName) => {
    try {
        const databaseSequence = await DatabaseSequence.findOne({
          sequenceName,
        });
        if(databaseSequence) {
            sequence = databaseSequence.sequence;
            databaseSequence.sequence++;
            await databaseSequence.save();
            return sequence;
        }
        const newDatabaseSequence = new DatabaseSequence({
          sequenceName,
          sequence: 1,
        });
        await newDatabaseSequence.save();
        return sequence = 1;
      } catch(err){
        return res.status(500).json(err);
      }
}

module.exports = generateSequence; 