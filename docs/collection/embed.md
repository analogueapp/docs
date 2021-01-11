---
id: embed
title: Collection Embed
---
You can embed a full collection into any website. Simply add the code snippet below. There are instructions and examples for both HTML and React.

### Embed URL

To preview any embed, just add `/embed` to the end of any collection URL.

```python
# Original collection URL
https://www.analogue.app/collection/readings-4vyfd8

# Embed URL
https://www.analogue.app/collection/readings-4vyfd8/embed
```

![Analogue collection embed example](https://analogue.onrender.com/img/embed.gif)

### Options

The default mode is dark and a 3 column grid, but we support light might and a 4 column grid via query parameters. Just add them to the end of the URL.

Parameter | Type | Value
--------- | ---- | -----------
`col` | number | `4`
`theme` | string | `light`


```python title="Embed URL with option parameters"
https://www.analogue.app/collection/readings-4vyfd8/embed?theme=light&col=4
```

### How to integrate into your site

You can copy/paste the embed code snippet below and add it to any HTML. Just make sure to change line 5 (highlighted) to your specific collection embed URL.

You can also change the styles in line 1 (highlighted) to change sizing such as width and height of the container. The iframe itself will expand to fit that parent container `div` on line 1.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="html"
  values={[
    { label: 'HTML', value: 'html', },
    { label: 'React', value: 'js', },
  ]
}>
<TabItem value="js">

```js {1,5} title="Embed Code for React"
<div style={{ position: "relative", margin: "0 auto", width: "100%", height: "100%", minHeight: "700px" }}>
  <iframe
    frameBorder="0"
    allowFullScreen
    src="https://www.analogue.app/collection/readings-4vyfd8/embed?theme=light&col=4"
    sandBox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
    style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%" }}
  ></iframe>
</div>
```

```js {7-15} title="Example React component with integrated Embed Code"
import React from 'react';

const PageComponent = () => (
  <div>
    <h1>Here are my book recommendations</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque turpis justo, lobortis a molestie nec, mattis sit amet tortor nulla in nisi justo vivamus elit felis fermentum a sodales eu.</p>
    <div style={{ position: "relative", margin: "0 auto", width: "100%", height: "100%", minHeight: "700px" }}>
      <iframe
        frameBorder="0"
        allowFullScreen
        src="https://www.analogue.app/collection/readings-4vyfd8/embed?theme=light&col=4"
        sandBox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
        style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%" }}
      ></iframe>
    </div>
  </div>
)

export default PageComponent;
```

</TabItem>

<TabItem value="html">

```html {1,5} title="Embed Code"
<div style="position: relative; margin: 0 auto; width: 100%; height: 100%; min-height: 700px;">
  <iframe
    frameborder="0"
    allowfullscreen
    src="https://www.analogue.app/collection/readings-4vyfd8/embed?theme=light&col=4"
    sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
    style="position: absolute; left: 0; top: 0; width: 100%; height: 100%;"
  ></iframe>
</div>
```

```html {7-15} title="Example HTML Page with integrated Embed Code"
<html>
  <title>Analogue Embed Example</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no, viewport-fit=cover">
  <body>
    <h1>Here are my book recommendations</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque turpis justo, lobortis a molestie nec, mattis sit amet tortor nulla in nisi justo vivamus elit felis fermentum a sodales eu.</p>
    <div style="position: relative; margin: 0 auto; width: 100%; height: 100%; min-height: 700px;">
      <iframe
        frameborder="0"
        allowfullscreen
        src="https://www.analogue.app/collection/readings-4vyfd8/embed?theme=light&col=4"
        sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin"
        style="position: absolute; left: 0; top: 0; width: 100%; height: 100%;"
      ></iframe>
    </div>
  </body>
</html>
```

</TabItem>
</Tabs>
