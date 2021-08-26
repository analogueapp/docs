---
id: token
title: Authorization Token
---

The API uses [JWT](https://jwt.io/introduction/) for authentication.

First, authorize using this endpoint to get an authorization token, which you can then pass through as an Authorization header for authenticated endpoints.

:::note Token Expiration
Authorization tokens automatically expire in 60 days.
:::

### `POST /user/login`

Obtain an authorization token.

### Params

Pass in a `user` param with the following key value pairs:

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
`email` | string | ✓ | User email
`password` | string | ✓ | User password

### Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="bash"
  values={[
    { label: 'Shell', value: 'bash', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
<TabItem value="js">

```js
import axios from 'axios'

axios.post(
  'https://analogue.com/api/users/login', // Endpoint
  {
    user: {
      email: `${your_email}`,
      password: `${your_password}`
    }
  },
).then((response) => {
  // Securely store token to use for authorization
})
```

</TabItem>

<TabItem value="bash">

```bash
curl \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{"user": { "email" "<your_email>", "password": "<your_password>" }}' \
  https://analogue.com/api/users/login
```

</TabItem>
</Tabs>

### Response

```json {10}
{
  "user": {
    "id": 1,
    "email": "user@analogue.com",
    "username": "analogue",
    "name": "Analogue App",
    "bio": "Share what inspires you.",
    "topics": [],
    "image": "direct_url_to_image",
    "token": "eyjhafdsf****", // AUTHORIZATION TOKEN
  }
}
```

## Authorized Endpoints

For authorized endpoints, Analogue expects for the JWT `token` received from `Login` to be included in the header of the request.

<Tabs
  defaultValue="bash"
  values={[
    { label: 'Shell', value: 'bash', },
    { label: 'JavaScript', value: 'js', },
  ]
}>
<TabItem value="js">

```js
import axios from 'axios'

axios.post('https://analogue.com/api/<some_authed_endpoint>', payload, {
  headers: { authorization: `Token ${authToken}` }
})
```

</TabItem>

<TabItem value="bash">

```bash
curl \
  -H "authorization: Token <authToken>" \
  -X POST \
  https://analogue.com/api/<some_authed_endpoint>
```

</TabItem>
</Tabs>
