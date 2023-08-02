import {Readable} from 'node:stream'

class OneHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {

    })

    setTimeout(function t() {
      print(20)
    }, 20)
  }
}