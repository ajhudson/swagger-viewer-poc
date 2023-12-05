import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const SwaggerViewerContainer = (): JSX.Element => {
  return <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />;
};

export default SwaggerViewerContainer;
