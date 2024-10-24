import {
  defineConfig,
  // presetAttributify,
  // presetIcons,
  presetUno,
  // presetWebFonts
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    // ...
  ],
  rules: [
    [
      /^stack-(\d+)$/,
      ([, d]) => ({
        display: "flex",
        "flex-direction": "column",
        gap: `${parseInt(d) * 0.25}rem`,
      }),
    ]
  ],
  shortcuts: {
    'uCard': 'shadow-lg bg-white rounded'
  }
})