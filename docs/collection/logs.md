---
id: logs
title: Logs
---

### `GET /logs`

Retrieve a rich list of logs for a given `Collection` or `Primer`.

If auth token is passed and `username` is equal to the auth token username, then it will also return `private` logs.

### Collection Mediums

Mediums for auto generated `Collections` can be one of the following:

[]() | []()
-- | ----
🔗 | `links`
▶️ | `videos`
📚 | `books`
🎬 | `films`
🎙 | `podcasts`
🎧 | `music`
📺 | `tv`

### Params

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
`username` | string | ✓ | Profile username
`primer_slug` | string | | Slug of `Primer`
`medium` | string | | Filter logs by `Collection` medium (links, videos, etc)
`collection` | boolean | | If true, show `Collection` instead of `Primer`
`tag` | string | | Filter by tag
`limit` | number | | Limit the results, default = 9
`offset` | number | | Pagination offset



### Example

Retreiving all logs for a `Collection` specified by `medium`.

```javascript
import axios from 'axios'

axios.get(`logs?username=${username}&medium=${medium}&limit=8&offset=0&collection=true`)
.then((response) => {
  // do something
})
```

Retreiving all logs for a specific `Primer`.

```javascript
import axios from 'axios'

axios.get(`logs?username=${username}&primer_slug=${primer_slug}&limit=8&offset=0`)
.then((response) => {
  // do something
})
```

### Response

```json
{
  "data": [
    {
      "content": {
        "id": 16456,
        "title": "Zero Trust Information",
        "slug": "zero-trust-information-ddnqg6",
        "form": "text",
        "excerpt": "Zero Trust Networking is security with Internet assumptions; there is tremendous value if we apply the same approach to information.",
        "formDisplay": "article",
        "formSlug": "link",
        "mediumDisplay": "stratechery.com",
        "medium": "link",
        "origin": "stratechery.com",
        "originUrl": "https://stratechery.com/2020/zero-trust-information/",
        "mediaUrl": null,
        "imageUrl": "https://ik.imagekit.io/analogue/tr:w-100,pr-true/Lx3Yg4CvCL4Gy7RUJn8XXwrA",
        "audibleUrl": null,
        "ebookUrl": null,
        "spotifyUrl": null,
        "appleUrl": null,
        "paperbackUrl": null,
        "hardcoverUrl": null,
        "createdAt": "2020-05-08T20:20:38.372Z",
        "episodesCount": 0,
        "collection": "links",
        "image": "https://ik.imagekit.io/analogue/tr:w-400,pr-true/Lx3Yg4CvCL4Gy7RUJn8XXwrA",
        "placeholderImage": "https://ik.imagekit.io/analogue/tr:w-50,q-21,pr-true/Lx3Yg4CvCL4Gy7RUJn8XXwrA",
        "publishedAt": null,
        "users": [],
        "creators": [],
        "logsCount": 2,
        "status": "pub"
      },
      "log": {
        "id": 24277,
        "status": "pub",
        "reference": null,
        "referenceUrl": null,
        "sourceName": null,
        "postedAt": "2020-05-10T05:48:52.128Z",
        "isSeries": false,
        "knotsCount": 1,
        "knots": [
          {
            "id": 14769,
            "body": "Body of note",
            "private": false,
            "pinned": false,
            "likesCount": 0,
            "postedAt": "2020-05-10T05:48:52.128Z",
            "updatedAt": "2020-05-10T06:00:48.691Z",
            "liked": null,
            "user": {
              "id": 3,
              "name": "Joel Rojo",
              "username": "rojo",
              "diedAt": null,
              "image": "https://ik.imagekit.io/analogue/tr:w-50,h-50,pr-true/K6bompXH4TTbBA7M9xhdvMsm",
              "placeholderImage": "https://ik.imagekit.io/analogue/tr:w-25,h-25,q-21,pr-true/K6bompXH4TTbBA7M9xhdvMsm",
              "followBack": true
            },
            "responses": [],
            "totalResponses": 0,
            "log": {
              "id": 24277,
              "status": "pub",
              "sources": null,
              "citation": null
            }
          }
        ],
        "user": {
          "id": 3,
          "name": "Joel Rojo",
          "username": "rojo",
          "diedAt": null,
          "image": "https://ik.imagekit.io/analogue/tr:w-50,h-50,pr-true/K6bompXH4TTbBA7M9xhdvMsm",
          "placeholderImage": "https://ik.imagekit.io/analogue/tr:w-25,h-25,q-21,pr-true/K6bompXH4TTbBA7M9xhdvMsm",
          "followBack": true
        }
      }
    },
    ...,
  ]
}
```
