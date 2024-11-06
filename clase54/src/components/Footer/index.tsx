import { Box, Container } from "@mui/material"

import styles from './footer.module.css'

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main' }} className={styles.root}>
      <Container
        maxWidth="xl"
      >
        Footer
      </Container>
    </Box>
  )
}

export default Footer
