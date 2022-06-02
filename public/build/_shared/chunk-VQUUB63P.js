import {
  Ce
} from "/build/_shared/chunk-S4SOBIAD.js";
import {
  init_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

// app/components/UIElements/media.js
init_react();
var sizes = {
  smalldevice: 320,
  mobile: 576,
  tablet: 768,
  desktop: 992,
  laptop: 1200,
  ipadPro: 1024,
  mdpiScreen: 1280
};
var media = Object.keys(sizes).reduce((queries, key) => {
  queries[key] = (...args) => Ce`
    @media (max-width: ${sizes[key] / 16}em) {
      ${Ce(...args)}
    }
  `;
  return queries;
}, {});
var media_default = media;

export {
  media_default
};
//# sourceMappingURL=/build/_shared/chunk-VQUUB63P.js.map
