import { Box } from "@mui/material"

import styles from './footer.module.css'

function Footer() {
    return (
        <Box className={styles.root} sx={{ bgcolor: 'primary.main' }}>Footer</Box>
    )
}

export default Footer