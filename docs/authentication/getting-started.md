---
sidebar_position: 1
---

# Getting Started

## Trying it out

Copy the following url into your browser:

```bash title="Example request"
https://auth.learnycw.org/redirect?redirect_uri=https://learnycw.org
```

After you sign into Discord, you'll be taken to the URL you specified above. In this case, `https://learnycw.org`.

:::caution
Note that only specific redirect urls can be used. They are enforced by Discord.
* https://learnycw.org
* https://play.learnycw.org

In addition, the session is only visible to `*.learnycw.org`.
:::

## How It Works

1. Navigate to `/redirect`
2. Redirect to the Discord OAuth endpoint to generate an OAuth code
3. Redirect to `/callback` to generate a session
4. Redirect to your app with a `SessionID` cookie

## Usage

```bash title="Base URL"
https://auth.learnycw.org
```

```bash title="Development Base URL"
https://auth.learnycw.org/trunk
```

:::danger
The development base URL is inherently unstable and not even guaranteed to be online.

**Never** use this in your application, whether in development or in production.
:::
