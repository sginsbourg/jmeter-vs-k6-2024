import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
    // Send an HTTP GET request to the home page
    const response = http.get('https://demo.guru99.com/test/newtours/');

    // Validate the response (optional)
    if (response.status === 200) {
        console.log('Page loaded successfully!');
    } else {
        console.error(`Unexpected status code: ${response.status}`);
    }

    // Simulate user think time
    sleep(2); // Sleep for 2 seconds before the next request
}
