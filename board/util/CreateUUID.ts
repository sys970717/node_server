import uuid4 from 'uuid/v4'

class CreateUUID {
    public tokens: string

    constructor() {
        var autoCreationData = this.autoCreate()
        this.tokens = this.splitAndRemakeUUID(autoCreationData)
    }

    public autoCreate() {
        let data = uuid4()
        return data
    }

    public splitAndRemakeUUID(autoData: string) {
        var uuidData = autoData.split('-')
        return uuidData[2] + uuidData[1] + uuidData[0] + uuidData[3] + uuidData[4]
    }
}

export default CreateUUID