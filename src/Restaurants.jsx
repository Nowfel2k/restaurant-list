import React, { useEffect } from "react";
import "./style.css";
import { Card, Accordion } from "react-bootstrap";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

export default function Restaurants({ rests_raw }) {
  const [{ rests }, dispatch] = useStateValue();

  useEffect(() => {
    if (rests_raw)
      dispatch({
        type: actionTypes.SET_RESTS,
        rests: rests_raw,
      });
  });

  if (rests) {
    console.log("a restaurant : ", rests[5]);
  }

  return (
    <div className="rests">
      {rests?.map((rest) => (
        <Accordion className="rests__item" as="button" defaultActiveKey="1">
          <Card>
            <div className="rest__body">
              <Card.Img
                className="rest__image"
                src={
                  rest?.restaurantImage
                    ? rest.restaurantImage
                    : "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
                }
              />

              <h4>{rest.restaurantName}</h4>
            </div>

            {rest.outlet.length > 1 && (
              <>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Outlets
                </Accordion.Toggle>
                {rest.outlet.map((outlet) => (
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      {outlet?.outletName}
                      {" - "}
                      Cost: {outlet?.displayCostForTwo}
                    </Card.Body>
                  </Accordion.Collapse>
                ))}
              </>
            )}

            {rest.outlet.length === 1 && (
              <>
                <Accordion as={Card.Header} eventKey="0">
                  Outlets
                </Accordion>
                {rest.outlet.map((outlet) => (
                  <Accordion eventKey="0">
                    <Card.Body>
                      {outlet?.outletName}
                      {" - "}
                      Cost: {outlet?.displayCostForTwo}
                    </Card.Body>
                  </Accordion>
                ))}
              </>
            )}
          </Card>
        </Accordion>
      ))}
    </div>
  );
}

/*
averageReview: "0.0"
costForTwo: 150
cuisines: ""
displayCostForTwo: "$150 for two"
displayTime: "30 mins"
isExculsive: null
isPureVeg: 0
outlet: Array[1]
restaurantId: 20
restaurantImage: "https://eatoo.uberdoo.com/foodapp/public/images/Restaurant/image80761.jpg"
restaurantName: "Biriyani Center"
time: 30
unit: "$"
*
*
*
*
*
*
Each outlet has 

averageReview: "0.0"
balanceAmount: "418.24"
costForTwo: 150
countryCode: "+91"
couponEnabledForRestaurant: "0"
cuisine: "[]"
cuisines: ""
displayCostForTwo: "$150 for two"
displayTime: "30 mins"
image: "Restaurant/image80761.jpg"
isServicable: 1
offers: Array[0]
outletId: 11
outletName: "Biriyani Center"
packingCharge: 0
restaurantId: 20
status: 1
time: 30
totalAmount: "418.24"

*/
