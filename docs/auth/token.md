---
id: token
title: Access Token
---

The API uses [JWT](https://jwt.io/introduction/) for authentication.

First, authorize using this endpoint to get an authorization token, which you can then pass through as an Authorization header for authenticated endpoints.

### `POST /user/login`

For obtaining access token.

### Params

Pass in a `user` param with the following key value pairs:

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
`email` | string | ✓ | User email
`password` | string | ✓ | User password

### Example

```javascript
import axios from 'axios'

axios.post(
  'https://analogue.app/api/users/login', // Endpoint
  {
    user: {
      email: '',
      password: ''
    }
  }, // Payload
).then((response) => {
  // Securely store token to use for authorization
  console.log(response.user.token)
})
```

### Response

```json
{
  "user": {
    "id": 1,
    "email": "user@analogue.app",
    "username": "analogue",
    "name": "Analogue App",
    "bio": "Share what inspires you.",
    "topics": [],
    "image": "direct_url_to_image",
    "token": "eyjhafdsf****", // AUTHORIZATION TOKEN
  }
}
```
