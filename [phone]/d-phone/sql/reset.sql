DROP TABLE IF EXISTS `phone_app_chat`;
DROP TABLE IF EXISTS`phone_calls`;
DROP TABLE IF EXISTS `phone_messages`;
DROP TABLE IF EXISTS `phone_users_contacts`;
DROP TABLE IF EXISTS `phone_banking`;
DROP TABLE IF EXISTS `phone_banking_transactions`;
DROP TABLE IF EXISTS `phone_business`;
DROP TABLE IF EXISTS `phone_information`;

DROP TABLE IF EXISTS `phone_twitter_likes`;
DROP TABLE IF EXISTS `phone_twitter_messages`;
DROP TABLE IF EXISTS `phone_twitter_settings`;
DROP TABLE IF EXISTS `phone_twitter_likes`;
DROP TABLE IF EXISTS `phone_twitter_follower`;
DROP TABLE IF EXISTS `phone_twitter_comments`;
DROP TABLE IF EXISTS `phone_twitter_tweets`;
DROP TABLE IF EXISTS `phone_twitter_accounts`;

DROP TABLE IF EXISTS `phone_advertisement`;
DROP TABLE IF EXISTS `phone_teamchat`;
DROP TABLE IF EXISTS `phone_contacts`;
DROP TABLE IF EXISTS `phone_gallery`;


ALTER TABLE `jobs` DROP IF EXISTS `isService`;
ALTER TABLE `jobs` DROP IF EXISTS `handyservice`;
ALTER TABLE `jobs` DROP IF EXISTS `hasapp`;
ALTER TABLE `jobs` DROP IF EXISTS `onlyboss`;
ALTER TABLE `jobs` DROP IF EXISTS `number`;
ALTER TABLE `jobs` DROP IF EXISTS `motdchange`;
ALTER TABLE `jobs` DROP IF EXISTS `member`;
ALTER TABLE `jobs` DROP IF EXISTS `motd`;


DROP TABLE IF EXISTS `phone_dispatches`;
DROP TABLE IF EXISTS `phone_dispatches_open`;
DROP TABLE IF EXISTS `phone_appstore`;
DROP TABLE IF EXISTS `phone_themes`;

ALTER TABLE `users` DROP COLUMN `phone_number`;
