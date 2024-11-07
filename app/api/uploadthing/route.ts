import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

const handler = createRouteHandler({ router: ourFileRouter });
