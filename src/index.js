import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/api', employeesRoutes)

async function main() {
app.listen(3000)
console.log('Server running on port 3000')
}

main();