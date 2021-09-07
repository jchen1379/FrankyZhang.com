import {ProjectThumbnails} from "../Components/Layout/ProjectThumbnails";
import {ProjectThumbnail} from "../Components/Layout/ProjectThumbnail";
import React from "react";
import ScrollToTop from "../Utils/ScrollToTop";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ProjectDisplayContainer} from "../Components/ProjectDisplay/ProjectDisplayContainer";
import {
  ProjectDisplayDescription, ProjectDisplaySubtitleCenter,
  ProjectDisplaySubtitleLeft,
  ProjectDisplayTitle,
} from "../Components/Text";
import {
  DualLandscapeProjectImage,
  DualLandscapeWideProjectImage, DualPortraitProjectImage, DualPortraitProjectImageWithSubtitle,
  DualProjectImageLeftWideRightNarrow,
  FullSizeProjectImage, VideoContainer
} from "../Components/Image";
import {ProjectNavBar} from "../Components/ProjectDisplay/ProjectNavBar";
import {getCurrentProject, getNextProject, getPrevProject} from "./DesignPage";
import {useLocation} from "react-router";

const apiBase = '/advertising/';

const projectList = [
  "event-promotion",
  "guerrilla-campaign",
  "fortune-jasmine",
  "maroon-5-promotion"
];

export function AdvertisingPage() {
  const location = useLocation();
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/advertising"/>
            <Route exact path="/advertising/event-promotion" component={EventPromotion}/>
            <Route exact path="/advertising/guerrilla-campaign" component={GuerrillaCampaign}/>
            <Route exact path="/advertising/fortune-jasmine" component={FortuneJasmine}/>
            <Route exact path="/advertising/maroon-5-promotion" component={Maroon5Promotion}/>
          </Switch>
        </ScrollToTop>
      </Router>

      {location.pathname.includes('advertising/') && (
        <ProjectNavBar backTo="Advertising"
                       backToPath="/advertising"
                       prev={getPrevProject(getCurrentProject(location.pathname), projectList)}
                       next={getNextProject(getCurrentProject(location.pathname), projectList)}/>
      )}

      <ProjectThumbnails>
        <ProjectThumbnail
          apiBase={apiBase}
          projectName="event-promotion"
          projectTitle="EVENT PROMOTION"
          projectCoverUrl={require("../Projects/event-promotion/Bike.jpg").default}
        />
        <ProjectThumbnail
          apiBase={apiBase}
          projectName="guerrilla-campaign"
          projectTitle="GUERRILLA CAMPAIGN"
          projectCoverUrl={require("../Projects/guerrilla-campaign/guerrilla-cover.jpg").default}
        />
        <ProjectThumbnail
          apiBase={apiBase}
          projectName="fortune-jasmine"
          projectTitle="FORTUNE JASMINE / ADIDAS"
          projectCoverUrl={require("../Projects/fortune-jasmine_adidas/fortune-jasmine-cover.jpg").default}
        />
        <ProjectThumbnail
          apiBase={apiBase}
          projectName="maroon-5-promotion"
          projectTitle="MAROON 5 PROMOTION"
          projectCoverUrl={require("../Projects/maroon-5-promotion/maroon-5-cover.gif").default}
        />
      </ProjectThumbnails>
    </>
  );
}

const EventPromotion = () => {
  return (
    <ProjectDisplayContainer id="event-promotion">
      <ProjectDisplayTitle>
        EVENT PROMOTION
        <span style={{fontWeight: "normal"}}> - THE 2020 EARTH DAY</span>
      </ProjectDisplayTitle>
      <ProjectDisplayDescription>
        Earth Day is an annual event celebrated around the world on April 22 to demonstrate
        support for environmental protection. First celebrated in 1970. 2020 will mark 50
        years of Earth Day. The theme for Earth Day 2020 is climate action. The enormous
        challenge but also the vast opportunities of action on climate change have distinguished
        the issue as the most pressing topic for the 50th anniversary. Climate change represents
        the biggest challenge to the future of humanity and the life-support systems that make
        our world habitable. There’s so much you can do to help protect and restore our planet,
        from joining a cleanup or climates strike, or even less driving more bicycling.
      </ProjectDisplayDescription>
      <FullSizeProjectImage src={require("../Projects/event-promotion/Opening-1.jpg").default}/>
      <ProjectDisplaySubtitleLeft subtitle="EVENT POSTERS"/>
      <DualLandscapeProjectImage src1={require("../Projects/event-promotion/POSTER_MOCKUP_02.jpg").default}
                                 src2={require("../Projects/event-promotion/POSTER_MOCKUP_03.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/event-promotion/PGF93V1.jpg").default}/>
      <ProjectDisplaySubtitleLeft subtitle="RELATED PRODUCTS"/>
      <FullSizeProjectImage src={require("../Projects/event-promotion/Bike.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/event-promotion/Bag+Mockup.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/event-promotion/Exhibition_Mockup_1.jpg").default}/>
    </ProjectDisplayContainer>
  )
}

