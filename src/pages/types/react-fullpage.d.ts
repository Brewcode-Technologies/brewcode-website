declare module "@fullpage/react-fullpage" {
  import { ComponentType } from "react";

  interface ReactFullpageProps {
    anchors?: string[];
    navigation?: boolean;
    navigationTooltips?: string[];
  }

  const ReactFullpage: ComponentType<ReactFullpageProps>;

  export default ReactFullpage;
}
