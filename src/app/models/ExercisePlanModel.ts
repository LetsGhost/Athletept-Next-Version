import mongoose, { Document, Model, Schema } from 'mongoose';

interface Exercise {
    Exercises: string;
    Weight: string;
    Sets: string;
    WarmUpSets: string;
    WarmupWeight: string;
    WarmupRepetitions: string;
    Repetitions: string;
    Rest: string;
    Execution: string;
}

interface warmupExercise {
    Exercises: string;
    weight: string;
    repetitions: string;
}

interface warmupMaterials {
    Materials: string;
    weight: string;
    repetitions: string;
}

interface warmup {
    warmupExercise: warmupExercise[];
    warmupMaterials: warmupMaterials[];
}

interface ExerciseDay {
    dayNumber: number;
    weekDay: string;
    type: string;
    trainingDone: boolean;
    trainingMissed: boolean;
    exercises: Exercise[];
    warmup: warmup[];
}

interface ExercisePlanDocument extends Document {
    createdAt: Date;
    exerciseDays: ExerciseDay[];
}

interface ExercisePlanModel extends Model<ExercisePlanDocument> {}

const exerciseSchema = new Schema<Exercise>({
    Exercises: String,
    Weight: String,
    Sets: String,
    WarmUpSets: String,
    WarmupWeight: String,
    WarmupRepetitions: String,
    Repetitions: String,
    Rest: String,
    Execution: String,
});

const warmupExerciseSchema = new Schema<warmupExercise>({
    Exercises: String,
    weight: String,
    repetitions: String,
});

const warmupMaterialsSchema = new Schema<warmupMaterials>({
    Materials: String,
    weight: String,
    repetitions: String,
})

const warmupSchema = new Schema<warmup>({
    warmupExercise: [warmupExerciseSchema],
    warmupMaterials: [warmupMaterialsSchema],
})

const exerciseDaySchema = new Schema<ExerciseDay>({
    dayNumber: Number,
    weekDay: String,
    type: String,
    trainingDone: { type: Boolean, default: false, required: true },
    trainingMissed: { type: Boolean, default: false, required: true },
    exercises: [exerciseSchema],
    warmup: [warmupSchema],
});

const exercisePlanSchema = new Schema<ExercisePlanDocument>({
    createdAt: { type: Date, required: true, default: Date.now },
    exerciseDays: [exerciseDaySchema],
});

const ExercisePlan: ExercisePlanModel = mongoose.model<ExercisePlanDocument, ExercisePlanModel>('ExercisePlan', exercisePlanSchema);

export {ExercisePlan};
