import express from 'express';
import v2 from '../services/v2';

const router = express.Router();

/**
 * Returns the list of all the Accounts visible to the 
 * currently connected user.
 */
router.get('/accounts', (req, res, next) => {
  const options = {
  };

  v2.getV2Accounts(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Creates a new Account based on the information provided in 
 * AccountCreator parameter.
 */
router.post('/accounts', (req, res, next) => {
  const options = {
  };

  v2.postV2Accounts(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the Alerts published under the 
 * account of the currently connected user.
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL :&lt;br&gt;
 * 
 * curl --user &#x27;clientId:client password&#x27; -k 
 * https://api-sandbox.everyware-cloud.com/v2/alerts.xml?severity&#x3D;CRITICAL&quot; 
 * | xmllint --format - &lt;br&gt;
 */
router.get('/alerts', (req, res, next) => {
  const options = {
    limit: req.query.limit,
    offset: req.query.offset,
    startDate: req.query.startDate,
    endDate: req.query.endDate,
    severity: req.query.severity,
    source: req.query.source,
    category: req.query.category
  };

  v2.getV2Alerts(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Stores a new Alert under the account of the currently 
 * connected user.
 * 
 * In this case, the provided alert will only be stored in the 
 * back-end
 * 
 * database and it will not be forwarded to the message broker.
 */
router.post('/alerts', (req, res, next) => {
  const options = {
  };

  v2.postV2Alerts(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Delete one alert or a group of alerts published on the 
 * account or all the alerts if no param are passed.
 * 
 * &lt;p&gt;
 * 
 * To delete a given alert, the best way is to use its unique 
 * identifier &quot;uuid&quot;.&lt;br&gt;
 * 
 * Example of query in CURL :&lt;br&gt;
 * 
 * curl --user &#x27;clientId:client password&#x27; -X DELETE -k 
 * &quot;https://api-sandbox.everyware-cloud.com/v2/alerts.xml?uuid&#x3D;de9959b7-b80d-4881-bffd-0d7c93523ded&quot;
 */
router.delete('/alerts', (req, res, next) => {
  const options = {
    uuid: req.query.uuid,
    source: req.query.source,
    startDate: req.query.startDate,
    endDate: req.query.endDate,
    limit: req.query.limit,
    severity: req.query.severity,
    category: req.query.category
  };

  v2.deleteV2Alerts(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the Assets that published some data 
 * for the account of the currently connected user.
 * 
 * For each returned Asset, the Asset ID and timestamp of its 
 * last received message will be returned.
 */
router.get('/assets', (req, res, next) => {
  const options = {
    limit: req.query.limit,
    offset: req.query.offset
  };

  v2.getV2Assets(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the device certificate.
 * 
 * 
 * &lt;p&gt;
 * 
 * If the flag AllowedCertificatesResult.limitExceeded is set, 
 * the maximum number of entries to be returned has been 
 * reached, more pkis exist and can be read by moving the 
 * offset forward in a new request
 * 
 * &lt;p&gt;
 * 
 * Example to get all device certificates:
 * 
 * 
 * &lt;pre&gt;
 * 
 * String apiPath &#x3D; &quot;deviceCerts.xml&quot;;
 * 
 * WebResource apisWeb &#x3D; 
 * client.resource(API_URL).path(apiPath);
 * 
 * 
 * AllowedCertificatesResult result;
 * 
 * int offset &#x3D; 0;
 * 
 * do {
 * 
 * // if the &quot;limit&quot; queryParam is not initialized, limit 
 * default value &#x3D; 50
 * 
 * // if the &quot;offset&quot; queryParam is not initialized, offset 
 * default value &#x3D; 0
 * 
 * apisWeb &#x3D; apisWeb.queryParam(&quot;limit&quot;, &quot;&quot; + limit);
 * 
 * if (offset &gt; 0)
 * 
 * apisWeb &#x3D; apisWeb.queryParam(&quot;offset&quot;, &quot;&quot; + offset);
 * 
 * result &#x3D; apisWeb.get(AllowedCertificatesResult.class);
 * 
 * offset +&#x3D; limit;
 * 
 * } while (result.isLimitExceeded()):
 * 
 * &lt;/pre&gt;
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL :&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -k 
 * https://api-sandbox.everyware-cloud.com/v2/deviceCerts
 */
router.get('/deviceCerts', (req, res, next) => {
  const options = {
    limit: req.query.limit,
    offset: req.query.offset
  };

  v2.getV2DeviceCerts(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Creates a new device certificate based on the information 
 * provided in certificateCreator parameter.
 */
router.post('/deviceCerts', (req, res, next) => {
  const options = {
  };

  v2.postV2DeviceCerts(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Updates the device certificate provided in the request body.
 */
router.put('/deviceCerts', (req, res, next) => {
  const options = {
  };

  v2.putV2DeviceCerts(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Creates and schedule a Device Job based on the information 
 * in the DeviceJobCreator.
 * 
 * &lt;p&gt;
 * 
 * &lt;h3&gt;Target ClientIDs&lt;/h3&gt;
 * 
 * In a Device job target clientIDs can be specified 
 * specifically and/or specifying tagIDs that groups them. It 
 * is possible to use any combination of both declaration, and 
 * duplicates are
 * 
 * automatically detected and removed.
 * 
 * &lt;/p&gt;
 * 
 * 
 * &lt;p&gt;
 * 
 * &lt;h3&gt;Job Type&lt;/h3&gt;
 * 
 * The following operation are supported in a Device Job:
 * 
 * &lt;ul&gt;
 * 
 * &lt;li&gt;Configuration Update: updates one or more components on 
 * the target ClientIDs&lt;/li&gt;
 * 
 * &lt;li&gt;Software Install: installs or updates a package on the 
 * target ClientIDs that supports DEPLOY-V1 application&lt;/li&gt;
 * 
 * &lt;li&gt;Software Install V2: installs or updates a package on 
 * the target ClientIDs that supports DEPLOY-V2 
 * application&lt;/li&gt;
 * 
 * &lt;li&gt;Software Uninstall: uninstalls a package on the target 
 * ClientIDs that supports DEPLOY-V1 application&lt;/li&gt;
 * 
 * &lt;li&gt;Software Uninstall V2: uninstalls a package on the 
 * target ClientIDs that supports DEPLOY-V2 application&lt;/li&gt;
 * 
 * &lt;li&gt;Command: executes a remote command on the target 
 * ClientIDs&lt;/li&gt;
 * 
 * &lt;/ul&gt;
 * 
 * 
 * &lt;h4&gt;Configuration Update&lt;/h4&gt;
 * 
 * &lt;p&gt;
 * 
 * This Job is used to change the configuration of one ore more 
 * components on all target ClientIDs. &lt;br/&gt;
 * 
 * The configuration file must be specified on the 
 * JobAttachment field, while anything wrote in the 
 * jobPropertiesMap field is ignored. &lt;br/&gt;
 * 
 * Please refer to JobAttachmentCreator documentation.
 * 
 * &lt;/p&gt;
 * 
 * 
 * &lt;h4&gt;Software Install&lt;/h4&gt;
 * 
 * &lt;p&gt;
 * 
 * This Job is used to install or update a package on all 
 * target ClientIDs that support DEPLOY-V1 application.&lt;br/&gt;
 * 
 * The package to be installed via:
 * 
 * &lt;ul&gt;
 * 
 * &lt;li&gt;File: The package will be uploaded to EDC platform and 
 * then sent to all target device. The package file must be 
 * specified on the JobAttachment field. Please refer to 
 * JobAttachmentCreator
 * 
 * documentation.&lt;/li&gt;
 * 
 * &lt;li&gt;URL: The package will be download directly by the target 
 * device using the URL given. Properties needs to be added to 
 * jobPropertiesMap field. Available properties for this type 
 * of job via URL are listed below.&lt;/li&gt;
 * 
 * 
 * &lt;table class&#x3D;&quot;table&quot;&gt;
 * 
 * &lt;thead&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;th&gt;Name&lt;/th&gt;
 * 
 * &lt;th&gt;Type&lt;/th&gt;
 * 
 * &lt;th&gt;Mandatory&lt;/th&gt;
 * 
 * &lt;th&gt;Default Value&lt;/th&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;/thead&gt;
 * 
 * &lt;tbody&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;deployUrl&lt;/td&gt;
 * 
 * &lt;td&gt;String&lt;/td&gt;
 * 
 * &lt;td&gt;Yes&lt;/td&gt;
 * 
 * &lt;td&gt;&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tbody&gt;
 * 
 * &lt;/table&gt;
 * 
 * 
 * &lt;/ul&gt;
 * 
 * &lt;/p&gt;
 * 
 * 
 * &lt;h4&gt;Software Install V2&lt;/h4&gt;
 * 
 * &lt;p&gt;
 * 
 * This Job is used to install or update a package on all 
 * target ClientIDs that support DEPLOY-V2 application.&lt;br/&gt;
 * 
 * Properties needs to be added to jobPropertiesMap field. 
 * Available properties for this type of job are listed below.
 * 
 * 
 * &lt;table class&#x3D;&quot;table&quot;&gt;
 * 
 * &lt;thead&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;th&gt;Name&lt;/th&gt;
 * 
 * &lt;th&gt;Type&lt;/th&gt;
 * 
 * &lt;th&gt;Mandatory&lt;/th&gt;
 * 
 * &lt;th&gt;Default Value&lt;/th&gt;
 * 
 * &lt;th&gt;Description&lt;/th&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;/thead&gt;
 * 
 * &lt;tbody&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.uri&lt;/td&gt;
 * 
 * &lt;td&gt;String&lt;/td&gt;
 * 
 * &lt;td&gt;Yes&lt;/td&gt;
 * 
 * &lt;td&gt;&lt;/td&gt;
 * 
 * &lt;td&gt;The deployment package (or .sh script) URI where to 
 * download the file.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.name&lt;/td&gt;
 * 
 * &lt;td&gt;String&lt;/td&gt;
 * 
 * &lt;td&gt;yes&lt;/td&gt;
 * 
 * &lt;td&gt;&lt;/td&gt;
 * 
 * &lt;td&gt;The deployment package name to install. &lt;br/&gt;This is 
 * used on the device to search for already installed version 
 * of this package.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.version&lt;/td&gt;
 * 
 * &lt;td&gt;String&lt;/td&gt;
 * 
 * &lt;td&gt;Yes&lt;/td&gt;
 * 
 * &lt;td&gt;&lt;/td&gt;
 * 
 * &lt;td&gt;The deployment package version to install. &lt;br/&gt;This is 
 * used on the device to manage the updates of the 
 * packages.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.download.protocol&lt;/td&gt;
 * 
 * &lt;td&gt;String&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;HTTP&lt;/td&gt;
 * 
 * &lt;td&gt;The protocol used to download the file from the 
 * URI&lt;br/&gt;Available protocols:&lt;ul&gt;&lt;li&gt;HTTP (which includes 
 * both HTTP and HTTPS)&lt;/li&gt;&lt;/ul&gt;&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.download.block.size&lt;/td&gt;
 * 
 * &lt;td&gt;Integer&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;null&lt;/td&gt;
 * 
 * &lt;td&gt;The size in Byte of the blocks used to download the DP 
 * via HTTP.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.download.block.delay&lt;/td&gt;
 * 
 * &lt;td&gt;Integer&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;0&lt;/td&gt;
 * 
 * &lt;td&gt;Delay in ms between block transfers.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.download.notify.block.size&lt;/td&gt;
 * 
 * &lt;td&gt;Integer&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;null&lt;/td&gt;
 * 
 * &lt;td&gt;The interval of Bytes between notification 
 * messages.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.download.timeout&lt;/td&gt;
 * 
 * &lt;td&gt;Integer&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;60000&lt;/td&gt;
 * 
 * &lt;td&gt;The timeout in ms to be used to download the DP via 
 * HTTP.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.download.resume&lt;/td&gt;
 * 
 * &lt;td&gt;Boolean&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;true&lt;/td&gt;
 * 
 * &lt;td&gt;Resume HTTP transfer if supported by the server.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.download.force&lt;/td&gt;
 * 
 * &lt;td&gt;Boolean&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;true&lt;/td&gt;
 * 
 * &lt;td&gt;Force the download of the file, even if it has been 
 * already downloaded and saved to the file system of the 
 * device.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.download.username&lt;/td&gt;
 * 
 * &lt;td&gt;String&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;null&lt;/td&gt;
 * 
 * &lt;td&gt;Username for password protected http download. No 
 * authentication will be tried if username is not 
 * present.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.download.password&lt;/td&gt;
 * 
 * &lt;td&gt;String&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;null&lt;/td&gt;
 * 
 * &lt;td&gt;Password for password protected http download. No 
 * authentication will be tried if password is not 
 * present.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.download.hash&lt;/td&gt;
 * 
 * &lt;td&gt;String&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;null&lt;/td&gt;
 * 
 * &lt;td&gt;The algorithm and value of the hash of the file used to 
 * verify the integrity of the download.&lt;br/&gt;The format is of 
 * this property is: 
 * &lt;i&gt;{algorithm}&lt;/i&gt;:&lt;i&gt;{hashValue}&lt;/i&gt;&lt;br/&gt;Available 
 * algorithm:&lt;ul&gt;&lt;li&gt;MD5&lt;/li&gt;&lt;/ul&gt;Examples:&lt;ul&gt;&lt;li&gt;MD5:46cbc7f212b94187cb6480fe9429a89c&lt;/li&gt;&lt;/ul&gt;&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.install&lt;/td&gt;
 * 
 * &lt;td&gt;Boolean&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;true&lt;/td&gt;
 * 
 * &lt;td&gt;Whether the package should be immediately installed 
 * after being downloaded.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.install.system.update&lt;/td&gt;
 * 
 * &lt;td&gt;Boolean&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;false&lt;/td&gt;
 * 
 * &lt;td&gt;Mark this install as a system install. &lt;br/&gt;The device 
 * needs to know if this is a system update rather than a 
 * bundle/package update.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.install.verifier.uri&lt;/td&gt;
 * 
 * &lt;td&gt;String&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;null&lt;/td&gt;
 * 
 * &lt;td&gt;The verifier script URI to run after the installation of 
 * the system update. &lt;br/&gt;If not given the device will 
 * consider the operation successfully completed if is able to 
 * run the system update.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.reboot&lt;/td&gt;
 * 
 * &lt;td&gt;Boolean&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;false&lt;/td&gt;
 * 
 * &lt;td&gt;Whether the system should be rebooted as part of the 
 * package installation process.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.reboot.delay&lt;/td&gt;
 * 
 * &lt;td&gt;Integer&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;0&lt;/td&gt;
 * 
 * &lt;td&gt;Delay in ms after which the device will be rebooted. 
 * Only meaningful if dp.reboot&#x3D;&#x3D;true.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tbody&gt;
 * 
 * &lt;/table&gt;
 * 
 * &lt;/p&gt;
 * 
 * 
 * &lt;h4&gt;Software Uninstall&lt;/h4&gt;
 * 
 * &lt;p&gt;
 * 
 * This Job is used to uninstall a package on all target Client 
 * IDs.&lt;br/&gt;
 * 
 * The package name must match the package name installed on 
 * the target client IDs that support DEPLOY-V1 
 * application.&lt;br/&gt;
 * 
 * The package name must be declared in the JobProperties 
 * field. Anything set in JobAttachment field will be 
 * ignored.&lt;br/&gt;
 * 
 * Properties needs to be added to jobPropertiesMap field. 
 * Available properties for this type of job are listed below.
 * 
 * 
 * &lt;table class&#x3D;&quot;table&quot;&gt;
 * 
 * &lt;thead&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;th&gt;Name&lt;/th&gt;
 * 
 * &lt;th&gt;Type&lt;/th&gt;
 * 
 * &lt;th&gt;Mandatory&lt;/th&gt;
 * 
 * &lt;th&gt;Default Value&lt;/th&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;/thead&gt;
 * 
 * &lt;tbody&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;packageName&lt;/td&gt;
 * 
 * &lt;td&gt;String&lt;/td&gt;
 * 
 * &lt;td&gt;Yes&lt;/td&gt;
 * 
 * &lt;td&gt;&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tbody&gt;
 * 
 * &lt;/table&gt;
 * 
 * &lt;/p&gt;
 * 
 * 
 * &lt;h4&gt;Software Uninstall V2&lt;/h4&gt;
 * 
 * &lt;p&gt;
 * 
 * This Job is used to uninstall a package on all target 
 * ClientIDs that support DEPLOY-V2 application.&lt;br/&gt;
 * 
 * Properties needs to be added to jobPropertiesMap field. 
 * Available properties for this type of job are listed below.
 * 
 * 
 * &lt;table class&#x3D;&quot;table&quot;&gt;
 * 
 * &lt;thead&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;th&gt;Name&lt;/th&gt;
 * 
 * &lt;th&gt;Type&lt;/th&gt;
 * 
 * &lt;th&gt;Mandatory&lt;/th&gt;
 * 
 * &lt;th&gt;Default Value&lt;/th&gt;
 * 
 * &lt;th&gt;Description&lt;/th&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;/thead&gt;
 * 
 * &lt;tbody&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.name&lt;/td&gt;
 * 
 * &lt;td&gt;String&lt;/td&gt;
 * 
 * &lt;td&gt;Yes&lt;/td&gt;
 * 
 * &lt;td&gt;&lt;/td&gt;
 * 
 * &lt;td&gt;The deployment package symbolic name to uninstall. 
 * &lt;br/&gt;This is used on the device to select which package will 
 * be uninstalled.&lt;br/&gt;&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.reboot&lt;/td&gt;
 * 
 * &lt;td&gt;Boolean&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;false&lt;/td&gt;
 * 
 * &lt;td&gt;Whether the system should be rebooted as part of the 
 * package uninstall process.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;dp.reboot.delay&lt;/td&gt;
 * 
 * &lt;td&gt;Integer&lt;/td&gt;
 * 
 * &lt;td&gt;No&lt;/td&gt;
 * 
 * &lt;td&gt;0&lt;/td&gt;
 * 
 * &lt;td&gt;Delay in ms after which the device will be rebooted. 
 * Only meaningful if dp.reboot&#x3D;&#x3D;true.&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;/tbody&gt;
 * 
 * &lt;/table&gt;
 * 
 * 
 * &lt;h4&gt;Command&lt;/h4&gt;
 * 
 * &lt;p&gt;
 * 
 * This Job is used to execute a remote command on the target 
 * device.&lt;br/&gt;
 * 
 * The command must be a recognized command by the OS installed 
 * on your device. The working directory of the execution will 
 * be /tmp/ of the device.&lt;br/&gt;
 * 
 * It is possible to attach a file to this job that will be 
 * uploaded to the target device into /tmp/ directory. The file 
 * attached must be in a valid .zip compressed format, and it 
 * will be
 * 
 * automatically decompressed by the device on receiving.&lt;br/&gt;
 * 
 * &lt;/p&gt;
 * 
 * 
 * &lt;p&gt;
 * 
 * The command must be declared in the JobProperties field. The 
 * optional file attached must be specified on the 
 * JobAttachment field. Please refer to JobAttachmentCreator 
 * documentation. &lt;br/&gt;
 * 
 * Is not possible to concatenate more command using | (pipe) 
 * or &gt; (close angular parenthesis).&lt;br/&gt;
 * 
 * For example the command &quot;cat text.txt | grep test&quot; does not 
 * work as concatenation of both commands, but all string 
 * except the first will be passed as parameters of the first 
 * string, that
 * 
 * represent the command, with the result of executing cat of 
 * four files.&lt;br/&gt;
 * 
 * To achieve concatenation of parameters or more complicated 
 * executions please create a script and add it as attachment 
 * of the job and then use the command to run the script.
 * 
 * &lt;/p&gt;
 * 
 * 
 * &lt;p&gt;
 * 
 * Properties needs to be added to jobPropertiesMap field. 
 * Available properties for this type of job are listed below.
 * 
 * 
 * &lt;table class&#x3D;&quot;table&quot;&gt;
 * 
 * &lt;thead&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;th&gt;Name&lt;/th&gt;
 * 
 * &lt;th&gt;Type&lt;/th&gt;
 * 
 * &lt;th&gt;Mandatory&lt;/th&gt;
 * 
 * &lt;th&gt;Default Value&lt;/th&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;/thead&gt;
 * 
 * &lt;tbody&gt;
 * 
 * &lt;tr&gt;
 * 
 * &lt;td&gt;command&lt;/td&gt;
 * 
 * &lt;td&gt;String&lt;/td&gt;
 * 
 * &lt;td&gt;Yes&lt;/td&gt;
 * 
 * &lt;td&gt;&lt;/td&gt;
 * 
 * &lt;/tr&gt;
 * 
 * &lt;tbody&gt;
 * 
 * &lt;/table&gt;
 * 
 * &lt;/p&gt;
 * 
 * &lt;/p&gt;
 * 
 * &lt;p&gt;
 * 
 * &lt;h3&gt;Job Scheduling&lt;/h3&gt;
 * 
 * There are two way to define the scheduling for a device job:
 * 
 * &lt;ul&gt;
 * 
 * &lt;li&gt;Simple scheduling: defined by a start date and a fixed 
 * retry interval (and optional end date).&lt;/li&gt;
 * 
 * &lt;li&gt;Cron scheduling: defined by a Cron Expression and 
 * limited by a start date (and optional end date).&lt;/li&gt;
 * 
 * &lt;/ul&gt;
 * 
 * &lt;/p&gt;
 * 
 * 
 * &lt;h4&gt;Simple scheduling&lt;/h4&gt;
 * 
 * &lt;p&gt;
 * 
 * This scheduling needs:
 * 
 * &lt;ul&gt;
 * 
 * &lt;li&gt;Start Date: the time of the first execution of this 
 * device job. This field is mandatory.&lt;/li&gt;
 * 
 * &lt;li&gt;End Date: the time after that the job must not be 
 * triggered anymore. This field is optional, and if not set 
 * the device job will stop when it reaches the &lt;i&gt;max number 
 * of retries&lt;/i&gt;&lt;/li&gt;
 * 
 * &lt;li&gt;Max Number Of Retries: the number of times that a job 
 * can be re-triggered. If end date is set and is passed the 
 * job will not be triggered. This field is mandatory&lt;/li&gt;
 * 
 * &lt;li&gt;Retry Every: the interval in second between each retry. 
 * This field is mandatory. If set to 0 the job will be 
 * triggered only once and one time.&lt;/li&gt;
 * 
 * &lt;/ul&gt;
 * 
 * &lt;/p&gt;
 * 
 * 
 * &lt;h4&gt;Cron scheduling&lt;/h4&gt;
 * 
 * &lt;p&gt;
 * 
 * This scheduling needs:
 * 
 * &lt;ul&gt;
 * 
 * &lt;li&gt;Start Date: the time after that executions of this 
 * device job will be triggered. This field is mandatory.&lt;/li&gt;
 * 
 * &lt;li&gt;End Date: the time after that the job must not be 
 * triggered anymore. This field is optional.&lt;/li&gt;
 * 
 * &lt;li&gt;Max Number Of Retries: the number of times that a job 
 * can be re-triggered. If end date is set and is passed the 
 * job will not be triggered. This field is mandatory.&lt;/li&gt;
 * 
 * &lt;li&gt;Cron Expression: this field represent the scheduling of 
 * this job following the Cron Expression syntax. Please refer 
 * to the &lt;a target&#x3D;&quot;_blank&quot;
 * 
 * href&#x3D;&quot;http://en.wikipedia.org/wiki/Cron#CRON_expression&quot;&gt;Cron 
 * Expression Documentation&lt;/a&gt;.&lt;/li&gt;
 * 
 * &lt;/ul&gt;
 * 
 * &lt;/p&gt;
 * 
 * &lt;/p&gt;
 */
router.post('/deviceJobs', (req, res, next) => {
  const options = {
  };

  v2.postV2DeviceJobs(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all Device Job of the current account 
 * with pagination.
 */
router.get('/deviceJobs', (req, res, next) => {
  const options = {
    displayName: req.query.displayName,
    useLike: req.query.useLike,
    limit: req.query.limit,
    offset: req.query.offset
  };

  v2.getV2DeviceJobs(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the Devices that connected under the 
 * account of the currently connected user.
 * 
 * For each returned Device, its latest Device profile will be 
 * returned.
 * 
 * &lt;p&gt;
 * 
 * If the flag DevicesResult.limitExceeded is set, the maximum 
 * number of entries to be returned has been reached, more 
 * devices exist and can be read by moving the offset forward 
 * in a new request
 * 
 * &lt;p&gt;
 * 
 * Example to get all devices:
 * 
 * 
 * &lt;pre&gt;
 * 
 * String apiPath &#x3D; &quot;devices.xml&quot;;
 * 
 * WebResource apisWeb &#x3D; 
 * client.resource(API_URL).path(apiPath);
 * 
 * 
 * DevicesResult result;
 * 
 * int offset &#x3D; 0;
 * 
 * do {
 * 
 * // if the &quot;limit&quot; queryParam is not initialized, limit 
 * default value &#x3D; 50
 * 
 * // if the &quot;offset&quot; queryParam is not initialized, offset 
 * default value &#x3D; 0
 * 
 * apisWeb &#x3D; apisWeb.queryParam(&quot;limit&quot;, &quot;&quot; + limit);
 * 
 * if (offset &gt; 0)
 * 
 * apisWeb &#x3D; apisWeb.queryParam(&quot;offset&quot;, &quot;&quot; + offset);
 * 
 * result &#x3D; apisWeb.get(DevicesResult.class);
 * 
 * offset +&#x3D; limit;
 * 
 * } while (result.isLimitExceeded()):
 * 
 * &lt;/pre&gt;
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL :&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -k 
 * https://api-sandbox.everyware-cloud.com/v2/devices.xml | 
 * xmllint --format -
 */
router.get('/devices', (req, res, next) => {
  const options = {
    limit: req.query.limit,
    offset: req.query.offset
  };

  v2.getV2Devices(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Creates a new Device based on the information provided in 
 * DeviceCreator parameter.
 */
router.post('/devices', (req, res, next) => {
  const options = {
  };

  v2.postV2Devices(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Gets the health check reports ordered by CheckUpDate 
 * descending.
 */
router.get('/healthMonitors', (req, res, next) => {
  const options = {
    startDate: req.query.startDate,
    endDate: req.query.endDate,
    limit: req.query.limit,
    offset: req.query.offset
  };

  v2.getV2HealthMonitors(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the Messages published under the 
 * account of the currently connected user. The startDate and 
 * endDate query parameters determine the time range for the 
 * messages returned;
 * 
 * the timestamp of the returned messages will be in the 
 * interval between startDate and endDate. For each returned 
 * message, the topic string and timestamp of its last received 
 * message will be
 * 
 * returned.
 * 
 * &lt;p&gt;
 * 
 * If the flag MessagesResult.limitExceeded is set, the maximum 
 * number of entries to be returned has been reached, more data 
 * exist and can be read by moving the offset forward in a new 
 * request.
 * 
 * &lt;p&gt;
 * 
 * If the parameter &quot;sort&quot; is set to &quot;asc&quot;, messages are 
 * returned oldest first.
 * 
 * 
 * &lt;pre&gt;
 * 
 * Example to get all messages:
 * 
 * // First get the total count of messages
 * 
 * String apiPath &#x3D; &quot;messages/count.xml&quot;;
 * 
 * WebResource apisWeb &#x3D; 
 * client.resource(API_URL).path(apiPath);
 * 
 * CountResult countResult &#x3D; apisWeb.get(CountResult.class);
 * 
 * 
 * // Then paginate to get all messages
 * 
 * long MSG_COUNT &#x3D; countResult.getCount();
 * 
 * apiPath &#x3D; &quot;messages.xml&quot;;
 * 
 * apisWeb &#x3D; client.resource(API_URL).path(apiPath);
 * 
 * 
 * for (int offset &#x3D; 0; offset &lt; MSG_COUNT; offset +&#x3D; limit) {
 * 
 * // set limit and offset as queryParam
 * 
 * // if the &quot;limit&quot; queryParam is not initialized, limit 
 * default value &#x3D; 50
 * 
 * // if the &quot;offset&quot; queryParam is not initialized, offset 
 * default value &#x3D; 0
 * 
 * apisWeb &#x3D; apisWeb.queryParam(&quot;limit&quot;, &quot;&quot; + limit);
 * 
 * if (offset &gt; 0)
 * 
 * apisWeb &#x3D; apisWeb.queryParam(&quot;offset&quot;, &quot;&quot; + offset);
 * 
 * 
 * MessagesResult result &#x3D; apisWeb.get(MessagesResult.class);
 * 
 * }
 * 
 * 
 * // To get all messages of a given topic
 * 
 * apiPath &#x3D; &quot;messages/searchByTopic.xml&quot;;
 * 
 * apisWeb &#x3D; client.resource(API_URL).path(apiPath);
 * 
 * apisWeb &#x3D; apisWeb.queryParam(&quot;topic&quot;, topic);
 * 
 * 
 * MessagesResult result;
 * 
 * int offset &#x3D; 0;
 * 
 * do {
 * 
 * apisWeb &#x3D; apisWeb.queryParam(&quot;limit&quot;, &quot;&quot; + limit);
 * 
 * if (offset &gt; 0)
 * 
 * apisWeb &#x3D; apisWeb.queryParam(&quot;offset&quot;, &quot;&quot; + offset);
 * 
 * result &#x3D; apisWeb.get(MessagesResult.class);
 * 
 * offset +&#x3D; limit;
 * 
 * } while (result.isLimitExceeded()):
 * 
 * &lt;/pre&gt;
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL :&lt;br&gt;
 * 
 * curl --user &#x27;clientId:client password&#x27; -k 
 * https://api-sandbox.everyware-cloud.com/v2/messages.xml?startDate&#x3D;2013-02-19T14:11:00&amp;endDate&#x3D;2013-02-19T14:12:00&quot; 
 * |
 * 
 * xmllint --format - &lt;br&gt;
 */
router.get('/messages', (req, res, next) => {
  const options = {
    limit: req.query.limit,
    offset: req.query.offset,
    startDate: req.query.startDate,
    endDate: req.query.endDate,
    fetch: req.query.fetch,
    sort: req.query.sort
  };

  v2.getV2Messages(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Delete all messages published on the account, eventually in 
 * a given time range. The time range is defined by year and 
 * week number. The first day of week is SUNDAY.&lt;br&gt;
 * 
 * &lt;br&gt;
 * 
 * If topic is set, only messages belonging to this topic and 
 * sub-topics will be erased&lt;br&gt;
 * 
 * &lt;br&gt;
 * 
 * &lt;b&gt;If purge flag is set to true&lt;/b&gt;, time range is ignored 
 * and all messages are deleted.&lt;br&gt;
 * 
 * &lt;br&gt;
 * 
 * The time range is from startYear+startWeek (included) to 
 * endYear+endWeek (included).&lt;br&gt;
 * 
 * If startWeek is omitted (set to -1), all messages older than 
 * endYear+endWeek (included) will be deleted.&lt;br&gt;
 * 
 * If startYear+startWeek is set then endYear+endWeek is 
 * mandatory.&lt;br&gt;
 * 
 * If startYear+startWeek and endYear+endWeek are omitted (set 
 * to -1), all messages belonging to this account will be 
 * deleted.&lt;br&gt;
 * 
 * &lt;br&gt;
 * 
 * If purge flag is true, all messages will be deleted as well 
 * as TopicsByAccount, TopicsByAssets and AssetsByAccount. 
 * Purge should not be true if a date is set.
 * 
 * &lt;p&gt;
 * 
 * Examples of topics:&lt;br&gt;
 * 
 * * edcguest/Device_Id_01/car/route/two : delete all messages 
 * for this topic (only asset Device_Id_01 is concerned)&lt;br&gt;
 * 
 * * edcguest/Device_Id_01/tram/# : delete all messages for 
 * asset Device_Id_01 under tram topic (including all 
 * subtopics)&lt;br&gt;
 * 
 * * edcguest/+/car/route/one : delete all messages for all 
 * assets under car/route/one topic and delete topic 
 * car/route/one&lt;br&gt;
 * 
 * * edcguest/+/car/# : delete all messages for all assets 
 * under car and all subtopics and delete topic car and all 
 * subtopics&lt;br&gt;
 * 
 * * edcguest/Device_Id_01/# : delete all messages for asset 
 * Device_Id_01 and delete asset Device_Id_01&lt;br&gt;
 * 
 * * edcguest/+/# : Delete all messages published on the 
 * account and reset account to the initial state without 
 * assets and topics (same function as messages/purge.xml).&lt;br&gt;
 * 
 * &lt;br&gt;
 * 
 * Remember to use URL-encoding for the following symbols:
 * 
 * &lt;li&gt;/ &#x3D; %2F&lt;/li&gt;
 * 
 * &lt;li&gt;+ &#x3D; %2B&lt;/li&gt;
 * 
 * &lt;li&gt;# &#x3D; %23&lt;/li&gt;
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL :&lt;br&gt;
 * 
 * curl --user &#x27;clientId:client password&#x27; -X DELETE -k 
 * https://api-sandbox.everyware-cloud.com/v2/messages.xml?startYear&#x3D;2012&amp;startWeek&#x3D;48&amp;endYear&#x3D;2013&amp;endWeek&#x3D;9&quot; 
 * &lt;br&gt;
 * 
 * (delete all messages from 11/26/2012 to 3/3/2013)&lt;br&gt;
 */
router.delete('/messages', (req, res, next) => {
  const options = {
    topic: req.query.topic,
    startYear: req.query.startYear,
    startWeek: req.query.startWeek,
    endYear: req.query.endYear,
    endWeek: req.query.endWeek,
    purge: req.query.purge
  };

  v2.deleteV2Messages(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Creates a new ProvisionRequest based on the information 
 * provided in the ProvisionRequestCreator parameter.
 */
router.post('/provisionRequests', (req, res, next) => {
  const options = {
  };

  v2.postV2ProvisionRequests(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the ProvisionRequest associated with 
 * the currently connected user with specified offset and limit 
 * query parameters.
 * 
 * 
 * Is it possible to filter result for:
 * 
 * 
 * &lt;ul&gt;
 * 
 * &lt;li&gt;Activity period: specify startDate and endDate to define 
 * the range to match&lt;/li&gt;
 * 
 * &lt;li&gt;Client IDs: specify the list of ClientIDs to match &lt;/li&gt;
 * 
 * &lt;li&gt;Provision Request Statuses: specify the list of statuses 
 * to match&lt;/li&gt;
 * 
 * &lt;/ul&gt;
 * 
 * 
 * These three ways are mutually exclusive and are listed in 
 * order of priority.
 * 
 * Pagination is available for each of the three filtering 
 * type.
 */
router.get('/provisionRequests', (req, res, next) => {
  const options = {
    clientIDs: req.query.clientIDs,
    statuses: req.query.statuses,
    startDate: req.query.startDate,
    endDate: req.query.endDate,
    offset: req.query.offset,
    limit: req.query.limit
  };

  v2.getV2ProvisionRequests(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the Roles associated to the account 
 * of the currently connected user.
 */
router.get('/roles', (req, res, next) => {
  const options = {
  };

  v2.getV2Roles(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Creates a new Role based on the information provided in 
 * RoleCreator parameter.
 */
router.post('/roles', (req, res, next) => {
  const options = {
  };

  v2.postV2Roles(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the Rules created under the account 
 * of the currently connected user.
 */
router.get('/rules', (req, res, next) => {
  const options = {
  };

  v2.getV2Rules(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Creates a new Rule based on the information provided in 
 * RuleCreator parameter.
 */
router.post('/rules', (req, res, next) => {
  const options = {
  };

  v2.postV2Rules(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Creates a new Tag based on the information provided in 
 * TagCreator parameter.
 */
router.post('/tags', (req, res, next) => {
  const options = {
  };

  v2.postV2Tags(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the tag associated to the account of 
 * the currently connected user.
 */
router.get('/tags', (req, res, next) => {
  const options = {
  };

  v2.getV2Tags(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the Topics that received some data 
 * for the account of the currently connected user.
 * 
 * For each returned Topic, the topic string and timestamp of 
 * its last received message will be returned.
 */
router.get('/topics', (req, res, next) => {
  const options = {
    limit: req.query.limit,
    offset: req.query.offset,
    prefix: req.query.prefix
  };

  v2.getV2Topics(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the users associated to the account 
 * of the currently connected user.
 */
router.get('/users', (req, res, next) => {
  const options = {
  };

  v2.getV2Users(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Creates a new User based on the information provided in 
 * UserCreator parameter.
 */
router.post('/users', (req, res, next) => {
  const options = {
  };

  v2.postV2Users(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the version information of the REST APIs 
 * implementation.
 */
router.get('/version', (req, res, next) => {
  const options = {
  };

  v2.getV2Version(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the Account specified by the &quot;id&quot; path parameter.
 */
router.get('/accounts/:accountId', (req, res, next) => {
  const options = {
  };

  v2.getV2AccountsByAccountId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Updates the Account specified by the &quot;id&quot; path parameter
 * 
 * based on the information provided in the Account parameter.
 */
router.put('/accounts/:accountId', (req, res, next) => {
  const options = {
  };

  v2.putV2AccountsByAccountId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes the Account specified by the &quot;id&quot; path parameter.
 */
router.delete('/accounts/:accountId', (req, res, next) => {
  const options = {
  };

  v2.deleteV2AccountsByAccountId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the blocked device certificates.
 * 
 * 
 * &lt;p&gt;
 * 
 * If the flag BlockedCertificatesResult.limitExceeded is set, 
 * the maximum number of entries to be returned has been 
 * reached, more pkis exist and can be read by moving the 
 * offset forward in a new request
 * 
 * &lt;p&gt;
 * 
 * Example to get all blocked device certificates:
 * 
 * 
 * &lt;pre&gt;
 * 
 * String apiPath &#x3D; &quot;deviceCerts.xml&quot;;
 * 
 * WebResource apisWeb &#x3D; 
 * client.resource(API_URL).path(apiPath);
 * 
 * 
 * BlockedCertificatesResult result;
 * 
 * int offset &#x3D; 0;
 * 
 * do {
 * 
 * // if the &quot;limit&quot; queryParam is not initialized, limit 
 * default value &#x3D; 50
 * 
 * // if the &quot;offset&quot; queryParam is not initialized, offset 
 * default value &#x3D; 0
 * 
 * apisWeb &#x3D; apisWeb.queryParam(&quot;limit&quot;, &quot;&quot; + limit);
 * 
 * if (offset &gt; 0)
 * 
 * apisWeb &#x3D; apisWeb.queryParam(&quot;offset&quot;, &quot;&quot; + offset);
 * 
 * result &#x3D; apisWeb.get(BlockedCertificatesResult.class);
 * 
 * offset +&#x3D; limit;
 * 
 * } while (result.isLimitExceeded()):
 * 
 * &lt;/pre&gt;
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL :&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -k 
 * https://api-sandbox.everyware-cloud.com/v2/deviceCerts
 */
router.get('/deviceCerts/blocked', (req, res, next) => {
  const options = {
    limit: req.query.limit,
    offset: req.query.offset
  };

  v2.getV2DeviceCertsBlocked(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Creates a new blocked device certificate based on the 
 * information provided in BlockedCertificateCreator parameter.
 */
router.post('/deviceCerts/blocked', (req, res, next) => {
  const options = {
  };

  v2.postV2DeviceCertsBlocked(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Updates the blocked device certificate provided in the 
 * request body.
 */
router.put('/deviceCerts/blocked', (req, res, next) => {
  const options = {
  };

  v2.putV2DeviceCertsBlocked(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the revoked device certificates.
 */
router.get('/deviceCerts/revoked', (req, res, next) => {
  const options = {
    limit: req.query.limit,
    offset: req.query.offset
  };

  v2.getV2DeviceCertsRevoked(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the device certificate identified by the specified 
 * certificateId.
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL :&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -k 
 * https://api-sandbox.everyware-cloud.com/v2/deviceCerts/{certificateId}.xml 
 * | xmllint --format -
 */
router.get('/deviceCerts/:certificateId', (req, res, next) => {
  const options = {
  };

  v2.getV2DeviceCertsByCertificateId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes the device certificate specified by the 
 * &quot;certificateId&quot; path parameter.
 */
router.delete('/deviceCerts/:certificateId', (req, res, next) => {
  const options = {
  };

  v2.deleteV2DeviceCertsByCertificateId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Return the device job specified in the path parameter
 */
router.get('/deviceJobs/:deviceJobId', (req, res, next) => {
  const options = {
  };

  v2.getV2DeviceJobsByDeviceJobId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Updates the max number of retries for the specified device 
 * job. &lt;br/&gt;
 * 
 * &lt;br/&gt;
 * 
 * The number set must greater of the current retries.
 */
router.put('/deviceJobs/:deviceJobId', (req, res, next) => {
  const options = {
  };

  v2.putV2DeviceJobsByDeviceJobId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes the device job specified in the path parameter and 
 * related data of executions and target clientIDs.
 */
router.delete('/deviceJobs/:deviceJobId', (req, res, next) => {
  const options = {
  };

  v2.deleteV2DeviceJobsByDeviceJobId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns an aggregated summary of the connection status of a 
 * group of devices at a point in time.
 * 
 * It returns the number of devices currently connected, the 
 * number of devices which disconnect cleanly,
 * 
 * the number of devices which disconnected abruptly, and the 
 * number of devices which have been disabled.
 */
router.get('/devices/connectionSummary', (req, res, next) => {
  const options = {
    tag: req.query.tag
  };

  v2.getV2DevicesConnectionSummary(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Searches the device registry for devices based on the 
 * specified criteria.
 * 
 * Query parameters are used to defined the filtering 
 * predicate, the sorting and the pagination.
 * 
 * The supplied query parameters are combined into a logical 
 * AND, so all specified conditions
 * 
 * need to be satisfied for the device to be selected and 
 * returned.
 * 
 * Query parameters which allow for multiple values are 
 * combined into an IN predicate effectively
 * 
 * combining them into a logical OR of the values supplied.
 * 
 * &lt;p&gt;
 * 
 * The &quot;fetch&quot; query parameter can be used to control the 
 * amount of information to be loaded and returned for each 
 * device. Allowed values are &quot;BASIC&quot; or &quot;FULL&quot;. With &quot;BASIC&quot;, 
 * the core attributes
 * 
 * of the device and the version information of its profile are 
 * returned. With &quot;FULL&quot;, all the additional device extended 
 * properties are loaded and returned.
 * 
 * &lt;p&gt;
 * 
 * The returned devices can be sorted. Allowed values for the 
 * sortField query parameter are: &quot;clientId&quot;, &quot;displayName&quot;, 
 * &quot;lastEventOn&quot;. Sorting can be specified ascending or 
 * descending using the
 * 
 * &quot;sort&quot; query parameter with values: &quot;asc&quot; or &quot;desc&quot;. If no 
 * sortField is specified, the returned devices will not follow 
 * any specific order.
 * 
 * &lt;p&gt;
 * 
 * If the flag DevicesResult.limitExceeded is set, the maximum 
 * number of entries to be returned has been reached. More data 
 * exist and can be read by moving the offset forward in a new 
 * request
 */
router.get('/devices/search', (req, res, next) => {
  const options = {
    clientId: req.query.clientId,
    serialNumber: req.query.serialNumber,
    displayName: req.query.displayName,
    imei: req.query.imei,
    imsi: req.query.imsi,
    iccid: req.query.iccid,
    modelId: req.query.modelId,
    connectionIp: req.query.connectionIp,
    status: req.query.status,
    connectionStatus: req.query.connectionStatus,
    esfVersion: req.query.esfVersion,
    applicationIdentifier: req.query.applicationIdentifier,
    customAttribute1: req.query.customAttribute1,
    customAttribute2: req.query.customAttribute2,
    tag: req.query.tag,
    sortField: req.query.sortField,
    signedCertificateId: req.query.signedCertificateId,
    limit: req.query.limit,
    offset: req.query.offset,
    fetch: req.query.fetch,
    sort: req.query.sort
  };

  v2.getV2DevicesSearch(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Sends a request message to a device and waits for a response 
 * synchronously.
 * 
 * This call is generally used to perform remote management of 
 * resources attached to the device such sensors and 
 * registries.
 * 
 * The target device is identified by the supplied topic. The 
 * topic is structured like the following:&lt;br&gt;
 * 
 * 
 * &lt;pre&gt;
 * 
 * $EDC / account_name / client_id / app_id / verb / resource - 
 * id
 * 
 * &lt;/pre&gt;
 * 
 * 
 * &lt;br&gt;
 * 
 * &lt;ul&gt;
 * 
 * &lt;li&gt;$EDC: The $EDC prefix is used to mark all those topics 
 * that are used as &quot;Control Topics&quot; for the remote management. 
 * The prefix will distinguish control topics from data topics 
 * used in
 * 
 * unsolicited reports and it marks the associated messages as 
 * transient, not stored in the historical data archive if one 
 * is present.
 * 
 * &lt;li&gt;account_name: an unique identifier that represents a 
 * group of devices and users and maps to the name of the 
 * current Everyware Cloud account.
 * 
 * &lt;li&gt;client_id: an unique identifier within an account that 
 * represents a single gateway device. This client_id maps to 
 * the Client Identifier (Client ID) as defined in the MQTT 
 * specifications.
 * 
 * For a gateway, the MAC address of its primary network 
 * interface is generally used as the &quot;client_id&quot; of that 
 * gateway.
 * 
 * &lt;li&gt;app_id: an identifier to denote an application running 
 * on the gateway device. We suggest to version the application 
 * identifier in order to allow multiple versions of the 
 * application to
 * 
 * coexist, e.g. CONF-V1, CONF-V2, etc.
 * 
 * &lt;li&gt;verb: An optional token identifying the action to be 
 * performed on the resource. Suggested values are: GET to read 
 * the resource, PUT to create or update the resource, DEL to 
 * delete the
 * 
 * resource, EXEC to perform additional operations.
 * 
 * &lt;li&gt;resource-id: An optional token identifying one or more 
 * resources owned by the application. Examples of resources 
 * are sensors, actuators, local files, or configuration 
 * options. Applications
 * 
 * manage resources by being able to list them, read the latest 
 * value or update them to a new value. Each resource is 
 * identified by a resource_id, which can be a hierarchical 
 * topic. For example,
 * 
 * &quot;sensors/temp&quot; or &quot;sensors/hum&quot; can act respectively as 
 * resource IDs for a temperature sensor and a humidity sensor.
 * 
 * &lt;/ul&gt;
 * 
 * To ensure the delivery of request messages, it is expected 
 * that each application that supports request/response
 * 
 * conversations via MQTT subscribe to the following topic on 
 * device startup:
 * 
 * 
 * &lt;pre&gt;
 * 
 * $EDC/account_name/client_id/app_id/#
 * 
 * &lt;/pre&gt;
 * 
 * 
 * .
 * 
 * Everyware Cloud clients like Everyware Software Framework 
 * (ESF) and Eclipse Kura do offer this behavior by default.
 * 
 * The sendRequest method will proceed to the initiation of a 
 * request/response conversation by:
 * 
 * &lt;ol&gt;
 * 
 * &lt;li&gt;Generate a conversation identifier - &quot;request.id&quot; - for 
 * example by concatenating a random number to a timestamp
 * 
 * &lt;li&gt;Subscribe to the topic where the response message will 
 * be published to, where requester.client.id is the Client ID 
 * of the requester:
 * 
 * 
 * &lt;pre&gt;
 * 
 * $EDC / account_name / requester.client.id / app_id / REPLY / 
 * request.id
 * 
 * &lt;/pre&gt;
 * 
 * 
 * &lt;li&gt;Send the request message to the appropriate 
 * application-specific topic including the following fields in 
 * the payload:
 * 
 * &lt;ul&gt;
 * 
 * &lt;li&gt;request.id: identifier used to match a response with a 
 * request.
 * 
 * &lt;li&gt;requester.client.id: the client ID of the issuer of the 
 * request.
 * 
 * &lt;/ul&gt;
 * 
 * &lt;/ol&gt;
 * 
 * The application receiving the request will process it and 
 * respond on a REPLY topic structured as:
 * 
 * 
 * &lt;pre&gt;
 * 
 * $EDC / account_name / requester.client.id / app_id / REPLY / 
 * request.id
 * 
 * &lt;/pre&gt;
 * 
 * 
 * .
 * 
 * Once the response for a given request is received, the 
 * requester should unsubscribe from the REPLY topic.
 * 
 * The returned response will be an EdcPayload structure with 
 * three additional well-known metrics:
 * 
 * &lt;ul&gt;
 * 
 * &lt;li&gt;response.code: an error code for the remote operation. 
 * Valid codes are: 200, OK; 400, Bad Request; 404, Not Found; 
 * 500 Internal Error.
 * 
 * &lt;li&gt;response.exception.message: Exception message, if any.
 * 
 * &lt;li&gt;response.exception.stack: Remote exception stack trace, 
 * if any.
 * 
 * &lt;/ul&gt;
 * 
 * &lt;p&gt;
 * 
 * In the following example we will request the current 
 * configuration to an ESF device connected under the current 
 * account:
 * 
 * 
 * &lt;pre&gt;
 * 
 * curl --user &#x27;username:password&#x27; -H &quot;Accept: application/xml&quot; 
 * -H &quot;Content-Type: application/xml&quot; -X GET 
 * &#x27;https://api-sandbox.everyware-cloud.com/v2/devices/sendRequest.xml?topic&#x3D;$EDC/edcguest/B8:E8:56:2A:BA:24/CONF-V1/GET/configurations&#x27;
 * 
 * &lt;/pre&gt;
 * 
 * 
 * In this specified case, the remote application will package 
 * the configurations of the services running in the target 
 * device in the body of the returned EdcResponsePayload. As 
 * all EdcMessage
 * 
 * bodies, the returned XML service configurations will be 
 * serialized as an base64-encoded inline String in the body 
 * element.
 */
router.get('/devices/sendRequest', (req, res, next) => {
  const options = {
    topic: req.query.topic,
    timeout: req.query.timeout
  };

  v2.getV2DevicesSendRequest(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Sends a request message to a device and waits for a response 
 * synchronously.
 * 
 * This call is generally used to perform remote management of 
 * resources attached to the device such sensors and 
 * registries.
 * 
 * The target device is identified by the topic specified under 
 * the provided requestMessage. The topic is structured like 
 * the following:&lt;br&gt;
 * 
 * 
 * &lt;pre&gt;
 * 
 * $EDC / account_name / client_id / app_id / verb / resource - 
 * id
 * 
 * &lt;/pre&gt;
 * 
 * 
 * &lt;br&gt;
 * 
 * &lt;ul&gt;
 * 
 * &lt;li&gt;$EDC: The $EDC prefix is used to mark all those topics 
 * that are used as &quot;Control Topics&quot; for the remote management. 
 * The prefix will distinguish control topics from data topics 
 * used in
 * 
 * unsolicited reports and it marks the associated messages as 
 * transient, not stored in the historical data archive if one 
 * is present.
 * 
 * &lt;li&gt;account_name: an unique identifier that represents a 
 * group of devices and users and maps to the name of the 
 * current Everyware Cloud account.
 * 
 * &lt;li&gt;client_id: an unique identifier within an account that 
 * represents a single gateway device. This client_id maps to 
 * the Client Identifier (Client ID) as defined in the MQTT 
 * specifications.
 * 
 * For a gateway, the MAC address of its primary network 
 * interface is generally used as the &quot;client_id&quot; of that 
 * gateway.
 * 
 * &lt;li&gt;app_id: an identifier to denote an application running 
 * on the gateway device. We suggest to version the application 
 * identifier in order to allow multiple versions of the 
 * application to
 * 
 * coexist, e.g. CONF-V1, CONF-V2, etc.
 * 
 * &lt;li&gt;verb: An optional token identifying the action to be 
 * performed on the resource. Suggested values are: GET to read 
 * the resource, PUT to create or update the resource, DEL to 
 * delete the
 * 
 * resource, EXEC to perform additional operations.
 * 
 * &lt;li&gt;resource-id: An optional token identifying one or more 
 * resources owned by the application. Examples of resources 
 * are sensors, actuators, local files, or configuration 
 * options. Applications
 * 
 * manage resources by being able to list them, read the latest 
 * value or update them to a new value. Each resource is 
 * identified by a resource_id, which can be a hierarchical 
 * topic. For example,
 * 
 * &quot;sensors/temp&quot; or &quot;sensors/hum&quot; can act respectively as 
 * resource IDs for a temperature sensor and a humidity sensor.
 * 
 * &lt;/ul&gt;
 * 
 * To ensure the delivery of request messages, it is expected 
 * that each application that supports request/response
 * 
 * conversations via MQTT subscribe to the following topic on 
 * device startup:
 * 
 * 
 * &lt;pre&gt;
 * 
 * $EDC/account_name/client_id/app_id/#
 * 
 * &lt;/pre&gt;
 * 
 * 
 * .
 * 
 * Everyware Cloud clients like Everyware Software Framework 
 * (ESF) and Eclipse Kura do offer this behavior by default.
 * 
 * The sendRequest method will proceed to the initiation of a 
 * request/response conversation by:
 * 
 * &lt;ol&gt;
 * 
 * &lt;li&gt;Generate a conversation identifier - &quot;request.id&quot; - for 
 * example by concatenating a random number to a timestamp
 * 
 * &lt;li&gt;Subscribe to the topic where the response message will 
 * be published to, where requester.client.id is the Client ID 
 * of the requester:
 * 
 * 
 * &lt;pre&gt;
 * 
 * $EDC / account_name / requester.client.id / app_id / REPLY / 
 * request.id
 * 
 * &lt;/pre&gt;
 * 
 * 
 * &lt;li&gt;Send the request message to the appropriate 
 * application-specific topic including the following fields in 
 * the payload:
 * 
 * &lt;ul&gt;
 * 
 * &lt;li&gt;request.id: identifier used to match a response with a 
 * request.
 * 
 * &lt;li&gt;requester.client.id: the client ID of the issuer of the 
 * request.
 * 
 * &lt;/ul&gt;
 * 
 * &lt;/ol&gt;
 * 
 * The application receiving the request will process it and 
 * respond on a REPLY topic structured as:
 * 
 * 
 * &lt;pre&gt;
 * 
 * $EDC / account_name / requester.client.id / app_id / REPLY / 
 * request.id
 * 
 * &lt;/pre&gt;
 * 
 * 
 * .
 * 
 * Once the response for a given request is received, the 
 * requester should unsubscribe from the REPLY topic.
 * 
 * The returned response will be an EdcPayload structure with 
 * three additional well-known metrics:
 * 
 * &lt;ul&gt;
 * 
 * &lt;li&gt;response.code: an error code for the remote operation. 
 * Valid codes are: 200, OK; 400, Bad Request; 404, Not Found; 
 * 500 Internal Error.
 * 
 * &lt;li&gt;response.exception.message: Exception message, if any.
 * 
 * &lt;li&gt;response.exception.stack: Remote exception stack trace, 
 * if any.
 * 
 * &lt;/ul&gt;
 * 
 * &lt;p&gt;
 * 
 * In the following example we will request the current 
 * configuration to an ESF device connected under the current 
 * account in JSON format:
 * 
 * 
 * &lt;pre&gt;
 * 
 * curl --data 
 * &#x27;{&quot;topic&quot;:&quot;$EDC/edcguest/B8:E8:56:2A:BA:24/CONF-V1/GET/configurations&quot;,&quot;payload&quot;:{}}&#x27; 
 * --user &#x27;edcguest:Welcome1&#x27; -H &quot;Accept: application/json&quot; -H 
 * &quot;Content-Type: application/json&quot; -X POST 
 * &#x27;http://localhost:8080/edc-rest-apis/v2/devices/sendRequest.json&#x27;
 * 
 * &lt;/pre&gt;
 * 
 * 
 * In this specified case, the remote application will package 
 * the configurations of the services running in the target 
 * device in the body of the returned EdcResponsePayload. As 
 * all EdcMessage
 * 
 * bodies, the returned XML service configurations will be 
 * serialized as an base64-encoded inline String in the body 
 * element.
 */
router.post('/devices/sendRequest', (req, res, next) => {
  const options = {
    timeout: req.query.timeout
  };

  v2.postV2DevicesSendRequest(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the Device identified by the specified ClientID 
 * under the account of the currently connected user.
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL :&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -k 
 * https://api-sandbox.everyware-cloud.com/v2/devices/{clientId}.xml 
 * | xmllint --format -
 */
router.get('/devices/:clientId', (req, res, next) => {
  const options = {
  };

  v2.getV2DevicesByClientId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Updates the Device specified by the &quot;clientId&quot; path 
 * parameter
 * 
 * based on the information provided in the Device request 
 * body.
 */
router.put('/devices/:clientId', (req, res, next) => {
  const options = {
  };

  v2.putV2DevicesByClientId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes the Device specified by the &quot;clientId&quot; path 
 * parameter.
 */
router.delete('/devices/:clientId', (req, res, next) => {
  const options = {
  };

  v2.deleteV2DevicesByClientId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Gets an aggregate health check report for the given period.
 */
router.get('/healthMonitors/period', (req, res, next) => {
  const options = {
    startDate: req.query.startDate,
    endDate: req.query.endDate
  };

  v2.getV2HealthMonitorsPeriod(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Finds Health Check Report by the given path parameter.
 */
router.get('/healthMonitors/:healthCheckReportId', (req, res, next) => {
  const options = {
  };

  v2.getV2HealthMonitorsByHealthCheckReportId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the count of all the Messages published under the 
 * account of the currently connected user.
 */
router.get('/messages/count', (req, res, next) => {
  const options = {
  };

  v2.getV2MessagesCount(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Publishes a new Message under the account of the currently 
 * connected user. The message will be published to the broker 
 * associated to this account. As such, devices and 
 * applications subscribed
 * 
 * to the topic specified in the provided EdcMessage will 
 * receive a copy of the published message. Finally, all 
 * messages published to data topics - as opposed to control 
 * topics - will be stored in
 * 
 * the back-end for later queries.
 */
router.post('/messages/publish', (req, res, next) => {
  const options = {
    qos: req.query.qos,
    retain: req.query.retain
  };

  v2.postV2MessagesPublish(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Delete all messages published on the account and reset 
 * account to the initial state without assets and topics.
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL :&lt;br&gt;
 * 
 * curl --user &#x27;clientId:client password&#x27; -X DELETE -k 
 * https://api-sandbox.everyware-cloud.com/v2/messages/purge.xml
 */
router.delete('/messages/purge', (req, res, next) => {
  const options = {
  };

  v2.deleteV2MessagesPurge(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the Messages published by the given 
 * Asset. Please keep in mind that when supplying an Asset as a 
 * query parameter in a URL, proper URL encoding is necessary 
 * for
 * 
 * characters like &#x27;+&#x27; (replace it with &#x27;%2B&#x27;) and &#x27;#&#x27; (replace 
 * it with &#x27;%23&#x27;). The startDate and endDate query parameters 
 * determine the time range for the messages returned; the 
 * timestamp of the
 * 
 * returned messages will be in the interval between startDate 
 * and endDate.
 * 
 * &lt;p&gt;
 * 
 * If the flag MessagesResult.limitExceeded is set, the maximum 
 * number of entries to be returned has been reached, more data 
 * exist and can be read by moving the offset forward in a new 
 * request
 * 
 * &lt;p&gt;
 * 
 * If the parameter &quot;sort&quot; is set to &quot;asc&quot;, messages are 
 * returned oldest first.
 */
router.get('/messages/searchByAsset', (req, res, next) => {
  const options = {
    asset: req.query.asset,
    limit: req.query.limit,
    offset: req.query.offset,
    startDate: req.query.startDate,
    endDate: req.query.endDate,
    fetch: req.query.fetch,
    sort: req.query.sort
  };

  v2.getV2MessagesSearchByAsset(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the Messages published under the 
 * given Topic with the specific range of values for one of its 
 * metrics. Depending on your metric data indexing, the metrics 
 * may be stored
 * 
 * in MetricsByValue or MetricsByTimestamp. In the first case, 
 * the range on values are mandatory, while the date range is 
 * optional and viceversa in the latter case. If the index 
 * metrics data is
 * 
 * set to &quot;none&quot;, the query is not available. Wild cards on the 
 * topic name can be used to aggregate messages at the 
 * different topic levels. For example, a topic 
 * &quot;edcguest/+/bus/#&quot; can used to
 * 
 * return all messages published under the edcguest account, 
 * across all the assets, and for all the buses. Please keep in 
 * mind that when supplying a Topic as a query parameter in a 
 * URL, proper URL
 * 
 * encoding is necessary for characters like &#x27;+&#x27; (replace it 
 * with &#x27;%2B&#x27;) and &#x27;#&#x27; (replace it with &#x27;%23&#x27;). The startDate 
 * and endDate query parameters determine the time range for 
 * the messages
 * 
 * returned; the timestamp of the returned messages will be in 
 * the interval between startDate and endDate.
 * 
 * &lt;p&gt;
 * 
 * If the flag MessagesResult.limitExceeded is set, the maximum 
 * number of entries to be returned has been reached, more data 
 * exist and can be read by moving the offset forward in a new 
 * request
 * 
 * &lt;p&gt;
 * 
 * The messages returned are sorted. If the parameter 
 * &quot;sortType&quot; is set to &quot;time&quot;, messages will be sorted by 
 * timestamp, if set to &quot;value&quot; or not set, messages will be 
 * sorted by metric value.&lt;br&gt;
 * 
 * If the parameter &quot;sort&quot; is set to &quot;asc&quot;, messages are 
 * returned oldest or smallest first.
 */
router.get('/messages/searchByMetric', (req, res, next) => {
  const options = {
    topic: req.query.topic,
    limit: req.query.limit,
    offset: req.query.offset,
    startDate: req.query.startDate,
    endDate: req.query.endDate,
    metric: req.query.metric,
    type: req.query.type,
    min: req.query.min,
    max: req.query.max,
    sort: req.query.sort
  };

  v2.getV2MessagesSearchByMetric(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the Messages published under the 
 * given topic. Wild cards on the topic name can be used to 
 * aggregate messages at the different topic levels. For 
 * example, a topic
 * 
 * &quot;edcguest/+/bus/#&quot; can used to return all messages published 
 * under the edcguest account, across all the assets, and for 
 * all the buses. Please keep in mind that when supplying a 
 * Topic as a query
 * 
 * parameter in a URL, proper URL encoding is necessary for 
 * characters like &#x27;+&#x27; (replace it with &#x27;%2B&#x27;) and &#x27;#&#x27; (replace 
 * it with &#x27;%23&#x27;). It is also required that the &#x27;full topic&#x27; be 
 * supplied. This
 * 
 * consists of the &#x27;topic prefix&#x27; and the &#x27;semantic topic&#x27;. The 
 * &#x27;topic prefix&#x27; is account/asset and the semantic topic is 
 * everything after. So, at minimum the topic supplied in this 
 * query must be
 * 
 * at least three levels deep. The startDate and endDate query 
 * parameters determine the time range for the messages 
 * returned; the timestamp of the returned messages will be in 
 * the interval between
 * 
 * startDate and endDate.
 * 
 * &lt;p&gt;
 * 
 * If the flag MessagesResult.limitExceeded is set, the maximum 
 * number of entries to be returned has been reached, more data 
 * exist and can be read by moving the offset forward in a new 
 * request
 * 
 * &lt;p&gt;
 * 
 * If the parameter &quot;sort&quot; is set to &quot;asc&quot;, messages are 
 * returned oldest first.
 */
router.get('/messages/searchByTopic', (req, res, next) => {
  const options = {
    topic: req.query.topic,
    limit: req.query.limit,
    offset: req.query.offset,
    startDate: req.query.startDate,
    endDate: req.query.endDate,
    fetch: req.query.fetch,
    sort: req.query.sort
  };

  v2.getV2MessagesSearchByTopic(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Stores a new Message under the account of the currently 
 * connected user. In this case, the provided message will only 
 * be stored in the back-end database and it will not be 
 * forwarded to the
 * 
 * message broker.
 */
router.post('/messages/store', (req, res, next) => {
  const options = {
  };

  v2.postV2MessagesStore(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the Message with a given uuid. Multiple comma 
 * separated uuids can be used for this query.
 */
router.get('/messages/:MsgID', (req, res, next) => {
  const options = {
    fetch: req.query.fetch
  };

  v2.getV2MessagesByMsgId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all metrics that where published under 
 * the specified Topic. For each returned Metric, its name, 
 * type and last value will be returned. Please keep in mind 
 * that when supplying
 * 
 * a Topic as a query parameter in a URL, proper URL encoding 
 * is necessary for characters like &#x27;+&#x27; (replace it with &#x27;%2B&#x27;) 
 * and &#x27;#&#x27; (replace it with &#x27;%23&#x27;).
 */
router.get('/metrics/searchByTopic', (req, res, next) => {
  const options = {
    topic: req.query.topic,
    limit: req.query.limit,
    offset: req.query.offset
  };

  v2.getV2MetricsSearchByTopic(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the last message published to the specified topic 
 * but only the values for the metrics specified will be 
 * contained in the response to keep it compact and efficient. 
 * While the response is
 * 
 * modeled as a MessageResult, the result will always contain 
 * one single EdcMessage - the last one published to the 
 * specified topic. The returned EdcMessage will provide the 
 * timestamp and position
 * 
 * of the message; the metrics contained will be limited to the 
 * one specified; no binary message body will be available. 
 * Please keep in mind that when supplying a Topic as a query 
 * parameter in a
 * 
 * URL, proper URL encoding is necessary for characters like 
 * &#x27;+&#x27; (replace it with &#x27;%2B&#x27;) and &#x27;#&#x27; (replace it with &#x27;%23&#x27;).
 */
router.get('/metrics/values', (req, res, next) => {
  const options = {
    topic: req.query.topic,
    metric: req.query.metric
  };

  v2.getV2MetricsValues(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of metrics published under the given Topic 
 * with the specific range of values. This API is available 
 * only if the metrics data are indexed by value. If the index 
 * metrics data is
 * 
 * set to &quot;none&quot;, the query is not available. The topic, metric 
 * name, metric type and min and max values are mandatory 
 * fields for this API, while the limit, offset and sorting 
 * fields are optional.
 * 
 * Wild cards on the topic name can be used to aggregate 
 * messages at the different topic levels. For example, a topic 
 * &quot;edcguest/+/bus/#&quot; can used to return all messages published 
 * under the
 * 
 * edcguest account, across all the assets, and for all the 
 * buses. Please keep in mind that when supplying a Topic as a 
 * query parameter in a URL, proper URL encoding is necessary 
 * for characters
 * 
 * like &#x27;+&#x27; (replace it with &#x27;%2B&#x27;) and &#x27;#&#x27; (replace it with 
 * &#x27;%23&#x27;).
 * 
 * &lt;p&gt;
 * 
 * If the flag limitExceeded is set, the maximum number of 
 * entries to be returned has been reached, more data exist and 
 * can be read by moving the offset forward in a new request
 * 
 * &lt;p&gt;
 * 
 * If the parameter &quot;sort&quot; is set to &quot;asc&quot;, metrics are 
 * returned smaller first.
 */
router.get('/metrics/valuesByRange', (req, res, next) => {
  const options = {
    topic: req.query.topic,
    limit: req.query.limit,
    offset: req.query.offset,
    metric: req.query.metric,
    type: req.query.type,
    min: req.query.min,
    max: req.query.max,
    sort: req.query.sort
  };

  v2.getV2MetricsValuesByRange(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of metrics published under the given Topic 
 * with the specific range of timestamp. This API is available 
 * only if the metrics data are indexed by timestamp. If the 
 * index metrics
 * 
 * data is set to &quot;none&quot;, the query is not available. The 
 * topic, metric name, metric type and start and end date are 
 * mandatory fields for this API, while the limit, offset and 
 * sorting fields are
 * 
 * optional. Wild cards on the topic name can be used to 
 * aggregate messages at the different topic levels. For 
 * example, a topic &quot;edcguest/+/bus/#&quot; can used to return all 
 * messages published under
 * 
 * the edcguest account, across all the assets, and for all the 
 * buses. Please keep in mind that when supplying a Topic as a 
 * query parameter in a URL, proper URL encoding is necessary 
 * for
 * 
 * characters like &#x27;+&#x27; (replace it with &#x27;%2B&#x27;) and &#x27;#&#x27; (replace 
 * it with &#x27;%23&#x27;).
 * 
 * &lt;p&gt;
 * 
 * If the flag limitExceeded is set, the maximum number of 
 * entries to be returned has been reached, more data exist and 
 * can be read by moving the offset forward in a new request
 * 
 * &lt;p&gt;
 * 
 * If the parameter &quot;sort&quot; is set to &quot;asc&quot;, metrics are 
 * returned oldest first.
 */
router.get('/metrics/valuesByTimestamp', (req, res, next) => {
  const options = {
    topic: req.query.topic,
    limit: req.query.limit,
    offset: req.query.offset,
    metric: req.query.metric,
    type: req.query.type,
    startDate: req.query.startDate,
    endDate: req.query.endDate,
    sort: req.query.sort
  };

  v2.getV2MetricsValuesByTimestamp(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Return the number of provision request used by this account. 
 * Remember that the account resources may be
 * 
 * shared with sub-accounts of this account.
 */
router.get('/provisionRequests/count', (req, res, next) => {
  const options = {
  };

  v2.getV2ProvisionRequestsCount(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Updates the ProvisionRequest specified by the 
 * &quot;provisionRequestId&quot; path parameter
 * 
 * based on the information provided in the ProvisionRequest 
 * parameter. &lt;br/&gt;
 * 
 * Only certain fields are editable after a provision request 
 * has been created. &lt;br/&gt;
 * 
 * The editable fields are:
 * 
 * &lt;ul&gt;
 * 
 * &lt;li&gt;activatesOn&lt;/li&gt;
 * 
 * &lt;li&gt;expiresOn&lt;/li&gt;
 * 
 * &lt;li&gt;status&lt;/li&gt;
 * 
 * &lt;li&gt;provisionJob.retryMaxAttempts&lt;/li&gt;
 * 
 * &lt;/ul&gt;
 */
router.put('/provisionRequests/:provisionRequestId', (req, res, next) => {
  const options = {
  };

  v2.putV2ProvisionRequestsByProvisionRequestId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the ProvisionRequest and its associated 
 * ProvisionJob, specified by the provisionRequestId path 
 * parameter.
 */
router.get('/provisionRequests/:provisionRequestId', (req, res, next) => {
  const options = {
  };

  v2.getV2ProvisionRequestsByProvisionRequestId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes the ProvisionRequest specified by the 
 * &quot;provisionRequestId&quot; path parameter. &lt;br/&gt;
 * 
 * When deleting a provisionRequest the associated provisionJob 
 * and all related attachment will also be deleted.
 */
router.delete('/provisionRequests/:provisionRequestId', (req, res, next) => {
  const options = {
  };

  v2.deleteV2ProvisionRequestsByProvisionRequestId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the Administrator Role for the current account.
 */
router.get('/roles/administrator', (req, res, next) => {
  const options = {
  };

  v2.getV2RolesAdministrator(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the Role specified by the &quot;id&quot; path parameter.
 */
router.get('/roles/:roleId', (req, res, next) => {
  const options = {
  };

  v2.getV2RolesByRoleId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Updates the Role specified by the &quot;id&quot; path parameter
 * 
 * based on the information provided in the Role parameter.
 */
router.put('/roles/:roleId', (req, res, next) => {
  const options = {
  };

  v2.putV2RolesByRoleId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes the Role specified by the &quot;id&quot; path parameter.
 */
router.delete('/roles/:roleId', (req, res, next) => {
  const options = {
  };

  v2.deleteV2RolesByRoleId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the Rule Actions available.
 */
router.get('/rules/actions', (req, res, next) => {
  const options = {
  };

  v2.getV2RulesActions(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the Rule specified by the &quot;id&quot; path parameter.
 */
router.get('/rules/:ruleId', (req, res, next) => {
  const options = {
  };

  v2.getV2RulesByRuleId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Updates the Rule specified by the &quot;id&quot; path parameter
 * 
 * based on the information provided in the Rule parameter.
 */
router.put('/rules/:ruleId', (req, res, next) => {
  const options = {
  };

  v2.putV2RulesByRuleId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes the Rule specified by the &quot;id&quot; path parameter.
 */
router.delete('/rules/:ruleId', (req, res, next) => {
  const options = {
  };

  v2.deleteV2RulesByRuleId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Push REST API to subscribe to a given topic and receive 
 * messages published under that topic.
 * 
 * When the client connects to this URL, the response is 
 * suspended,
 * 
 * and a &lt;a 
 * href&#x3D;&quot;https://en.wikipedia.org/wiki/Push_technology#Long_Polling&quot;&gt;
 * 
 * Comet Long Polling&lt;/a&gt; session is initiated.
 * 
 * 
 * By default a server-side timeout of 1 minute is applied to 
 * the suspended response.
 * 
 * The client code is expected to handle the closing of the 
 * connection from the server side and
 * 
 * perform a reconnect if necessary. A maximum time out of 5 
 * minutes can be specified.
 * 
 * Upon receiving a message on the subscribed topic, the 
 * message will be formatted in
 * 
 * XML or JSON format as requested and sent as response body to 
 * the suspended request.
 * 
 * 
 * Following the Long Polling protocol, the request will then 
 * be closed; it is left up
 * 
 * to the client to reopen a new request. JSON will be the 
 * default format if no extension is provided. &lt;br/&gt;
 * 
 * 
 * Cross Origin Request Support (CORS) is included so Java 
 * Scripts clients executed in
 * 
 * web browser can initiate subscribe REST calls from any 
 * domain. &lt;br/&gt;
 * 
 * Please refer to our code samples for client libraries that 
 * you can use to make Comet requests.
 */
router.get('/streams/subscribe', (req, res, next) => {
  const options = {
    topic: req.query.topic,
    timeout: req.query.timeout,
    fetch: req.query.fetch
  };

  v2.getV2StreamsSubscribe(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Creates a new TagApplication on the information provided in 
 * TagApplicationCreator parameter.
 */
router.post('/tags/apply', (req, res, next) => {
  const options = {
  };

  v2.postV2TagsApply(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the Tag specified by the &quot;name&quot; query parameter.
 */
router.get('/tags/findByName', (req, res, next) => {
  const options = {
    name: req.query.name
  };

  v2.getV2TagsFindByName(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Gets the list of all the tag application associated to the 
 * given taggable entity.
 */
router.get('/tags/findTagApplicationByTaggable', (req, res, next) => {
  const options = {
    entityType: req.query.entityType,
    entityId: req.query.entityId
  };

  v2.getV2TagsFindTagApplicationByTaggable(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Return a summary of total device assigned per Tag
 */
router.get('/tags/getTagSummary', (req, res, next) => {
  const options = {
  };

  v2.getV2TagsGetTagSummary(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes the TagApplication specified by the tagId, 
 * entityType and entityId path parameters.
 */
router.delete('/tags/remove', (req, res, next) => {
  const options = {
    tagId: req.query.tagId,
    entityType: req.query.entityType,
    entityId: req.query.entityId
  };

  v2.deleteV2TagsRemove(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Updates the Tag specified by the &quot;id&quot; path parameter based 
 * on the information provided in the Tag parameter.
 */
router.put('/tags/:tagId', (req, res, next) => {
  const options = {
  };

  v2.putV2TagsByTagId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the Tag specified by the &quot;id&quot; path parameter.
 */
router.get('/tags/:tagId', (req, res, next) => {
  const options = {
  };

  v2.getV2TagsByTagId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes the Tag specified by the &quot;id&quot; path parameter.
 */
router.delete('/tags/:tagId', (req, res, next) => {
  const options = {
  };

  v2.deleteV2TagsByTagId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the count of all the Messages published under the 
 * specified topic.
 */
router.get('/topics/count', (req, res, next) => {
  const options = {
    topic: req.query.topic
  };

  v2.getV2TopicsCount(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the User specified by the &quot;username&quot; query 
 * parameter.
 */
router.get('/users/findByName', (req, res, next) => {
  const options = {
    username: req.query.username
  };

  v2.getV2UsersFindByName(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the User specified by the &quot;id&quot; path parameter.
 */
router.get('/users/:userId', (req, res, next) => {
  const options = {
  };

  v2.getV2UsersByUserId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Updates the User specified by the &quot;id&quot; path parameter
 * 
 * based on the information provided in the User parameter.
 */
router.put('/users/:userId', (req, res, next) => {
  const options = {
  };

  v2.putV2UsersByUserId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes the User specified by the &quot;id&quot; path parameter.
 */
router.delete('/users/:userId', (req, res, next) => {
  const options = {
  };

  v2.deleteV2UsersByUserId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the VpnConnection currently active 
 * under this account.
 */
router.get('/vpn/connections', (req, res, next) => {
  const options = {
  };

  v2.getV2VpnConnections(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all direct child accounts for the 
 * Account specified by the &quot;id&quot; path parameter.
 */
router.get('/accounts/:accountId/childAccounts', (req, res, next) => {
  const options = {
    recoursive: req.query.recoursive
  };

  v2.getV2AccountsByAccountIdChildAccounts(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the Service Plan for the Account specified by the 
 * &quot;id&quot; path parameter.
 */
router.get('/accounts/:accountId/servicePlan', (req, res, next) => {
  const options = {
  };

  v2.getV2AccountsByAccountIdServicePlan(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the daily usage for the Account specified by the 
 * &quot;id&quot; path parameter.
 */
router.get('/accounts/:accountId/usageByDay', (req, res, next) => {
  const options = {
    limit: req.query.limit,
    offset: req.query.offset,
    startDate: req.query.startDate,
    endDate: req.query.endDate
  };

  v2.getV2AccountsByAccountIdUsageByDay(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the usage for the Account specified by the &quot;id&quot; path 
 * parameter.
 */
router.get('/accounts/:accountId/usageByHour', (req, res, next) => {
  const options = {
    limit: req.query.limit,
    offset: req.query.offset,
    startDate: req.query.startDate,
    endDate: req.query.endDate
  };

  v2.getV2AccountsByAccountIdUsageByHour(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the count of all the Messages that the specified 
 * asset published.
 */
router.get('/assets/:asset/count', (req, res, next) => {
  const options = {
  };

  v2.getV2AssetsByAssetCount(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of all the Topic that the specified asset 
 * published under.
 * 
 * For each returned Topic, the topic and timestamp of its last 
 * received message will be returned.
 */
router.get('/assets/:asset/topics', (req, res, next) => {
  const options = {
    limit: req.query.limit,
    offset: req.query.offset,
    prefix: req.query.prefix
  };

  v2.getV2AssetsByAssetTopics(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the blocked device certificate identified by the 
 * specified certificateId.
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL :&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -k 
 * https://api-sandbox.everyware-cloud.com/v2/deviceCerts/{certificateId}.xml 
 * | xmllint --format -
 */
router.get('/deviceCerts/:certificateId/block', (req, res, next) => {
  const options = {
  };

  v2.getV2DeviceCertsByCertificateIdBlock(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes the blocked device certificate specified by the 
 * &quot;certificateId&quot; path parameter.
 */
router.delete('/deviceCerts/:certificateId/block', (req, res, next) => {
  const options = {
  };

  v2.deleteV2DeviceCertsByCertificateIdBlock(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Try to install the device certificate specified by the 
 * &quot;certificateId&quot; path parameter into the message broker 
 * truststore.
 */
router.post('/deviceCerts/:certificateId/install', (req, res, next) => {
  const options = {
  };

  v2.postV2DeviceCertsByCertificateIdInstall(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Revoke the device certificate specified by the 
 * &quot;certificateId&quot; path parameter.
 */
router.post('/deviceCerts/:certificateId/revoke', (req, res, next) => {
  const options = {
  };

  v2.postV2DeviceCertsByCertificateIdRevoke(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Return the list of the executions for the specified Device 
 * Job supporting pagination.
 * 
 * 
 * The device job executions contains the log of the execution.
 */
router.get('/deviceJobs/:deviceJobId/executions', (req, res, next) => {
  const options = {
    fetchLogs: req.query.fetchLogs,
    limit: req.query.limit,
    offset: req.query.offset
  };

  v2.getV2DeviceJobsByDeviceJobIdExecutions(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Return the list of the target of the specified device job 
 * supporting pagination.
 * 
 * 
 * It also supports filtering by DeviceJobTargetStatus. If not 
 * specified all DevicesJobTargetStatus are selected.
 */
router.get('/deviceJobs/:deviceJobId/targets', (req, res, next) => {
  const options = {
    deviceStatuses: req.query.deviceStatuses,
    limit: req.query.limit,
    offset: req.query.offset
  };

  v2.getV2DeviceJobsByDeviceJobIdTargets(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Executes a remote command on a device and return the command 
 * output.
 * 
 * 
 * &lt;p&gt;
 * 
 * Example to list all files in the current working directory:
 * 
 * 
 * &lt;pre&gt;
 * 
 * Client client &#x3D; client();
 * 
 * WebResource apisWeb &#x3D; client.resource(APIS_TEST_URL);
 * 
 * WebResource.Builder deviceCommandWebXml &#x3D; 
 * apisWeb.path(&amp;quot;devices&amp;quot;)
 * 
 * .path(s_clientId)
 * 
 * .path(&amp;quot;command&amp;quot;)
 * 
 * .accept(MediaType.APPLICATION_XML)
 * 
 * .type(MediaType.APPLICATION_XML);
 * 
 * 
 * DeviceCommandInput commandInput &#x3D; new DeviceCommandInput();
 * 
 * commandInput.setCommand(&amp;quot;ls&amp;quot;);
 * 
 * commandInput.setArguments(new String[] { &amp;quot;-l&amp;quot;, 
 * &amp;quot;-a&amp;quot; });
 * 
 * 
 * DeviceCommandOutput commandOutput &#x3D; 
 * deviceCommandWebXml.post(DeviceCommandOutput.class, 
 * commandInput);
 * 
 * &lt;/pre&gt;
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL. The command input XML request body 
 * is read from file:&lt;br&gt;
 * 
 * 
 * curl --user &#x27;username:password&#x27; -X POST -H &#x27;Content-type: 
 * application/xml&#x27; -d @command.xml -k 
 * https://api-sandbox.everyware-cloud.com/v2/devices/{clientId}/command.xml 
 * | xmllint --format -
 */
router.post('/devices/:clientId/command', (req, res, next) => {
  const options = {
  };

  v2.postV2DevicesByClientIdCommand(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the configuration of a device or the configuration 
 * of the OSGi component
 * 
 * identified with specified PID (service&#x27;s persistent 
 * identity).
 * 
 * In the OSGi framework, the service&#x27;s persistent identity is 
 * defined as the name attribute of the
 * 
 * Component Descriptor XML file; at runtime, the same value is 
 * also available
 * 
 * in the component.name and in the service.pid attributes of 
 * the Component Configuration.
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL:&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -k 
 * https://api-sandbox.everyware-cloud.com/v2/devices/{clientId}/configurations.xml?componentId&#x3D;{componentId} 
 * | xmllint --format -
 */
router.get('/devices/:clientId/configurations', (req, res, next) => {
  const options = {
    componentId: req.query.componentId
  };

  v2.getV2DevicesByClientIdConfigurations(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Updates the configuration of the registered OSGi component 
 * with the specified pid.
 * 
 * 
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL. This example reads the 
 * configuration from file:&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -X POST -H &#x27;Content-type: 
 * application/xml&#x27; -d @configuration.xml -k 
 * https://api-sandbox.everyware-cloud.com/v2/devices/{clientId}/configurations
 */
router.post('/devices/:clientId/configurations', (req, res, next) => {
  const options = {
  };

  v2.postV2DevicesByClientIdConfigurations(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the events for the device identified by the 
 * specified ClientID under the account of the currently 
 * connected user.
 * 
 * &lt;p&gt;
 * 
 * If the flag DeviceEventsResult.limitExceeded is set, the 
 * maximum number of entries to be returned has been reached, 
 * more events exist and can be read by moving the offset 
 * forward in a new
 * 
 * request
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL:&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -k 
 * https://api-sandbox.everyware-cloud.com/v2/devices/{clientId}/events.xml 
 * | xmllint --format -
 */
router.get('/devices/:clientId/events', (req, res, next) => {
  const options = {
    limit: req.query.limit,
    offset: req.query.offset,
    startDate: req.query.startDate,
    endDate: req.query.endDate
  };

  v2.getV2DevicesByClientIdEvents(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of packages deployed on a device.
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL:&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -k 
 * https://api-sandbox.everyware-cloud.com/v2/devices/{clientId}/packages.xml 
 * | xmllint --format -
 */
router.get('/devices/:clientId/packages', (req, res, next) => {
  const options = {
  };

  v2.getV2DevicesByClientIdPackages(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Install a new deployment package on a device.
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL: curl --user &#x27;username:password&#x27; -X 
 * POST 
 * https://api-sandbox.everyware-cloud.com/v2/devices/{clientId}/packages?packageUrl&#x3D;{packageUrl}
 */
router.post('/devices/:clientId/packages', (req, res, next) => {
  const options = {
    packageUrl: req.query.packageUrl
  };

  v2.postV2DevicesByClientIdPackages(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Updates the configuration of a device rolling back a given 
 * snapshot ID.
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL:&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -X POST 
 * https://api-sandbox.everyware-cloud.com/v2/devices/{clientId}/rollback?snapshotId&#x3D;{snapshotId}
 */
router.post('/devices/:clientId/rollback', (req, res, next) => {
  const options = {
    snapshotId: req.query.snapshotId
  };

  v2.postV2DevicesByClientIdRollback(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the list of snapshot (older configurations) IDs of 
 * the device.
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL:&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -k 
 * https://api-sandbox.everyware-cloud.com/v2/devices/{clientId}/snapshots.xml 
 * | xmllint --format -
 */
router.get('/devices/:clientId/snapshots', (req, res, next) => {
  const options = {
  };

  v2.getV2DevicesByClientIdSnapshots(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Sends a wakeup SMS to ay device identified by the value of 
 * the &quot;clientId&quot; parameter. More in detail the call allows to 
 * request to the SIM provider M2M platform to send a wakeup 
 * sms to a device.
 * 
 * A positive reply from the SIM provider M2M platform doesn&#x27;t 
 * confirm the delivery of the SMS to the device, but only that 
 * the M2M platform takes in charge of send the wakeup SMS to 
 * the device.
 * 
 * 
 * 
 * Example of query in CURL.&lt;br&gt;
 * 
 * 
 * curl --user &#x27;username:password&#x27; -X POST -k 
 * https://api-sandbox.everyware-cloud.com/v2/devices/{clientId}/wakeupSMS
 */
router.post('/devices/:clientId/wakeupSMS', (req, res, next) => {
  const options = {
  };

  v2.postV2DevicesByClientIdWakeupSms(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Gets all health check logs related to a health check report.
 */
router.get('/healthMonitors/:healthCheckReportId/healthCheckLogs', (req, res, next) => {
  const options = {
    fetchLogs: req.query.fetchLogs,
    startDate: req.query.startDate,
    endDate: req.query.endDate
  };

  v2.getV2HealthMonitorsByHealthCheckReportIdHealthCheckLogs(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Return the list of the executions for the specified 
 * Provision Request
 */
router.get('/provisionRequests/:provisionRequestId/executions', (req, res, next) => {
  const options = {
  };

  v2.getV2ProvisionRequestsByProvisionRequestIdExecutions(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Unlock a User based on the userId provided in the path 
 * request.
 */
router.post('/users/:userId/unlock', (req, res, next) => {
  const options = {
  };

  v2.postV2UsersByUserIdUnlock(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Sends a VPN connect request to the device identified by the 
 * specified clientId.
 * 
 * To be able to process the request, the device must be 
 * connected to the Everyware Cloud
 * 
 * and have the Everyware Software Framework with the VPN 
 * Remote Access bundle installed
 * 
 * and configured. Upon receiving the request, the device will 
 * start a VPN connection
 * 
 * to the specified VPN server. The call returns the status of 
 * the VPN Connection of
 * 
 * such device at the end of the operation.
 */
router.post('/vpn/connect/:clientId', (req, res, next) => {
  const options = {
  };

  v2.postV2VpnConnectByClientId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the details of the VpnConnection specified by the 
 * &quot;vpnConnectionId&quot; path parameter.
 */
router.get('/vpn/connections/:vpnConnectionId', (req, res, next) => {
  const options = {
  };

  v2.getV2VpnConnectionsByVpnConnectionId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Sends a VPN disconnect request to the device identified by 
 * the specified clientId.
 * 
 * To be able to process the request, the device must be 
 * connected to the Everyware Cloud
 * 
 * and have the Everyware Software Framework with the VPN 
 * Remote Access bundle installed
 * 
 * and configured. Upon receiving the request, the device will 
 * stop the current VPN
 * 
 * connection if one is active. The call returns the status of 
 * the VPN Connection of
 * 
 * such device at the end of the operation.
 */
router.post('/vpn/disconnect/:clientId', (req, res, next) => {
  const options = {
  };

  v2.postV2VpnDisconnectByClientId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the VPN connection status for the device identified 
 * by the specified clientId.
 * 
 * To be able to process the request, the device must be 
 * connected to the Everyware Cloud
 * 
 * and have the Everyware Software Framework with the VPN 
 * Remote Access bundle installed
 * 
 * and configured. The call returns the status of the VPN 
 * Connection of such device at the
 * 
 * end of the operation.
 */
router.get('/vpn/status/:clientId', (req, res, next) => {
  const options = {
  };

  v2.getV2VpnStatusByClientId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns the number of currently connected devices for the 
 * specified account.
 */
router.get('/accounts/:accountId/devices/count', (req, res, next) => {
  const options = {
  };

  v2.getV2AccountsByAccountIdDevicesCount(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Get the information for the specified Target Client ID in 
 * the specified Device Job
 */
router.get('/deviceJobs/:deviceJobId/targets/{targetClientId}', (req, res, next) => {
  const options = {
  };

  v2.getV2DeviceJobsByDeviceJobIdTargetsByTargetClientId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Uninstalls a package deployed on a device.
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL:&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -X DELETE -k 
 * https://api-sandbox.everyware-cloud.com/v2/devices/F0:DE:F1:C4:53:DB/packages/{packageName}
 */
router.delete('/devices/:clientId/packages/{packageName}', (req, res, next) => {
  const options = {
  };

  v2.deleteV2DevicesByClientIdPackagesByPackageName(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Returns an older configuration of a device from a given 
 * snapshot ID.
 * 
 * 
 * &lt;p&gt;
 * 
 * Example of query in CURL:&lt;br&gt;
 * 
 * curl --user &#x27;username:password&#x27; -k 
 * https://api-sandbox.everyware-cloud.com/v2/devices/{clientId}/snapshots/{snapshotId}.xml 
 * | xmllint --format -
 */
router.get('/devices/:clientId/snapshots/{snapshotId}', (req, res, next) => {
  const options = {
  };

  v2.getV2DevicesByClientIdSnapshotsBySnapshotId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Gets a specific HealthCheckLog by the given parameters
 */
router.get('/healthMonitors/:healthCheckReportId/healthCheckLogs/{healthCheckLogId}', (req, res, next) => {
  const options = {
  };

  v2.getV2HealthMonitorsByHealthCheckReportIdHealthCheckLogsByHealthCheckLogId(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Send a stop signal to the device job execution.
 * 
 * The stop signal will be captured only at next target, so is 
 * not possible to stop the device job during the current item 
 * processed.
 * 
 * 
 * &lt;br/&gt;&lt;br/&gt;
 * 
 * Be careful that stopping a device job can be harmful for the 
 * target devices
 */
router.post('/deviceJobs/:deviceJobId/executions/{deviceJobExecutionId}/sendStopSignal', (req, res, next) => {
  const options = {
  };

  v2.postV2DeviceJobsByDeviceJobIdExecutionsByDeviceJobExecutionIdSendStopSignal(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

/**
 * Send a stop signal to the provisioning execution.
 * 
 * The stop signal will be captured only at next step, so is 
 * not possible to stop the device job during the current step 
 * processing.
 * 
 * 
 * &lt;br/&gt;
 * 
 * &lt;br/&gt;
 * 
 * Be careful that stopping a provision request can be harmful 
 * for the target device.
 */
router.post('/provisionRequests/:provisionRequestId/executions/{ProvisionJobExecutionId}/sendStopSignal', (req, res, next) => {
  const options = {
  };

  v2.postV2ProvisionRequestsByProvisionRequestIdExecutionsByProvisionJobExecutionIdSendStopSignal(options, (err, data) => {
    if (err) {
    }

    res.status(200).send(data);
  });
});

module.exports = router;
