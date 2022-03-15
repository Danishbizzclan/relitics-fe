import axios from "axios";

class GraphData {
  constructor() {
    this.result = [];
  }
  Inventory = (id, year) => {
    const res = async () => {
      const resp = await axios
        .post("/market/inventry",{
          regionID:id,
          year: year

        })

        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  Pending = (id, year) => {
    const res = async () => {
      const resp = await axios
        .post("/market/median_days_to_pending",{
          regionID:id,
          year:year,

        })

        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  ListPrice = (id, year) => {
    console.log(year)
    const res = async () => {
      const resp = await axios
        .post("/market/median_list_vs_sale_price",{
          regionID:id,
          year: year

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
  ShareListing = (id, year) => {
    const res = async () => {
      const resp = await axios
        .post("/market/share_price_cut",{
          regionID:id,
          year: year

        })

        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  PriceCut = (id, yaer) => {
    const res = async () => {
      const resp = await axios
        .post("/market/median_price_cut",{
          regionID:id,
          year: yaer

        })

        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };
  MedianRental = (id, year) => {
    console.log(id)
    const res = async () => {
      const resp = await axios
        .post("/market/median_rental",{
          regionID:id,
          year:year

        })

        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };

  // data by year

    Return() {
      return this.result;
    }
  }
export default new GraphData();