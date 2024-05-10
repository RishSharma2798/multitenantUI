export class TableService {
  //  API_BASE_URL =  'https://408-server.netlify.app/'
  getTableDetails = () => {
    return fetch(`http://localhost:4000/table/fetch`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw res.json();
      })
      .catch((e) => {
        console.error("getTableData", e);
        return [];
      });
  };
  deleteRecord = (Id) => {
    return fetch(`http://localhost:4000/table/create`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw res.json();
      })
      .catch((e) => {
        console.error("deleteRecord", e);
        return [];
      });
  };

  getRecord = async (data) => {
    console.log(data, "data inside the service");
    try {
      const response = await fetch(`http://localhost:4000/table/gettenant`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Serialize data to JSON
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw await response.json();
      }
    } catch (error) {
      console.error("createRecord", error);
      return []; // or handle the error accordingly
    }
  };

  createRecord = async (data) => {
    console.log(data, "data inside the service");
    try {
      const response = await fetch(`http://localhost:4000/table/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Serialize data to JSON
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw await response.json();
      }
    } catch (error) {
      console.error("createRecord", error);
      return []; // or handle the error accordingly
    }
  };
}
