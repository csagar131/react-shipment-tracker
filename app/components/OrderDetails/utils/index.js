export const CheckOrderStatus = (orderStatus) => {
  switch (orderStatus) {
    case "OP":
      return "Order Placed";
    case "OC":
      return "Order Cancelled";
    case "PP":
      return "Order Picked Up";
    case "SHP":
      return "Order Picked Up";
    case "OT" :
      return "Order In Transit"  
    case "NDR":
      return "Failed Attempt At Delivery";
    case "OO":
      return "Out For Delivery";
    case "DL":
      return "Order Delivered";
    case "RTO":
      return "Order Returned Back";
    default:
      return "-";
  }
};

export const Color = (orderStatus) => {
  switch (orderStatus) {
    case "OP" || "PP" || "SHP" || "OT":
      return "#38446D";
    case "NDR" || "RTO":
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