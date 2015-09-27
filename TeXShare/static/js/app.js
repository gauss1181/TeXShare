// app.js
var apiKey = 45355072;
var sessionId = '1_MX40NTM1NTA3Mn5-MTQ0MzI1Nzg0NDI0M35Iblp1M1hJd1I0aEJPSnFYVVo4a0RjOTF-UH4';
var session = OT.initSession(apiKey, sessionId);
var token = 'T1==cGFydG5lcl9pZD00NTM1NTA3MiZzaWc9ZWFhODVjOTZiNDAyMWIwZTczNGRmY2U3MjE2NDhjNDc4NWE1NjNhMTpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTFfTVg0ME5UTTFOVEEzTW41LU1UUTBNekkxTnpnME5ESTBNMzVJYmxwMU0xaEpkMUkwYUVKUFNuRllWVm80YTBSak9URi1VSDQmY3JlYXRlX3RpbWU9MTQ0MzMxMDc3MSZub25jZT0wLjMyNTc0MDc1MjUwNDk0MDQmZXhwaXJlX3RpbWU9MTQ0MzM5NzE3MQ==';

session.on({
  streamCreated: function(event) { 
    session.subscribe(event.stream, 'subscribersDiv', {insertMode: 'append'}); 
  }
});

session.connect(token, function(error) {
  if (error) {
    console.log(error.message);
  } else {
    session.publish('myPublisherDiv', {width: 320, height: 240});
  }
});
