import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema({
    name: String,
    startTime: Date,
    project: { type: mongoose.Schema.Types.ObjectId, ref: 'project' },
    endTime: Date,
    duration: Number,
    parentLength: Number,
    passParentLength: Number,
    failParentLength: Number,
    fatalParentLength: Number,
    errorParentLength: Number,
    warningParentLength: Number,
    skipParentLength: Number,
    exceptionsParentLength: Number,
    childLength: Number,
    passChildLength: Number,
    failChildLength: Number,
    fatalChildLength: Number,
    errorChildLength: Number,
    warningChildLength: Number,
    skipChildLength: Number,
    exceptionsChildLength: Number,
    grandChildLength: Number,
    passGrandChildLength: Number,
    failGrandChildLength: Number,
    fatalGrandChildLength: Number,
    errorGrandChildLength: Number,
    warningGrandChildLength: Number,
    skipGrandChildLength: Number,
    exceptionsGrandChildLength: Number
}, { collection: 'report' });

const Report = mongoose.model('report', ReportSchema);

export { Report };
