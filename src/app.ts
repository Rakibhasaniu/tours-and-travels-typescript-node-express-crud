import express, { Application, Request, Response }  from 'express'
const app: Application = express()

const router = express.Router();

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: "success", 
    message: "welcome to crud mastery"
  })
})
 router.use('api/v1/users', (req: Request, res: Response) => {
    const user = [
        {
            id: 1,
            name : 'rakib',
            email: 'rakib@gmail.com',
        },
        {
            id: 2,
            name : 'sakib',
            email: 'sakib@gmail.com',
        },
        {
            id: 1,
            name : 'rakib',
            email: 'rakib@gmail.com',
        },
        {
            id: 2,
            name : 'sakib',
            email: 'sakib@gmail.com',
        },
    ]
    res.status(200).json({
        status: "success", 
        message: "getting user",
        data : user
      })
 })
export default app;