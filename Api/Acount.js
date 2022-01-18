import axios from "axios";

class Acount {
  constructor() {
    this.result = [];
  }

  Registeration = (data, settingErrors) => {
    const res = async () => {
      const resp = await axios
        .post("/users", {
            firstName:data.firstName,
            lastName:data.familyName,
            username:data.username,
            city:data.city,
            state:data.state,
            dob:data.dob,
            phone:data.phone,
            image:data.image,
            email:data.email,
            password:data.password
        })

        .catch(function (error) {
          settingErrors(error.response.data.message);
        });
      return resp;
    };
    return res();
  };
  Login = (username, password, setError) => {
    const res = async () => {
      
      const resp = await axios
        .post("/users/login", {
   
            email:username,
            password:password
        })

        .catch(function (error) {
          console.log(error.response.data.message);
          setError(error.response.data.message);
        });
      return resp;
    };
    return res();
  };
  Contact = (userInput, setError) => {
    console.log({userInput})
    const res = async () => {
      const resp = await axios
        .post("/contacts", {
          firstName:userInput.firstName, 
          lastName:userInput.lastName, 
          phone:"0323233323", 
          email:userInput.email, 
          subject:userInput.subject,
           message:userInput.message
        })

        .catch(function (error) {
          console.log(error.response.data.message);
          setError(error.response.data.message);
        });
      return resp;
    };
    return res();
  };



  Return() {
    return this.result;
  }
}
export default new Acount();