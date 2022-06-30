export const CheckOrderStatus = (type) => {
  switch (type) {
    case "OP":
      return "Order Received";
    case "OC":
      return "Order Cancelled";
    case "PP" || "SHP":
      return "Order Dispatched";
    case "OT":
      return "Order in Transit";
    case "NDR":
      return "Failed Attempt at Delivery";
    case "OO":
      return "Order Out for Delivery";
    case "DL":
      return "Order Delivered";
    case "RTO" || "RTD":
      return "Order Returned";
    default:
      return "Order Initiated";
  }
};

export const Color = (orderStatus) => {
  switch (orderStatus) {
    case "OP" || "OT":
      return "#38446D";
    case "NDR" || "RTO" || "RTD":
      return "#EF7E00";
    case "DL":
      return "#3B9A00";
    case "OC":
      return "#FA5357";
    default:
      return "#38446D";
  }
};


export const checkTrackingStatus = (status) => {
  switch (status){
    case "OP": 
      return true;
    case "OC":
      return true;
    case "PP":
      return true;
    case "SHP":
      return true;
    case "OT":
      return true;
    case "OO":
      return true;
    case "DL":
      return true;
    case "NDR":
      return true;
    case "RTO":
      return true;
    default:
      return false; 
  }
}