package_name='sullivan'

webpack --progress --colors --output-library-target umd src/index.js build/global.js --output-library $package_name
