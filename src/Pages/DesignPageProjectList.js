import {
  ASoundOfThunder,
  AtlantisDeck,
  DanceFestival,
  JeanLucGodard,
  JungleSmash,
  ShakespeareInThePark, TheFlesh,
  UltraDesire, UntilItBleeds
} from "./DesignPageProjectView";

export const designPageProjectList = [
  {
    projectId: "ultra-desire",
    projectTitle: "ULTRA DESIRE / MAGIC DRINKS",
    projectCoverUrl: require("../Projects/magic-drink_ultra-desire/ultra-desire-cover.jpg").default,
    component: UltraDesire
  },
  {
    projectId: "atlantis-deck",
    projectTitle: "ATLANTIS DECK / PLAYING CARDS",
    projectCoverUrl: require("../Projects/playing-cards_atlantis-deck/atlantis-deck-cover.jpg").default,
    component: AtlantisDeck
  },
  {
    projectId: "jungle-smash",
    projectTitle: "JUNGLE SMASH / TEA & COFFEE BRANDING",
    projectCoverUrl: require("../Projects/tea&coffee-branding_jungle-smash/Cover-Gif.gif").default,
    component: JungleSmash
  },
  {
    projectId: "dance-festival",
    projectTitle: "DANCE FESTIVAL / POSTER",
    projectCoverUrl: require("../Projects/poster_dance-festival/dance-festival-cover.jpg").default,
    component: DanceFestival
  },
  {
    projectId: "jean-luc-godard",
    projectTitle: "JEAN-LUC GODARD / DVD",
    projectCoverUrl: require("../Projects/dvd_jean-luc-godard/jean-luc-cover.jpg").default,
    component: JeanLucGodard
  },
  {
    projectId: "shakespeare-in-the-park",
    projectTitle: "SHAKESPEARE IN THE PARK / POSTER",
    projectCoverUrl: require("../Projects/poster_shakespeare-in-the-park/shakespeare-cover.jpg").default,
    component: ShakespeareInThePark
  },
  {
    projectId: "until-it-bleeds",
    projectTitle: "UNTIL IT BLEEDS / ADDICTION BOOK",
    projectCoverUrl: require("../Projects/book_until-it-bleeds/Addiction_Book_Front-Cover.jpg").default,
    component: UntilItBleeds
  },
  {
    projectId: "a-sound-of-thunder",
    projectTitle: "A SOUND OF THUNDER / BOOK COVER",
    projectCoverUrl: require("../Projects/book-cover_a-sound-of-thunder/a-sound-of-thunder-cover.jpg").default,
    component: ASoundOfThunder
  },
  {
    projectId: "the-flesh",
    projectTitle: "THE FLESH / RECIPE BOOK",
    projectCoverUrl: require("../Projects/book_the-flesh/Recipe_Book_Back-Cover.jpg").default,
    component: TheFlesh
  },
]