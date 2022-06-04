import {EventPromotion, FortuneJasmine, GuerrillaCampaign, Maroon5Promotion} from "./AdvertisingPageProjectView";

export const advertisingPageProjectList = [
  {
    projectId: "event-promotion",
    projectTitle: "EVENT PROMOTION",
    projectCoverUrl: require("../Projects/event-promotion/Bike.jpg").default,
    component: EventPromotion
  },
  {
    projectId: "guerrilla-campaign",
    projectTitle: "GUERRILLA CAMPAIGN",
    projectCoverUrl: require("../Projects/guerrilla-campaign/Guerrilla-Cover.jpg").default,
    component: GuerrillaCampaign
  },
  {
    projectId: "fortune-jasmine",
    projectTitle: "FORTUNE JASMINE / ADIDAS",
    projectCoverUrl: require("../Projects/fortune-jasmine_adidas/FortuneJasmine-Cover.jpg").default,
    component: FortuneJasmine
  },
  {
    projectId: "maroon-5-promotion",
    projectTitle: "MAROON 5 PROMOTION",
    projectCoverUrl: require("../Projects/maroon-5-promotion/Maroon-5-Cover.gif").default,
    component: Maroon5Promotion
  },
]