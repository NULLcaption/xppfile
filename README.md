/*
Navicat MySQL Data Transfer

Source Server         : bootdo
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : bootdo

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2018-07-18 13:25:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `act_evt_log`
-- ----------------------------
DROP TABLE IF EXISTS `act_evt_log`;
CREATE TABLE `act_evt_log` (
  `LOG_NR_` bigint(20) NOT NULL AUTO_INCREMENT,
  `TYPE_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TIME_STAMP_` timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  `USER_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `DATA_` longblob,
  `LOCK_OWNER_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `LOCK_TIME_` timestamp(3) NULL DEFAULT NULL,
  `IS_PROCESSED_` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`LOG_NR_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_evt_log
-- ----------------------------

-- ----------------------------
-- Table structure for `act_ge_bytearray`
-- ----------------------------
DROP TABLE IF EXISTS `act_ge_bytearray`;
CREATE TABLE `act_ge_bytearray` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `DEPLOYMENT_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `BYTES_` longblob,
  `GENERATED_` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_FK_BYTEARR_DEPL` (`DEPLOYMENT_ID_`),
  CONSTRAINT `ACT_FK_BYTEARR_DEPL` FOREIGN KEY (`DEPLOYMENT_ID_`) REFERENCES `act_re_deployment` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_ge_bytearray
-- ----------------------------
INSERT INTO `act_ge_bytearray` VALUES ('2502', '1', 'source', null, 0x7B226964223A2263616E766173222C227265736F757263654964223A2263616E766173222C227374656E63696C736574223A7B226E616D657370616365223A22687474703A2F2F62336D6E2E6F72672F7374656E63696C7365742F62706D6E322E3023227D7D, null);

-- ----------------------------
-- Table structure for `act_ge_property`
-- ----------------------------
DROP TABLE IF EXISTS `act_ge_property`;
CREATE TABLE `act_ge_property` (
  `NAME_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `VALUE_` varchar(300) COLLATE utf8_bin DEFAULT NULL,
  `REV_` int(11) DEFAULT NULL,
  PRIMARY KEY (`NAME_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_ge_property
-- ----------------------------
INSERT INTO `act_ge_property` VALUES ('next.dbid', '5001', '3');
INSERT INTO `act_ge_property` VALUES ('schema.history', 'create(5.22.0.0)', '1');
INSERT INTO `act_ge_property` VALUES ('schema.version', '5.22.0.0', '1');

-- ----------------------------
-- Table structure for `act_hi_actinst`
-- ----------------------------
DROP TABLE IF EXISTS `act_hi_actinst`;
CREATE TABLE `act_hi_actinst` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `ACT_ID_` varchar(255) COLLATE utf8_bin NOT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `CALL_PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `ACT_NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `ACT_TYPE_` varchar(255) COLLATE utf8_bin NOT NULL,
  `ASSIGNEE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `START_TIME_` datetime(3) NOT NULL,
  `END_TIME_` datetime(3) DEFAULT NULL,
  `DURATION_` bigint(20) DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_HI_ACT_INST_START` (`START_TIME_`),
  KEY `ACT_IDX_HI_ACT_INST_END` (`END_TIME_`),
  KEY `ACT_IDX_HI_ACT_INST_PROCINST` (`PROC_INST_ID_`,`ACT_ID_`),
  KEY `ACT_IDX_HI_ACT_INST_EXEC` (`EXECUTION_ID_`,`ACT_ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_hi_actinst
-- ----------------------------

-- ----------------------------
-- Table structure for `act_hi_attachment`
-- ----------------------------
DROP TABLE IF EXISTS `act_hi_attachment`;
CREATE TABLE `act_hi_attachment` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `REV_` int(11) DEFAULT NULL,
  `USER_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `DESCRIPTION_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `URL_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `CONTENT_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TIME_` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_hi_attachment
-- ----------------------------

-- ----------------------------
-- Table structure for `act_hi_comment`
-- ----------------------------
DROP TABLE IF EXISTS `act_hi_comment`;
CREATE TABLE `act_hi_comment` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TIME_` datetime(3) NOT NULL,
  `USER_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `ACTION_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `MESSAGE_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `FULL_MSG_` longblob,
  PRIMARY KEY (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_hi_comment
-- ----------------------------

-- ----------------------------
-- Table structure for `act_hi_detail`
-- ----------------------------
DROP TABLE IF EXISTS `act_hi_detail`;
CREATE TABLE `act_hi_detail` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin NOT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `ACT_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin NOT NULL,
  `VAR_TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `REV_` int(11) DEFAULT NULL,
  `TIME_` datetime(3) NOT NULL,
  `BYTEARRAY_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `DOUBLE_` double DEFAULT NULL,
  `LONG_` bigint(20) DEFAULT NULL,
  `TEXT_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TEXT2_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_HI_DETAIL_PROC_INST` (`PROC_INST_ID_`),
  KEY `ACT_IDX_HI_DETAIL_ACT_INST` (`ACT_INST_ID_`),
  KEY `ACT_IDX_HI_DETAIL_TIME` (`TIME_`),
  KEY `ACT_IDX_HI_DETAIL_NAME` (`NAME_`),
  KEY `ACT_IDX_HI_DETAIL_TASK_ID` (`TASK_ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_hi_detail
-- ----------------------------

-- ----------------------------
-- Table structure for `act_hi_identitylink`
-- ----------------------------
DROP TABLE IF EXISTS `act_hi_identitylink`;
CREATE TABLE `act_hi_identitylink` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `GROUP_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `USER_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_HI_IDENT_LNK_USER` (`USER_ID_`),
  KEY `ACT_IDX_HI_IDENT_LNK_TASK` (`TASK_ID_`),
  KEY `ACT_IDX_HI_IDENT_LNK_PROCINST` (`PROC_INST_ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_hi_identitylink
-- ----------------------------

-- ----------------------------
-- Table structure for `act_hi_procinst`
-- ----------------------------
DROP TABLE IF EXISTS `act_hi_procinst`;
CREATE TABLE `act_hi_procinst` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `BUSINESS_KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `START_TIME_` datetime(3) NOT NULL,
  `END_TIME_` datetime(3) DEFAULT NULL,
  `DURATION_` bigint(20) DEFAULT NULL,
  `START_USER_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `START_ACT_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `END_ACT_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `SUPER_PROCESS_INSTANCE_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `DELETE_REASON_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  UNIQUE KEY `PROC_INST_ID_` (`PROC_INST_ID_`),
  KEY `ACT_IDX_HI_PRO_INST_END` (`END_TIME_`),
  KEY `ACT_IDX_HI_PRO_I_BUSKEY` (`BUSINESS_KEY_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_hi_procinst
-- ----------------------------

-- ----------------------------
-- Table structure for `act_hi_taskinst`
-- ----------------------------
DROP TABLE IF EXISTS `act_hi_taskinst`;
CREATE TABLE `act_hi_taskinst` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TASK_DEF_KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PARENT_TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `DESCRIPTION_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `OWNER_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `ASSIGNEE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `START_TIME_` datetime(3) NOT NULL,
  `CLAIM_TIME_` datetime(3) DEFAULT NULL,
  `END_TIME_` datetime(3) DEFAULT NULL,
  `DURATION_` bigint(20) DEFAULT NULL,
  `DELETE_REASON_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `PRIORITY_` int(11) DEFAULT NULL,
  `DUE_DATE_` datetime(3) DEFAULT NULL,
  `FORM_KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `CATEGORY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_HI_TASK_INST_PROCINST` (`PROC_INST_ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_hi_taskinst
-- ----------------------------

-- ----------------------------
-- Table structure for `act_hi_varinst`
-- ----------------------------
DROP TABLE IF EXISTS `act_hi_varinst`;
CREATE TABLE `act_hi_varinst` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin NOT NULL,
  `VAR_TYPE_` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `REV_` int(11) DEFAULT NULL,
  `BYTEARRAY_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `DOUBLE_` double DEFAULT NULL,
  `LONG_` bigint(20) DEFAULT NULL,
  `TEXT_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TEXT2_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `CREATE_TIME_` datetime(3) DEFAULT NULL,
  `LAST_UPDATED_TIME_` datetime(3) DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_HI_PROCVAR_PROC_INST` (`PROC_INST_ID_`),
  KEY `ACT_IDX_HI_PROCVAR_NAME_TYPE` (`NAME_`,`VAR_TYPE_`),
  KEY `ACT_IDX_HI_PROCVAR_TASK_ID` (`TASK_ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_hi_varinst
-- ----------------------------

-- ----------------------------
-- Table structure for `act_id_group`
-- ----------------------------
DROP TABLE IF EXISTS `act_id_group`;
CREATE TABLE `act_id_group` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_id_group
-- ----------------------------

-- ----------------------------
-- Table structure for `act_id_info`
-- ----------------------------
DROP TABLE IF EXISTS `act_id_info`;
CREATE TABLE `act_id_info` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `USER_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TYPE_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `VALUE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PASSWORD_` longblob,
  `PARENT_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_id_info
-- ----------------------------

-- ----------------------------
-- Table structure for `act_id_membership`
-- ----------------------------
DROP TABLE IF EXISTS `act_id_membership`;
CREATE TABLE `act_id_membership` (
  `USER_ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `GROUP_ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  PRIMARY KEY (`USER_ID_`,`GROUP_ID_`),
  KEY `ACT_FK_MEMB_GROUP` (`GROUP_ID_`),
  CONSTRAINT `ACT_FK_MEMB_GROUP` FOREIGN KEY (`GROUP_ID_`) REFERENCES `act_id_group` (`ID_`),
  CONSTRAINT `ACT_FK_MEMB_USER` FOREIGN KEY (`USER_ID_`) REFERENCES `act_id_user` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_id_membership
-- ----------------------------

-- ----------------------------
-- Table structure for `act_id_user`
-- ----------------------------
DROP TABLE IF EXISTS `act_id_user`;
CREATE TABLE `act_id_user` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `FIRST_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `LAST_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `EMAIL_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PWD_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PICTURE_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_id_user
-- ----------------------------

-- ----------------------------
-- Table structure for `act_procdef_info`
-- ----------------------------
DROP TABLE IF EXISTS `act_procdef_info`;
CREATE TABLE `act_procdef_info` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `REV_` int(11) DEFAULT NULL,
  `INFO_JSON_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  UNIQUE KEY `ACT_UNIQ_INFO_PROCDEF` (`PROC_DEF_ID_`),
  KEY `ACT_IDX_INFO_PROCDEF` (`PROC_DEF_ID_`),
  KEY `ACT_FK_INFO_JSON_BA` (`INFO_JSON_ID_`),
  CONSTRAINT `ACT_FK_INFO_JSON_BA` FOREIGN KEY (`INFO_JSON_ID_`) REFERENCES `act_ge_bytearray` (`ID_`),
  CONSTRAINT `ACT_FK_INFO_PROCDEF` FOREIGN KEY (`PROC_DEF_ID_`) REFERENCES `act_re_procdef` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_procdef_info
-- ----------------------------

-- ----------------------------
-- Table structure for `act_re_deployment`
-- ----------------------------
DROP TABLE IF EXISTS `act_re_deployment`;
CREATE TABLE `act_re_deployment` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `CATEGORY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  `DEPLOY_TIME_` timestamp(3) NULL DEFAULT NULL,
  PRIMARY KEY (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_re_deployment
-- ----------------------------

-- ----------------------------
-- Table structure for `act_re_model`
-- ----------------------------
DROP TABLE IF EXISTS `act_re_model`;
CREATE TABLE `act_re_model` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `REV_` int(11) DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `CATEGORY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `CREATE_TIME_` timestamp(3) NULL DEFAULT NULL,
  `LAST_UPDATE_TIME_` timestamp(3) NULL DEFAULT NULL,
  `VERSION_` int(11) DEFAULT NULL,
  `META_INFO_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `DEPLOYMENT_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `EDITOR_SOURCE_VALUE_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `EDITOR_SOURCE_EXTRA_VALUE_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  KEY `ACT_FK_MODEL_SOURCE` (`EDITOR_SOURCE_VALUE_ID_`),
  KEY `ACT_FK_MODEL_SOURCE_EXTRA` (`EDITOR_SOURCE_EXTRA_VALUE_ID_`),
  KEY `ACT_FK_MODEL_DEPLOYMENT` (`DEPLOYMENT_ID_`),
  CONSTRAINT `ACT_FK_MODEL_DEPLOYMENT` FOREIGN KEY (`DEPLOYMENT_ID_`) REFERENCES `act_re_deployment` (`ID_`),
  CONSTRAINT `ACT_FK_MODEL_SOURCE` FOREIGN KEY (`EDITOR_SOURCE_VALUE_ID_`) REFERENCES `act_ge_bytearray` (`ID_`),
  CONSTRAINT `ACT_FK_MODEL_SOURCE_EXTRA` FOREIGN KEY (`EDITOR_SOURCE_EXTRA_VALUE_ID_`) REFERENCES `act_ge_bytearray` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_re_model
-- ----------------------------
INSERT INTO `act_re_model` VALUES ('2501', '2', 'new-process', 'process', null, '2018-05-03 15:48:20.236', '2018-05-03 15:48:20.253', '1', '{\"name\":\"new-process\",\"description\":\"\",\"revision\":1}', null, '2502', null, '');

-- ----------------------------
-- Table structure for `act_re_procdef`
-- ----------------------------
DROP TABLE IF EXISTS `act_re_procdef`;
CREATE TABLE `act_re_procdef` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `REV_` int(11) DEFAULT NULL,
  `CATEGORY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `KEY_` varchar(255) COLLATE utf8_bin NOT NULL,
  `VERSION_` int(11) NOT NULL,
  `DEPLOYMENT_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `RESOURCE_NAME_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `DGRM_RESOURCE_NAME_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `DESCRIPTION_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `HAS_START_FORM_KEY_` tinyint(4) DEFAULT NULL,
  `HAS_GRAPHICAL_NOTATION_` tinyint(4) DEFAULT NULL,
  `SUSPENSION_STATE_` int(11) DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  UNIQUE KEY `ACT_UNIQ_PROCDEF` (`KEY_`,`VERSION_`,`TENANT_ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_re_procdef
-- ----------------------------

-- ----------------------------
-- Table structure for `act_ru_event_subscr`
-- ----------------------------
DROP TABLE IF EXISTS `act_ru_event_subscr`;
CREATE TABLE `act_ru_event_subscr` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `REV_` int(11) DEFAULT NULL,
  `EVENT_TYPE_` varchar(255) COLLATE utf8_bin NOT NULL,
  `EVENT_NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `ACTIVITY_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `CONFIGURATION_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `CREATED_` timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_EVENT_SUBSCR_CONFIG_` (`CONFIGURATION_`),
  KEY `ACT_FK_EVENT_EXEC` (`EXECUTION_ID_`),
  CONSTRAINT `ACT_FK_EVENT_EXEC` FOREIGN KEY (`EXECUTION_ID_`) REFERENCES `act_ru_execution` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_ru_event_subscr
-- ----------------------------

-- ----------------------------
-- Table structure for `act_ru_execution`
-- ----------------------------
DROP TABLE IF EXISTS `act_ru_execution`;
CREATE TABLE `act_ru_execution` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `BUSINESS_KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PARENT_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `SUPER_EXEC_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `ACT_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `IS_ACTIVE_` tinyint(4) DEFAULT NULL,
  `IS_CONCURRENT_` tinyint(4) DEFAULT NULL,
  `IS_SCOPE_` tinyint(4) DEFAULT NULL,
  `IS_EVENT_SCOPE_` tinyint(4) DEFAULT NULL,
  `SUSPENSION_STATE_` int(11) DEFAULT NULL,
  `CACHED_ENT_STATE_` int(11) DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `LOCK_TIME_` timestamp(3) NULL DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_EXEC_BUSKEY` (`BUSINESS_KEY_`),
  KEY `ACT_FK_EXE_PROCINST` (`PROC_INST_ID_`),
  KEY `ACT_FK_EXE_PARENT` (`PARENT_ID_`),
  KEY `ACT_FK_EXE_SUPER` (`SUPER_EXEC_`),
  KEY `ACT_FK_EXE_PROCDEF` (`PROC_DEF_ID_`),
  CONSTRAINT `ACT_FK_EXE_PARENT` FOREIGN KEY (`PARENT_ID_`) REFERENCES `act_ru_execution` (`ID_`),
  CONSTRAINT `ACT_FK_EXE_PROCDEF` FOREIGN KEY (`PROC_DEF_ID_`) REFERENCES `act_re_procdef` (`ID_`),
  CONSTRAINT `ACT_FK_EXE_PROCINST` FOREIGN KEY (`PROC_INST_ID_`) REFERENCES `act_ru_execution` (`ID_`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ACT_FK_EXE_SUPER` FOREIGN KEY (`SUPER_EXEC_`) REFERENCES `act_ru_execution` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_ru_execution
-- ----------------------------

-- ----------------------------
-- Table structure for `act_ru_identitylink`
-- ----------------------------
DROP TABLE IF EXISTS `act_ru_identitylink`;
CREATE TABLE `act_ru_identitylink` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `GROUP_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `USER_ID_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_IDENT_LNK_USER` (`USER_ID_`),
  KEY `ACT_IDX_IDENT_LNK_GROUP` (`GROUP_ID_`),
  KEY `ACT_IDX_ATHRZ_PROCEDEF` (`PROC_DEF_ID_`),
  KEY `ACT_FK_TSKASS_TASK` (`TASK_ID_`),
  KEY `ACT_FK_IDL_PROCINST` (`PROC_INST_ID_`),
  CONSTRAINT `ACT_FK_ATHRZ_PROCEDEF` FOREIGN KEY (`PROC_DEF_ID_`) REFERENCES `act_re_procdef` (`ID_`),
  CONSTRAINT `ACT_FK_IDL_PROCINST` FOREIGN KEY (`PROC_INST_ID_`) REFERENCES `act_ru_execution` (`ID_`),
  CONSTRAINT `ACT_FK_TSKASS_TASK` FOREIGN KEY (`TASK_ID_`) REFERENCES `act_ru_task` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_ru_identitylink
-- ----------------------------

-- ----------------------------
-- Table structure for `act_ru_job`
-- ----------------------------
DROP TABLE IF EXISTS `act_ru_job`;
CREATE TABLE `act_ru_job` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `REV_` int(11) DEFAULT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin NOT NULL,
  `LOCK_EXP_TIME_` timestamp(3) NULL DEFAULT NULL,
  `LOCK_OWNER_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `EXCLUSIVE_` tinyint(1) DEFAULT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROCESS_INSTANCE_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `RETRIES_` int(11) DEFAULT NULL,
  `EXCEPTION_STACK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `EXCEPTION_MSG_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `DUEDATE_` timestamp(3) NULL DEFAULT NULL,
  `REPEAT_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `HANDLER_TYPE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `HANDLER_CFG_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  PRIMARY KEY (`ID_`),
  KEY `ACT_FK_JOB_EXCEPTION` (`EXCEPTION_STACK_ID_`),
  CONSTRAINT `ACT_FK_JOB_EXCEPTION` FOREIGN KEY (`EXCEPTION_STACK_ID_`) REFERENCES `act_ge_bytearray` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_ru_job
-- ----------------------------

-- ----------------------------
-- Table structure for `act_ru_task`
-- ----------------------------
DROP TABLE IF EXISTS `act_ru_task`;
CREATE TABLE `act_ru_task` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL DEFAULT '',
  `REV_` int(11) DEFAULT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_DEF_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `PARENT_TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `DESCRIPTION_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TASK_DEF_KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `OWNER_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `ASSIGNEE_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `DELEGATION_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PRIORITY_` int(11) DEFAULT NULL,
  `CREATE_TIME_` timestamp(3) NULL DEFAULT NULL,
  `DUE_DATE_` datetime(3) DEFAULT NULL,
  `CATEGORY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `SUSPENSION_STATE_` int(11) DEFAULT NULL,
  `TENANT_ID_` varchar(255) COLLATE utf8_bin DEFAULT '',
  `FORM_KEY_` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_TASK_CREATE` (`CREATE_TIME_`),
  KEY `ACT_FK_TASK_EXE` (`EXECUTION_ID_`),
  KEY `ACT_FK_TASK_PROCINST` (`PROC_INST_ID_`),
  KEY `ACT_FK_TASK_PROCDEF` (`PROC_DEF_ID_`),
  CONSTRAINT `ACT_FK_TASK_EXE` FOREIGN KEY (`EXECUTION_ID_`) REFERENCES `act_ru_execution` (`ID_`),
  CONSTRAINT `ACT_FK_TASK_PROCDEF` FOREIGN KEY (`PROC_DEF_ID_`) REFERENCES `act_re_procdef` (`ID_`),
  CONSTRAINT `ACT_FK_TASK_PROCINST` FOREIGN KEY (`PROC_INST_ID_`) REFERENCES `act_ru_execution` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_ru_task
-- ----------------------------

-- ----------------------------
-- Table structure for `act_ru_variable`
-- ----------------------------
DROP TABLE IF EXISTS `act_ru_variable`;
CREATE TABLE `act_ru_variable` (
  `ID_` varchar(64) COLLATE utf8_bin NOT NULL,
  `REV_` int(11) DEFAULT NULL,
  `TYPE_` varchar(255) COLLATE utf8_bin NOT NULL,
  `NAME_` varchar(255) COLLATE utf8_bin NOT NULL,
  `EXECUTION_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `PROC_INST_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `TASK_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `BYTEARRAY_ID_` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `DOUBLE_` double DEFAULT NULL,
  `LONG_` bigint(20) DEFAULT NULL,
  `TEXT_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  `TEXT2_` varchar(4000) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`ID_`),
  KEY `ACT_IDX_VARIABLE_TASK_ID` (`TASK_ID_`),
  KEY `ACT_FK_VAR_EXE` (`EXECUTION_ID_`),
  KEY `ACT_FK_VAR_PROCINST` (`PROC_INST_ID_`),
  KEY `ACT_FK_VAR_BYTEARRAY` (`BYTEARRAY_ID_`),
  CONSTRAINT `ACT_FK_VAR_BYTEARRAY` FOREIGN KEY (`BYTEARRAY_ID_`) REFERENCES `act_ge_bytearray` (`ID_`),
  CONSTRAINT `ACT_FK_VAR_EXE` FOREIGN KEY (`EXECUTION_ID_`) REFERENCES `act_ru_execution` (`ID_`),
  CONSTRAINT `ACT_FK_VAR_PROCINST` FOREIGN KEY (`PROC_INST_ID_`) REFERENCES `act_ru_execution` (`ID_`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of act_ru_variable
-- ----------------------------

-- ----------------------------
-- Table structure for `blog_content`
-- ----------------------------
DROP TABLE IF EXISTS `blog_content`;
CREATE TABLE `blog_content` (
  `cid` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `slug` varchar(255) DEFAULT NULL,
  `created` bigint(20) DEFAULT NULL COMMENT '创建人id',
  `modified` bigint(20) DEFAULT NULL COMMENT '最近修改人id',
  `content` text COMMENT '内容',
  `type` varchar(16) DEFAULT NULL COMMENT '类型',
  `tags` varchar(200) DEFAULT NULL COMMENT '标签',
  `categories` varchar(200) DEFAULT NULL COMMENT '分类',
  `hits` int(5) DEFAULT NULL,
  `comments_num` int(5) DEFAULT '0' COMMENT '评论数量',
  `allow_comment` int(1) DEFAULT '0' COMMENT '开启评论',
  `allow_ping` int(1) DEFAULT '0' COMMENT '允许ping',
  `allow_feed` int(1) DEFAULT '0' COMMENT '允许反馈',
  `status` int(1) DEFAULT NULL COMMENT '状态',
  `author` varchar(100) DEFAULT NULL COMMENT '作者',
  `gtm_create` datetime DEFAULT NULL COMMENT '创建时间',
  `gtm_modified` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='文章内容';

-- ----------------------------
-- Records of blog_content
-- ----------------------------

-- ----------------------------
-- Table structure for `file_history`
-- ----------------------------
DROP TABLE IF EXISTS `file_history`;
CREATE TABLE `file_history` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userid` bigint(20) DEFAULT NULL COMMENT '用户id',
  `bvid` bigint(20) DEFAULT NULL COMMENT '下载文件id',
  `downloadtime` datetime DEFAULT NULL COMMENT '下载时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of file_history
-- ----------------------------
INSERT INTO `file_history` VALUES ('1', '1', '30', '2018-06-26 09:42:04');
INSERT INTO `file_history` VALUES ('2', '1', '31', '2018-06-26 11:22:47');
INSERT INTO `file_history` VALUES ('3', '140', '30', '2018-06-26 11:27:16');
INSERT INTO `file_history` VALUES ('4', '144', '30', '2018-06-27 15:43:54');
INSERT INTO `file_history` VALUES ('5', '144', '30', '2018-06-27 16:02:31');
INSERT INTO `file_history` VALUES ('6', '144', '33', '2018-06-27 16:02:44');
INSERT INTO `file_history` VALUES ('7', '142', '34', '2018-06-27 16:15:58');
INSERT INTO `file_history` VALUES ('8', '142', '35', '2018-06-27 16:21:04');
INSERT INTO `file_history` VALUES ('9', '143', '36', '2018-06-27 16:21:34');
INSERT INTO `file_history` VALUES ('10', '142', '30', '2018-06-27 16:34:02');
INSERT INTO `file_history` VALUES ('11', '1', '36', '2018-07-16 16:49:41');

-- ----------------------------
-- Table structure for `oa_notify`
-- ----------------------------
DROP TABLE IF EXISTS `oa_notify`;
CREATE TABLE `oa_notify` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `type` char(1) COLLATE utf8_bin DEFAULT NULL COMMENT '类型',
  `title` varchar(200) COLLATE utf8_bin DEFAULT NULL COMMENT '标题',
  `content` varchar(2000) COLLATE utf8_bin DEFAULT NULL COMMENT '内容',
  `files` varchar(2000) COLLATE utf8_bin DEFAULT NULL COMMENT '附件',
  `status` char(1) COLLATE utf8_bin DEFAULT NULL COMMENT '状态',
  `create_by` bigint(20) DEFAULT NULL COMMENT '创建者',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '更新者',
  `update_date` datetime DEFAULT NULL COMMENT '更新时间',
  `remarks` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '备注信息',
  `del_flag` char(1) COLLATE utf8_bin DEFAULT '0' COMMENT '删除标记',
  PRIMARY KEY (`id`),
  KEY `oa_notify_del_flag` (`del_flag`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='通知通告';

-- ----------------------------
-- Records of oa_notify
-- ----------------------------
INSERT INTO `oa_notify` VALUES ('41', '3', '十九大召开了', '十九大召开了，竟然没邀请我', '', '1', '1', null, null, '2017-10-10 17:21:11', '', null);
INSERT INTO `oa_notify` VALUES ('42', '3', '苹果发布新手机了', '有全面屏的iphoneX', '', '1', '1', null, null, '2017-10-10 18:51:14', '', null);
INSERT INTO `oa_notify` VALUES ('43', '3', '十九大要消灭贫困人口', '我还只有两三年的活头了', '', '1', '1', null, null, '2017-10-11 09:56:35', '', null);
INSERT INTO `oa_notify` VALUES ('44', '3', '骑士又输了', '捉急', '', '1', '1', null, null, '2017-10-26 13:59:34', '', null);
INSERT INTO `oa_notify` VALUES ('45', '3', '火箭5连败', '没有保罗不行呀', '', '1', '1', null, null, '2017-12-30 12:10:20', '', null);

-- ----------------------------
-- Table structure for `oa_notify_record`
-- ----------------------------
DROP TABLE IF EXISTS `oa_notify_record`;
CREATE TABLE `oa_notify_record` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `notify_id` bigint(20) DEFAULT NULL COMMENT '通知通告ID',
  `user_id` bigint(20) DEFAULT NULL COMMENT '接受人',
  `is_read` tinyint(1) DEFAULT '0' COMMENT '阅读标记',
  `read_date` date DEFAULT NULL COMMENT '阅读时间',
  PRIMARY KEY (`id`),
  KEY `oa_notify_record_notify_id` (`notify_id`),
  KEY `oa_notify_record_user_id` (`user_id`),
  KEY `oa_notify_record_read_flag` (`is_read`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='通知通告发送记录';

-- ----------------------------
-- Records of oa_notify_record
-- ----------------------------
INSERT INTO `oa_notify_record` VALUES ('18', '41', '1', '1', '2017-10-26');
INSERT INTO `oa_notify_record` VALUES ('19', '42', '1', '1', '2017-10-26');
INSERT INTO `oa_notify_record` VALUES ('20', '43', '136', '0', null);
INSERT INTO `oa_notify_record` VALUES ('21', '43', '133', '0', null);
INSERT INTO `oa_notify_record` VALUES ('22', '43', '130', '0', null);
INSERT INTO `oa_notify_record` VALUES ('23', '43', '1', '1', '2017-10-26');
INSERT INTO `oa_notify_record` VALUES ('24', '44', '1', '1', '2017-12-29');
INSERT INTO `oa_notify_record` VALUES ('25', '45', '1', '1', '2018-01-02');
INSERT INTO `oa_notify_record` VALUES ('26', '45', '135', '0', null);

-- ----------------------------
-- Table structure for `salary`
-- ----------------------------
DROP TABLE IF EXISTS `salary`;
CREATE TABLE `salary` (
  `id` varchar(64) COLLATE utf8_bin NOT NULL COMMENT '编号',
  `PROC_INS_ID` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '流程实例ID',
  `USER_ID` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '变动用户',
  `OFFICE_ID` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT '归属部门',
  `POST` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '岗位',
  `AGE` char(1) COLLATE utf8_bin DEFAULT NULL COMMENT '性别',
  `EDU` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '学历',
  `CONTENT` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '调整原因',
  `OLDA` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '现行标准 薪酬档级',
  `OLDB` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '现行标准 月工资额',
  `OLDC` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '现行标准 年薪总额',
  `NEWA` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '调整后标准 薪酬档级',
  `NEWB` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '调整后标准 月工资额',
  `NEWC` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '调整后标准 年薪总额',
  `ADD_NUM` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '月增资',
  `EXE_DATE` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '执行时间',
  `HR_TEXT` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '人力资源部门意见',
  `LEAD_TEXT` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '分管领导意见',
  `MAIN_LEAD_TEXT` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '集团主要领导意见',
  `create_by` varchar(64) COLLATE utf8_bin NOT NULL COMMENT '创建者',
  `create_date` datetime NOT NULL COMMENT '创建时间',
  `update_by` varchar(64) COLLATE utf8_bin NOT NULL COMMENT '更新者',
  `update_date` datetime NOT NULL COMMENT '更新时间',
  `remarks` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '备注信息',
  `del_flag` char(1) COLLATE utf8_bin NOT NULL DEFAULT '0' COMMENT '删除标记',
  PRIMARY KEY (`id`),
  KEY `OA_TEST_AUDIT_del_flag` (`del_flag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='审批流程测试表';

-- ----------------------------
-- Records of salary
-- ----------------------------
INSERT INTO `salary` VALUES ('825693cd6c1c4f6b86699fc3f1a54887', '', '136', '', '', '', '', '技能提高', '', '', '', '', '100', '', '', '', '同意', '同意', '总经理审批', '1', '2017-12-15 22:01:41', '1', '2017-12-15 22:01:41', null, '1');
INSERT INTO `salary` VALUES ('a80e1d9ef35a4502bd65b0e5ba7eafff', '', 'cccc', 'ccc', 'ccccc', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2017-11-30 16:35:15', '', '2017-11-30 16:35:15', '', '');
INSERT INTO `salary` VALUES ('b5d228f729f74833883917825749f0d5', '', '', '', '', '', '', '', '', '', '', '', '', '防守打法', '', '', '', '', '', '', '2017-11-30 19:58:36', '', '2017-11-30 19:58:36', '', '');
INSERT INTO `salary` VALUES ('cc2e8083f9d8478f831b2ea852e5c17b', '', '', 'cc', 'cc', '', '', 'xxx', '', '', '', '', '', '', '', '', '', '', '', '', '2017-11-30 19:18:59', '', '2017-11-30 19:18:59', '', '');
INSERT INTO `salary` VALUES ('cebdb316794b48be87d93dd4dbfb7d4b', '', '', '', '发的顺丰', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2017-11-30 19:58:43', '', '2017-11-30 19:58:43', '', '');

-- ----------------------------
-- Table structure for `sys_dept`
-- ----------------------------
DROP TABLE IF EXISTS `sys_dept`;
CREATE TABLE `sys_dept` (
  `dept_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `parent_id` bigint(20) DEFAULT NULL COMMENT '上级部门ID，一级部门为0',
  `name` varchar(50) DEFAULT NULL COMMENT '部门名称',
  `order_num` int(11) DEFAULT NULL COMMENT '排序',
  `del_flag` tinyint(4) DEFAULT '0' COMMENT '是否删除  -1：已删除  0：正常',
  PRIMARY KEY (`dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COMMENT='部门管理';

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES ('6', '0', '研发部', '1', '1');
INSERT INTO `sys_dept` VALUES ('7', '6', '研發一部', '1', '1');
INSERT INTO `sys_dept` VALUES ('8', '6', '研发二部', '2', '1');
INSERT INTO `sys_dept` VALUES ('9', '0', '销售部', '2', '1');
INSERT INTO `sys_dept` VALUES ('10', '9', '销售一部', '1', '2');
INSERT INTO `sys_dept` VALUES ('11', '0', '产品部', '3', '1');
INSERT INTO `sys_dept` VALUES ('12', '11', '产品一部', '1', '1');
INSERT INTO `sys_dept` VALUES ('13', '0', '测试部', '5', '1');
INSERT INTO `sys_dept` VALUES ('14', '13', '测试一部', '1', '1');
INSERT INTO `sys_dept` VALUES ('15', '13', '测试二部', '2', '1');

-- ----------------------------
-- Table structure for `sys_dict`
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict`;
CREATE TABLE `sys_dict` (
  `id` bigint(64) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `name` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '标签名',
  `value` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '数据值',
  `type` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '类型',
  `description` varchar(100) COLLATE utf8_bin DEFAULT NULL COMMENT '描述',
  `sort` decimal(10,0) DEFAULT NULL COMMENT '排序（升序）',
  `parent_id` bigint(64) DEFAULT '0' COMMENT '父级编号',
  `create_by` int(64) DEFAULT NULL COMMENT '创建者',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` bigint(64) DEFAULT NULL COMMENT '更新者',
  `update_date` datetime DEFAULT NULL COMMENT '更新时间',
  `remarks` varchar(255) COLLATE utf8_bin DEFAULT NULL COMMENT '备注信息',
  `del_flag` char(1) COLLATE utf8_bin DEFAULT '0' COMMENT '删除标记',
  PRIMARY KEY (`id`),
  KEY `sys_dict_value` (`value`),
  KEY `sys_dict_label` (`name`),
  KEY `sys_dict_del_flag` (`del_flag`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='字典表';

-- ----------------------------
-- Records of sys_dict
-- ----------------------------
INSERT INTO `sys_dict` VALUES ('1', '正常', '0', 'del_flag', '删除标记', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('3', '显示', '1', 'show_hide', '显示/隐藏', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('4', '隐藏', '0', 'show_hide', '显示/隐藏', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('5', '是', '1', 'yes_no', '是/否', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('6', '否', '0', 'yes_no', '是/否', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('7', '红色', 'red', 'color', '颜色值', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('8', '绿色', 'green', 'color', '颜色值', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('9', '蓝色', 'blue', 'color', '颜色值', '30', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('10', '黄色', 'yellow', 'color', '颜色值', '40', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('11', '橙色', 'orange', 'color', '颜色值', '50', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('12', '默认主题', 'default', 'theme', '主题方案', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('13', '天蓝主题', 'cerulean', 'theme', '主题方案', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('14', '橙色主题', 'readable', 'theme', '主题方案', '30', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('15', '红色主题', 'united', 'theme', '主题方案', '40', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('16', 'Flat主题', 'flat', 'theme', '主题方案', '60', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('17', '国家', '1', 'sys_area_type', '区域类型', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('18', '省份、直辖市', '2', 'sys_area_type', '区域类型', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('19', '地市', '3', 'sys_area_type', '区域类型', '30', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('20', '区县', '4', 'sys_area_type', '区域类型', '40', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('21', '公司', '1', 'sys_office_type', '机构类型', '60', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('22', '部门', '2', 'sys_office_type', '机构类型', '70', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('23', '小组', '3', 'sys_office_type', '机构类型', '80', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('24', '其它', '4', 'sys_office_type', '机构类型', '90', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('25', '综合部', '1', 'sys_office_common', '快捷通用部门', '30', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('26', '开发部', '2', 'sys_office_common', '快捷通用部门', '40', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('27', '人力部', '3', 'sys_office_common', '快捷通用部门', '50', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('28', '一级', '1', 'sys_office_grade', '机构等级', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('29', '二级', '2', 'sys_office_grade', '机构等级', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('30', '三级', '3', 'sys_office_grade', '机构等级', '30', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('31', '四级', '4', 'sys_office_grade', '机构等级', '40', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('32', '所有数据', '1', 'sys_data_scope', '数据范围', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('33', '所在公司及以下数据', '2', 'sys_data_scope', '数据范围', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('34', '所在公司数据', '3', 'sys_data_scope', '数据范围', '30', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('35', '所在部门及以下数据', '4', 'sys_data_scope', '数据范围', '40', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('36', '所在部门数据', '5', 'sys_data_scope', '数据范围', '50', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('37', '仅本人数据', '8', 'sys_data_scope', '数据范围', '90', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('38', '按明细设置', '9', 'sys_data_scope', '数据范围', '100', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('39', '系统管理', '1', 'sys_user_type', '用户类型', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('40', '部门经理', '2', 'sys_user_type', '用户类型', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('41', '普通用户', '3', 'sys_user_type', '用户类型', '30', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('42', '基础主题', 'basic', 'cms_theme', '站点主题', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('43', '蓝色主题', 'blue', 'cms_theme', '站点主题', '20', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('44', '红色主题', 'red', 'cms_theme', '站点主题', '30', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('45', '文章模型', 'article', 'cms_module', '栏目模型', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('46', '图片模型', 'picture', 'cms_module', '栏目模型', '20', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('47', '下载模型', 'download', 'cms_module', '栏目模型', '30', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('48', '链接模型', 'link', 'cms_module', '栏目模型', '40', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('49', '专题模型', 'special', 'cms_module', '栏目模型', '50', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('50', '默认展现方式', '0', 'cms_show_modes', '展现方式', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('51', '首栏目内容列表', '1', 'cms_show_modes', '展现方式', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('52', '栏目第一条内容', '2', 'cms_show_modes', '展现方式', '30', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('53', '发布', '0', 'cms_del_flag', '内容状态', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('54', '删除', '1', 'cms_del_flag', '内容状态', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('55', '审核', '2', 'cms_del_flag', '内容状态', '15', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('56', '首页焦点图', '1', 'cms_posid', '推荐位', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('57', '栏目页文章推荐', '2', 'cms_posid', '推荐位', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('58', '咨询', '1', 'cms_guestbook', '留言板分类', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('59', '建议', '2', 'cms_guestbook', '留言板分类', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('60', '投诉', '3', 'cms_guestbook', '留言板分类', '30', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('61', '其它', '4', 'cms_guestbook', '留言板分类', '40', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('62', '公休', '1', 'oa_leave_type', '请假类型', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('63', '病假', '2', 'oa_leave_type', '请假类型', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('64', '事假', '3', 'oa_leave_type', '请假类型', '30', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('65', '调休', '4', 'oa_leave_type', '请假类型', '40', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('66', '婚假', '5', 'oa_leave_type', '请假类型', '60', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('67', '接入日志', '1', 'sys_log_type', '日志类型', '30', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('68', '异常日志', '2', 'sys_log_type', '日志类型', '40', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('69', '请假流程', 'leave', 'act_type', '流程类型', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('70', '审批测试流程', 'test_audit', 'act_type', '流程类型', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('71', '分类1', '1', 'act_category', '流程分类', '10', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('72', '分类2', '2', 'act_category', '流程分类', '20', '0', '1', null, '1', null, null, '0');
INSERT INTO `sys_dict` VALUES ('73', '增删改查', 'crud', 'gen_category', '代码生成分类', '10', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('74', '增删改查（包含从表）', 'crud_many', 'gen_category', '代码生成分类', '20', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('75', '树结构', 'tree', 'gen_category', '代码生成分类', '30', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('76', '=', '=', 'gen_query_type', '查询方式', '10', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('77', '!=', '!=', 'gen_query_type', '查询方式', '20', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('78', '&gt;', '&gt;', 'gen_query_type', '查询方式', '30', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('79', '&lt;', '&lt;', 'gen_query_type', '查询方式', '40', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('80', 'Between', 'between', 'gen_query_type', '查询方式', '50', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('81', 'Like', 'like', 'gen_query_type', '查询方式', '60', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('82', 'Left Like', 'left_like', 'gen_query_type', '查询方式', '70', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('83', 'Right Like', 'right_like', 'gen_query_type', '查询方式', '80', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('84', '文本框', 'input', 'gen_show_type', '字段生成方案', '10', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('85', '文本域', 'textarea', 'gen_show_type', '字段生成方案', '20', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('86', '下拉框', 'select', 'gen_show_type', '字段生成方案', '30', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('87', '复选框', 'checkbox', 'gen_show_type', '字段生成方案', '40', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('88', '单选框', 'radiobox', 'gen_show_type', '字段生成方案', '50', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('89', '日期选择', 'dateselect', 'gen_show_type', '字段生成方案', '60', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('90', '人员选择', 'userselect', 'gen_show_type', '字段生成方案', '70', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('91', '部门选择', 'officeselect', 'gen_show_type', '字段生成方案', '80', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('92', '区域选择', 'areaselect', 'gen_show_type', '字段生成方案', '90', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('93', 'String', 'String', 'gen_java_type', 'Java类型', '10', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('94', 'Long', 'Long', 'gen_java_type', 'Java类型', '20', '0', '1', null, '1', null, null, '1');
INSERT INTO `sys_dict` VALUES ('95', '仅持久层', 'dao', 'gen_category', '代码生成分类', '40', '0', '1', null, '1', null, null, '1');

-- ----------------------------
-- Table structure for `sys_file`
-- ----------------------------
DROP TABLE IF EXISTS `sys_file`;
CREATE TABLE `sys_file` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL COMMENT '文件类型',
  `url` varchar(200) DEFAULT NULL COMMENT 'URL地址',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='文件上传';

-- ----------------------------
-- Records of sys_file
-- ----------------------------
INSERT INTO `sys_file` VALUES ('1', '0', '/files/33b27f1e-d501-4b8d-88ec-afbb0419c41d.png', '2018-06-21 10:48:43');
INSERT INTO `sys_file` VALUES ('2', '0', '/files/f8a6ef02-b021-4f3f-891a-d7492f6ccac9.png', '2018-06-21 10:48:45');

-- ----------------------------
-- Table structure for `sys_log`
-- ----------------------------
DROP TABLE IF EXISTS `sys_log`;
CREATE TABLE `sys_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL COMMENT '用户id',
  `username` varchar(50) DEFAULT NULL COMMENT '用户名',
  `operation` varchar(50) DEFAULT NULL COMMENT '用户操作',
  `time` int(11) DEFAULT NULL COMMENT '响应时间',
  `method` varchar(200) DEFAULT NULL COMMENT '请求方法',
  `params` varchar(5000) DEFAULT NULL COMMENT '请求参数',
  `ip` varchar(64) DEFAULT NULL COMMENT 'IP地址',
  `gmt_create` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='系统日志';

-- ----------------------------
-- Records of sys_log
-- ----------------------------

-- ----------------------------
-- Table structure for `sys_menu`
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu` (
  `menu_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `parent_id` bigint(20) DEFAULT NULL COMMENT '父菜单ID，一级菜单为0',
  `name` varchar(50) DEFAULT NULL COMMENT '菜单名称',
  `url` varchar(200) DEFAULT NULL COMMENT '菜单URL',
  `perms` varchar(500) DEFAULT NULL COMMENT '授权(多个用逗号分隔，如：user:list,user:create)',
  `type` int(11) DEFAULT NULL COMMENT '类型   0：目录   1：菜单   2：按钮',
  `icon` varchar(50) DEFAULT NULL COMMENT '菜单图标',
  `order_num` int(11) DEFAULT NULL COMMENT '排序',
  `gmt_create` datetime DEFAULT NULL COMMENT '创建时间',
  `gmt_modified` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=177 DEFAULT CHARSET=utf8 COMMENT='菜单管理';

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES ('1', '0', 'BasicManagement', '', '', '0', 'fa fa-battery-4', '0', '2017-08-09 22:49:47', null);
INSERT INTO `sys_menu` VALUES ('2', '3', 'Menu', '/bootdo/sys/menu/', 'sys:menu:menu', '1', 'fa fa-th-list', '2', '2017-08-09 22:55:15', null);
INSERT INTO `sys_menu` VALUES ('3', '0', 'SystemManagment', '', '', '0', 'fa fa-desktop', '1', '2017-08-09 23:06:55', '2017-08-14 14:13:43');
INSERT INTO `sys_menu` VALUES ('6', '3', 'User', '/bootdo/sys/user/', 'sys:user:user', '1', 'fa fa-user', '0', '2017-08-10 14:12:11', null);
INSERT INTO `sys_menu` VALUES ('7', '3', 'Role', '/bootdo/sys/role', 'sys:role:role', '1', 'fa fa-paw', '1', '2017-08-10 14:13:19', null);
INSERT INTO `sys_menu` VALUES ('12', '6', '新增', '', 'sys:user:add', '2', '', '0', '2017-08-14 10:51:35', null);
INSERT INTO `sys_menu` VALUES ('13', '6', '编辑', '', 'sys:user:edit', '2', '', '0', '2017-08-14 10:52:06', null);
INSERT INTO `sys_menu` VALUES ('14', '6', '删除', null, 'sys:user:remove', '2', null, '0', '2017-08-14 10:52:24', null);
INSERT INTO `sys_menu` VALUES ('15', '7', '新增', '', 'sys:role:add', '2', '', '0', '2017-08-14 10:56:37', null);
INSERT INTO `sys_menu` VALUES ('20', '2', '新增', '', 'sys:menu:add', '2', '', '0', '2017-08-14 10:59:32', null);
INSERT INTO `sys_menu` VALUES ('21', '2', '编辑', '', 'sys:menu:edit', '2', '', '0', '2017-08-14 10:59:56', null);
INSERT INTO `sys_menu` VALUES ('22', '2', '删除', '', 'sys:menu:remove', '2', '', '0', '2017-08-14 11:00:26', null);
INSERT INTO `sys_menu` VALUES ('24', '6', '批量删除', '', 'sys:user:batchRemove', '2', '', '0', '2017-08-14 17:27:18', null);
INSERT INTO `sys_menu` VALUES ('25', '6', '停用', null, 'sys:user:disable', '2', null, '0', '2017-08-14 17:27:43', null);
INSERT INTO `sys_menu` VALUES ('26', '6', '重置密码', '', 'sys:user:resetPwd', '2', '', '0', '2017-08-14 17:28:34', null);
INSERT INTO `sys_menu` VALUES ('27', '91', '系统日志', '/bootdo/common/log', 'common:log', '1', 'fa fa-warning', '0', '2017-08-14 22:11:53', null);
INSERT INTO `sys_menu` VALUES ('28', '27', '刷新', null, 'sys:log:list', '2', null, '0', '2017-08-14 22:30:22', null);
INSERT INTO `sys_menu` VALUES ('29', '27', '删除', null, 'sys:log:remove', '2', null, '0', '2017-08-14 22:30:43', null);
INSERT INTO `sys_menu` VALUES ('30', '27', '清空', null, 'sys:log:clear', '2', null, '0', '2017-08-14 22:31:02', null);
INSERT INTO `sys_menu` VALUES ('48', '77', '代码生成', '/bootdo/common/generator', 'common:generator', '1', 'fa fa-code', '3', null, null);
INSERT INTO `sys_menu` VALUES ('49', '0', 'BlogManagement', '', '', '0', 'fa fa-rss', '6', null, null);
INSERT INTO `sys_menu` VALUES ('50', '49', '文章列表', '/bootdo/blog/bContent', 'blog:bContent:bContent', '1', 'fa fa-file-image-o', '1', null, null);
INSERT INTO `sys_menu` VALUES ('51', '50', '新增', '', 'blog:bContent:add', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('55', '7', '编辑', '', 'sys:role:edit', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('56', '7', '删除', '', 'sys:role:remove', '2', null, null, null, null);
INSERT INTO `sys_menu` VALUES ('57', '91', '运行监控', '/bootdo/druid/index.html', '', '1', 'fa fa-caret-square-o-right', '1', null, null);
INSERT INTO `sys_menu` VALUES ('58', '50', '编辑', '', 'blog:bContent:edit', '2', null, null, null, null);
INSERT INTO `sys_menu` VALUES ('59', '50', '删除', '', 'blog:bContent:remove', '2', null, null, null, null);
INSERT INTO `sys_menu` VALUES ('60', '50', '批量删除', '', 'blog:bContent:batchRemove', '2', null, null, null, null);
INSERT INTO `sys_menu` VALUES ('61', '2', '批量删除', '', 'sys:menu:batchRemove', '2', null, null, null, null);
INSERT INTO `sys_menu` VALUES ('62', '7', '批量删除', '', 'sys:role:batchRemove', '2', null, null, null, null);
INSERT INTO `sys_menu` VALUES ('68', '49', '发布文章', '/bootdo/blog/bContent/add', 'blog:bContent:add', '1', 'fa fa-edit', '0', null, null);
INSERT INTO `sys_menu` VALUES ('71', '1', 'systemFile', '/bootdo/common/sysFile', 'common:sysFile:sysFile', '1', 'fa fa-folder-open', '2', null, null);
INSERT INTO `sys_menu` VALUES ('72', '77', '计划任务', '/bootdo/common/job', 'common:taskScheduleJob', '1', 'fa fa-hourglass-1', '4', null, null);
INSERT INTO `sys_menu` VALUES ('73', '3', 'Deptment', '/bootdo/system/sysDept', 'system:sysDept:sysDept', '1', 'fa fa-users', '3', null, null);
INSERT INTO `sys_menu` VALUES ('74', '73', '增加', '/bootdo/system/sysDept/add', 'system:sysDept:add', '2', null, '1', null, null);
INSERT INTO `sys_menu` VALUES ('75', '73', '刪除', '/bootdo/system/sysDept/remove', 'system:sysDept:remove', '2', null, '2', null, null);
INSERT INTO `sys_menu` VALUES ('76', '73', '编辑', '/bootdo/system/sysDept/edit', 'system:sysDept:edit', '2', null, '3', null, null);
INSERT INTO `sys_menu` VALUES ('77', '0', 'SystemTools', '', '', '0', 'fa fa-gear', '4', null, null);
INSERT INTO `sys_menu` VALUES ('78', '1', 'DataDictionary', '/bootdo/common/dict', 'common:dict:dict', '1', 'fa fa-book', '1', null, null);
INSERT INTO `sys_menu` VALUES ('79', '78', 'add', '/bootdo/common/dict/add', 'common:dict:add', '2', '', '2', null, null);
INSERT INTO `sys_menu` VALUES ('80', '78', 'edit', '/bootdo/common/dict/edit', 'common:dict:edit', '2', '', '2', null, null);
INSERT INTO `sys_menu` VALUES ('81', '78', 'remove', '/bootdo/common/dict/remove', 'common:dict:remove', '2', '', '3', null, null);
INSERT INTO `sys_menu` VALUES ('83', '78', 'batchRemove', '/bootdo/common/dict/batchRemove', 'common:dict:batchRemove', '2', '', '4', null, null);
INSERT INTO `sys_menu` VALUES ('84', '0', 'OfficeManagement', '', '', '0', 'fa fa-laptop', '5', null, null);
INSERT INTO `sys_menu` VALUES ('85', '84', '通知公告', '/bootdo/oa/notify', 'oa:notify:notify', '1', 'fa fa-pencil-square', null, null, null);
INSERT INTO `sys_menu` VALUES ('86', '85', '新增', '/bootdo/oa/notify/add', 'oa:notify:add', '2', 'fa fa-plus', '1', null, null);
INSERT INTO `sys_menu` VALUES ('87', '85', '编辑', '/bootdo/oa/notify/edit', 'oa:notify:edit', '2', 'fa fa-pencil-square-o', '2', null, null);
INSERT INTO `sys_menu` VALUES ('88', '85', '删除', '/bootdo/oa/notify/remove', 'oa:notify:remove', '2', 'fa fa-minus', null, null, null);
INSERT INTO `sys_menu` VALUES ('89', '85', '批量删除', '/bootdo/oa/notify/batchRemove', 'oa:notify:batchRemove', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('90', '84', '我的通知', '/bootdo/oa/notify/selfNotify', '', '1', 'fa fa-envelope-square', null, null, null);
INSERT INTO `sys_menu` VALUES ('91', '0', 'SystemMonitoring', '', '', '0', 'fa fa-video-camera', '5', null, null);
INSERT INTO `sys_menu` VALUES ('92', '91', '在线用户', '/bootdo/sys/online', '', '1', 'fa fa-user', null, null, null);
INSERT INTO `sys_menu` VALUES ('93', '0', 'Workflow', '', '', '0', 'fa fa-print', '6', null, null);
INSERT INTO `sys_menu` VALUES ('94', '93', '模型管理', '/bootdo/activiti/model', '', '1', 'fa fa-sort-amount-asc', null, null, null);
INSERT INTO `sys_menu` VALUES ('95', '94', '全部权限', '', 'activiti:model', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('96', '93', '流程管理', '/bootdo/activiti/process', '', '1', 'fa fa-flag', null, null, null);
INSERT INTO `sys_menu` VALUES ('99', '96', '所有权限', '', 'act:process', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('101', '93', '待办任务', '/bootdo/activiti/task/todo', '', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('103', '0', 'XPP', '', '', '0', 'fa fa-bell', '7', null, null);
INSERT INTO `sys_menu` VALUES ('104', '103', 'BrandVasual', '/bootdo/blog/xppContent', 'blog:xppContent:xppContent', '1', 'fa fa-bars', '1', null, null);
INSERT INTO `sys_menu` VALUES ('105', '103', 'Product Information', '', '', '0', 'fa fa-book', '2', null, null);
INSERT INTO `sys_menu` VALUES ('106', '103', 'Merchandising and POS Materials', '', '', '0', 'fa fa-book', '3', null, null);
INSERT INTO `sys_menu` VALUES ('107', '103', 'Advertising', '', '', '0', 'fa fa-book', '4', null, null);
INSERT INTO `sys_menu` VALUES ('108', '103', 'Contents Marketing', '', '', '0', 'fa fa-book', '5', null, null);
INSERT INTO `sys_menu` VALUES ('109', '0', 'Meco', '', '', '0', 'fa fa-caret-square-o-down', '8', null, null);
INSERT INTO `sys_menu` VALUES ('110', '109', 'BrandVasual', '/bootdo/blog/mecoContent', 'blog:mecoContent:mecoContent', '1', '', '1', null, null);
INSERT INTO `sys_menu` VALUES ('111', '109', 'Product Information', '/bootdo/blog/mecoContent_pl', 'blog:mecoContent_pl:mecoContent_pl', '1', 'fa fa-bars', '2', null, null);
INSERT INTO `sys_menu` VALUES ('112', '109', 'Merchandising and POS Materials', '', '', '0', 'fa fa-book', '3', null, null);
INSERT INTO `sys_menu` VALUES ('113', '109', 'Advertising', '', '', '0', 'fa fa-book', '3', null, null);
INSERT INTO `sys_menu` VALUES ('114', '109', 'Contents Marketing', '', '', '0', 'fa fa-book', '5', null, null);
INSERT INTO `sys_menu` VALUES ('115', '0', 'LFY', '', '', '0', 'fa fa-cloud', '9', null, null);
INSERT INTO `sys_menu` VALUES ('116', '115', 'BrandVasual', '/bootdo/blog/lfyContent', 'blog:lfyContent:lfyContent', '1', 'fa fa-bars', '1', null, null);
INSERT INTO `sys_menu` VALUES ('119', '115', 'Product Information', '/bootdo/blog/lfyContent_pi', 'blog:lfyContent_pi:lfyContent_pi', '1', 'fa fa-bars', '2', null, null);
INSERT INTO `sys_menu` VALUES ('120', '115', 'Merchandising and POS Materials', '', '', '0', 'fa fa-book', '3', null, null);
INSERT INTO `sys_menu` VALUES ('121', '115', 'Advertising ', '', '', '0', 'fa fa-book', '4', null, null);
INSERT INTO `sys_menu` VALUES ('122', '115', 'Contents Marketing', '', '', '0', 'fa fa-book', '6', null, null);
INSERT INTO `sys_menu` VALUES ('123', '0', 'Internal User', '', '', '0', 'fa fa-child', '10', null, null);
INSERT INTO `sys_menu` VALUES ('124', '123', 'Documents', '/bootdo/blog/documents', 'blog:documents:documents', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('125', '105', 'Classic Line', '/bootdo/blog/xppContent_cl', 'blog:xppContent_cl:xppContent_cl', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('126', '105', 'Premium Line', '/bootdo/blog/xppContent_pl', 'blog:xppContent_pl:xppContent_pl', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('127', '105', 'Special Pack', '/bootdo/blog/xppContent_sp', 'blog:xppContent_sp:xppContent_sp', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('128', '106', 'Merchandising', '/bootdo/blog/xppContent_m', 'blog:xppContent_m:xppContent_m', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('129', '106', 'Promotion', '/bootdo/blog/xppContent_p', 'blog:xppContent_p:xppContent_p', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('130', '107', 'Video', '/bootdo/blog/xppContent_av', 'blog:xppContent_av:xppContent_av', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('132', '108', 'Video', '/bootdo/blog/xppContent_cv', 'blog:xppContent_cv:xppContent_cv', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('133', '107', 'Image', '/bootdo/blog/xppContent_ai', 'blog:xppContent_ai:xppContent_ai', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('134', '108', 'Image', '/bootdo/blog/xppContent_ci', 'blog:xppContent_ci:xppContent_ci', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('135', '108', 'Prarticles', '/bootdo/blog/xppContent_cp', 'blog:xppContent_cp:xppContent_cp', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('136', '112', 'Merchandising', '/bootdo/blog/mecoContent_m', 'blog:mecoContent_m:mecoContent_m', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('137', '112', 'Promotion', '/bootdo/blog/mecoContent_p', 'blog:mecoContent_p:mecoContent_p', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('138', '113', 'Video', '/bootdo/blog/mecoContent_av', 'blog:mecoContent_av:mecoContent_av', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('139', '113', 'Image', '/bootdo/blog/mecoContent_ai', 'blog:mecoContent_ai:mecoContent_ai', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('140', '114', 'Video', '/bootdo/blog/mecoContent_cv', 'blog:mecoContent_cv:mecoContent_cv', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('141', '114', 'Image', '/bootdo/blog/mecoContent_ci', 'blog:mecoContent_ci:mecoContent_ci', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('142', '120', 'Merchandising', '/bootdo/blog/lfyContent_m', 'blog:lfyContent_m:lfyContent_m', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('143', '120', 'Promotion', '/bootdo/blog/lfyContent_p', 'blog:lfyContent_p:lfyContent_p', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('144', '121', 'Video', '/bootdo/blog/lfyContent_av', 'blog:lfyContent_av:lfyContent_av', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('145', '121', 'Image', '/bootdo/blog/lfyContent_ai', 'blog:lfyContent_ai:lfyContent_ai', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('146', '122', 'Video', '/bootdo/blog/lfyContent_cv', 'blog:lfyContent_cv:lfyContent_cv', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('147', '122', 'Image', '/bootdo/blog/lfyContent_ci', 'blog:lfyContent_ci:lfyContent_ci', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('148', '122', 'Prarticles', '/bootdo/blog/lfyContent_cp', 'blog:lfyContent_cp:lfyContent_cp', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('149', '114', 'Pr articles', '/bootdo/blog/mecoContent_cp', 'blog:mecoContent_cp:mecoContent_cp', '1', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('151', '104', 'edit', '', 'blog:xppContent:edit', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('152', '104', 'remove', '', 'blog:xppContent:remove', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('154', '104', 'batchRemove', '', 'blog:xppContent:batchRemove', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('155', '104', 'upload', '', 'blog:xppContent:upload', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('156', '104', 'download', '', 'blog:xppContent:download', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('157', '0', 'Download History', '', '', '0', 'fa fa-sort-amount-asc', '11', null, null);
INSERT INTO `sys_menu` VALUES ('158', '157', 'Download History View', '/bootdo/blog/downloadHistory', 'blog:downloadHistory:downloadHistory', '1', '', '1', null, null);
INSERT INTO `sys_menu` VALUES ('159', '104', 'add', '', 'blog:xppContent:add', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('160', '110', 'add', '', 'blog:xppContent:add', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('161', '110', 'remove', '', 'blog:xppContent:remove', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('162', '110', 'edit', '', 'blog:xppContent:edit', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('163', '110', 'batchRemove', '', 'blog:xppContent:batchRemove', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('164', '110', 'upload', '', 'blog:xppContent:upload', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('165', '110', 'download', '', 'blog:xppContent:download', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('166', '116', 'download', '', 'blog:xppContent:download', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('167', '116', 'add', '', 'blog:xppContent:add', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('168', '116', 'edit', '', 'blog:xppContent:edit', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('169', '116', 'remove', '', 'blog:xppContent:remove', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('170', '116', 'upload', '', 'blog:xppContent:upload', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('171', '116', 'batchRemove', '', 'blog:xppContent:batchRemove', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('172', '124', 'add', '', 'blog:xppContent:add', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('173', '124', 'edit', '', 'blog:xppContent:edit', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('174', '124', 'remove', '', 'blog:xppContent:remove', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('175', '124', 'batchRemove', '', 'blog:xppContent:batchRemove', '2', '', null, null, null);
INSERT INTO `sys_menu` VALUES ('176', '124', 'download', '', 'blog:xppContent:download', '2', '', null, null, null);

-- ----------------------------
-- Table structure for `sys_role`
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role` (
  `role_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(100) DEFAULT NULL COMMENT '角色名称',
  `role_sign` varchar(100) DEFAULT NULL COMMENT '角色标识',
  `remark` varchar(100) DEFAULT NULL COMMENT '备注',
  `user_id_create` bigint(255) DEFAULT NULL COMMENT '创建用户id',
  `gmt_create` datetime DEFAULT NULL COMMENT '创建时间',
  `gmt_modified` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8 COMMENT='角色';

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES ('1', '超级管理员', 'admin', '超级管理员', '2', '2017-08-12 00:43:52', '2017-08-12 19:14:59');
INSERT INTO `sys_role` VALUES ('63', 'kunnr_meco', null, 'meco kynnr', null, null, null);
INSERT INTO `sys_role` VALUES ('64', 'kunnr_xpp', null, 'xpp', null, null, null);
INSERT INTO `sys_role` VALUES ('65', 'kunnr_lfy', null, 'lfy', null, null, null);
INSERT INTO `sys_role` VALUES ('66', 'insider', null, 'insider', null, null, null);

-- ----------------------------
-- Table structure for `sys_role_menu`
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_menu`;
CREATE TABLE `sys_role_menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_id` bigint(20) DEFAULT NULL COMMENT '角色ID',
  `menu_id` bigint(20) DEFAULT NULL COMMENT '菜单ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4815 DEFAULT CHARSET=utf8 COMMENT='角色与菜单对应关系';

-- ----------------------------
-- Records of sys_role_menu
-- ----------------------------
INSERT INTO `sys_role_menu` VALUES ('367', '44', '1');
INSERT INTO `sys_role_menu` VALUES ('368', '44', '32');
INSERT INTO `sys_role_menu` VALUES ('369', '44', '33');
INSERT INTO `sys_role_menu` VALUES ('370', '44', '34');
INSERT INTO `sys_role_menu` VALUES ('371', '44', '35');
INSERT INTO `sys_role_menu` VALUES ('372', '44', '28');
INSERT INTO `sys_role_menu` VALUES ('373', '44', '29');
INSERT INTO `sys_role_menu` VALUES ('374', '44', '30');
INSERT INTO `sys_role_menu` VALUES ('375', '44', '38');
INSERT INTO `sys_role_menu` VALUES ('376', '44', '4');
INSERT INTO `sys_role_menu` VALUES ('377', '44', '27');
INSERT INTO `sys_role_menu` VALUES ('378', '45', '38');
INSERT INTO `sys_role_menu` VALUES ('379', '46', '3');
INSERT INTO `sys_role_menu` VALUES ('380', '46', '20');
INSERT INTO `sys_role_menu` VALUES ('381', '46', '21');
INSERT INTO `sys_role_menu` VALUES ('382', '46', '22');
INSERT INTO `sys_role_menu` VALUES ('383', '46', '23');
INSERT INTO `sys_role_menu` VALUES ('384', '46', '11');
INSERT INTO `sys_role_menu` VALUES ('385', '46', '12');
INSERT INTO `sys_role_menu` VALUES ('386', '46', '13');
INSERT INTO `sys_role_menu` VALUES ('387', '46', '14');
INSERT INTO `sys_role_menu` VALUES ('388', '46', '24');
INSERT INTO `sys_role_menu` VALUES ('389', '46', '25');
INSERT INTO `sys_role_menu` VALUES ('390', '46', '26');
INSERT INTO `sys_role_menu` VALUES ('391', '46', '15');
INSERT INTO `sys_role_menu` VALUES ('392', '46', '2');
INSERT INTO `sys_role_menu` VALUES ('393', '46', '6');
INSERT INTO `sys_role_menu` VALUES ('394', '46', '7');
INSERT INTO `sys_role_menu` VALUES ('598', '50', '38');
INSERT INTO `sys_role_menu` VALUES ('632', '38', '42');
INSERT INTO `sys_role_menu` VALUES ('737', '51', '38');
INSERT INTO `sys_role_menu` VALUES ('738', '51', '39');
INSERT INTO `sys_role_menu` VALUES ('739', '51', '40');
INSERT INTO `sys_role_menu` VALUES ('740', '51', '41');
INSERT INTO `sys_role_menu` VALUES ('741', '51', '4');
INSERT INTO `sys_role_menu` VALUES ('742', '51', '32');
INSERT INTO `sys_role_menu` VALUES ('743', '51', '33');
INSERT INTO `sys_role_menu` VALUES ('744', '51', '34');
INSERT INTO `sys_role_menu` VALUES ('745', '51', '35');
INSERT INTO `sys_role_menu` VALUES ('746', '51', '27');
INSERT INTO `sys_role_menu` VALUES ('747', '51', '28');
INSERT INTO `sys_role_menu` VALUES ('748', '51', '29');
INSERT INTO `sys_role_menu` VALUES ('749', '51', '30');
INSERT INTO `sys_role_menu` VALUES ('750', '51', '1');
INSERT INTO `sys_role_menu` VALUES ('1064', '54', '53');
INSERT INTO `sys_role_menu` VALUES ('1095', '55', '2');
INSERT INTO `sys_role_menu` VALUES ('1096', '55', '6');
INSERT INTO `sys_role_menu` VALUES ('1097', '55', '7');
INSERT INTO `sys_role_menu` VALUES ('1098', '55', '3');
INSERT INTO `sys_role_menu` VALUES ('1099', '55', '50');
INSERT INTO `sys_role_menu` VALUES ('1100', '55', '49');
INSERT INTO `sys_role_menu` VALUES ('1101', '55', '1');
INSERT INTO `sys_role_menu` VALUES ('1856', '53', '28');
INSERT INTO `sys_role_menu` VALUES ('1857', '53', '29');
INSERT INTO `sys_role_menu` VALUES ('1858', '53', '30');
INSERT INTO `sys_role_menu` VALUES ('1859', '53', '27');
INSERT INTO `sys_role_menu` VALUES ('1860', '53', '57');
INSERT INTO `sys_role_menu` VALUES ('1861', '53', '71');
INSERT INTO `sys_role_menu` VALUES ('1862', '53', '48');
INSERT INTO `sys_role_menu` VALUES ('1863', '53', '72');
INSERT INTO `sys_role_menu` VALUES ('1864', '53', '1');
INSERT INTO `sys_role_menu` VALUES ('1865', '53', '7');
INSERT INTO `sys_role_menu` VALUES ('1866', '53', '55');
INSERT INTO `sys_role_menu` VALUES ('1867', '53', '56');
INSERT INTO `sys_role_menu` VALUES ('1868', '53', '62');
INSERT INTO `sys_role_menu` VALUES ('1869', '53', '15');
INSERT INTO `sys_role_menu` VALUES ('1870', '53', '2');
INSERT INTO `sys_role_menu` VALUES ('1871', '53', '61');
INSERT INTO `sys_role_menu` VALUES ('1872', '53', '20');
INSERT INTO `sys_role_menu` VALUES ('1873', '53', '21');
INSERT INTO `sys_role_menu` VALUES ('1874', '53', '22');
INSERT INTO `sys_role_menu` VALUES ('2084', '56', '68');
INSERT INTO `sys_role_menu` VALUES ('2085', '56', '60');
INSERT INTO `sys_role_menu` VALUES ('2086', '56', '59');
INSERT INTO `sys_role_menu` VALUES ('2087', '56', '58');
INSERT INTO `sys_role_menu` VALUES ('2088', '56', '51');
INSERT INTO `sys_role_menu` VALUES ('2089', '56', '50');
INSERT INTO `sys_role_menu` VALUES ('2090', '56', '49');
INSERT INTO `sys_role_menu` VALUES ('2243', '48', '72');
INSERT INTO `sys_role_menu` VALUES ('2262', '67', '48');
INSERT INTO `sys_role_menu` VALUES ('2263', '68', '88');
INSERT INTO `sys_role_menu` VALUES ('2264', '68', '87');
INSERT INTO `sys_role_menu` VALUES ('2265', '69', '89');
INSERT INTO `sys_role_menu` VALUES ('2266', '69', '88');
INSERT INTO `sys_role_menu` VALUES ('2267', '69', '86');
INSERT INTO `sys_role_menu` VALUES ('2268', '69', '87');
INSERT INTO `sys_role_menu` VALUES ('2269', '69', '85');
INSERT INTO `sys_role_menu` VALUES ('2270', '69', '84');
INSERT INTO `sys_role_menu` VALUES ('2271', '70', '85');
INSERT INTO `sys_role_menu` VALUES ('2272', '70', '89');
INSERT INTO `sys_role_menu` VALUES ('2273', '70', '88');
INSERT INTO `sys_role_menu` VALUES ('2274', '70', '87');
INSERT INTO `sys_role_menu` VALUES ('2275', '70', '86');
INSERT INTO `sys_role_menu` VALUES ('2276', '70', '84');
INSERT INTO `sys_role_menu` VALUES ('2277', '71', '87');
INSERT INTO `sys_role_menu` VALUES ('2278', '72', '59');
INSERT INTO `sys_role_menu` VALUES ('2279', '73', '48');
INSERT INTO `sys_role_menu` VALUES ('2280', '74', '88');
INSERT INTO `sys_role_menu` VALUES ('2281', '74', '87');
INSERT INTO `sys_role_menu` VALUES ('2282', '75', '88');
INSERT INTO `sys_role_menu` VALUES ('2283', '75', '87');
INSERT INTO `sys_role_menu` VALUES ('2284', '76', '85');
INSERT INTO `sys_role_menu` VALUES ('2285', '76', '89');
INSERT INTO `sys_role_menu` VALUES ('2286', '76', '88');
INSERT INTO `sys_role_menu` VALUES ('2287', '76', '87');
INSERT INTO `sys_role_menu` VALUES ('2288', '76', '86');
INSERT INTO `sys_role_menu` VALUES ('2289', '76', '84');
INSERT INTO `sys_role_menu` VALUES ('2292', '78', '88');
INSERT INTO `sys_role_menu` VALUES ('2293', '78', '87');
INSERT INTO `sys_role_menu` VALUES ('2294', '78', null);
INSERT INTO `sys_role_menu` VALUES ('2295', '78', null);
INSERT INTO `sys_role_menu` VALUES ('2296', '78', null);
INSERT INTO `sys_role_menu` VALUES ('2308', '80', '87');
INSERT INTO `sys_role_menu` VALUES ('2309', '80', '86');
INSERT INTO `sys_role_menu` VALUES ('2310', '80', '-1');
INSERT INTO `sys_role_menu` VALUES ('2311', '80', '84');
INSERT INTO `sys_role_menu` VALUES ('2312', '80', '85');
INSERT INTO `sys_role_menu` VALUES ('2328', '79', '72');
INSERT INTO `sys_role_menu` VALUES ('2329', '79', '48');
INSERT INTO `sys_role_menu` VALUES ('2330', '79', '77');
INSERT INTO `sys_role_menu` VALUES ('2331', '79', '84');
INSERT INTO `sys_role_menu` VALUES ('2332', '79', '89');
INSERT INTO `sys_role_menu` VALUES ('2333', '79', '88');
INSERT INTO `sys_role_menu` VALUES ('2334', '79', '87');
INSERT INTO `sys_role_menu` VALUES ('2335', '79', '86');
INSERT INTO `sys_role_menu` VALUES ('2336', '79', '85');
INSERT INTO `sys_role_menu` VALUES ('2337', '79', '-1');
INSERT INTO `sys_role_menu` VALUES ('2338', '77', '89');
INSERT INTO `sys_role_menu` VALUES ('2339', '77', '88');
INSERT INTO `sys_role_menu` VALUES ('2340', '77', '87');
INSERT INTO `sys_role_menu` VALUES ('2341', '77', '86');
INSERT INTO `sys_role_menu` VALUES ('2342', '77', '85');
INSERT INTO `sys_role_menu` VALUES ('2343', '77', '84');
INSERT INTO `sys_role_menu` VALUES ('2344', '77', '72');
INSERT INTO `sys_role_menu` VALUES ('2345', '77', '-1');
INSERT INTO `sys_role_menu` VALUES ('2346', '77', '77');
INSERT INTO `sys_role_menu` VALUES ('2974', '57', '93');
INSERT INTO `sys_role_menu` VALUES ('2975', '57', '99');
INSERT INTO `sys_role_menu` VALUES ('2976', '57', '95');
INSERT INTO `sys_role_menu` VALUES ('2977', '57', '101');
INSERT INTO `sys_role_menu` VALUES ('2978', '57', '96');
INSERT INTO `sys_role_menu` VALUES ('2979', '57', '94');
INSERT INTO `sys_role_menu` VALUES ('2980', '57', '-1');
INSERT INTO `sys_role_menu` VALUES ('2981', '58', '93');
INSERT INTO `sys_role_menu` VALUES ('2982', '58', '99');
INSERT INTO `sys_role_menu` VALUES ('2983', '58', '95');
INSERT INTO `sys_role_menu` VALUES ('2984', '58', '101');
INSERT INTO `sys_role_menu` VALUES ('2985', '58', '96');
INSERT INTO `sys_role_menu` VALUES ('2986', '58', '94');
INSERT INTO `sys_role_menu` VALUES ('2987', '58', '-1');
INSERT INTO `sys_role_menu` VALUES ('4438', '64', '135');
INSERT INTO `sys_role_menu` VALUES ('4439', '64', '134');
INSERT INTO `sys_role_menu` VALUES ('4440', '64', '132');
INSERT INTO `sys_role_menu` VALUES ('4441', '64', '133');
INSERT INTO `sys_role_menu` VALUES ('4442', '64', '130');
INSERT INTO `sys_role_menu` VALUES ('4443', '64', '129');
INSERT INTO `sys_role_menu` VALUES ('4444', '64', '128');
INSERT INTO `sys_role_menu` VALUES ('4445', '64', '127');
INSERT INTO `sys_role_menu` VALUES ('4446', '64', '126');
INSERT INTO `sys_role_menu` VALUES ('4447', '64', '125');
INSERT INTO `sys_role_menu` VALUES ('4448', '64', '156');
INSERT INTO `sys_role_menu` VALUES ('4449', '64', '108');
INSERT INTO `sys_role_menu` VALUES ('4450', '64', '107');
INSERT INTO `sys_role_menu` VALUES ('4451', '64', '106');
INSERT INTO `sys_role_menu` VALUES ('4452', '64', '105');
INSERT INTO `sys_role_menu` VALUES ('4453', '64', '-1');
INSERT INTO `sys_role_menu` VALUES ('4454', '64', '103');
INSERT INTO `sys_role_menu` VALUES ('4455', '64', '104');
INSERT INTO `sys_role_menu` VALUES ('4535', '63', '149');
INSERT INTO `sys_role_menu` VALUES ('4536', '63', '141');
INSERT INTO `sys_role_menu` VALUES ('4537', '63', '140');
INSERT INTO `sys_role_menu` VALUES ('4538', '63', '139');
INSERT INTO `sys_role_menu` VALUES ('4539', '63', '138');
INSERT INTO `sys_role_menu` VALUES ('4540', '63', '137');
INSERT INTO `sys_role_menu` VALUES ('4541', '63', '136');
INSERT INTO `sys_role_menu` VALUES ('4542', '63', '111');
INSERT INTO `sys_role_menu` VALUES ('4543', '63', '114');
INSERT INTO `sys_role_menu` VALUES ('4544', '63', '113');
INSERT INTO `sys_role_menu` VALUES ('4545', '63', '112');
INSERT INTO `sys_role_menu` VALUES ('4546', '63', '165');
INSERT INTO `sys_role_menu` VALUES ('4547', '63', '-1');
INSERT INTO `sys_role_menu` VALUES ('4548', '63', '109');
INSERT INTO `sys_role_menu` VALUES ('4549', '63', '110');
INSERT INTO `sys_role_menu` VALUES ('4638', '65', '148');
INSERT INTO `sys_role_menu` VALUES ('4639', '65', '147');
INSERT INTO `sys_role_menu` VALUES ('4640', '65', '146');
INSERT INTO `sys_role_menu` VALUES ('4641', '65', '145');
INSERT INTO `sys_role_menu` VALUES ('4642', '65', '144');
INSERT INTO `sys_role_menu` VALUES ('4643', '65', '143');
INSERT INTO `sys_role_menu` VALUES ('4644', '65', '142');
INSERT INTO `sys_role_menu` VALUES ('4645', '65', '119');
INSERT INTO `sys_role_menu` VALUES ('4646', '65', '122');
INSERT INTO `sys_role_menu` VALUES ('4647', '65', '121');
INSERT INTO `sys_role_menu` VALUES ('4648', '65', '120');
INSERT INTO `sys_role_menu` VALUES ('4649', '65', '166');
INSERT INTO `sys_role_menu` VALUES ('4650', '65', '-1');
INSERT INTO `sys_role_menu` VALUES ('4651', '65', '115');
INSERT INTO `sys_role_menu` VALUES ('4652', '65', '116');
INSERT INTO `sys_role_menu` VALUES ('4653', '1', '158');
INSERT INTO `sys_role_menu` VALUES ('4654', '1', '124');
INSERT INTO `sys_role_menu` VALUES ('4655', '1', '148');
INSERT INTO `sys_role_menu` VALUES ('4656', '1', '147');
INSERT INTO `sys_role_menu` VALUES ('4657', '1', '146');
INSERT INTO `sys_role_menu` VALUES ('4658', '1', '145');
INSERT INTO `sys_role_menu` VALUES ('4659', '1', '144');
INSERT INTO `sys_role_menu` VALUES ('4660', '1', '143');
INSERT INTO `sys_role_menu` VALUES ('4661', '1', '142');
INSERT INTO `sys_role_menu` VALUES ('4662', '1', '119');
INSERT INTO `sys_role_menu` VALUES ('4663', '1', '149');
INSERT INTO `sys_role_menu` VALUES ('4664', '1', '141');
INSERT INTO `sys_role_menu` VALUES ('4665', '1', '140');
INSERT INTO `sys_role_menu` VALUES ('4666', '1', '139');
INSERT INTO `sys_role_menu` VALUES ('4667', '1', '138');
INSERT INTO `sys_role_menu` VALUES ('4668', '1', '137');
INSERT INTO `sys_role_menu` VALUES ('4669', '1', '136');
INSERT INTO `sys_role_menu` VALUES ('4670', '1', '111');
INSERT INTO `sys_role_menu` VALUES ('4671', '1', '165');
INSERT INTO `sys_role_menu` VALUES ('4672', '1', '164');
INSERT INTO `sys_role_menu` VALUES ('4673', '1', '163');
INSERT INTO `sys_role_menu` VALUES ('4674', '1', '162');
INSERT INTO `sys_role_menu` VALUES ('4675', '1', '161');
INSERT INTO `sys_role_menu` VALUES ('4676', '1', '160');
INSERT INTO `sys_role_menu` VALUES ('4677', '1', '135');
INSERT INTO `sys_role_menu` VALUES ('4678', '1', '134');
INSERT INTO `sys_role_menu` VALUES ('4679', '1', '132');
INSERT INTO `sys_role_menu` VALUES ('4680', '1', '133');
INSERT INTO `sys_role_menu` VALUES ('4681', '1', '130');
INSERT INTO `sys_role_menu` VALUES ('4682', '1', '129');
INSERT INTO `sys_role_menu` VALUES ('4683', '1', '128');
INSERT INTO `sys_role_menu` VALUES ('4684', '1', '127');
INSERT INTO `sys_role_menu` VALUES ('4685', '1', '126');
INSERT INTO `sys_role_menu` VALUES ('4686', '1', '125');
INSERT INTO `sys_role_menu` VALUES ('4687', '1', '159');
INSERT INTO `sys_role_menu` VALUES ('4688', '1', '156');
INSERT INTO `sys_role_menu` VALUES ('4689', '1', '155');
INSERT INTO `sys_role_menu` VALUES ('4690', '1', '154');
INSERT INTO `sys_role_menu` VALUES ('4691', '1', '152');
INSERT INTO `sys_role_menu` VALUES ('4692', '1', '151');
INSERT INTO `sys_role_menu` VALUES ('4693', '1', '92');
INSERT INTO `sys_role_menu` VALUES ('4694', '1', '57');
INSERT INTO `sys_role_menu` VALUES ('4695', '1', '30');
INSERT INTO `sys_role_menu` VALUES ('4696', '1', '29');
INSERT INTO `sys_role_menu` VALUES ('4697', '1', '28');
INSERT INTO `sys_role_menu` VALUES ('4698', '1', '76');
INSERT INTO `sys_role_menu` VALUES ('4699', '1', '75');
INSERT INTO `sys_role_menu` VALUES ('4700', '1', '74');
INSERT INTO `sys_role_menu` VALUES ('4701', '1', '62');
INSERT INTO `sys_role_menu` VALUES ('4702', '1', '56');
INSERT INTO `sys_role_menu` VALUES ('4703', '1', '55');
INSERT INTO `sys_role_menu` VALUES ('4704', '1', '15');
INSERT INTO `sys_role_menu` VALUES ('4705', '1', '26');
INSERT INTO `sys_role_menu` VALUES ('4706', '1', '25');
INSERT INTO `sys_role_menu` VALUES ('4707', '1', '24');
INSERT INTO `sys_role_menu` VALUES ('4708', '1', '14');
INSERT INTO `sys_role_menu` VALUES ('4709', '1', '13');
INSERT INTO `sys_role_menu` VALUES ('4710', '1', '12');
INSERT INTO `sys_role_menu` VALUES ('4711', '1', '61');
INSERT INTO `sys_role_menu` VALUES ('4712', '1', '22');
INSERT INTO `sys_role_menu` VALUES ('4713', '1', '21');
INSERT INTO `sys_role_menu` VALUES ('4714', '1', '20');
INSERT INTO `sys_role_menu` VALUES ('4715', '1', '157');
INSERT INTO `sys_role_menu` VALUES ('4716', '1', '123');
INSERT INTO `sys_role_menu` VALUES ('4717', '1', '122');
INSERT INTO `sys_role_menu` VALUES ('4718', '1', '121');
INSERT INTO `sys_role_menu` VALUES ('4719', '1', '120');
INSERT INTO `sys_role_menu` VALUES ('4720', '1', '114');
INSERT INTO `sys_role_menu` VALUES ('4721', '1', '113');
INSERT INTO `sys_role_menu` VALUES ('4722', '1', '112');
INSERT INTO `sys_role_menu` VALUES ('4723', '1', '110');
INSERT INTO `sys_role_menu` VALUES ('4724', '1', '109');
INSERT INTO `sys_role_menu` VALUES ('4725', '1', '108');
INSERT INTO `sys_role_menu` VALUES ('4726', '1', '107');
INSERT INTO `sys_role_menu` VALUES ('4727', '1', '106');
INSERT INTO `sys_role_menu` VALUES ('4728', '1', '105');
INSERT INTO `sys_role_menu` VALUES ('4729', '1', '104');
INSERT INTO `sys_role_menu` VALUES ('4730', '1', '103');
INSERT INTO `sys_role_menu` VALUES ('4731', '1', '27');
INSERT INTO `sys_role_menu` VALUES ('4732', '1', '91');
INSERT INTO `sys_role_menu` VALUES ('4733', '1', '73');
INSERT INTO `sys_role_menu` VALUES ('4734', '1', '7');
INSERT INTO `sys_role_menu` VALUES ('4735', '1', '6');
INSERT INTO `sys_role_menu` VALUES ('4736', '1', '2');
INSERT INTO `sys_role_menu` VALUES ('4737', '1', '3');
INSERT INTO `sys_role_menu` VALUES ('4738', '1', '116');
INSERT INTO `sys_role_menu` VALUES ('4739', '1', '171');
INSERT INTO `sys_role_menu` VALUES ('4740', '1', '170');
INSERT INTO `sys_role_menu` VALUES ('4741', '1', '169');
INSERT INTO `sys_role_menu` VALUES ('4742', '1', '168');
INSERT INTO `sys_role_menu` VALUES ('4743', '1', '167');
INSERT INTO `sys_role_menu` VALUES ('4744', '1', '166');
INSERT INTO `sys_role_menu` VALUES ('4745', '1', '115');
INSERT INTO `sys_role_menu` VALUES ('4746', '1', '-1');
INSERT INTO `sys_role_menu` VALUES ('4747', '66', '148');
INSERT INTO `sys_role_menu` VALUES ('4748', '66', '147');
INSERT INTO `sys_role_menu` VALUES ('4749', '66', '146');
INSERT INTO `sys_role_menu` VALUES ('4750', '66', '145');
INSERT INTO `sys_role_menu` VALUES ('4751', '66', '144');
INSERT INTO `sys_role_menu` VALUES ('4752', '66', '143');
INSERT INTO `sys_role_menu` VALUES ('4753', '66', '142');
INSERT INTO `sys_role_menu` VALUES ('4754', '66', '119');
INSERT INTO `sys_role_menu` VALUES ('4755', '66', '149');
INSERT INTO `sys_role_menu` VALUES ('4756', '66', '141');
INSERT INTO `sys_role_menu` VALUES ('4757', '66', '140');
INSERT INTO `sys_role_menu` VALUES ('4758', '66', '139');
INSERT INTO `sys_role_menu` VALUES ('4759', '66', '138');
INSERT INTO `sys_role_menu` VALUES ('4760', '66', '137');
INSERT INTO `sys_role_menu` VALUES ('4761', '66', '136');
INSERT INTO `sys_role_menu` VALUES ('4762', '66', '111');
INSERT INTO `sys_role_menu` VALUES ('4763', '66', '135');
INSERT INTO `sys_role_menu` VALUES ('4764', '66', '134');
INSERT INTO `sys_role_menu` VALUES ('4765', '66', '132');
INSERT INTO `sys_role_menu` VALUES ('4766', '66', '133');
INSERT INTO `sys_role_menu` VALUES ('4767', '66', '130');
INSERT INTO `sys_role_menu` VALUES ('4768', '66', '129');
INSERT INTO `sys_role_menu` VALUES ('4769', '66', '128');
INSERT INTO `sys_role_menu` VALUES ('4770', '66', '127');
INSERT INTO `sys_role_menu` VALUES ('4771', '66', '126');
INSERT INTO `sys_role_menu` VALUES ('4772', '66', '125');
INSERT INTO `sys_role_menu` VALUES ('4773', '66', '156');
INSERT INTO `sys_role_menu` VALUES ('4774', '66', '155');
INSERT INTO `sys_role_menu` VALUES ('4775', '66', '154');
INSERT INTO `sys_role_menu` VALUES ('4776', '66', '152');
INSERT INTO `sys_role_menu` VALUES ('4777', '66', '151');
INSERT INTO `sys_role_menu` VALUES ('4778', '66', '122');
INSERT INTO `sys_role_menu` VALUES ('4779', '66', '121');
INSERT INTO `sys_role_menu` VALUES ('4780', '66', '120');
INSERT INTO `sys_role_menu` VALUES ('4781', '66', '114');
INSERT INTO `sys_role_menu` VALUES ('4782', '66', '113');
INSERT INTO `sys_role_menu` VALUES ('4783', '66', '112');
INSERT INTO `sys_role_menu` VALUES ('4784', '66', '108');
INSERT INTO `sys_role_menu` VALUES ('4785', '66', '107');
INSERT INTO `sys_role_menu` VALUES ('4786', '66', '106');
INSERT INTO `sys_role_menu` VALUES ('4787', '66', '105');
INSERT INTO `sys_role_menu` VALUES ('4788', '66', '159');
INSERT INTO `sys_role_menu` VALUES ('4789', '66', '104');
INSERT INTO `sys_role_menu` VALUES ('4790', '66', '103');
INSERT INTO `sys_role_menu` VALUES ('4791', '66', '110');
INSERT INTO `sys_role_menu` VALUES ('4792', '66', '165');
INSERT INTO `sys_role_menu` VALUES ('4793', '66', '164');
INSERT INTO `sys_role_menu` VALUES ('4794', '66', '163');
INSERT INTO `sys_role_menu` VALUES ('4795', '66', '162');
INSERT INTO `sys_role_menu` VALUES ('4796', '66', '161');
INSERT INTO `sys_role_menu` VALUES ('4797', '66', '160');
INSERT INTO `sys_role_menu` VALUES ('4798', '66', '109');
INSERT INTO `sys_role_menu` VALUES ('4799', '66', '116');
INSERT INTO `sys_role_menu` VALUES ('4800', '66', '171');
INSERT INTO `sys_role_menu` VALUES ('4801', '66', '170');
INSERT INTO `sys_role_menu` VALUES ('4802', '66', '169');
INSERT INTO `sys_role_menu` VALUES ('4803', '66', '168');
INSERT INTO `sys_role_menu` VALUES ('4804', '66', '167');
INSERT INTO `sys_role_menu` VALUES ('4805', '66', '166');
INSERT INTO `sys_role_menu` VALUES ('4806', '66', '115');
INSERT INTO `sys_role_menu` VALUES ('4807', '66', '123');
INSERT INTO `sys_role_menu` VALUES ('4808', '66', '176');
INSERT INTO `sys_role_menu` VALUES ('4809', '66', '175');
INSERT INTO `sys_role_menu` VALUES ('4810', '66', '174');
INSERT INTO `sys_role_menu` VALUES ('4811', '66', '173');
INSERT INTO `sys_role_menu` VALUES ('4812', '66', '172');
INSERT INTO `sys_role_menu` VALUES ('4813', '66', '124');
INSERT INTO `sys_role_menu` VALUES ('4814', '66', '-1');

-- ----------------------------
-- Table structure for `sys_task`
-- ----------------------------
DROP TABLE IF EXISTS `sys_task`;
CREATE TABLE `sys_task` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cron_expression` varchar(255) DEFAULT NULL COMMENT 'cron表达式',
  `method_name` varchar(255) DEFAULT NULL COMMENT '任务调用的方法名',
  `is_concurrent` varchar(255) DEFAULT NULL COMMENT '任务是否有状态',
  `description` varchar(255) DEFAULT NULL COMMENT '任务描述',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新者',
  `bean_class` varchar(255) DEFAULT NULL COMMENT '任务执行时调用哪个类的方法 包名+类名',
  `create_date` datetime DEFAULT NULL COMMENT '创建时间',
  `job_status` varchar(255) DEFAULT NULL COMMENT '任务状态',
  `job_group` varchar(255) DEFAULT NULL COMMENT '任务分组',
  `update_date` datetime DEFAULT NULL COMMENT '更新时间',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `spring_bean` varchar(255) DEFAULT NULL COMMENT 'Spring bean',
  `job_name` varchar(255) DEFAULT NULL COMMENT '任务名',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_task
-- ----------------------------

-- ----------------------------
-- Table structure for `sys_user`
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL COMMENT '用户名',
  `name` varchar(100) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL COMMENT '密码',
  `dept_id` bigint(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL COMMENT '邮箱',
  `mobile` varchar(100) DEFAULT NULL COMMENT '手机号',
  `status` tinyint(255) DEFAULT NULL COMMENT '状态 0:禁用，1:正常',
  `user_id_create` bigint(255) DEFAULT NULL COMMENT '创建用户id',
  `gmt_create` datetime DEFAULT NULL COMMENT '创建时间',
  `gmt_modified` datetime DEFAULT NULL COMMENT '修改时间',
  `sex` bigint(32) DEFAULT NULL COMMENT '性别',
  `birth` datetime DEFAULT NULL COMMENT '出身日期',
  `pic_id` bigint(32) DEFAULT NULL,
  `live_address` varchar(500) DEFAULT NULL COMMENT '现居住地',
  `hobby` varchar(255) DEFAULT NULL COMMENT '爱好',
  `province` varchar(255) DEFAULT NULL COMMENT '省份',
  `city` varchar(255) DEFAULT NULL COMMENT '所在城市',
  `district` varchar(255) DEFAULT NULL COMMENT '所在地区',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=146 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES ('1', 'admin', '超级管理员', '27bd386e70f280e24c2f4f2a549b82cf', '6', 'admin@example.com', '17699999999', '1', '1', '2017-08-15 21:40:39', '2017-08-15 21:41:00', '96', '2017-12-14 00:00:00', '138', 'ccc', '121;', '北京市', '北京市市辖区', '东城区');
INSERT INTO `sys_user` VALUES ('2', 'test', '临时用户', '6cf3bb3deba2aadbd41ec9a22511084e', '6', 'test@bootdo.com', null, '1', '1', '2017-08-14 13:43:05', '2017-08-14 21:15:36', null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('142', 'meco', 'meco', '6e6b17630182dd4d9dea011daa9ae0bf', '10', 'cxg1207@126.com', null, '1', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('143', 'lfy', 'lfy', 'c56cc9b93dc0b00319835ddb44dca3d3', '10', 'maser@126.com', null, '1', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('144', 'xpp', 'XPP', '0707dff4b50ac2367f28599c19c1cb34', '10', 'cxg1207@126.com', null, '1', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('145', 'insider', 'insider', 'e848f688505b35d2adb330e671a78c94', '10', 'cxg1207@126.com', null, '1', null, null, null, null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `sys_user_plus`
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_plus`;
CREATE TABLE `sys_user_plus` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `payment` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_user_plus
-- ----------------------------

-- ----------------------------
-- Table structure for `sys_user_role`
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL COMMENT '用户ID',
  `role_id` bigint(20) DEFAULT NULL COMMENT '角色ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=152 DEFAULT CHARSET=utf8 COMMENT='用户与角色对应关系';

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
INSERT INTO `sys_user_role` VALUES ('73', '30', '48');
INSERT INTO `sys_user_role` VALUES ('74', '30', '49');
INSERT INTO `sys_user_role` VALUES ('75', '30', '50');
INSERT INTO `sys_user_role` VALUES ('76', '31', '48');
INSERT INTO `sys_user_role` VALUES ('77', '31', '49');
INSERT INTO `sys_user_role` VALUES ('78', '31', '52');
INSERT INTO `sys_user_role` VALUES ('79', '32', '48');
INSERT INTO `sys_user_role` VALUES ('80', '32', '49');
INSERT INTO `sys_user_role` VALUES ('81', '32', '50');
INSERT INTO `sys_user_role` VALUES ('82', '32', '51');
INSERT INTO `sys_user_role` VALUES ('83', '32', '52');
INSERT INTO `sys_user_role` VALUES ('84', '33', '38');
INSERT INTO `sys_user_role` VALUES ('85', '33', '49');
INSERT INTO `sys_user_role` VALUES ('86', '33', '52');
INSERT INTO `sys_user_role` VALUES ('87', '34', '50');
INSERT INTO `sys_user_role` VALUES ('88', '34', '51');
INSERT INTO `sys_user_role` VALUES ('89', '34', '52');
INSERT INTO `sys_user_role` VALUES ('124', null, '48');
INSERT INTO `sys_user_role` VALUES ('147', '1', '1');
INSERT INTO `sys_user_role` VALUES ('148', '142', '63');
INSERT INTO `sys_user_role` VALUES ('149', '143', '65');
INSERT INTO `sys_user_role` VALUES ('150', '144', '64');
INSERT INTO `sys_user_role` VALUES ('151', '145', '66');

-- ----------------------------
-- Table structure for `xpp_brand_visual`
-- ----------------------------
DROP TABLE IF EXISTS `xpp_brand_visual`;
CREATE TABLE `xpp_brand_visual` (
  `bvid` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `created` bigint(20) DEFAULT NULL COMMENT '创建人id',
  `modified` bigint(20) DEFAULT NULL COMMENT '最近修改人id',
  `content` text COMMENT '内容',
  `type` varchar(16) DEFAULT NULL COMMENT '类型',
  `tags` varchar(200) DEFAULT NULL COMMENT '标签',
  `categories` varchar(200) DEFAULT NULL COMMENT '分类',
  `hits` int(5) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL COMMENT '作者',
  `gtm_create` datetime DEFAULT NULL COMMENT '创建时间',
  `gtm_modified` datetime DEFAULT NULL COMMENT '修改时间',
  `fileurl` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '文件路径',
  `filename` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '文件名称',
  `status` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '是否删除（N删除，Y正常）',
  PRIMARY KEY (`bvid`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COMMENT='品牌形象';

-- ----------------------------
-- Records of xpp_brand_visual
-- ----------------------------
INSERT INTO `xpp_brand_visual` VALUES ('5', 'test uploading', null, null, '<p>where `status`=\"Y\"<br></p>', 'article', null, 'file', null, 'Master', '2018-06-20 10:05:34', '2018-06-20 10:05:34', null, null, 'N');
INSERT INTO `xpp_brand_visual` VALUES ('6', 'test uploading', null, null, '<p>reLoadindex<br></p>', 'article', null, 'file', null, 'Master', '2018-06-20 10:11:27', '2018-06-20 10:11:27', null, null, 'N');
INSERT INTO `xpp_brand_visual` VALUES ('7', 'test uploading', null, null, '<p>returnList()<br></p>', 'article', null, 'file', null, 'Master', '2018-06-20 10:21:21', '2018-06-20 10:21:21', null, null, 'N');
INSERT INTO `xpp_brand_visual` VALUES ('8', 'test uploading', null, null, '<p>reLoadindex<br></p>', 'article', null, 'file', null, 'Master', '2018-06-20 10:31:11', '2018-06-20 10:31:11', null, null, 'N');
INSERT INTO `xpp_brand_visual` VALUES ('9', 'test uploading', null, null, '<p>sde</p>', 'article', null, '', null, 'Master', '2018-06-20 10:48:51', '2018-06-20 10:48:51', null, null, 'N');
INSERT INTO `xpp_brand_visual` VALUES ('10', 'test uploading', null, null, '<p>sdfsdf</p>', 'article', null, '', null, 'Master', '2018-06-20 10:55:20', '2018-06-20 10:55:20', null, null, 'N');
INSERT INTO `xpp_brand_visual` VALUES ('11', 'test uploading', null, null, '<p>sdgsagaga</p>', 'article', null, 'file', null, 'Master', '2018-06-20 10:57:47', '2018-06-20 10:57:47', null, null, 'N');
INSERT INTO `xpp_brand_visual` VALUES ('12', 'test uploading', null, null, '<p>sdfgsgbagha</p>', 'article', null, 'file', null, 'Master', '2018-06-20 11:06:49', '2018-06-20 11:06:49', null, null, 'N');
INSERT INTO `xpp_brand_visual` VALUES ('13', 'test uploading1111', null, null, '<p>asascvasvasdcv</p>', 'article', null, 'file', null, 'Master', '2018-06-20 11:07:09', '2018-06-20 11:07:09', null, null, 'N');
INSERT INTO `xpp_brand_visual` VALUES ('14', 'test uploading2123', null, null, '<p>asfafasfasg</p>', 'article', null, 'file', null, 'Master', '2018-06-20 11:07:26', '2018-06-20 11:07:26', null, null, 'N');
INSERT INTO `xpp_brand_visual` VALUES ('15', 'test uploading', null, null, '<p>sagasgadfgas</p>', 'article', null, 'file', null, 'Master', '2018-06-20 11:07:40', '2018-06-20 11:07:40', null, null, 'N');
INSERT INTO `xpp_brand_visual` VALUES ('16', 'test uploading', null, null, '<p>asssss</p>', 'article', null, 'file', null, 'Master', '2018-06-20 14:10:14', '2018-06-20 14:10:14', null, null, 'N');
INSERT INTO `xpp_brand_visual` VALUES ('17', 'test uploading', null, null, '<p>fafggsdgsg</p>', 'article', null, 'file', null, 'Master', '2018-06-20 14:21:16', '2018-06-20 14:21:16', '/files/a0624b46-806c-4bb3-87dc-56706dbcf599.txt', 'a0624b46-806c-4bb3-87dc-56706dbcf599.txt', 'N');
INSERT INTO `xpp_brand_visual` VALUES ('18', 'test uploading', null, null, '<p>asgvasgbasgb</p>', 'article', null, 'file', null, 'Master', '2018-06-20 14:23:04', '2018-06-20 16:32:07', 'D:/var/uploaded_files//files/40182d3b-b93d-4890-b2e0-df13476f3b5a.txt', '4.txt', 'N');
INSERT INTO `xpp_brand_visual` VALUES ('19', 'test uploading45345', null, null, '<p>test\\</p><p>dasfas&nbsp;</p><p>qwedqwv qr&nbsp;</p><p>fvw aweqv</p>', 'XPP_B_V', null, 'file', null, 'Kunnr001', '2018-06-20 16:13:26', '2018-06-20 16:39:17', 'D:/var/uploaded_files//files/101f9a48-2d71-4075-a21c-d53aec41c9cf.txt', 'SQL分析.txt', 'N');
INSERT INTO `xpp_brand_visual` VALUES ('20', 'test uploading1111', null, null, '<p>test uploading1111<br></p>', 'XPP_B_V', null, 'file', null, 'Master', '2018-06-21 10:49:00', '2018-06-21 10:49:00', '/files/da18d7c0-67a0-4eb3-970b-8fd24f7f4fc4.txt', '4.txt', 'N');
INSERT INTO `xpp_brand_visual` VALUES ('21', 'test uploading2123', null, null, '<p>test uploading2123<br></p>', 'XPP_B_V', null, 'file', null, 'Kunnr', '2018-06-21 10:49:23', '2018-06-21 10:49:23', '/files/f44896dd-ecbd-45a7-8067-0fa353011b9f.txt', '代码测试地址.txt', 'N');
INSERT INTO `xpp_brand_visual` VALUES ('22', 'test uploading', null, null, '<p>djsrjnsrjnsxrjnsr</p>', 'XPP_B_V', null, 'file', null, 'Master', '2018-06-21 11:09:59', '2018-06-21 11:17:17', '/files/0a8ad978-b60b-4553-81de-4fd3fa09b93d.txt', '代码测试地址.txt', 'N');
INSERT INTO `xpp_brand_visual` VALUES ('23', 'test uploading1111', null, null, '<p>sdbsdbsbdA</p>', 'XPP_B_V', null, 'file', null, 'Kunnr', '2018-06-21 11:30:45', '2018-06-21 13:15:31', '/files/e3f35173-970a-4e3b-a150-38687bc671fc.txt', 'aaaaaaa.txt', 'Y');
INSERT INTO `xpp_brand_visual` VALUES ('24', 'test uploading', null, null, '<p>test file</p>', 'XPP_B_V', null, 'file', null, 'Master', '2018-06-21 14:44:48', '2018-06-21 14:44:48', '/files/225bf789-484d-4555-93e1-0451a7f1f04e.txt', 'aaaaaaa.txt', 'N');
INSERT INTO `xpp_brand_visual` VALUES ('25', 'test uploading', null, null, '<p>dfsadgag</p>', 'XPP_B_V', null, 'file', null, 'Master', '2018-06-21 16:19:09', '2018-06-21 16:19:09', '/files/4d0a2e0c-a3ae-4fa2-aaa7-76b7ce5a8f4e.txt', 'aaaaaaa.txt', 'N');
INSERT INTO `xpp_brand_visual` VALUES ('26', 'test uploading', null, null, '<p>sdbASDbsAGvb</p>', 'MECO_B_V', null, 'file', null, 'Master', '2018-06-21 16:25:23', '2018-06-21 16:25:23', '/files/fb29a8ce-d6b9-4460-a570-85cffd95ee53.txt', 'aaaaaaa.txt', 'N');
INSERT INTO `xpp_brand_visual` VALUES ('27', 'test uploading1111', null, null, '<p>asdfaa</p>', 'MECO_B_V', null, 'file', null, 'Master', '2018-06-21 16:25:48', '2018-06-21 16:25:48', '/files/658ce077-eae0-41b1-a8d1-ec2fd305e238.txt', 'aaaaaaa.txt', 'N');
INSERT INTO `xpp_brand_visual` VALUES ('28', 'MECO TEST FILE', null, null, '<p>ASVASDFVASDVSADVASGV</p>', 'MECO_B_V', null, 'file', null, 'Master', '2018-06-21 16:26:34', '2018-06-21 16:26:34', '/files/404a1786-3837-4e65-bf8d-a8a0153bee7b.txt', 'aaaaaaa.txt', 'N');
INSERT INTO `xpp_brand_visual` VALUES ('29', 'LFY test file', null, null, '<p>testadasfdas asdf asd</p>', 'lFY_B_V', null, 'file', null, 'Master', '2018-06-21 16:44:04', '2018-06-21 16:44:16', '/files/e67ebfe5-71f3-4506-aaad-5cbc85d79f38.txt', 'aaaaaaa.txt', 'Y');
INSERT INTO `xpp_brand_visual` VALUES ('30', 'test uploading', null, null, '<p>MASTER UOLOADING FILE</p>', 'C_I', null, 'file', null, 'Master', '2018-06-26 08:35:09', '2018-06-26 08:35:09', '/files/32238437-55b0-4686-a4cf-05418b0f5c1f.txt', 'aaaaaaa.txt', 'N');
INSERT INTO `xpp_brand_visual` VALUES ('31', 'test uploading2123', null, null, '<p>sdgdvwGVWdvwEFG</p><p>fWFwefF</p>', 'XPP_U_D', null, 'file', null, 'Master', '2018-06-26 11:22:46', '2018-06-26 11:22:46', '/files/f9fd5f72-75ee-443d-8e94-83cbf5efcc53.txt', 'SQL分析.txt', 'Y');
INSERT INTO `xpp_brand_visual` VALUES ('32', 'test uploading', null, null, '<p>asccSafQWQ</p>', 'lFY_A_V', null, 'file', null, 'Master', '2018-06-27 16:00:54', '2018-06-27 16:00:54', '/files/def5b2d4-b307-462f-a675-428dc70fab99.txt', 'SQL分析.txt', 'Y');
INSERT INTO `xpp_brand_visual` VALUES ('33', 'test uploading1111', null, null, '<p>eagwewefwefwef</p>', 'XPP_M_P', null, 'file', null, 'Master', '2018-06-27 16:02:20', '2018-06-27 16:02:20', '/files/0079689e-c657-4c8f-a5e3-3710ae1a6b07.txt', 'aaaaaaa.txt', 'Y');
INSERT INTO `xpp_brand_visual` VALUES ('34', 'test uploading', null, null, '<p>svfwS</p>', 'MECO_B_V', null, 'file', null, 'Master', '2018-06-27 16:15:37', '2018-06-27 16:15:37', '/files/bbc38cfb-1c4c-4cce-ac77-d2dce775fcb9.txt', 'aaaaaaa.txt', 'Y');
INSERT INTO `xpp_brand_visual` VALUES ('35', 'test uploading1111', null, null, '<p>wergwgfwe</p>', 'MECO_M_M', null, 'file', null, 'Kunnr001', '2018-06-27 16:19:43', '2018-06-27 16:19:43', '/files/fbcb3a6c-ab7a-4317-8726-21845cc4f4de.txt', 'aaaaaaa.txt', 'Y');
INSERT INTO `xpp_brand_visual` VALUES ('36', 'test uploading1111', null, null, '<p>wegawegawegaweg</p>', 'lFY_P', null, 'file', null, 'frwef', '2018-06-27 16:20:54', '2018-07-16 16:49:38', '/files/8e31cad3-c2a1-4ca9-ae40-66a73a2c77ab.pdf', '《Effective Java中文版 第2版》.(Joshua Bloch).[PDF]&ckook.pdf', 'Y');
