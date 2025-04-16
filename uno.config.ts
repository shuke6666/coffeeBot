// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(), 
    presetIcons()
  ],
  transformers: [
    transformerVariantGroup(),
  ],
})
