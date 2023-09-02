import colors from 'colors'
import * as fs from 'node:fs'

const multiplicar = async (base = 5, listado = false, m = 10) => {
	try {
		let salida = ''
		let consoleOutput = ''

		for (let i = 1; i <= m; i++) {
			salida += `
    ${base} x ${i} = ${base * i}`
			consoleOutput += `
    ${colors.blue(base)} x ${colors.blue(i)} = ${colors.green(base * i)}`
		}
		if (listado) {
			console.log('====================')
			console.log(`      base = ${base}     `)
			console.log('====================')
			console.log(consoleOutput, '\n')
		}
		fs.writeFileSync(`tabla-${base}.txt`, salida)
		console.log(`Archivo tabla-${base}.txt creado con éxito`)
		return `tabla-${base}.txt`
	} catch (err) {
		throw err
	}
}

export { multiplicar }
