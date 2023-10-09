import mongoose, { ConnectionOptions } from 'mongoose';

const connectToDB = async () => {
  try {
    const dbURI = 'mongodb+srv://sangammukherjee2022:sangammukherjee2023@cluster0.fca1inn.mongodb.net/';
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    };

    await mongoose.connect(dbURI, options);
  } catch (error) {
    console.error(error);
  }
};

export default connectToDB;
