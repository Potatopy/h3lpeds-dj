// Credits: zach.#0001

const {
    SlashCommandBuilder,
    EmbedBuilder
} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("info")
        .setDescription("Info about the current track"),
    run: async ({ client, interaction }) => {
        const queue = client.player.getQueue(interaction.guildId)

        if (!queue) return await interaction.editReply("There are no songs in the queue")

        let bar = queue.createProgressBar({
            queue: false,
            length: 19
        })

        const song = queue.current

        await interaction.editReply({
            embeds: [new EmbedBuilder()
                .setThumbnail(song.thumbnail)
                .setDescription(`Currently Playing [${song.title}](${song.url})\n\n` + bar)
                .setFooter({ text: 'made by zach.#0001' })
            ],
        })
    },
}