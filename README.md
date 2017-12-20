# RxClipboard

Clipboard reactive to changes for Node.

Detects when the clipboard changes, regardless of the type of content. It does this by wrapping pbcopy / pbpaste (for OSX), xclip (for Linux and OpenBSD), and clip (for Windows).

> Require Node v7 o later

## Install

**npm**
```bash
npm i rxclipboard -S
```

**yarn**
```bash
yarn add rxclipboard
```

### Example

```js
const rxclipboard = require('rxclipboard')

const log = console.log

rxclipboard.watchClipboard().subscribe(
  x => log('onNext: %s', x),
  e => log('onError: %s', e),
  () => log('onCompleted'))
```

Import using babel
```js
import * as rxclipboard from "rxclipboard"
```

License MIT _Julian David_ - 2017