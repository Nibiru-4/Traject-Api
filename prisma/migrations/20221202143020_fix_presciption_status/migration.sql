/*
  Warnings:

  - Added the required column `status` to the `Prescription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Prescription` ADD COLUMN `status` VARCHAR(191) NOT NULL;
