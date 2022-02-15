
## Text Box

Basic Usage:


<!-- import React from 'react';
import { TextBox } from 'docs';

export default () => <TextBox />; -->


Using schema

```tsx
import React from 'react';
import { TextBox } from 'docs';

const schema = {
  required: true,
  title: 'Text Box',
  placeHolder: 'Place holder',
  
}

export default () => <TextBox schema={schema} validateImmediately={true}/>;
```


<API></API>

