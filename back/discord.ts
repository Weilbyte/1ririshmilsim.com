import { Webhook, MessageBuilder } from 'discord-webhook-node';

if (process.env.DISCORD_HOOK_URL == null) {
    console.log('[FATAL] Missing required environment variable DISCORD_HOOK_URL!')
    process.exit(1);
}
const hook = new Webhook(process.env.DISCORD_HOOK_URL);

function boolToString(boolboi) {
    if (boolboi == true) {
        return "Yes.";
    } else {
        return "No.";
    }
}

export async function sendToDiscord(discordHandle, timeZone, hasMic, isOfAge, characterName, path, experienced) {
    const embed = new MessageBuilder() 
        .setTitle('Enlistment Application')
        .addField('Discord', discordHandle)
        .addField('Time Zone', timeZone)
        .addField('Has microphone?', boolToString(hasMic))
        .addField('Over 13?', boolToString(isOfAge))
        .addField('Character Name', characterName)
        .addField('Preferred Path', path)
        .addField('Has experience with A3/ACE3?', boolToString(experienced))
        .setFooter(`${Math.floor(new Date().getTime() / 1000)}`)
        .setColor(15715328)
        .setDescription('Enlistment application from the website.')
        .setTimestamp();

    hook.send(embed);
}
