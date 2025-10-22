import type { Config } from 'tailwindcss'
const config: Config = {
content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
theme: {
extend: {
colors: {
blush: '#F6B1B8', // Blush Nectar
sand: '#FBE9D0', // Desert Sand
plum: '#4A284D', // Cosmic Plum
amber: '#F4B63E', // Solar Amber
ether: '#8FCBDA', // Ether Blue
sage: '#A6BFA1', // Sage Green
cream: '#FFF8F2', // Creamlight
},
borderRadius: { '2xl': '1.25rem' },
boxShadow: {
glow: '0 0 30px rgba(246, 177, 184, 0.45)',
},
backgroundImage: {
'portal': 'linear-gradient(135deg, #F6B1B8 0%, #8FCBDA 60%)',
'dusk': 'linear-gradient(180deg, #4A284D 0%, #F4B63E 100%)',
},
},
},
plugins: [],
}
export default config