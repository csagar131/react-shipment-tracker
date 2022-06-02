import {
  media_default
} from "/build/_shared/chunk-VQUUB63P.js";
import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-S4SOBIAD.js";
import {
  init_react
} from "/build/_shared/chunk-5OQ3QANQ.js";

// app/routes/tracking/style.js
init_react();
var Container = styled_components_browser_esm_default.div`
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;
`;
var MainContainer = styled_components_browser_esm_default.div`
  background: #edf0f9;
  border-radius : 10px;
  width: 100%;
  padding: 16px 24px;
  margin : 8px 0;
  .input-button-containe {
    display: flex;
  }
  .order-info-container {
    margin-top: 30px;
  }

  ${media_default.mobile`
    padding: 4px 8px;
  `}
`;
var Title = styled_components_browser_esm_default.p`
  font-style: normal;
  font-size: 30px;
  line-height: 37px;
  color: #38446d;
  ${media_default.mobile`
  font-size: 18px;

`};
`;

export {
  Container,
  MainContainer,
  Title
};
//# sourceMappingURL=/build/_shared/chunk-RKNDT5IN.js.map
