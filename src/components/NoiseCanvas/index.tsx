import type { P5I } from 'p5i'
import type { Component,  } from 'solid-js'
import { p5i } from 'p5i'
import { onCleanup, onMount } from 'solid-js'

export const NoiseCanvas: Component = () => {
  let divRef: HTMLDivElement | undefined

  const {
    mount,
    unmount,
    createCanvas,
    background,
    noFill,
    stroke,
    noise,
    noiseSeed,
    resizeCanvas,
    cos,
    sin,
    TWO_PI,
  } = p5i()

  let w = window.innerWidth
  let h = window.innerHeight
  const offsetY = window.scrollY

  const SCALE = 200
  const LENGTH = 10
  const SPACING = 15

  function getForceOnPoint(x: number, y: number, z: number) {
    // https://p5js.org/reference/#/p5/noise
    return (noise(x / SCALE, y / SCALE, z) - 0.5) * 2 * TWO_PI
  }

  const existingPoints = new Set<string>()
  const points: { x: number, y: number, opacity: number }[] = []

  function addPoints() {
    for (let x = -SPACING / 2; x < w + SPACING; x += SPACING) {
      for (let y = -SPACING / 2; y < h + offsetY + SPACING; y += SPACING) {
        const id = `${x}-${y}`
        if (existingPoints.has(id))
          continue
        existingPoints.add(id)
        points.push({ x, y, opacity: Math.random() * 0.5 + 0.5 })
      }
    }
  }

  function setup() {
    createCanvas(w, h)
    background('#ffffff')
    stroke('#ccc')
    noFill()

    noiseSeed(Date.now())

    addPoints()
  }

  function draw({ circle }: P5I) {
    background('#ffffff')
    const t = Date.now() / 10_000

    for (const p of points) {
      const { x, y } = p
      const rad = getForceOnPoint(x, y, t)
      const length = (noise(x / SCALE, y / SCALE, t * 2) + 0.5) * LENGTH
      const nx = x + cos(rad) * length
      const ny = y + sin(rad) * length
      stroke(200, 200, 200, (Math.abs(cos(rad)) * 0.8 + 0.2) * p.opacity * 255)
      circle(nx, ny - offsetY, 1)
    }
  }

  function restart() {
    if (divRef)
      mount(divRef, { setup, draw })
  }

  onMount(() => {
    restart()

    const resizeHandler = () => {
      w = window.innerWidth
      h = window.innerHeight
      resizeCanvas(w, h)
      addPoints()
    }

    window.addEventListener('resize', resizeHandler)

    onCleanup(() => {
      window.removeEventListener('resize', resizeHandler)
      unmount()
    })
  })

  return (
    <div
      ref={divRef}
      class="fixed inset-0 pointer-events-none dark:invert z-[-1]"
    />

  )
}
