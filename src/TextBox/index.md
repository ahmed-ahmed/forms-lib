
## Text Box

Basic Usage:

```tsx
import React from 'react';
import { TextBox } from 'docs';

const props = {
  required: true,
  title: 'Text Box',
  placeHolder: 'Place holder',
  
}
export default () => <>
<TextBox {...props} validateImmediately={true}/>
</>
```

Text area

```tsx
import React from 'react';
import { TextBox, TextBoxTypeEnum } from 'docs';

const props = {
  required: true,
  title: 'Text Box',
  placeHolder: 'Place holder',
  type: TextBoxTypeEnum.textarea
  
}
export default () => <TextBox {...props} validateImmediately={false}/>;
```

email
```tsx
import React from 'react';
import { TextBox, TextBoxTypeEnum } from 'docs';

const props = {
  required: true,
  title: 'Text Box',
  placeHolder: 'Please enter email',
  type: TextBoxTypeEnum.email
  
}
export default () => <TextBox {...props} validateImmediately={false}/>;
```

<API></API>

