import React from "react";
import { PageTitle, Table } from "../style";
import { PropertyDetails } from "./style";

const PropertyDetailsSection = ({ value }) => {
  return (
    <div>
      <PropertyDetails>
        <PageTitle>Property Details</PageTitle>
        <Table>
          {value.map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>
                    <h4>
                      Property ID: <span>{item.propertyId}</span>
                    </h4>
                  </td>
                  <td>
                    <h4>
                      Bedrooms: <span>{item.Bedrooms}</span>
                    </h4>
                  </td>
                  <td>
                    <h4>
                      Property Type: <span>{item.PropertyType}</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>
                      Price:<span>${item.Price}</span>
                    </h4>
                  </td>
                  <td>
                    <h4>
                      Bathrooms: <span>{item.Bathrooms}</span>
                    </h4>
                  </td>
                  <td>
                    <h4>
                      Property Status: <span>{item.PropertyStatus}</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>
                      Property Size:
                      <span>{item.PropertySize} Sq Ft</span>
                    </h4>
                  </td>
                  <td>
                    <h4>
                      Garage: <span>{item.Garage}</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>
                      Year Bulit:<span>{item.YearBulit}</span>
                    </h4>
                  </td>
                  <td>
                    <h4>
                      Garage size: <span>{item.Garagesize} SqFt</span>
                    </h4>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </PropertyDetails>
    </div>
  );
};

export default PropertyDetailsSection;
