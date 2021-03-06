import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
// import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

// import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/pillsStyle";

import { Money, Book } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function DetailsSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div style={{textAlign:'center',}}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
             <h2 className={classes.title}> Details</h2>
        </GridItem>
      </GridContainer>
      </div>
      <div className={classes.container}>
        <div id="navigation-pills">
         
      

          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              {window.innerWidth>660?
              <NavPills
                color="danger"
                horizontal={{
                  tabsGrid: { xs: 2, sm: 2, md: 2 },
                  contentGrid: { xs: 10, sm: 10, md: 10 }
                }}
                tabs={[
                  {
                    tabButton: "Theme",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Rules",
                    tabIcon: Book,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  // {
                  //   tabButton: "Prizes",
                  //   tabIcon: Money,
                  //   tabContent: (
                  //     <span>
                  //       <p>
                  //         Efficiently unleash cross-media information without
                  //         cross-media value. Quickly maximize timely
                  //         deliverables for real-time schemas.
                  //       </p>
                  //       <br />
                  //       <p>
                  //         Dramatically maintain clicks-and-mortar solutions
                  //         without functional solutions. Dramatically visualize
                  //         customer directed convergence without revolutionary
                  //         ROI. Collaboratively administrate empowered markets
                  //         via plug-and-play networks. Dynamically procrastinate
                  //         B2C users after installed base benefits.
                  //       </p>
                  //     </span>
                  //   )
                  // }
                ]}
              />:
              <p>
                Theme & Rules
              </p>
              }

            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
