---
sidebar_position: 2
---

# Sessions

## Redirect Endpoint

Discord OAuth URLs are terribly long and change per application. Your application can redirect to this endpoint to have the user end up at the correct login link.

### GET `/redirect`

#### Query Strings

| Name | Type | Description | Required |
| :--: | :--: | :---------- | :------: |
| redirect_uri | `string` | your app's URL | true |

:::tip
This was the same endpoint you saw in [Getting Started](getting-started.md)!
:::

## Callback Endpoint

Once Discord generates an OAuth code, the callback endpoint generates a YCW session ID. After that, it redirects to your application and passes you a `SessionID` cookie.

### GET `/callback`

:::note
**This is an internal endpoint.** It gets automatically invoked by Discord OAuth.
:::

#### Query Strings

| Name | Type | Description | Required |
| :--: | :--: | :---------- | :------: |
| redirect_uri | `string` | your app's URL | true |
| code | `string` | discord OAuth code | true |
| health_check | `bool` | generate a fake session | false |

:::tip
Health checks are used for two purposes:
1. Example queries
2. API uptime/latency monitoring

They only generate dummy session IDs (which do not persist).
:::

```bash title="Example Health Check Query"
https://auth.learnycw.org/callback?health_check=true&code=-1&redirect_uri=https://learnycw.org
```

:::caution
When doing health checks/example queries, the `code` field is still required, but it's value is ignored by the API.
:::

## Logout Endpoint

Invalidate the current user's session id.

### GET `/logout`

#### Response

No payload.

## Next Steps

Nothing! The cookie you recieve will be automatically sent in each request you make, so just start making them.
