import React from "react";

import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

SuperTokens.init({
    appInfo: {
        // learn more about this on https://supertokens.com/docs/references/frontend-sdks/reference#sdk-configuration
        appName: "<YOUR_APP_NAME>",
        apiDomain: "<YOUR_API_DOMAIN>",
        websiteDomain: "<YOUR_WEBSITE_DOMAIN>",
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [EmailPassword.init(), Session.init()],
});
