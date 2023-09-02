import { argv } from './config/yargs.js'
import { multiplicar } from './modules/multiplicar.js'
console.clear()

let base = argv.b
let listado = argv.l
let x = argv.m

multiplicar(base, listado, x)

// const [, , arg3 = 5] = process.argv
// const base = arg3
// multiplicar(base).then(nombre => {
// 	console.log('  El nombre del archivito es!!!: ', nombre)
// })
// console.log('semen').catch(err => console.log('ERRORSOTE', err))
