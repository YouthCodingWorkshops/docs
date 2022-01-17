---
sidebar_position: 3
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# Verification

To grant users access to your application, you have two options:
1. Invoke the `/verify` endpoint (Website)
2. Use the lambda authorizer (API)

## Verification Endpoint

In order to grant access to your websites, check if the current user is authorized before loading the page components.

### GET `/verify`

#### Response

| Name | Type | Description |
| ---- | ---- | ----------- |
| authorized | `bool` | Whether the user is authorized or not |

:::note
The API takes banned and privileged users into account as well.
:::

<Tabs>
<TabItem value="js" label="JavaScript (Next.JS)">

*Example code taken from [here](https://www.mikealche.com/software-development/how-to-implement-authentication-in-next-js-without-third-party-libraries)*

```js title="src/contexts/auth.js"
import React, { createContext, useState, useContext, useEffect } from 'react'
import Router, { useRouter } from 'next/router'

const APP_BASE_URL = "https://learnycw.org" // Base URL of your app
const AUTH_BASE_URL = "https://auth.learnycw.org"

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        async function checkAPI() {
            const response = await fetch(`{AUTH_BASE_URL}/verify`);
            const response_json = await response.json();

            await setAuthorized(response_json.authorized);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthorized: authorized }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
```


```js title="pages/_app.js"
import { AuthProvider } from '../src/contexts/auth.js'

export default function App({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}
```

</TabItem>
<TabItem value="py" label="Python">

:::tip
For APIs, use the [Verification Lambda Authorizer](#verification-lambda-function) instead.
:::

</TabItem>
</Tabs>

## Verification Lambda Function

If building an API, you may import this function as a lambda authorizer in your API. API Gateway calls it before invoking your endpoint function, only letting your code execute if the user is authorized.

```bash title="Lambda Function ARN"
arn:aws:lambda:us-west-2:553449617248:function:auth-verify-prod
```

<Tabs>
<TabItem value="py" label="Python (CDK)">

```python {3,20}
from aws_cdk import (
    # ...
    aws_apigateway as apigw
    # ...
)

class # ...
    def __init__(...):

        authorizer = yes

        api = apigw.RestApi(
            # ...

        )
```
</TabItem>
</Tabs>

#### Lambda Authorizer Output

The lambda authorizer passes you a [User Data](user-data.md) JSON object, just in case your internal API needs to use any fields.

**This means your APIs should not be invoking the `/user` endpoint. That's reserved for websites.**

:::note
It is technically possible to use this authorizer function's output in your Amplify app by importing it (`amplify import function`), but that's not its intended purpose.
:::
