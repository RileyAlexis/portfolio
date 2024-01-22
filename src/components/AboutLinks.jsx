import { Toolbar, IconButton, Typography, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';

function AboutLinks() {
  return (
    <Paper elevation={0} style={{ marginBottom: '20px' }}>
      <Toolbar>
        {/* GitHub Icon and Link */}
        <IconButton color="inherit" href="https://github.com/RileyAlexis" target="_blank">
          <GitHubIcon />
        </IconButton>

        {/* LinkedIn Icon and Link */}
        <IconButton color="inherit" href="https://www.linkedin.com/in/rileyalexisyoung" target="_blank">
          <LinkedInIcon />
        </IconButton>

        {/* Prime Digital Academy Link with School Icon */}

        <IconButton color="inherit" href="https://www.primeacademy.io" target="_blank">
          <SchoolIcon />
        </IconButton>
        {/* <Typography variant="h6">Prime Digital Academy</Typography> */}

      </Toolbar>

    </Paper>
  )
}

export default AboutLinks;