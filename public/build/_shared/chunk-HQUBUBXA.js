import {
  init_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

// app/utils/server.query.jsx
init_react();
var getTrackingDetails = async (id2) => {
  const data = await fetch(`https://cfapi.pickrr.com/plugins/tracking/?tracking_id=${id2}`).then((res) => res.json());
  return data;
};

export {
  getTrackingDetails
};
//# sourceMappingURL=/build/_shared/chunk-HQUBUBXA.js.map
