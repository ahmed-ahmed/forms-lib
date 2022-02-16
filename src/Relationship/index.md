
## Relationship

Basic Usage:

```tsx
import React from 'react';
import { Relationship } from 'docs';

const props = {
  title: 'post',
  url: 'https://gorest.co.in/public/v2/posts',
  labelField: 'title',
  valueField: 'id',
  required: true
}
export default () => <>
<Relationship {...props}/>
</>
```

Group By

```tsx
import React from 'react';
import { Relationship } from 'docs';

const props = {
  title: 'post',
  url: 'https://gorest.co.in/public/v2/posts',
  labelField: 'title',
  valueField: 'id',
  groupBy: 'user_id'
}
export default () => <>
<Relationship {...props}/>
</>
```

<API></API>
