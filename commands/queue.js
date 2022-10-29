// Credits: zach.#0001

const { SlashCommandBuilder, EmbedBuilder, Message } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("queue")
        .setDescription("displays the current song queue")
        .addNumberOption((option) => option.setName("page").setDescription("Page number of the queue").setMinValue(1)),

    run: async ({ client, interaction }) => {
        const queue = client.player.getQueue(interaction.guild)
        if (!queue || !queue.playing) {
            return await interaction.editReply("There are no songs in the queue")
        }

        const totalPages = Math.ceil(queue.tracks.length / 10) || 1
        const page = (interaction.options.getNumber("page") || 1) - 1

        if (page > totalPages)
            return await interaction.editReply(`Error! There are only ${totalPages} pages of the queue`)

        const queueString = queue.tracks.slice(page * 10, page * 10 + 10).map((song, i) => {
            return `**${page * + i + 1}. \`[${song.duration}]\` ${song.title} -- <@${song.requestedBy.id}>`
        }).join("\n")

        const currentSong = queue.currentSong

        await interaction.editReply({
            embeds: [
                new EmbedBuilder()
                .setDescription(`**Currently Playing**\n` + 
                (currentSong ? `\`[${currentSong.duration}]\` ${currentSong.title} -- <@${currentSong.requestedBy.id}>` : "None") +
                `\n\n**Queue**\n${queueString}`
                )
                    .setFooter({
                        text: `Page ${page + 1} of ${totalPages}`
                    })
            ]
        })
    }
}