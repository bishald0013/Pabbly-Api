import mongoose from "mongoose";

const PabblyCampaignSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String},
    startDate: {type: String},
    endDate: {type: String},
    body: {type: String},
    emailbody: {type: String},
    subject: {type: String},
    gmt: {type: String},
})

const PabblyCampaignModel = mongoose.model('PabblyCampaign', PabblyCampaignSchema)
export default PabblyCampaignModel