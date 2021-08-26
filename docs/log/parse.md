---
id: parse
title: Parse
---

### `POST /contents/parse`

Create a new `Log` from a given URL. Returns existing `Log` if URL is already in your library.

### Params

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
`url` | string | ✓ | Url to parse and log

### Example

:::note Auth Required
Grab your token using the [Authorization endpoint](auth/token.md).
:::

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

axios.post(`https://analogue.com/api/contents/parse?url=${url_to_parse}`, {
    method: 'POST',
    headers: {
        authorization: `Token ${authToken}`,  
    },
    json: true
  })
.then((response) => {
  // do something with response
})
```

</TabItem>

<TabItem value="bash">

```bash
curl \
  -H "authorization: Token <authToken>" \
  -X POST \
  https://analogue.com/api/contents/parse?url=<url_to_parse>
```

</TabItem>
</Tabs>

### Response

```json
{
  "content": {
    "id": 1570,
    "title": "Zen and the Art of Motorcycle Maintenance: An Inquiry Into Values",
    "slug": "zen-and-the-art-of-motorcycle-maintenance-an-inquiry-into-values-mdew46",
    "form": "text",
    "excerpt": "A penetrating examination of how we live and how to live better",
    "formDisplay": "book",
    "formSlug": "book",
    "mediumDisplay": "book",
    "medium": "book",
    "origin": "amazon.com",
    "originUrl": "",
    "mediaUrl": "",
    "collection": "books",
    "image": "direct_url_to_image",
    "users": [],
    "creators": [],
    "logsCount": 9,
    "status": "pub",
    "publishedAt": "1974-05-01T07:00:00.000Z",
    "createdAt": "2018-11-09T04:14:00.000Z",
  },
  "log": {
    "id": 11643,
    "status": "pub",
    "reference": "",
    "referenceUrl": "",
    "sourceName": "",
    "knotsCount": 2,
    "knots": [],
    "user": {
      "id": 3,
      "name": "Joel Rojo",
      "username": "rojo",
      "image": "direct_url_to_image",
    },
    "sources": [],
    "postedAt": "2020-01-28T18:57:33.531Z",
  }
}
```
