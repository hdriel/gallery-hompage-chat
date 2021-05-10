# gallery-hompage-chat

## Install 
run `npm install` in client and server directories 


## Running 
run the following to commands in saparate terminal under server directory package.json: 
* `npm run start:server`
* `npm run start:client`

Then go to: http://localhost:3000


Enjoy

Note: <br>
the chat messages are can be saved into localstorage or will be temporary (but anyway not saving in server database, so when clearing localstorage (or refreshing with not saving localstorage), the data will be deleted.<br>
can be changed in the easy way by moving from blacklist to whitelist if you want to. (file: `client/store/index.js`); 

Screenshots:

1. Fetching a static image list json from server:
![alt text](screenshots/1.PNG)
   
2. Searching by name or artist
![alt text](screenshots/2.PNG)
   
3. Connecting with unique username for chating
![alt text](screenshots/4.PNG)
   
4. Sending chat messages per image with multiple users by sockets
![alt text](screenshots/5.PNG)
   
5. Watch extra image details by mouse over
![alt text](screenshots/6.png)

5. Watch extra message details (sending time) by mouse over 
![alt text](screenshots/3.png)
