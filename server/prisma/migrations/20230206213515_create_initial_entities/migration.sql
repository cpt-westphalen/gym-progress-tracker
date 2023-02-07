-- CreateTable
CREATE TABLE "dayRegistries" (
    "date" TIMESTAMP(3) NOT NULL,
    "workoutId" TEXT NOT NULL,
    "details" TEXT
);

-- CreateTable
CREATE TABLE "workouts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "workouts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "muscleGroups" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "muscleGroups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MuscleGroupToWorkout" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "dayRegistries_date_key" ON "dayRegistries"("date");

-- CreateIndex
CREATE UNIQUE INDEX "workouts_id_key" ON "workouts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "muscleGroups_id_key" ON "muscleGroups"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_MuscleGroupToWorkout_AB_unique" ON "_MuscleGroupToWorkout"("A", "B");

-- CreateIndex
CREATE INDEX "_MuscleGroupToWorkout_B_index" ON "_MuscleGroupToWorkout"("B");

-- AddForeignKey
ALTER TABLE "dayRegistries" ADD CONSTRAINT "dayRegistries_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "workouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MuscleGroupToWorkout" ADD CONSTRAINT "_MuscleGroupToWorkout_A_fkey" FOREIGN KEY ("A") REFERENCES "muscleGroups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MuscleGroupToWorkout" ADD CONSTRAINT "_MuscleGroupToWorkout_B_fkey" FOREIGN KEY ("B") REFERENCES "workouts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
