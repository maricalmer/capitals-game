### [capitals-game](https://chic-kleicha-0ebee7.netlify.app/), a website to test your knowledge of the world's capital cities

## Static website

Website developed with HTML, CSS and Typescript. Assets are bundled with Parcel. Application is run on Netlify. Map is pulled from Google Maps API

![HTML](https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-264DE4?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## JS Packages (non exhaustive)

[![js-confetti](https://img.shields.io/badge/js--confetti-0.11.0-yellow.svg)](https://classic.yarnpkg.com/en/package/js-confetti)

## APIs

[![Maps JavaScript API](https://img.shields.io/badge/Google--Maps-maps--javascript--api-green.svg)](https://developers.google.com/maps/documentation/javascript)

## Run Locally

Clone the project

```bash
  git clone git@github.com:maricalmer/maricalmer.github.io.git my-project
```

Go to the project directory and remove git logs

```bash
  cd my-project
  rm -rf .git
```

Install dependencies

```bash
  bundle install
  yarn install
```

Make sure you have ./node_modules/.bin in your $PATH:

```bash
  echo $PATH
  # You should see `./node_modules/.bin` in the list
```

If it's not the case, add it:

```bash
  cd ~/code/dotfiles/<your_github_nickname>
  echo 'export PATH="./bin:./node_modules/.bin:${PATH}"' >> zshrc
  cd ~/code/<your_github_nickname>/my-project
  source ~/.zshrc
```

Start the server

```bash
  npx parcel index.html
```

## Visit the page!

[capitals-game](https://chic-kleicha-0ebee7.netlify.app/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
