import React, { useState, useEffect } from "react";
import axios from "axios";

import MUIDataTable from "mui-datatables";

export const ManageStudents = () => {
  const columns = ["Student name", "Phone", "Standard", "Division"];

  // let data = [
  //   ["Joe James", "Test Corp", "Yonkers", "NY"],
  //   ["John Walsh", "Test Corp", "Hartford", "CT"],
  //   ["Bob Herm", "Test Corp", "Tampa", "FL"],
  //   ["James Houston", "Test Corp", "Dallas", "TX"],
  // ];

  const [data, setData] = useState([]);

  const options = {
    filterType: "checkbox",
  };

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        process.env.REACT_APP_API_BASE_URL + "students"
      );
      
      setData(res.data.map((d) => {
          return [d.studentName, d.studentPhone, d.standard, d.div];
        }
      ))
    };
    getData();
  }, []);

  return (
    <MUIDataTable
      title={"Manage Students"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};
