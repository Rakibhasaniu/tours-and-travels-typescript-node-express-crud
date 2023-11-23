import app from "./app"
import mongoose from'mongoose';

const port = 5000





async function server() {
  try{
    await mongoose.connect('mongodb://localhost:27017/travel');
    console.log('mong')

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  } catch(error){
    console.log(error)
  }
  
}



  server().catch(err => console.log(err));