#!/usr/bin/env node

const fs = require('fs')
const { lstat } = fs.promises
const chalk = require('chalk')
const path = require('path')

const targetDir = process.argv[2] || process.cwd()

fs.readdir(targetDir, async (err, filenames) => {
    if (err) {
        console.log(err)
        throw new Error(err)
    }
    const statPromises = filenames.map(filename => {
        return lstat(path.join(targetDir, filename))
    })

    const allStats = await Promise.all(statPromises)

    for (let stats of allStats) {
        const index = allStats.indexOf(stats)
        if (stats.isFile()) {
            console.log(filenames[index])
        }
        else {
            console.log(chalk.blue(filenames[index]))
        }
        // console.log(filenames[index], stats.isFile());
    }
})


// fs.readdir(process.cwd(), async (err, filenames) => {
//     if (err) {
//         console.log(err)
//         throw new Error(err)
//     }
//     for (let filename of filenames) {
//         try {
//             const stats = await lstat(filename)
//             console.log(filename, stats.isFile());
//         } catch (err) {
//             throw new Error(err)
//         }

//     }

// })

// const lstst = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, function (err, stats) {
//             if (err) {
//                 reject(err)
//             }
//             resolve(stats)
//         })
//     })
// } 