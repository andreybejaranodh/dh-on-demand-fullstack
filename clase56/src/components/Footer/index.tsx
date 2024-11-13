import { AppBar,Container, Typography } from "@mui/material"

import styles from './footer.module.css'

function Footer() {
  return (
    <AppBar
      component="footer"
      position="static"
      className={styles.root}>
      <Container
        maxWidth="xl"
      >
        <Typography>Footer</Typography>
      </Container>
    </AppBar>
  )
}

export default Footer
