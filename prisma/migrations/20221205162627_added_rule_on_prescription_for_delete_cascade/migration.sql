-- DropForeignKey
ALTER TABLE `Prescription` DROP FOREIGN KEY `Prescription_patientId_fkey`;

-- AddForeignKey
ALTER TABLE `Prescription` ADD CONSTRAINT `Prescription_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
