const frames = [
    '(-°□°)-  ┬─┬',
    '(╯°□°)╯    ]',
    '(╯°□°)╯  ︵  ┻━┻',
    '(╯°□°)╯       [',
    '(╯°□°)╯           ┬─┬'
];

exports.run = async (bot, message) => {

    const msg = await message.channel.send('(\\\\°□°)\\\\  ┬─┬');
    for (const frame of frames) {
        setTimeout(() => { }, 4000);
        await msg.edit(frame);
    }
    return message;
}

exports.help = {
    name: "tableflip"
}
