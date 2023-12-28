import styles from './tiles.module.scss'; // Update the path as needed
import { CardTitle, CardHeader, CardContent, Card } from "@mui/material";

export default function Tiles() {
  return (
    <main className={styles.tilesContainer}>
      <Card className={styles.card}>
        <CardHeader className={styles.cardHeader}>
          <CardTitle>Software Engineer</CardTitle>
        </CardHeader>
        <CardContent className={styles.cardContent}>
          Design, code, test, and debug software while developing new functionality, and enhancing existing
          functionality, in order to satisfy customer requirements, both internal and external.
        </CardContent>
      </Card>
      {/* Repeat for other cards */}
    </main>
  )
}
