# API-INTEGRATION

*COMPANY NAME*: CODTECH IT SOLUTIONS

*NAME*: SHOBANA.P

*INTERN ID*: CT04DR2911

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

## DESCRIPTION OF AUTO DETECT WEATHER APP

The API Integration Task focuses on developing an interactive and responsive web application that dynamically fetches data from a public API and displays it to users in real time. The main goal of this project is to demonstrate how web technologies such as HTML, CSS, and JavaScript can be combined with external data sources to create a dynamic user experience. For this task, a Weather Application is built that automatically detects the user’s location and displays the current weather conditions, including temperature, city name, and weather description (such as sunny, cloudy, or rainy).

This project uses two main technologies: the Geolocation API and the wttr.in public weather API. The Geolocation API is a built-in browser feature that allows a webpage to access the geographical position (latitude and longitude) of the user’s device, with their consent. Once the location coordinates are retrieved, they are sent to the wttr.in API endpoint, which provides weather data in JSON format. The application then extracts the necessary information from the API response and displays it dynamically on the webpage. This process showcases the practical use of API calls and asynchronous JavaScript (using the Fetch API) for data retrieval.

The webpage structure is designed using HTML, which defines the layout of the interface, including a title, information box, and a refresh button. The CSS file enhances the visual appearance, using gradients, rounded containers, shadows, and responsive design principles to ensure that the application looks attractive and functions well on both desktop and mobile devices. The JavaScript file handles the logic for detecting the user’s location, making the API request, processing the JSON data, and updating the webpage content dynamically without reloading.

When the user opens the page, a message appears stating that the app is “Detecting your location.” The browser then asks for permission to access the location. Once the user grants permission, the app retrieves the latitude and longitude values through the navigator.geolocation interface. These coordinates are then inserted into the wttr.in API URL in the format https://wttr.in/[latitude],[longitude]?format=j1. The API returns weather information, which includes the nearest city name, current temperature (in Celsius), and a short weather description. This information is then displayed inside a styled box on the webpage.

If the user denies location access, or if the device’s GPS fails to respond, the app displays a suitable error message, ensuring that the user experience remains informative and friendly. Additionally, the “Refresh” button allows the user to update the weather data anytime, re-fetching live information from the API.

This project demonstrates essential concepts of API integration, asynchronous programming, geolocation handling, and responsive web design. It also shows how front-end development and real-time data communication can work together to create practical, user-centered applications. The use of a public, free API (wttr.in) makes the project accessible without needing an API key, while still providing accurate and real-world weather data.

In conclusion, this API Integration task successfully achieves its objective by combining client-side scripting with external data retrieval to produce a responsive and dynamic weather web application. It serves as a strong example of how web developers can enhance user interactivity and functionality by connecting web pages to live data sources.

## OUTPUT

<img width="1711" height="790" alt="Image" src="https://github.com/user-attachments/assets/2ede0925-aa17-414d-8d24-15ae12122558" />

<img width="1427" height="771" alt="Image" src="https://github.com/user-attachments/assets/bfe768de-79b4-41c4-ade5-56f998709458" />








