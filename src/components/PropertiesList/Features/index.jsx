import React from "react";
import { Icon, PageTitle, Table } from "../style";
import { Features, HomeFeture } from "./style";

const FeaturesSection = (val) => {
  console.log(val);
  return (
    <div>
      <Features>
        <PageTitle>Features</PageTitle>
        <Table>
          <tbody>
            {val.value.map((value, index) => {
              return (
                <tr key={index}>
                  <td>
                    <HomeFeture>
                      <Icon>{value.conditionIcon}</Icon>
                      <span>{value.condition}</span>
                    </HomeFeture>
                  </td>
                  <td>
                    <HomeFeture>
                      <Icon>{value.lawnIcon}</Icon>
                      <span>{value.lawn}</span>
                    </HomeFeture>
                  </td>
                  <td>
                    <HomeFeture>
                      <Icon>{value.refrigeratorIcon}</Icon>
                      <span>{value.refrigerator}</span>
                    </HomeFeture>
                  </td>
                  <td>
                    <HomeFeture>
                      <Icon>{value.washerIcon}</Icon>
                      <span>{value.washer}</span>
                    </HomeFeture>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Features>
    </div>
  );
};

export default FeaturesSection;
