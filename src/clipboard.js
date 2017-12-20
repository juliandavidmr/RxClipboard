import {
  paste
} from "copy-paste"
import {
  isDiff
} from "./util"
import Rx from 'rxjs/Rx'

export function getContentClipboard() {
  return new Promise((resolve, reject) => {
    paste(function (err, values) {
      return !err ? resolve(values) : reject(err)
    })
  })
}

let temp_content;

function changeTemp(value) {
  if (isDiff(value, temp_content)) temp_content = value
}

export function watchClipboard(params) {
  return Rx.Observable.create(observer => {
    try {
      setInterval(async() => {
        let content = await getContentClipboard()
        if (isDiff(content, temp_content)) {
          changeTemp(content)
          observer.next(content)
        }
      }, 200);
    } catch (error) {
      observer.onCompleted(error)
      return () => console.log('disposed')
    }
  })
}
