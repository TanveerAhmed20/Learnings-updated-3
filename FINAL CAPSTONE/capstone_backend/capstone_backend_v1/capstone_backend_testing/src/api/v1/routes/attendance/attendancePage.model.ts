export type AttendanceType = {
    date?: Date;
    session?: string;
    trainingId?: string;
    attendance?: {
        trainerId?: string;
        traineesPresent?: [number];
    }
}

