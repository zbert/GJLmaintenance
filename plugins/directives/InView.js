import Vue from 'vue'

const PERCENTAGE_FROM_BOTTOM = 0.15
const defaultAppearClass = 'scroll-appear--visible'

const isInView = ({ el }, appearClass = defaultAppearClass) => _ => {
  const viewportTop = el.getBoundingClientRect().top
  const bodyTop = document.body.getBoundingClientRect().top
  const windowHeight = window.innerHeight

  if ((windowHeight - viewportTop) / windowHeight >
    PERCENTAGE_FROM_BOTTOM) {
    el.classList.add(appearClass)
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
  } catch (err) { }

  return options
}

Vue.directive('InView', {
  bind (el, { expression, value }, vnode) {
    let className = value
    el.eventHandler = isInView({ el }, className)

    window.addEventListener('scroll', el.eventHandler, options)
    window.addEventListener('resize', el.eventHandler, false)

    el.eventHandler()
  },
  unbind (el) {
    window.removeEventListener('scroll', el.eventHandler, options)
    window.removeEventListener('resize', el.eventHandler, false)
  }
})
