import yargs from 'yargs'
let argv = yargs(process.argv.slice(2))
	.option('b', {
		alias: 'base',
		type: 'number',
		demandOption: true,
		default: 5,
		describe: 'Es la base de la tabla de multiplicar',
	})
	.option('l', { alias: 'list', type: 'boolean', default: false, describe: 'Imprime la tabla en consola' })
	.option('m', { alias: 'multiply', type: 'number', default: 10, describe: 'Escoge hasta cuando imprimir la tabla' })
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw 'No es un número'
		}
		return true
	}).argv

export { argv }
