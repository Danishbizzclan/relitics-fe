import axios from "axios";
import React from "react";
import { message } from "antd";
class GetData {
constructor(){
this.result=[];
}

AllPackeges = () => {
    const res = async () => {
      const resp = await axios
        .get("/package")
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
}
export default new GetData();