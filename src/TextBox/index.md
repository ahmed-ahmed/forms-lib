
## Text Box

Basic Usage:

Using schema

```tsx
import React from 'react';
import { TextBox } from 'docs';

const schema = {
  required: true,
  title: 'Text Box',
  placeHolder: 'Place holder',
  
}
export default () => <>
<TextBox {...schema} validateImmediately={true}/>
</>
```

Text area

```tsx
import React from 'react';
import { TextBox, TextBoxTypeEnum } from 'docs';

const schema = {
  required: true,
  title: 'Text Box',
  placeHolder: 'Place holder',
  type: TextBoxTypeEnum.textarea
  
}
export default () => <TextBox {...schema} validateImmediately={false}/>;
```

email
```tsx
import React from 'react';
import { TextBox, TextBoxTypeEnum } from 'docs';

const schema = {
  required: true,
  title: 'Text Box',
  placeHolder: 'Please enter email',
  type: TextBoxTypeEnum.email
  
}
export default () => <TextBox {...schema} validateImmediately={false}/>;
```

<API></API>

