import { app } from './app'

const PORT = 8000

app.listen(PORT, () => { console.log(`Express service is accessible at http://localhost:${PORT}`) })
