const mongoose = require('mongoose')

const University = mongoose.model('University', {
  alpha_two_code: String,
  name: String,
  country: String,
  "state-province": String || null,
  domains: Array,
  web_pages: Array,
})

export default University