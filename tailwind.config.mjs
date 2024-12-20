/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h4': ['2rem', {
          lineHeight: '2.375rem', // 38px
          letterSpacing: '-2%',
          fontWeight: '500', // font-medium
        }],
        'h6': ['1.125rem', { // 18px
          lineHeight: '1.35rem', // 21.6px
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        'overline': ['0.75rem', { // 12px
          lineHeight: '1.875rem', // 30px
          letterSpacing: '0.5px',
          fontWeight: '600',
        }],
        'body2': ['0.875rem', {
          lineHeight: '1.375rem',
          letterSpacing: '-1%',
          fontWeight: '400',
        }]
      },
      textColor: {
        'h4': '#212636',
        'overline': '#667085',
        'success': '#15B79F',
        'error': '#F04438',
      },
      backgroundColor: {
        'success-light': '#CCFBEF',
      },
      textDecoration: {
        'underline-position': 'from-font',
        'skip-ink': 'none',
      },
      textAlign: {
        left: 'left',
      },
    },
  },
  plugins: [],
};
