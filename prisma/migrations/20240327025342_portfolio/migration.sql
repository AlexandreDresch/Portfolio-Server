-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('FRONTEND', 'BACKEND');

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "images" TEXT[],
    "deployment_url" TEXT,
    "github_url" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "type" "ProjectType" NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
