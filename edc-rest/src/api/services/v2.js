/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2Accounts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2Accounts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {String} options.startDate Start date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0
means no start date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.endDate End date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0 means
no end date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.severity : can be one of the following CRITICAL, WARNING, INFO
 * @param {String} options.source : can be an asset name or System
 * @param {String} options.category : eg Performance, Security, Other etc ...
 * @param {Function} callback
 */
export function getV2Alerts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2Alerts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.uuid : unique identifier of the alert to be deleted
 * @param {String} options.source : source of the alert to be deleted
 * @param {String} options.startDate : date of the alert to be deleted. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0 means no
start date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.endDate End date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0 means
no end date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.limit Maximum number of entries to be deleted (default 50).
 * @param {String} options.severity : can be one of the following CRITICAL, WARNING, INFO
 * @param {String} options.category : eg Performance, Security, Other etc ...
All params are optional, if source and startDate are omitted all alerts are deleted (and other params are ignored), if not source MUST BE SET.
&lt;p&gt;
To delete a single alert, source and startDate must be defined and endDate must not be defined.
 * @param {Function} callback
 */
export function deleteV2Alerts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {Function} callback
 */
export function getV2Assets (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {Function} callback
 */
export function getV2DeviceCerts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2DeviceCerts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function putV2DeviceCerts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2DeviceJobs (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.displayName If specified result are filtered by display name. Display name is not unique so more than one result can be obtained.
 * @param {String} options.useLike If false the method matches the whole display name. If true the method matches all display names that starts with the specified display name.
 * @param {String} options.limit 
 * @param {String} options.offset 
 * @param {Function} callback
 */
export function getV2DeviceJobs (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {Function} callback
 */
export function getV2Devices (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2Devices (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.startDate Start date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0
means no start date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.endDate End date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0 means
no end date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.limit 
 * @param {String} options.offset 
 * @param {Function} callback
 */
export function getV2HealthMonitors (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {String} options.startDate Start date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT.
If not specified it means no start date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.endDate End date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT.
If not specified it means current time. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.fetch Specifies the amount of information requested. Allowed values are: meta, metrics, all. &quot;meta&quot; returns only the topic and received on information; &quot;metrics&quot; returns &quot;meta&quot; plus all
the metrics included in the message; &quot;all&quot; returns the whole message including its binary payload.
 * @param {String} options.sort specify the timestamp sort order for messages : &quot;asc&quot; return messages in ascending order (oldest first), &quot;desc&quot; or not set, messages are returned newest first
 * @param {Function} callback
 */
export function getV2Messages (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.topic see examples above.
 * @param {String} options.startYear The parameter is expressed as an int.
 * @param {String} options.startWeek number of the start week in startYear to be deleted. The parameter is expressed as an int.
 * @param {String} options.endYear The parameter is expressed as an int.
 * @param {String} options.endWeek number of the end week in endYear to be deleted. The parameter is expressed as an int.
 * @param {String} options.purge if set to true, TopicsByAccount, TopicsByAssets and AssetsByAccount will be deleted.
 * @param {Function} callback
 */
export function deleteV2Messages (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2ProvisionRequests (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.clientIDs 
 * @param {String} options.statuses 
 * @param {String} options.startDate 
 * @param {String} options.endDate 
 * @param {String} options.offset 
 * @param {String} options.limit 
 * @param {Function} callback
 */
export function getV2ProvisionRequests (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2Roles (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2Roles (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2Rules (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2Rules (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2Tags (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2Tags (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {String} options.prefix Optional query parameter specifying a prefix for all the Topics returned. Only the Topics which start with the specified prefix will be returned.
 * @param {Function} callback
 */
export function getV2Topics (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2Users (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2Users (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2Version (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2AccountsByAccountId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function putV2AccountsByAccountId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function deleteV2AccountsByAccountId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {Function} callback
 */
export function getV2DeviceCertsBlocked (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2DeviceCertsBlocked (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function putV2DeviceCertsBlocked (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {Function} callback
 */
export function getV2DeviceCertsRevoked (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2DeviceCertsByCertificateId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function deleteV2DeviceCertsByCertificateId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2DeviceJobsByDeviceJobId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function putV2DeviceJobsByDeviceJobId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function deleteV2DeviceJobsByDeviceJobId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.tag Optional, the name of the Tag that will be used to select the devices whose aggregated status is requested
 * @param {Function} callback
 */
export function getV2DevicesConnectionSummary (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.clientId One or more clientId for the devices to be returned.
 * @param {String} options.serialNumber One or more serial number for the devices to be returned.
 * @param {String} options.displayName One or more display name for the devices to be returned.
 * @param {String} options.imei One or more IMEI for the devices to be returned.
 * @param {String} options.imsi One or more IMSI for the devices to be returned.
 * @param {String} options.iccid 
 * @param {String} options.modelId The id of the model of the devices to be returned.
 * @param {String} options.connectionIp The connectionIp of the devices to be returned.
 * @param {String} options.status The device status (Enabled/Disabled) of the devices to be returned.
 * @param {String} options.connectionStatus The device connection status of the devices to be returned.
 * @param {String} options.esfVersion The version of ESF for the devices to be returned.
 * @param {String} options.applicationIdentifier The application identifiers of the devices to be returned.
 * @param {String} options.customAttribute1 The value of customAttribute1 for the devices to be returned.
 * @param {String} options.customAttribute2 The value of customAttribute2 for the devices to be returned.
 * @param {String} options.tag The name of the Tag applied to the devices to be returned.
 * @param {String} options.sortField Optional sorting of the returned devices. Allowed values are: &quot;clientId&quot;, &quot;displayName&quot;, &quot;lastEventOn&quot;.
 * @param {String} options.signedCertificateId The certificate id installed on the devices to be returned.
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {String} options.fetch Specifies the amount of information requested. Allowed values are &quot;BASIC&quot; or &quot;FULL&quot;. With &quot;BASIC&quot;, the core attributes of the device and the version information of its profile are
returned. With &quot;FULL&quot;, all the additional extended attributes are loaded and returned.
 * @param {String} options.sort 
 * @param {Function} callback
 */
export function getV2DevicesSearch (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.topic Target device and application. It is expressed with a structure like:

&lt;pre&gt;
$EDC / account_name / client_id / app_id / verb / resource - id
&lt;/pre&gt;
 * @param {String} options.timeout 
 * @param {Function} callback
 */
export function getV2DevicesSendRequest (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.timeout 
 * @param {Function} callback
 */
export function postV2DevicesSendRequest (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2DevicesByClientId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function putV2DevicesByClientId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function deleteV2DevicesByClientId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.startDate Start date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0
means no start date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.endDate End date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0 means
no end date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {Function} callback
 */
export function getV2HealthMonitorsPeriod (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2HealthMonitorsByHealthCheckReportId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2MessagesCount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.qos The quality of service to be used when publishing the provided message to the account broker
 * @param {String} options.retain The value of the retain flag to be used when publishing the provided message to the account broker
 * @param {Function} callback
 */
export function postV2MessagesPublish (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function deleteV2MessagesPurge (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.asset Mandatory parameter with the asset for which messages are requested.
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {String} options.startDate Start date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT.
If not specified it means no start date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.endDate End date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT.
If not specified it means current time. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.fetch Specifies the amount of information requested. Allowed values are: meta, metrics, all. &quot;meta&quot; returns only the topic and received on information; &quot;metrics&quot; returns &quot;meta&quot; plus all
the metrics included in the message; &quot;all&quot; returns the whole message including its binary payload.
 * @param {String} options.sort specify the timestamp sort order for messages : &quot;asc&quot; return messages in ascending order (oldest first), &quot;desc&quot; or not set, messages are returned newest first
 * @param {Function} callback
 */
export function getV2MessagesSearchByAsset (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.topic Mandatory parameter with the topic for which messages are requested.
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {String} options.startDate Start date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT.
If not specified it means no start date. Alternatively, the date can be expressed as a string following the ISO 8601 format. Mandatory for metrics data index by timestamp.
 * @param {String} options.endDate End date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT.
If not specified it means current time. Alternatively, the date can be expressed as a string following the ISO 8601 format. Mandatory for metrics data index by timestamp.
 * @param {String} options.metric Mandatory parameter with the name of the metric used for the data filtering.
 * @param {String} options.type Mandatory parameter with the type of the metric used for the data filtering. Allowed types are: string, double, int, float, long, boolean.
 * @param {String} options.min Minimal value of the range of the metric to be applied. Mandatory for metrics data index by value.
 * @param {String} options.max Maximal value of the range of the metric to be applied. Mandatory for metrics data index by value.
 * @param {String} options.sort specify the timestamp or value sort order for messages : &quot;asc&quot; return messages in ascending order (oldest or smallest first), &quot;desc&quot; or not set, messages are returned newest or
greatest first
 * @param {Function} callback
 */
export function getV2MessagesSearchByMetric (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.topic Mandatory parameter with the topic for which messages are requested.
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {String} options.startDate Start date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT.
If not specified it means no start date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.endDate End date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT.
If not specified it means current time. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.fetch Specifies the amount of information requested. Allowed values are: meta, metrics, all. &quot;meta&quot; returns only the topic and received on information; &quot;metrics&quot; returns &quot;meta&quot; plus all
the metrics included in the message; &quot;all&quot; returns the whole message including its binary payload.
 * @param {String} options.sort specify the timestamp sort order for messages : &quot;asc&quot; return messages in ascending order (oldest first), &quot;desc&quot; or not set, messages are returned newest first
 * @param {Function} callback
 */
export function getV2MessagesSearchByTopic (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2MessagesStore (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.fetch Specifies the amount of information requested. Allowed values are: meta, metrics, all. &quot;meta&quot; returns only the topic and received on information; &quot;metrics&quot; returns &quot;meta&quot; plus all
the metrics included in the message; &quot;all&quot; returns the whole message including its binary payload.
 * @param {Function} callback
 */
export function getV2MessagesByMsgId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.topic Mandatory parameter with the topic for which metrics are requested.
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {Function} callback
 */
export function getV2MetricsSearchByTopic (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.topic Mandatory parameter with the topic for which metrics are requested.
 * @param {String} options.metric 
 * @param {Function} callback
 */
export function getV2MetricsValues (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.topic Mandatory parameter with the topic for which messages are requested.
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {String} options.metric Mandatory parameter with the name of the metric used for the data filtering.
 * @param {String} options.type Mandatory parameter with the type of the metric used for the data filtering. Allowed types are: string, double, int, float, long, boolean.
 * @param {String} options.min Mandatory parameter with minimal value of the range of the metric to be applied.
 * @param {String} options.max Mandatory parameter with maximal value of the range of the metric to be applied.
 * @param {String} options.sort specify the sort order for metrics : &quot;asc&quot; return messages in ascending order (oldest first), &quot;desc&quot; or not set, messages are returned newest first
 * @param {Function} callback
 */
export function getV2MetricsValuesByRange (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.topic Mandatory parameter with the topic for which messages are requested.
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {String} options.metric Mandatory parameter with the name of the metric used for the data filtering.
 * @param {String} options.type Mandatory parameter with the type of the metric used for the data filtering. Allowed types are: string, double, int, float, long, boolean. *
 * @param {String} options.startDate Mandatory parameter with the start date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT.
If not specified it means no start date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.endDate Mandatory parameter with the end date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT.
If not specified it means current time. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.sort specify the sort order for metrics : &quot;asc&quot; return messages in ascending order (smallest first), &quot;desc&quot; or not set, messages are returned greatest first
 * @param {Function} callback
 */
export function getV2MetricsValuesByTimestamp (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2ProvisionRequestsCount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function putV2ProvisionRequestsByProvisionRequestId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2ProvisionRequestsByProvisionRequestId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function deleteV2ProvisionRequestsByProvisionRequestId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2RolesAdministrator (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2RolesByRoleId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function putV2RolesByRoleId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function deleteV2RolesByRoleId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2RulesActions (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2RulesByRuleId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function putV2RulesByRuleId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function deleteV2RulesByRuleId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.topic The topics list to subscribe to. The MQTT syntax for specifying topic wild card is accepted - e.g. edcguest/+/#.
 * @param {String} options.timeout the timeout of the request in milliseconds. Defaults to 60000ms (&#x3D; 60s &#x3D; 1min). Max allowed value is: 300000 (&#x3D; 300s &#x3D; 5min)
 * @param {String} options.fetch Specifies the amount of information requested. Allowed values are: meta, metrics, all. &quot;meta&quot; returns only the topic and received on information; &quot;metrics&quot; returns &quot;meta&quot; plus all
the metrics included in the message; &quot;all&quot; returns the whole message including its binary payload.
 * @param {Function} callback
 */
export function getV2StreamsSubscribe (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2TagsApply (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.name The name of the Tag requested.
 * @param {Function} callback
 */
export function getV2TagsFindByName (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.entityType The type of the entity for which search.
 * @param {String} options.entityId The id of the entity for which search.
 * @param {Function} callback
 */
export function getV2TagsFindTagApplicationByTaggable (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2TagsGetTagSummary (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.tagId The tagId of the TagApplication to be deleted.
 * @param {String} options.entityType The entityType of the TagApplication to be deleted.
 * @param {String} options.entityId The entityId of the TagApplication to be deleted.
 * @param {Function} callback
 */
export function deleteV2TagsRemove (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function putV2TagsByTagId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2TagsByTagId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function deleteV2TagsByTagId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.topic 
 * @param {Function} callback
 */
export function getV2TopicsCount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.username The username of the User requested.
 * @param {Function} callback
 */
export function getV2UsersFindByName (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2UsersByUserId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function putV2UsersByUserId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function deleteV2UsersByUserId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2VpnConnections (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.recoursive 
 * @param {Function} callback
 */
export function getV2AccountsByAccountIdChildAccounts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2AccountsByAccountIdServicePlan (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {String} options.startDate Start date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0
means no start date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.endDate End date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0 means
no end date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {Function} callback
 */
export function getV2AccountsByAccountIdUsageByDay (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {String} options.startDate Start date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0
means no start date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.endDate End date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0 means
no end date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {Function} callback
 */
export function getV2AccountsByAccountIdUsageByHour (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2AssetsByAssetCount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {String} options.prefix 
 * @param {Function} callback
 */
export function getV2AssetsByAssetTopics (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2DeviceCertsByCertificateIdBlock (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function deleteV2DeviceCertsByCertificateIdBlock (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2DeviceCertsByCertificateIdInstall (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2DeviceCertsByCertificateIdRevoke (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.fetchLogs 
 * @param {String} options.limit 
 * @param {String} options.offset 
 * @param {Function} callback
 */
export function getV2DeviceJobsByDeviceJobIdExecutions (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.deviceStatuses 
 * @param {String} options.limit 
 * @param {String} options.offset 
 * @param {Function} callback
 */
export function getV2DeviceJobsByDeviceJobIdTargets (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2DevicesByClientIdCommand (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.componentId The PID (service&#x27;s persistent identity) of the OSGi component requested.
 * @param {Function} callback
 */
export function getV2DevicesByClientIdConfigurations (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2DevicesByClientIdConfigurations (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.limit Maximum number of entries to be returned.
 * @param {String} options.offset Starting offset for the entries to be returned.
 * @param {String} options.startDate Start date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0
means no start date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.endDate End date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0 means
no end date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {Function} callback
 */
export function getV2DevicesByClientIdEvents (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2DevicesByClientIdPackages (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.packageUrl Mandatory parameter with the URL of the package to install.
 * @param {Function} callback
 */
export function postV2DevicesByClientIdPackages (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.snapshotId 
 * @param {Function} callback
 */
export function postV2DevicesByClientIdRollback (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2DevicesByClientIdSnapshots (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2DevicesByClientIdWakeupSms (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.fetchLogs Sets whether or not retrieve also text log for a Health Check Report, default to false.
 * @param {String} options.startDate Start date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0
means no start date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {String} options.endDate End date of the date range requested. The parameter is expressed as a long counting the number of milliseconds since January 1, 1970, 00:00:00 GMT. The default value of 0 means
no end date. Alternatively, the date can be expressed as a string following the ISO 8601 format.
 * @param {Function} callback
 */
export function getV2HealthMonitorsByHealthCheckReportIdHealthCheckLogs (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2ProvisionRequestsByProvisionRequestIdExecutions (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2UsersByUserIdUnlock (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2VpnConnectByClientId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2VpnConnectionsByVpnConnectionId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2VpnDisconnectByClientId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2VpnStatusByClientId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2AccountsByAccountIdDevicesCount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2DeviceJobsByDeviceJobIdTargetsByTargetClientId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function deleteV2DevicesByClientIdPackagesByPackageName (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2DevicesByClientIdSnapshotsBySnapshotId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function getV2HealthMonitorsByHealthCheckReportIdHealthCheckLogsByHealthCheckLogId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2DeviceJobsByDeviceJobIdExecutionsByDeviceJobExecutionIdSendStopSignal (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Function} callback
 */
export function postV2ProvisionRequestsByProvisionRequestIdExecutionsByProvisionJobExecutionIdSendStopSignal (options, callback) {
  // Implement you business logic here...
}

