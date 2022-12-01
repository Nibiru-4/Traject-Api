/*
  Warnings:

  - Made the column `firstname` on table `Doctor` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Doctor` DROP FOREIGN KEY `Doctor_specialityId_fkey`;

-- AlterTable
ALTER TABLE `Doctor` MODIFY `firstname` VARCHAR(191) NOT NULL,
    MODIFY `specialityId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Doctor` ADD CONSTRAINT `Doctor_specialityId_fkey` FOREIGN KEY (`specialityId`) REFERENCES `Speciality`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
