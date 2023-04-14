// import mongoose, { ConnectOptions } from "mongoose";

// const connectDB = async () => {
//   if (mongoose.connections[0].readyState) {
//     console.log("Already connected");
//     return;
//   }

//   try {
//     const options = { useNewUrlParser: true, useUnifiedTopology: true };
//     await mongoose.connect(
//       process.env.MONGODB_URI ?? "",
//       options as ConnectOptions
//     );
//     console.log("Connected to database");
//   } catch (error) {
//     console.log("Error connection to database: ", error);
//   }
// };

// export default connectDB;
