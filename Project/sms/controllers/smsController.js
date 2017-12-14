class smsController {
    constructor() {
        this.smsRespository = require('../models/smsRepository')
    }



    async initDb (req, res) {
        await this.smsRespository.initDb()
        if (res) {
            res.status(200).send('done')
        }
    }
}

module.exports = new smsController()