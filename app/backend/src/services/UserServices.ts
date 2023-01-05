import { IServiceResponse, IUser } from "../interfaces/interfaces";
import User from "../models/user";

class UserServices {
  async create(user: IUser) :Promise<IServiceResponse> {
    const { username, email, password } = user;

    const emailExists = await User.findOne({ email });
    if(emailExists) return { status: 400, message: { error: `Email "${email}" already exists!`, email }};
    const usernameExists = await User.findOne({ username });
    if(usernameExists) return { status: 400, message: { error: `Username "${username}" already exists!`, username }};

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

  async findAll(): Promise<IServiceResponse> {
    try {
      const response = await User.find();
      return { status: 200, message: response };
    } catch (error) {
      return { status: 500, message: error };
    }
  }

  async search(searchParam): Promise<IServiceResponse> {
    try {      
      const response = await User.find({ email: searchParam });

      if(response.length === 0) {
        const response2 = await User.find({ username: searchParam });
        return { status: 200, message: response2 };
      }

      return { status: 200, message: response };

    } catch (error) {
      return { status: 500, message: error };
    }
  }

  async delete(username2Del, password2Del): Promise<IServiceResponse> {
    try {
      const response = await User.deleteOne({ username: username2Del, password: password2Del });
      // return { status: 200, message: { deleted: `User ${username2Del} as been deleted`} };
      if (response.deletedCount == 1) {
        return { status: 200, message: { deleted: `User ${username2Del} has been deleted`} };
      }
      return { status: 400, message: { error: "Invalid username or password"} };
    } catch (error) {
      return { status: 500, message: error };
    }
  }
}

export default new UserServices;
