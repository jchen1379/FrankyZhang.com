import {ProjectDisplayContainer} from "../Components/ProjectDisplay/ProjectDisplayContainer";
import {
  ProjectDisplayDescription,
  ProjectDisplayFootNote,
  ProjectDisplayInfoRight,
  ProjectDisplayTitle
} from "../Components/Text";
import {
  DualLandscapeProjectImage,
  DualSquareProjectImage,
  FullSizeProjectImage,
  PosterStyleProjectImage
} from "../Components/Image";

export const UltraDesire = () => {
  return (
    <ProjectDisplayContainer id="ultra-desire">
      <ProjectDisplayTitle>ULTRA DESIRE</ProjectDisplayTitle>
      <ProjectDisplayDescription>
        Ultra Desire is a series of four packs of magic drink that is about profession.
        Ultra Desire includes Power, Knowledge, Focus and Creativity. Activate your energy
        with Power. Upgrade your mind with Knowledge. Spark your inspiration with Creativity.
        Stabilize your vigor with Focus. You should get one of the Ultra Desire because we
        have what you need. </ProjectDisplayDescription>
      <ProjectDisplayFootNote>This work was selected for the Creative Quarterly
        Competition.</ProjectDisplayFootNote>
      <FullSizeProjectImage src={require("../Projects/magic-drink_ultra-desire/FOUR+DRINKS.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/magic-drink_ultra-desire/Power+2.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/magic-drink_ultra-desire/Knowledge+2.jpg").default}/>
      <DualSquareProjectImage src1={require("../Projects/magic-drink_ultra-desire/Focus.jpg").default}
                              src2={require("../Projects/magic-drink_ultra-desire/Creativity.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/magic-drink_ultra-desire/Labels.jpg").default}/>
    </ProjectDisplayContainer>
  )
}

export const AtlantisDeck = () => {
  return (
    <ProjectDisplayContainer id="atlantis-deck">
      <ProjectDisplayTitle>ATLANTIS DECK</ProjectDisplayTitle>
      <ProjectDisplayDescription>
        Exploring the lost kingdom with Atlantis Deck. The rank of the card is starting from King Atlantis
        (King),
        Queen Pacific (Queen), General Jack (Jack), Lost Kingdom (Ace), Wizard Octopus (Joker). Having all the
        cards
        to explore the underwater lost kingdom.
      </ProjectDisplayDescription>
      <FullSizeProjectImage
        src={require("../Projects/playing-cards_atlantis-deck/Cards+Template-+big+cards+template.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/playing-cards_atlantis-deck/Case.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/playing-cards_atlantis-deck/KQ.jpg").default}/>
      <DualLandscapeProjectImage src1={require("../Projects/playing-cards_atlantis-deck/Jack.jpg").default}
                                 src2={require("../Projects/playing-cards_atlantis-deck/Ace+.jpg").default}/>
      <DualLandscapeProjectImage src1={require("../Projects/playing-cards_atlantis-deck/Joker+.jpg").default}
                                 src2={null}/>
    </ProjectDisplayContainer>
  )
}

export const JungleSmash = () => {
  return (
    <ProjectDisplayContainer id="jungle-smash">
      <ProjectDisplayTitle>TEA & COFFEE BRANDING</ProjectDisplayTitle>
      <ProjectDisplayDescription>
        Jungle Smash is a Tea and coffee shop. The theme is based on the jungle and animals to make tea, coffee,
        and sandwich. Every drink and sandwich will have its unique flavor. Each flavor is based on a specific
        animal.
        The flavor may be extraordinary and very weird, but it will taste good. It is not just a unique flavor
        but a
        specialized experience for every individual. That is why our promo line is “Jungle species come with
        jungle
        flavors”.
      </ProjectDisplayDescription>
      <FullSizeProjectImage
        src={require("../Projects/tea&coffee-branding_jungle-smash/Big+Branding+Template.jpg").default}/>
      <FullSizeProjectImage
        src={require("../Projects/tea&coffee-branding_jungle-smash/Free+Grid+Brand+Business+Card+Mockup.jpg").default}/>
      <DualLandscapeProjectImage
        src1={require("../Projects/tea&coffee-branding_jungle-smash/Coaster+1.jpg").default}
        src2={require("../Projects/tea&coffee-branding_jungle-smash/Coaster+2.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/tea&coffee-branding_jungle-smash/Letterhead.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/tea&coffee-branding_jungle-smash/Menu.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/tea&coffee-branding_jungle-smash/Cup2.jpg").default}/>
    </ProjectDisplayContainer>
  )
}

