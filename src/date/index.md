Date Picker

```tsx
import React from 'react';
import $ from 'jquery';
import 'daterangepicker'
import moment from "moment";

import { DatePicker } from 'docs';

const props = {
  required: true,
  title: 'Text Box',
  placeHolder: 'Place holder'
}
export default () => <DatePicker {...props}/>;
```

Format

```tsx
import React from 'react';
import $ from 'jquery';
import 'daterangepicker'
import moment from "moment";

import { DatePicker } from 'docs';

const props = {
  required: true,
  title: 'Date',
  placeHolder: 'Date Place holder',
  format: 'YYYY-MM-DD'
}
export default () => <DatePicker {...props}/>;
```

<API></API>
