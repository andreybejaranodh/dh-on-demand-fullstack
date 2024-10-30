import { Container } from "@mui/material"

import styles from './footer.module.css'

function Footer() {
  return (
    <Container
      maxWidth="xl"
      component="footer"
      className={styles.root}
      sx={{ bgcolor: 'primary.main' }}
    >
            Footer
    </Container>
  )
}

export default Footer