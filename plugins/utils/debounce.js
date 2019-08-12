export default function debounce (fn, delay) {
  var timeoutID = null
  let leading = true

  return function () {
    window.clearTimeout(timeoutID)
    let args = arguments
    let that = this
    if (leading) {
      fn.apply(that, args)
      leading = false
    }
    timeoutID = window.setTimeout(function () {
      fn.apply(that, args)
    }, delay)
  }
}
