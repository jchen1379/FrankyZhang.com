import {ProjectThumbnails} from "../Components/Layout/ProjectThumbnails";
import {ProjectThumbnail} from "../Components/Layout/ProjectThumbnail";
import React from "react";
import ScrollToTop from "../Utils/ScrollToTop";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ProjectNavBar} from "../Components/ProjectDisplay/ProjectNavBar";
import {getCurrentProject, getNextProject, getPrevProject} from "./DesignPage";
import {useLocation} from "react-router";
import {advertisingPageProjectList} from "./AdvertisingPageProjectList";

const urlBase = '/advertising';

const projectList = advertisingPageProjectList.map((project) => (project.projectId));

export function AdvertisingPage() {
  const location = useLocation();
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/advertising"/>
            {advertisingPageProjectList.map((project) => (
              <Route exact
                     path = {`${urlBase}/${project.projectId}`}
                     component={project.component} />
            ))}
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
        {advertisingPageProjectList.map((project) => (
          <ProjectThumbnail urlBase={urlBase}
                            projectName={project.projectId}
                            projectTitle={project.projectTitle}
                            projectCoverUrl={project.projectCoverUrl}/>
        ))}
      </ProjectThumbnails>
    </>
  );
}
