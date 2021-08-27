const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: "CFPAT-BA2OzzvVeu8dUfTnXNJN61NtgmSa5WgPolSpJ1sPH5s",
  })

  return contentfulClient
    .getSpace("3xvprbsu4asv")
    .then(space => space.getEnvironment("master"))
}