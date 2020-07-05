const fs = require('fs')
const crypto = require('crypto')
const { randomId } = require('./users')

module.exports = class Repository {
    constructor(filename) {
        if (!filename) {
            throw new Error('create a respository requires a filename')
        }
        this.filename = filename
        try {
            fs.accessSync(this.filename)
        } catch (error) {
            fs.writeFileSync(this.filename, '[]')
        }
    }

    async getAll() {
        return JSON.parse(await fs.promises.readFile(this.filename, { encoding: 'utf8' }))
    }

    // helper function 
    async writeAll(record) {
        await fs.promises.writeFile(this.filename, JSON.stringify(record))
    }

    randomId() {
        return crypto.randomBytes(4).toString('hex')
    }

    async create(attrs) {
        // attrs === {email: '', password: ''}
        attrs.id = this.randomId()
        const records = await this.getAll()
        records.push(attrs)
        this.writeAll(records)
        return attrs
    }

    async getOne(id) {
        const record = await this.getAll()
        return record.find(record => record.id === id)
    }

    async delete(id) {
        const record = await this.getAll()
        const filteredRecords = record.filter(record => record.id !== id)
        await this.writeAll(filteredRecords)
    }

    async update(id, attrs) {
        const records = await this.getAll()
        const record = await records.find(record => record.id === id)

        if (!record) {
            throw new Error(`Reord with id ${id} not found`)
        }
        Object.assign(record, attrs)
        await this.writeAll(records)
    }

    async getOneBy(filters) {
        const records = await this.getAll()
        for (let record of records) {
            let found = true

            for (let key in filters) {
                if (record[key] !== filters[key]) {
                    found = false
                }
            }

            if (found) {
                return record
            }
        }
    }


}