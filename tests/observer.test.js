const rxclipboard = require('../')

const log = console.log

rxclipboard.watchClipboard({ watch: 150 }).subscribe(
  x => log('onNext: %s', x),
  e => log('onError: %s', e),
  () => log('onCompleted'))
