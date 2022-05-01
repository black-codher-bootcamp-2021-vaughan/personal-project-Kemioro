const mongoose = require("mongoose");
const { Schema } = mongoose;


const profileSchema = new Schema({
  first_name: String,
  last_name: String,
  email_address: String,
  created_date: Number,
  status : String ,
  score : {
      email_sent : Number,
      email_opened : Number,
      email_closed : Number,
      clicked_link : Number,
      submitted_data : Number,
      total_time : Number
}
});

mongoose.model("profiles", profileSchema);