const GuerrillaCampaign = () => {
  return (
    <ProjectDisplayContainer id="guerrilla-campaign">
      <ProjectDisplayTitle>
        GUERRILLA CAMPAIGN
        <span style={{fontWeight: "normal"}}> - JUST STOP IT</span>
      </ProjectDisplayTitle>
      <ProjectDisplayDescription>
        The cause for Nike’s guerrilla marketing campaign will be the affects of Gun Control.
        The idea is telling people that using Gun is dangerous. If we don’t stop using guns,
        there will be more innocent deaths. Just stop using gun. There are series of packaging
        and poster designs for this campaign, and the slogan has changed from “Just do it” to
        “Just stop it.” This emphasize how Nike use its product to against gun.
      </ProjectDisplayDescription>
      <FullSizeProjectImage src={require("../Projects/guerrilla-campaign/Logo+page.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/guerrilla-campaign/Nike+Poster+1.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/guerrilla-campaign/Nike+Poster+2.jpg").default}/>
      <DualLandscapeWideProjectImage src1={require("../Projects/guerrilla-campaign/gun.jpg").default}
                                     src2={require("../Projects/guerrilla-campaign/guerrilla-cover.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/guerrilla-campaign/box+1.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/guerrilla-campaign/box+2.jpg").default}/>
      <DualProjectImageLeftWideRightNarrow src1={require("../Projects/guerrilla-campaign/bottle-mockup-1.jpg").default}
                                           src2={require("../Projects/guerrilla-campaign/hoodie+mockup.jpg").default}/>
    </ProjectDisplayContainer>
  )
}

const FortuneJasmine = () => {
  return (
    <ProjectDisplayContainer id="fortune-jasmine">
      <ProjectDisplayTitle>
        FORTUNE JASMINE / ADIDAS
      </ProjectDisplayTitle>
      <ProjectDisplayDescription>
        Fortune Jasmine is a lottery company. Jasmine represents good luck, so the lottery
        company named after Jasmine. To be able to follow the trend of modern fashion Fortune
        Jasmine also made a bold attempt. They teamed up with Adidas to launch a marketing campaign
        to win sneakers on the lottery.
      </ProjectDisplayDescription>
      <FullSizeProjectImage src={require("../Projects/fortune-jasmine_adidas/Adidas.jpg").default}/>
      <DualLandscapeProjectImage src1={require("../Projects/fortune-jasmine_adidas/MockUp2.jpg").default}
                                 src2={require("../Projects/fortune-jasmine_adidas/MockUp.jpg").default}/>
      <FullSizeProjectImage src={require("../Projects/fortune-jasmine_adidas/MockUp_3.jpg").default}/>
      <DualPortraitProjectImage src1={require("../Projects/fortune-jasmine_adidas/Mobile.jpg").default}
                                src2={require("../Projects/fortune-jasmine_adidas/Shoe_Box_1.jpg").default}/>
    </ProjectDisplayContainer>
  )
}

const Maroon5Promotion = () => {
  return (
    <ProjectDisplayContainer id="maroon-5-promotion">
      <ProjectDisplayTitle>
        MAROON 5 PROMOTION
        <span style={{fontWeight: "normal"}}> - HARDER TO BREATHE</span>
      </ProjectDisplayTitle>
      <ProjectDisplayDescription>
        Maroon 5 and Vitality Air have created a new way to sell tickets for concerts,
        which is to replace the old school tickets with Vitality oxygen can. Firstly,
        the oxygen is for breathing, it just matched with the song Harder to Breathe.
        Secondly, it is to let people feel the vitality of life through music and oxygen.
      </ProjectDisplayDescription>
      <VideoContainer videoUrl="https://www.youtube.com/embed/ei4RqrkHewo"/>
      <ProjectDisplaySubtitleCenter subtitle="FOUR DIFFERENT CONCERT CANS"/>
      <FullSizeProjectImage src={require("../Projects/maroon-5-promotion/All+Colors.jpg").default}/>
      <DualPortraitProjectImageWithSubtitle src1={require("../Projects/maroon-5-promotion/White.jpg").default}
                                            subtitle1="White Can"
                                            src2={require("../Projects/maroon-5-promotion/Black.jpg").default}
                                            subtitle2="Black Can"/>
      <DualPortraitProjectImageWithSubtitle src1={require("../Projects/maroon-5-promotion/Red.jpg").default}
                                            subtitle1="Red Can"
                                            src2={require("../Projects/maroon-5-promotion/Blue.jpg").default}
                                            subtitle2="Photo Can"/>
    </ProjectDisplayContainer>
  )
}