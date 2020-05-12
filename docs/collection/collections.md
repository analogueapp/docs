---
id: collections
title: Collections
---

### `GET /profiles/{username}/collections`

Retrieve list of auto generated collections for a given user.

### Params

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
`username` | string | ✓ | Profile username

### Example

```javascript
import axios from 'axios'

axios.get(`https://analogue.app/api/profile/${username}/collections`)
.then((response) => {
  // do something
})
```

### Response

```json
{
  "data": [
    {
      "title": "links",
      "slug": "links",
      "logsCount": 389,
      // first 3 pieces of content in collection
      "contentCollection": [
        {
          "id": 16466,
          "title": "Another Lens - News Deeply x Airbnb.Design",
          "formDisplay": "article",
          "mediumDisplay": "airbnb.design",
          "image": "https://ik.imagekit.io/analogue/tr:w-300,pr-true/KGkGZocSbCppGS63TGcf5ksy",
          "placeholderImage": "https://ik.imagekit.io/analogue/tr:w-50,q-21,pr-true/KGkGZocSbCppGS63TGcf5ksy"
        },
        {
          "id": 16483,
          "title": "ᴅᴀᴠɪᴅ ᴘᴇʀᴇʟʟ ✌ on Twitter",
          "formDisplay": "article",
          "mediumDisplay": "twitter.com",
          "image": "https://ik.imagekit.io/analogue/tr:w-300,pr-true/fkTUf5HMskrp3AXQpzxexBRe",
          "placeholderImage": "https://ik.imagekit.io/analogue/tr:w-50,q-21,pr-true/fkTUf5HMskrp3AXQpzxexBRe"
        },
        {
          "id": 16456,
          "title": "Zero Trust Information",
          "formDisplay": "article",
          "mediumDisplay": "stratechery.com",
          "image": "https://ik.imagekit.io/analogue/tr:w-300,pr-true/Lx3Yg4CvCL4Gy7RUJn8XXwrA",
          "placeholderImage": "https://ik.imagekit.io/analogue/tr:w-50,q-21,pr-true/Lx3Yg4CvCL4Gy7RUJn8XXwrA"
        }
      ]
    },
    ...,
  ]
}
```
