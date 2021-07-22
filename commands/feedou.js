let i = 0;

module.exports = {
	name: 'feedou',
	description: 'Informe dois números (maior e menor, nesta ordem) que calcularei um valor inteiro aleatório entre eles.',
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`Você não disse valores suficientes, ${message.author}! Busque a ajuda necessária no ".help"`);
		} 

        i++

        var name = args[0]

        message.channel.send(`${name} já feedou ${i} vezes.`);
	},
};