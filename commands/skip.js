// Credits: zach.#0001

const {
    SlashCommandBuilder,
    Embed
} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("skip")
        .setDescription("Skips the current track."),
    run: async ({ client, interaction }) => {
        const queue = client.player.qetQueue(interaction.guildId)

        if (!queue) return await interaction.editReply("There are no songs in the queue")

        const currentSong = queue.current

        queue.skip()
        await interaction.editReply({
            embeds: [
                new Embed().setDescription(`${currentSong.title} has been skipped!`).setThumbnail(currentSong.thumbnail)
            ]
        })
    },
}