const { Collection, Client, MessageEmbed } = require("discord.js");

class DiscordBot extends Client{
	constructor(props){
        super(props);

		this.command = new Collection();
		this.connection = new Map();

		this.botconfig = require("../botconfig")

		if( this.botconfig.Token === "")
			return new TypeError(
				"The botconfig.js is not filled out, please make sure nothing blank, otherwise the bot will not be work properly."
			)
    }
}