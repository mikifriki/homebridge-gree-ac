# Temperature Sensor Service

Returns the temperature of the given AC unit.
If a GET request is done to the hosted url it returns the current temperature.
For example:
(example with Homebridge Raspberry Pi setup and default httpPort: 4567):
```
GET http://homebridge.localhost:4567/temp/21.5%32%C
```

This service can also be ran as a docker container.
