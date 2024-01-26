import { Paper, Typography, Box } from "@mui/material";


function AboutPara({ showPara }) {

    const paraStyle = {
        textAlign: 'left',
        marginBottom: '5px',
        textIndent: '2rem'
    }

    return (
        <Paper elevation={0}>
            {showPara === 'bio' &&
                <Box style={{ height: '500px', overflow: 'hidden' }}>
                    < Typography textAlign={"left"} variant="body1" style={paraStyle}>
                        Hello, I'm Riley Alexis, a new but capable web developer with a focus on full stack development. As a 2023 graduate of Prime Digital Academy I'm proficient in React, Redux, Node, Express and Postgres among numerous other web technologies. Please see the example applications on the right.

                        I am continually learning new technologies and creating new possibilities with my work and education. I was able to self host this site by running Ubuntu Server with an Nginx web host. This allows me to learn and deploy new technologies without being limited by a hosting services' choices.

                        I am currently available and looking for development work. Please see my resume on LinkedIn or peruse my Github.

                    </Typography>
                    < Typography textAlign={"left"} variant="body1" style={paraStyle}>
                        I am continually learning new technologies and creating new possibilities with my work and education.
                        Due to technological tenacity I was able to self host this site by spending two days learning Ubuntu Server,
                        Nginx, PM(a Node manager) and LetsEncrypt to create a 3rd party signed SSL certificate to enable https. Next up
                        is containers with Docker.  Sure I could have just paid to host on Heroku, AWS or another service but what fun
                        would that be?
                    </Typography>
                    < Typography textAlign={"left"} variant="body1" style={paraStyle}>
                        For additional information please see my LinkedIn profile and Github.
                    </Typography>
                </Box>
            }

            {
                showPara === 'pickles' &&
                <Box style={{ height: '500px', overflow: 'scroll' }}>
                    <Typography variant="body1" style={paraStyle}>
                        Robotic Pickle Farm is a an iterative, clicker or idle game where players grow cucumbers to make pickles.
                        The eventual goal is to make 2.8 trillion pickles (roughly equal to the global output of planet Earth).
                        Players can use pickles to purchase robots to automate the process and upgrades to make them run faster.
                    </Typography>
                    < Typography textAlign={"left"} variant="body1" style={paraStyle}>
                        I chose to build a game instead of a simple CRUD application to challenge myself to learn the ins and outs
                        of React and Redux. Robotic Pickle Farm must not only read and write data from a Postgres database, but
                        also must parse and run various calculations on that data up to twice per second. Given the exponential
                        numbers involved various performance enhancements were required in order to win the game without slowing
                        or crashing the player’s browser. One of the simplest was to reformat large numbers to
                        decimals(ex: 10,000,000,000 shows as 10.00 B), while another replaced objects with integers to reduce
                        the number of loops.
                    </Typography>
                    < Typography textAlign={"left"} variant="body1" style={paraStyle}>
                        The design of the game engine required careful syncing with the React and Redux cycle. Maintaining
                        the immutable state in Redux and a correctly updated DOM required copying state to mutable variables
                        in order to run calculations and then updating state after the cycle completes. In this way data dependent
                        on previous calculations maintains integrity.
                    </Typography>
                </Box>
            }

            {
                showPara === 'velvet' &&
                <Box style={{ height: '500px', overflow: 'scroll' }}>
                    <Typography textAlign={"left"} variant="body1" style={paraStyle}>
                        Velvet is an application created early in my education. I was curious about real time audio analysis using javascript and
                        visualizing the audio with HTML canvas. Velvet uses the Web Audio API and Meyda.js to analyze the spectral centroid, also
                        known as resonance or brightness, of a human voice. The intent of this application is to demonstrate a possible tool for speech
                        therapy that could be run entirely on the user's system. The application does not have a backend server, does not
                        save or transmit any data and doesn't even require an internet connection once downloaded. Velvet is designed with user privacy
                        and security in mind given the nature of the application.
                    </Typography>
                </Box>
            }


        </Paper >
    )
}

export default AboutPara;