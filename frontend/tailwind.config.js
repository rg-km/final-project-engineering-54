module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-code': '#28237A', 
        'gray-code': '#BBBBEF', 
        'orange-code': '#FD9727', 
        'indigo-code': '#656EE3', 
        'purple-code': '#3A39B4', 
      },
      screens: {
        '6xs': {'max': '240px'},
        '5xs': {'max': '320px'},
        '4xs': {'max': '375px'},
        '3xs': {'max': '411px'},
        '2xs': {'max': '480px'},
        '1xs': {'max': '540px'},
        'xs': {'max': '640px'},
      }
    }
  },
  plugins: [],
}
