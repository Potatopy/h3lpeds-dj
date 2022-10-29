// Credits: zach.#0001

const {
    SlashCommandBuilder,
    Embed
} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pause")
        .setDescription("Pauses the current track."),
    run: async ({ client, interaction }) => {
        const queue = client.player.qetQueue(interaction.guildId)

        if (!queue) return await interaction.editReply("There are no songs in the queue")

        queue.setPaused(true)
        await interaction.editReply("Paused! :pause_button:")
    },
}