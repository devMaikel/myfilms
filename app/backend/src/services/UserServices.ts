import { ICatchedError, IServiceResponse, IUser } from "../interfaces/interfaces";
import User from "../models/user";

class UserServices {
  async create(user: IUser) :Promise<IServiceResponse> {
    const { username, email, password } = user;

    const userExists = await User.findOne({ email });
    if(userExists) return { status: 400, message: { error: "User already exists!" }};

    try {
      const response = await User.create({
        username,
        email,
        password,
      });
      return { status: 200, message: response };

    } catch (error) {
      return { status: 500, message: error };
    }
  }

  async findAll() :Promise<IServiceResponse> {
    try {
      const response = await User.find();
      return { status: 200, message: response };
    } catch (error) {
      return { status: 500, error };
    }
  } 
}

export default new UserServices;
