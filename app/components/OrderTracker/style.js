import { Timeline } from "antd";
import styled from "styled-components";

export const CustomTimeline = styled(Timeline)`
  .ant-timeline-item-tail {
    position: absolute;
    top: 10px;
    left: 4px;
    height: 100%;
    border-left: 2px solid #158a2a;
  }

  .ant-timeline-item-head {
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #158a2a;
    border: 2px solid transparent;
    border-radius: 100px;
  }

  & li:last-child  .ant-timeline-item-tail {
    border-left : none;
  }
`;
