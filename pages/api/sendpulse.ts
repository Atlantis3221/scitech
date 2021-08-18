import sendpulse from "sendpulse-api"

const sendpulseConfiguration = {
    'scienceLeadSchoolNextSet' : 1034450,
    'scienceLeadSchoolMyRegion' : 1099511,
    'managementSchoolNextSet' : 1099512,
    'managementSchoolMyRegion' : 1099513,
    'accelerationProgramNextSet' : 1099515,
    'onlineForumConsortium' : 1099518,
    'gameMethodsInEducation' : 1034439,
    'subscribeToNews': 1034453,
    'recruitingPriceDevelopEvent': 1101660,
    'becomeClient': 1236838,
    'scientificPracticalConference': 1248561,
    'strategicEducationalIntensive': 1298277,
    'developmentProjectZima': 1300210,
  }



  const API_USER_ID = '31c69b5b9917c5d5a934de76d335b25e'
  const API_SECRET = '756dd2ac089ec8e8f8786af4e25f9fbe'
  const TOKEN_STORAGE = '/tmp/'

  export const addToSendpulse = (doc) => {
    sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, function() {
        const id = doc?.project ? +sendpulseConfiguration[doc.project] : 1034453
        // sendpulse.listAddressBooks(console.log)
        if(doc.email) {
          sendpulse.addEmails(
            (data) => console.log('The result is:', data),
            Number(id),
            [doc.email]
          )
        }
      })
  }


export default sendpulseConfiguration  