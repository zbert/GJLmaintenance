import Vue from 'vue'

const updatePixelsScrolled = ({ el }) => _ => {
  const { top, bottom } = el.getBoundingClientRect()
  const windowHeight = window.innerHeight
  const PIXELS_UNTIL_DONE = window.innerHeight
  const pixelsScrolledInView = windowHeight - top

  // let percent = pixelsScrolled < PIXELS_UNTIL_DONE
  //   ? 1 - (PIXELS_UNTIL_DONE - pixelsScrolled) / PIXELS_UNTIL_DONE
  //   : 1
  if (pixelsScrolledInView > 0 && bottom > 0) {
    let percent = 1 - (PIXELS_UNTIL_DONE - pixelsScrolledInView) / PIXELS_UNTIL_DONE

    el.style.transform = `translateY(${(1 - percent) * 4}rem)`
  }
}

const options = () => {
  /* Feature detection */
  var options = false

  try {
    window.addEventListener(
      'test',
      null,
      Object.defineProperty({}, 'passive', {
        get: function () { options = { passive: true } }
      })
    )
  } catch (err) {}

  return options
}

Vue.directive('PixelsScrolled', {
  bind (el, { expression }, vnode) {
    el.percentHandler = updatePixelsScrolled({ el })
    window.addEventListener('scroll', el.percentHandler, options)
    window.addEventListener('resize', el.percentHandler)
  },
  unbind (el) {
    window.removeEventListener('scroll', el.percentHandler)
    window.removeEventListener('resize', el.percentHandler)
  }
})
