import Password from "antd/lib/input/Password";
import axios from "axios";

class PostData {
  constructor() {
    this.result = [];
  }

  EditNotes = (data, id, settingErrors) => {
    const res = async () => {
      const resp = await axios
        .post("/users", {
          firstName: data.firstName,
          lastName: data.familyName,
          username: data.username,
          city: data.city,
          state: data.state,
          dob: data.dob,
          phone: data.phone,
          image: data.image,
          packageID: data.pkgId,
          email: data.email,
          password: data.password
        })

        .catch(function (error) {
          console.log(error.response)
          settingErrors(error.response.data.message);
        });
      return resp;
    };
    return res();
  };
    Return() {
      return this.result;
    }
  }
export default new PostData();