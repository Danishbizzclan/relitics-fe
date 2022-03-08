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


    Return() {
      return this.result;
    }
  }
export default new GraphData();