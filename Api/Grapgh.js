import axios from "axios";

class GraphData {
  constructor() {
    this.result = [];
  }
  Inventory = (id) => {
    const res = async () => {
      const resp = await axios
        .post("/market/inventry",{
          regionID:id

        })

        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  Pending = (id) => {
    const res = async () => {
      const resp = await axios
        .post("/market/median_days_to_pending",{
          regionID:id

        })

        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  ListPrice = (id) => {
    const res = async () => {
      const resp = await axios
        .post("/market/median_list_vs_sale_price",{
          regionID:id

        })

        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  RentalAprecation = (id) => {
    // console.log('Rental Aprecation',id)
    const res = async () => {
      const resp = await axios
        .post("/market/rental_appreciation",{
          regionID:id

        })

        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  ShareListing = (id) => {
    console.log(id)
    const res = async () => {
      const resp = await axios
        .post("/market/share_price_cut",{
          regionID:id

        })

        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  PriceCut = (id) => {
    console.log(id)
    const res = async () => {
      const resp = await axios
        .post("/market/median_price_cut",{
          regionID:id

        })

        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  rental = (id) => {
    console.log(id)
    const res = async () => {
      const resp = await axios
        .post("/market/median_price_cut",{
          regionID:id

        })

        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };


    Return() {
      return this.result;
    }
  }
export default new GraphData();