import mongoose from "mongoose";

const types = {type:String}

const attendeeSchema = mongoose.Schema({
    a_c_id: {types},
    a_email: {types},
    a_first_name: {types},
    a_last_name: {types},
    a_camp_url: {types},
    a_username: {types},
    a_password: {types},
    a_created_by: {types}
})

const AttendeeModel = mongoose.model('Attendee', attendeeSchema)
export default AttendeeModel