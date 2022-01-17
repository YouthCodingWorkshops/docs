---
sidebar_position: 4
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

# User Data

## User Endpoint

Allows your website to fetch basic user data.

:::tip
If you're building an API, the [lambda authorizer](verification.md#verification-lambda-function) passes this information to you.
:::

### GET `/user`

#### Response

| Name | Type | Description |
| :--: | :--: | :---------- |
| user_id | `int` | the user's discord uuid |
| username | `string` | the user's username |
| discriminator | `string` | the user's 4-digit discord tag |
| avatar | `string` | the user's avatar hash |
| email | `string` | the user's email |

<Tabs>
<TabItem value="js" label="JavaScript (Next.JS)">

```js
fetch();
```

</TabItem>
<TabItem value="py" label="Python (Lambda)">

```python
import json

def lambda_handler(event, context):
    username: str = event["context"]["username"]

    return {
        "statusCode": 200,
        "body": json.dumps({
            "username": username
        })
    }
```
</TabItem>
</Tabs>
