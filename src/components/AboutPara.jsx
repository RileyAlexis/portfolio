import { Paper, Typography } from "@mui/material";


function AboutPara({ showPara }) {
    return (
        <Paper elevation={0}>
            {showPara === 'bio' &&
                < Typography textAlign={"center"} variant="body1" style={{ height: '500px', overflow: 'hidden' }}>
                    Hello, I'm Riley Alexis, a passionate web developer with a focus on full-stack development.
                    My expertise lies in crafting dynamic and responsive web applications using cutting-edge technologies. Proficient in React
                    for front-end development and Node.js with Express for back-end, I bring a comprehensive approach to building robust and seamless
                    digital experiences. I honed my skills at Prime Digital Academy, where I underwent intensive training and gained hands-on experience
                    in the latest web development practices. My commitment to creating user-friendly interfaces and leveraging the power of technology to
                    solve real-world problems drives my work. With a solid foundation in both front-end and back-end development, I am excited to contribute
                    my skills to innovative projects and collaborate with like-minded professionals.</Typography>
            }

            {
                showPara === 'pickles' &&
                <Typography textAlign={"center"} variant="body1" style={{ height: '500px', overflow: 'scroll' }}>

                    Robotic Pickle Farm is a an iterative, clicker or idle game where players grow cucumbers to make pickles. The eventual goal is to make 2.8 trillion pickles(roughly equal to the global output of planet Earth). Players can use pickles to purchase robots to automate the processes and upgrades to make them run faster.

                    I chose to build a game instead of a simple CRUD application to challenge myself to learn the ins and outs of React and Redux. Robotic Pickle Farm must not only read and write data from a Postgres database, but also must parse and run various calculations on that data up to twice per second. Given the exponential numbers involved various performance enhancements were required in order to win the game without slowing or crashing the player’s browser. One of the simplest was to reformat large numbers to decimals(ex: 10,000,000,000 shows as 10.00 B), while another replaced objects with integers to reduce the number of loops.

                    The design of the game engine required careful syncing with the React and Redux cycle. Maintaining the immutable state in Redux and a correctly updated DOM required copying state to mutable variables in order to run calculations and then updating state after the cycle completes. In this way data dependent on previous calculations maintains integrity.

                </Typography>
            }

            {
                showPara === 'velvet' &&
                <Typography textAlign={"center"} variant="body1" style={{ height: '500px', overflow: 'hidden' }}>
                    Velvet is an application created early in my education. I was curious about real time audio analysis using javascript and
                    visualizing the audio with HTML canvas. Velvet uses the Web Audio API and Meyda.js to analyze the spectral centroid, also
                    known as resonance or brightness, of a human voice. The intent of this application is to demonstrate a possible tool for speech
                    therapy that could be run entirely on the user's system. The application does not have a backend server, does not
                    save or transmit any data and doesn't even require an internet connection once downloaded. Velvet is designed with user privacy
                    and security in mind given the nature of the application.
                </Typography>
            }


        </Paper >
    )
}

export default AboutPara;