export const DanceFestival = () => {
  return (
    <ProjectDisplayContainer id="dance-festival">
      <ProjectDisplayInfoRight projectTitle="DANCE FESTIVAL"/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/poster_dance-festival/Dance+Poster.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/poster_dance-festival/Music+Poster.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const JeanLucGodard = () => {
  return (
    <ProjectDisplayContainer id="jean-luc-godard">
      <ProjectDisplayInfoRight projectTitle="JEAN-LUC GODARD / DVD"
                               projectDescription="A series of dads for movies directed by Jean-Luc Godard is
                                     created by using typography, shapes, lines and three colors. "/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/dvd_jean-luc-godard/ALPHAVILLE.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/dvd_jean-luc-godard/BREATHLESS.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/dvd_jean-luc-godard/PIERROT.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const ShakespeareInThePark = () => {
  return (
    <ProjectDisplayContainer id="shakespeare-in-the-park">
      <ProjectDisplayInfoRight projectTitle="PLAY POSTER"
                               projectDescription="This is a Poster for the City of New York to promote
                                     the Shakespeare in the Park in the Summer 2018. There will be two plays
                                     taking place, Othello and Twelfth."/>
      <PosterStyleProjectImage>
        <FullSizeProjectImage
          src={require("../Projects/poster_shakespeare-in-the-park/Shakespeare+Poster.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const UntilItBleeds = () => {
  return (
    <ProjectDisplayContainer id="until-it-bleeds">
      <ProjectDisplayInfoRight projectTitle="UNTIL IT BLEEDS / ADDICTION BOOK">
        <ProjectDisplayDescription>“Until It Bleeds” is an addiction book that will be narrated in the third
          person. It is a story about a guy who is very addicted to playing his new guitar. Also, how he plays
          the guitar.
        </ProjectDisplayDescription>
        <ProjectDisplayDescription>A guy who is called Mr Paper-bag, he loves guitar but just has no talent at
          all. Even though he never stops playing it. This makes him very annoying because the sound he makes
          is disgusting.
        </ProjectDisplayDescription>
        <ProjectDisplayDescription>The story starts as follows. One day Mr Paper-bag was walking in a guitar
          shop. He picked a guitar and brought it back home. However, he did not know how to play it. This
          won’t stop Mr Paper-bag, because he has been deeply attracted to this guitar. He’ll play it even he
          doesn’t know how to play it. Mr Paper-bag’s addiction began on this day.
        </ProjectDisplayDescription>
        <ProjectDisplayDescription>Mr Paper-bag thinks that as long as he keeps working hard on the guitar, one
          day he will become a master. So he began to play day and night. Until he bled his own fingers.
        </ProjectDisplayDescription>
      </ProjectDisplayInfoRight>
      <PosterStyleProjectImage>
        <FullSizeProjectImage
          src={require("../Projects/book_until-it-bleeds/template+11x17+page-7x7+book.jpg").default}/>
        <FullSizeProjectImage
          src={require("../Projects/book_until-it-bleeds/template+11x17+page-7x7+book2.jpg").default}/>
        <FullSizeProjectImage
          src={require("../Projects/book_until-it-bleeds/template+11x17+page-7x7+book3.jpg").default}/>
        <FullSizeProjectImage
          src={require("../Projects/book_until-it-bleeds/template+11x17+page-7x7+book4.jpg").default}/>
        <FullSizeProjectImage
          src={require("../Projects/book_until-it-bleeds/template+11x17+page-7x7+book5.jpg").default}/>
        <FullSizeProjectImage
          src={require("../Projects/book_until-it-bleeds/template+11x17+page-7x7+book6.jpg").default}/>
        <FullSizeProjectImage
          src={require("../Projects/book_until-it-bleeds/Addiction_Book_Front-Cover2.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const ASoundOfThunder = () => {
  return (
    <ProjectDisplayContainer id="a-sound-of-thunder">
      <ProjectDisplayInfoRight projectTitle="A SOUND OF THUNDER">
        <ProjectDisplayDescription>
          This is a book cover for the book “<i>A Sound Of Thunder</i>”
          by Ray Bradbury is created by using typography and three colors.
        </ProjectDisplayDescription>
      </ProjectDisplayInfoRight>
      <PosterStyleProjectImage>
        <FullSizeProjectImage
          src={require("../Projects/book-cover_a-sound-of-thunder/a-sound-of-thunder.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}

export const TheFlesh = () => {
  return (
    <ProjectDisplayContainer id="the-flesh">
      <ProjectDisplayInfoRight projectTitle="THE FLESH / RECIPE BOOK">
        <ProjectDisplayDescription>“The Flesh” is a potion recipe book. There are three potions and each potion
          will have its superpower. So this recipe book will be a superpower potion book.
        </ProjectDisplayDescription>
        <ProjectDisplayDescription>The First Potion is flying, whoever drinks this potion will able to fly.
        </ProjectDisplayDescription>
        <ProjectDisplayDescription>The second Potion is the clairvoyance potion, whoever drinks this potion will
          see thousands of miles with his/her eyes.
        </ProjectDisplayDescription>
        <ProjectDisplayDescription>The third potion will be the immortal potion, whoever drinks this potion will
          have the power of immortality.
        </ProjectDisplayDescription>
      </ProjectDisplayInfoRight>
      <PosterStyleProjectImage>
        <FullSizeProjectImage src={require("../Projects/book_the-flesh/Recipe+7x7+book.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/book_the-flesh/Recipe+7x7+book2.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/book_the-flesh/Recipe+7x7+book3.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/book_the-flesh/Recipe+7x7+book4.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/book_the-flesh/Recipe_Book_Back-Cover2.jpg").default}/>
        <FullSizeProjectImage src={require("../Projects/book_the-flesh/Recipe_Book_Front-Cover.jpg").default}/>
      </PosterStyleProjectImage>
    </ProjectDisplayContainer>
  )
}