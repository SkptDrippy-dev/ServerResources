CREATE TABLE IF NOT EXISTS `phone_business` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job` varchar(50) NOT NULL,
  `motd` varchar(155) NULL,
  `motdchanged` varchar(50) NULL,
  `handyservice` VARCHAR(2) NOT NULL DEFAULT '0',
  `hasapp` int(2) NOT NULL DEFAULT '0',
  `onlyboss` int(2) NOT NULL DEFAULT '0',
  `number` VARCHAR(10) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `phone_calls`;
CREATE TABLE IF NOT EXISTS `phone_calls` (
  `id` int(11) NOT NULL,
  `caller` varchar(10) NOT NULL,
  `receiver` varchar(10) NOT NULL,
  `anonymous` int(1) NOT NULL DEFAULT 0,
  `time` varchar(191) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `phone_contacts`;
CREATE TABLE IF NOT EXISTS `phone_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(80) NOT NULL,
  `name` longtext NOT NULL,
  `number` longtext NOT NULL,
  `favourite` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `phone_information`;
CREATE TABLE IF NOT EXISTS `phone_information` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(60) NOT NULL,
  `wallpaper` varchar(500) NOT NULL DEFAULT 'https://github.com/DeunService/dphoneAssets/blob/main/freeEdition.png?raw=true',
  `darkmode` int(11) NOT NULL DEFAULT 0,
  `flightmode` INT(10) NOT NULL DEFAULT '0',
  `model` VARCHAR(155) NOT NULL,
  `case` VARCHAR(155) NOT NULL,
  `ringtone` VARCHAR(155) NOT NULL,
  `battery` int(3) NOT NULL DEFAULT 100,
  `apptext` int(1) NOT NULL DEFAULT 1,
  `blocked` longtext NULL,
  `twitter_staylogin` varchar(155) NULL,
  `insta_staylogin` varchar(155) NULL,
  `scale` double NOT NULL DEFAULT 100,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `identifier` (`identifier`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `phone_messages`;
CREATE TABLE IF NOT EXISTS `phone_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender` varchar(50) NOT NULL,
  `receiver` varchar(50) NOT NULL,
  `message` varchar(500) NOT NULL DEFAULT '0',
  `date` varchar(50) NOT NULL DEFAULT 'current_timestamp()',
  `isgps` varchar(500) NOT NULL DEFAULT '0',
  `isRead` int(11) NOT NULL DEFAULT 0,
  `owner` int(11) NOT NULL DEFAULT 0,
  `isService` varchar(50) NOT NULL DEFAULT '0',
  `isAnonym` varchar(50) NOT NULL DEFAULT '0',
  `isDeleted` INT(10) NOT NULL DEFAULT '0',
  `time` VARCHAR(11) NOT NULL DEFAULT '12:00',
  `date2` VARCHAR(11) NOT NULL DEFAULT '28.04.2022',
  `senderrpname` VARCHAR(30) NULL,
  `image` VARCHAR(500) NULL,
  `seen` int(1) NOT NULL DEFAULT '1',
  `data` longtext NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=273 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `phone_teamchat`;
CREATE TABLE `phone_teamchat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job` varchar(50) NOT NULL,
  `sender` varchar(50) NOT NULL,
  `message` varchar(500) NOT NULL DEFAULT '0',
  `date` varchar(50) NOT NULL DEFAULT 'current_timestamp()',
  `time` varchar(50) NOT NULL DEFAULT ' 12:00',
  `gps` varchar(500) DEFAULT '0',
  `image` varchar(500) DEFAULT NULL,
  `senderrpname` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=68 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `phone_gallery`;
CREATE TABLE `phone_gallery` (
  `id` int(15) NOT NULL,
  `identifier` varchar(191) NOT NULL,
  `link` varchar(191) NOT NULL,
  `time` varchar(191) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `phone_twitter_accounts` (
  `id` int(11) NOT NULL,
  `userid` varchar(50) NOT NULL DEFAULT '0',
  `identifier` varchar(50) NOT NULL DEFAULT '0',
  `username` varchar(50) NOT NULL DEFAULT '0',
  `password` varchar(50) DEFAULT NULL,
  `salt` varchar(50) DEFAULT NULL,
  `avatar` varchar(1555) NOT NULL DEFAULT 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `verified` int(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`userid`)
) ;

CREATE TABLE `phone_twitter_tweets` (
  `id` int(11) NOT NULL,
  `senderid` varchar(191) DEFAULT NULL,
  `text` text,
  `time` longtext,
  `attachments` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE TABLE `phone_twitter_comments` (
  `id` int(11) NOT NULL,
  `senderid` varchar(191) DEFAULT NULL,
  `text` text,
  `ostime` int(11) DEFAULT NULL,
  `time` longtext,
  `tweetid` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `phone_twitter_follower` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accountid` varchar(50) NOT NULL,
  `followerid` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1676301490 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `phone_twitter_likes` (
  `id` int(11) NOT NULL,
  `userid` varchar(50) DEFAULT NULL,
  `tweetid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `phone_twitter_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(50) NOT NULL DEFAULT '0',
  `notifications` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `phone_advertisement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender` varchar(50) NOT NULL DEFAULT '0',
  `number` varchar(50) NOT NULL DEFAULT '0',
  `name` varchar(50) NOT NULL DEFAULT '0',
  `text` varchar(500) NOT NULL DEFAULT '0',
  `time` varchar(500) NOT NULL DEFAULT '0',
  `attachments` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1677252536 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `phone_themes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(50) NOT NULL,
  `theme` longtext,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `phone_dispatches` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `sender` varchar(50) NOT NULL,
 `receiver` varchar(50) NOT NULL,
 `message` varchar(500) NOT NULL DEFAULT '0',
 `date` varchar(50) NOT NULL DEFAULT 'current_timestamp()',
 `isgps` varchar(500) NOT NULL DEFAULT '0',
 `isRead` int(11) NOT NULL DEFAULT '0',
 `owner` int(11) NOT NULL DEFAULT '0',
 `isAnonym` varchar(50) NOT NULL DEFAULT '0',
 `isDeleted` int(11) NOT NULL DEFAULT '0',
 `time` varchar(50) NOT NULL DEFAULT ' 12:00',
 `date2` varchar(50) NOT NULL DEFAULT '12.04.2022',
 `isService` tinyint(1) NOT NULL,
 `image` varchar(500) DEFAULT NULL,
 `senderrpname` VARCHAR(30) DEFAULT NULL,
 `seen` int(1) DEFAULT '0',
 `data` longtext,
 PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1643 DEFAULT CHARSET=utf8;

CREATE TABLE `phone_dispatches_open` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `job` varchar(155) DEFAULT NULL,
 `sender` varchar(155) DEFAULT NULL,
 `anonymous` int(11) DEFAULT NULL,
 `accepted_id` varchar(155) DEFAULT NULL,
 `label` varchar(155) DEFAULT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

-- Jobs
ALTER TABLE `jobs` ADD COLUMN `handyservice` VARCHAR(2) NOT NULL DEFAULT '0';
ALTER TABLE `jobs` ADD COLUMN `hasapp` int(2) NOT NULL DEFAULT '0';
ALTER TABLE `jobs` ADD COLUMN `onlyboss` int(2) NOT NULL DEFAULT '0';
ALTER TABLE `jobs` ADD COLUMN `number` VARCHAR(10)  NOT NULL DEFAULT '1';
ALTER TABLE `jobs` ADD COLUMN `motdchange` VARCHAR(155)  NULL DEFAULT '';
ALTER TABLE `jobs` ADD COLUMN `motd` VARCHAR(155)  NULL NULL DEFAULT '';
ALTER TABLE `jobs` ADD COLUMN `member` VARCHAR(11)  NULL NULL DEFAULT '';

ALTER TABLE `users` ADD COLUMN `phone_number` VARCHAR(10) NULL;