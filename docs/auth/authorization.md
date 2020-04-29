---
id: authorization
title: Authorization
---

For authorized endpoints, Analogue expects for the JWT `token` received from `Login` to be included in all requests to the server in a header that looks like the following:

`authorization: Token ${token_from_login_endpoint}`

### Example

```javascript
import axios from 'axios'

axios.post('https://analogue.app/api/authed/endpoint', payload, {
  headers: { authorization: `Token ${token_from_login_endpoint}` }
})
```
