
import { Client } from 'gree-hvac-client';
import * as http from 'http'; 

// list of the ACs. For each AC, add a new item into the array with its ip and port.
const clients = [{ip:"", port: 4567}];

// For each AC run a small request for temperature.
// send to post request to http://homebridge.localhost:4567/temp/21.5%32%C
// recreates a new client for each update.
// is not the most effective or perofmant but works for now.

clients.forEach(client => {
	const connectionClient = new Client({host: client.ip});
	connectionClient.on('connect', (client, properties) => {
		console.log("Connected to")
	});

	connectionClient.on('update', (changedProperty, newProperties) => {
		http.get("http://homebridge.localhost:"+ client.port + "/temp/" + newProperties.currentTemperature, res => {
			//console.log(res);
			console.log(connectionClient.listenerCount);
		  }).on('error', err => {
			console.log('Error: ', err.message);
		});
	});

	connectionClient.on('no_response', (client, properties) => {
		console.log('no response');
	});
});

	