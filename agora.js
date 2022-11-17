const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('agora-access-token')
const appId = '1eba09c9b26c4d8bb7ce1bdd17fbbfb9';
const appCertificate = '58bc21c7adf54669934233151414895f';
const channelName = 'Channel';
const uid = 0;
const role = RtcRole.PUBLISHER;
const expirationTimeInSeconds = 3600
const currentTimestamp = Math.floor(Date.now() / 1000)
const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds
// Build token with uid
const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs);
console.log("Token with integer number Uid: " + tokenA);
