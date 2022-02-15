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
  BlogComponent = () => {
    const res = async () => {
      const resp = await axios
        .get("/article")
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  BlogDetail = (id) => {
    const res = async () => {
      const resp = await axios
        .get(`/article/${id}`)
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  BlogCatagory = () => {
    const res = async () => {
      const resp = await axios
        .get('/category')
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  GetMerchantId = () => {
    const res = async () => {
      const resp = await axios
        .get('/config/paypal')
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  AllNotes = () => {
    const res = async () => {
      const resp = await axios
        .get('/article?keyword=name2')
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  NotesDetail = (id) => {
    const res = async () => {
      const resp = await axios
        .get(`/note/${id}`)
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  RentalGrowth = () => {
    const res = async () => {
      const resp = await axios
        .get('/stats/rentalGrowth?pageNumber=3')
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  Aprecation = () => {
    const res = async () => {
      const resp = await axios
        .get('/stats/appreciation?pageNumber=3')
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };

  EditGet = () => {
    const res = async () => {
      const resp = await axios
        .get('/users/profile')
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
}
export default new GetData();