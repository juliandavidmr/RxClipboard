const rxclipboard = require('../')

const log = console.log

rxclipboard.watchClipboard().subscribe(
  x => log('onNext: %s', x),
  e => log('onError: %s', e),
  () => log('onCompleted'))
