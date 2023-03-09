import React from "react";

const Table = () => {
  return (
    <div className="table-container">
      <table id="personel">
        <tr>
          <th>
            Device Name
            <i style={{ marginLeft: "5px" }} class="fa-solid fa-caret-down"></i>
          </th>
          <th>
            Device Eu
            <i style={{ marginLeft: "5px" }} class="fa-solid fa-caret-down"></i>
          </th>
          <th>
            Error Source
            <i style={{ marginLeft: "5px" }} class="fa-solid fa-caret-down"></i>
          </th>
          <th>
            Priority
            <i style={{ marginLeft: "5px" }} class="fa-solid fa-caret-down"></i>
          </th>
          <th>
            Status
            <i style={{ marginLeft: "5px" }} class="fa-solid fa-caret-down"></i>
          </th>
          <th>
            Filter
            <i
              style={{ marginLeft: "5px" }}
              class="fa-solid fa-bars-filter"
            ></i>
          </th>
        </tr>
        <tr>
          <td>ABPHW4-01</td>
          <td>8CF957008338E2A</td>
          <td>DALI</td>
          <td>8</td>
          <td style={{ backgroundColor: "green", color: "white" ,borderRadius:"10px"}}>Received</td>
          <td>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </td>
        </tr>
        <tr>
          <td>ABPHW4-01</td>
          <td>8CF957008338E2A</td>
          <td>DALI</td>
          <td>8</td>
          <td style={{ backgroundColor: "yellow", color: "black" ,borderRadius:"10px"}}>Pending</td>
          <td>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </td>
        </tr>
        <tr>
          <td>ABPHW4-01</td>
          <td>8CF957008338E2A</td>
          <td>DALI</td>
          <td>8</td>
          <td style={{ backgroundColor: "red", color: "white" ,borderRadius:"10px"}}>Error</td>
          <td>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </td>
        </tr>
        <tr>
          <td>ABPHW4-01</td>
          <td>8CF957008338E2A</td>
          <td>DALI</td>
          <td>8</td>
          <td style={{ backgroundColor: "red", color: "white" , borderRadius:"10px"}}>Error</td>
          <td>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </td>
        </tr>
        <tr>
          <td>ABPHW4-01</td>
          <td>8CF957008338E2A</td>
          <td>DALI</td>
          <td>8</td>
          <td style={{ backgroundColor: "red", color: "white" ,borderRadius:"10px"}}>Error</td>
          <td>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
