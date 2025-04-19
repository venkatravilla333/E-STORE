import mongoose from "mongoose"

let dbCon = async () => {
  try {
    let dbConnect = await mongoose.connect(process.env.dbURI)
    console.log(`Db Connected`)
    
  } catch (error) {
    console.log('Error', error.message)
    process.exit(1)
  }
}

export default dbCon