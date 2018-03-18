#Super Galactic Age Calculator (SGAC)
This is a fantastically fancy, really radical, totally tenacious doubleplusgood calculator for determining your galactic age, and life expectancy on other planets!

##Getting Started & Requirements
* Requirements
	* Chrome browser
	* npm
	* terminal
	* familiarity with npm test, and karma/jasmine testing operations via terminal

Clone SGAC to your local machine:

```
$git clone https://github.com/johnnymayer/sgac
```

Run an npm install to load all dev packages and dependencies in /sgac:

```
$npm install
```

Run an npm test in /sgac to display output of testing results:

```
$npm test
```

After running ```$npm test```, a new Chrome browser will appear, notifying the test results and expectations for those tests.

##Specs and Tests

* User inputs birthday, age in seconds is returned.
  * Input: 1986/01/03
  * Output: 1,009,280,000

  Assuming 1 year = 31540000 seconds.

* User inputted age is converted to age on planet Mercury.
  * Input: 32 years old on Earth.
  * Output: 133 years old on Mercury.

* User inputted age is converted to age on planet Venus.
  * Input: 32 years old on Earth.
  * Output: 51 years old on Venus.

* User inputted age is converted to age on planet Mars.
  * Input: 32 years old on Earth.
  * Output: 17 years old on Mars.

* User inputted age is converted to age on planet Jupiter.
  * Input: 32 years old on Earth.
  * Output: 2 years old on Jupiter.

* Determine how many years a user has left to live, or how many years they have outlived on each planet for Earth, Mercury, Venus, Mars, and Jupiter.  According to Google, the average life expectancy of a human is 79 years on Earth.
	  * Earth life left to live:
	    * Input: 32 years old on Earth
	    * Output: 47 years left to live on Earth
	  * Mercury life left to live:
	    * Input: 133 years old on Mercury
	    * Output: 195 years left to live on Mercury
	  * Venus life left to live:
	    * Input: 51 years old on Venus
	    * Output: 75 years left to live on Venus
	  * Mars life left to live:
	    * Input: 17 years old on Mars
	    * Output: 25 years left to live on Mars
	  * Jupiter life left to live:
	    * Input: 2 years old on Jupiter
	    * Output: 4 years left to live on Jupiter

##Built With
* Atom
* JavaScript(ES6)
* npm
* karma/jasmine testing
* Chrome
* elbow grease and ~100 gallons of tears.

##Future of SGAC
Future additions will include

* User interface written in HTML
* Styling for User interface in a "galactic theme"
* Functions for Neptune, Saturn, Uranus, and Pluto (if it ever becomes an actual planet again.)

##Author
[Johnny Mayer](https://github.com/johnnymayer)

##License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

##Acknowledgements
* [Jamie Mason](https://github.com/jamiemason) - for the use of his [Karma Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers) plugins

* [Monster Energy](https://www.monsterenergy.com/) - Shoutout to the Mega Monster Energy 24oz can for getting me through.

* [AK1200](https://en.wikipedia.org/wiki/AK1200) - for his classic mixtape [Fully Automatic](https://www.youtube.com/watch?v=BkNGLAATWeA) which gave me great energy for nonstop coding, testing, hair pulling, and crying.
