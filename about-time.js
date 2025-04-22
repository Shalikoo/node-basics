// about-time.js
import fs from 'fs/promises'
import ms from 'ms'

fs.readFile('data/timestamp.txt', 'utf-8')
  .then(txt => {
    txt
      .split(/\r?\n/)
      .filter(Boolean)
      .forEach(token => {
        const diffMs = ms(token)
        if (!diffMs) {
          console.log(`Cannot resolve: "${token}"`)
          return
        }
        console.log(ms(diffMs, { long: true }) + ' ago')
      })
  })
  .catch(err => console.log('Error:', err.message))
