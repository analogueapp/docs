---
id: primers
title: Primers
---

### `GET /primers`

Retrieve rich list of user created collections for a given user, aka `Primers`.

### Params

Parameter | Type | Required | Description
--------- | ---- | -------- | -----------
`username` | string | ✓ | Profile username
`tag` | string | | Filter by tag
`limit` | number | | Limit the results, default = 9
`offset` | number | | Pagination offset

### Example

```javascript
import axios from 'axios'

axios.get(`https://www.analogue.app/api/primers?username=${username}&tag=${tag}&limit=8&offset=0`)
.then((response) => {
  // do something
})
```

### Response

```json
{
  "data": [
    {
      "id": 443,
      "title": "< eng />",
      "slug": "eng-tnmw3x",
      "private": false,
      "description": "<div><!--block-->Joint collection of dope resources</div>",
      "updatedAt": "2020-05-10T02:28:01.862Z",
      "createdAt": "2020-02-05T19:06:00.000Z",
      "users": [
        {
          "id": 3,
          "name": "Joel Rojo",
          "username": "rojo",
          "bio": "🔥⚡️🚀"
        },
        {
          "id": 8503,
          "name": "Hugh A. Miles II",
          "username": "hugh",
          "bio": "exploring the dark side of the moon 🌑,  swimming in unchartered waters 🏊🏾‍♂️, \ndoing things that have never been done"
        }
      ],
      "logsCount": 36,
      "image": "https://ik.imagekit.io/analogue/tr:w-600,pr-true/ckTTujeYzMeNicrNoXQHvXLf",
      "placeholderImage": "https://ik.imagekit.io/analogue/tr:w-50,q-21,pr-true/ckTTujeYzMeNicrNoXQHvXLf",
      // if no image, pulls first 3 content items
      "contentCollection": [
        {
          "id": 16447,
          "title": "The Design Squiggle",
          "formDisplay": "article",
          "mediumDisplay": "thedesignsquiggle.com",
          "image": "https://ik.imagekit.io/analogue/tr:w-300,pr-true/31supAHgUhngNQjzqXfzFTeb",
          "placeholderImage": "https://ik.imagekit.io/analogue/tr:w-50,q-21,pr-true/31supAHgUhngNQjzqXfzFTeb"
        },
        {
          "id": 16465,
          "title": "A beginner's guide to Lottie - Introduction",
          "formDisplay": "article",
          "mediumDisplay": "lottiefiles.com",
          "image": "https://ik.imagekit.io/analogue/tr:w-300,pr-true/5Ej1zAJvpx6rLATh8yKBefJb",
          "placeholderImage": "https://ik.imagekit.io/analogue/tr:w-50,q-21,pr-true/5Ej1zAJvpx6rLATh8yKBefJb"
        },
        {
          "id": 16466,
          "title": "Another Lens - News Deeply x Airbnb.Design",
          "formDisplay": "article",
          "mediumDisplay": "airbnb.design",
          "image": "https://ik.imagekit.io/analogue/tr:w-300,pr-true/KGkGZocSbCppGS63TGcf5ksy",
          "placeholderImage": "https://ik.imagekit.io/analogue/tr:w-50,q-21,pr-true/KGkGZocSbCppGS63TGcf5ksy"
        }
      ]
    },
    ...,
  ]
}
```

### `GET /user/primers`

`Auth required` Retrieve a simple list of all user created collections for logged in user

### Params

Doesn't accept parameters. Must pass in auth `token`.

### Example

```javascript
import axios from 'axios'

axios.get('https://www.analogue.app/user/primers')
.then((response) => {
  // do something
})
```

### Response

```json
{
  "data": [
    {
      "id": 520,
      "title": "RJ <> JR",
      "slug": "rj-jr-b68y9k",
      "private": true,
      "updatedAt": "2020-05-11T23:03:11.282Z",
      "createdAt": "2020-03-22T02:21:00.000Z",
      "image": "https://ik.imagekit.io/analogue/tr:w-100,h-100,pr-true/WFHQxQKkUefPnAgPKi4eoMcg",
      "placeholderImage": "https://ik.imagekit.io/analogue/tr:w-50,h-50,q-21,pr-true/WFHQxQKkUefPnAgPKi4eoMcg",
      "shared": true
    },
    {
      "id": 900,
      "title": "Market Validation",
      "slug": "market-validation-ztmdvf",
      "private": true,
      "updatedAt": "2020-05-11T23:02:47.101Z",
      "createdAt": "2020-05-10T00:34:00.000Z",
      "image": "https://ik.imagekit.io/analogue/tr:w-100,h-100,pr-true/amcfd7s1jt4exrmHWoGFHkK7",
      "placeholderImage": "https://ik.imagekit.io/analogue/tr:w-50,h-50,q-21,pr-true/amcfd7s1jt4exrmHWoGFHkK7",
      "shared": true
    },
    ...
  ]
}
```
