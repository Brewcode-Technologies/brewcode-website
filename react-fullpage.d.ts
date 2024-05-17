declare module "@fullpage/react-fullpage" {
  import { ComponentType } from "react";

  interface ReactFullpageProps {
    scrollingSpeed?: number;
    navigation?: boolean;
    render: (props: { state: any; fullpageApi: any }) => JSX.Element;
  }

  const ReactFullpage: ComponentType<ReactFullpageProps>;

  export default ReactFullpage;
}
