Before you can run the example, make sure that you:
•	Download and install MongoDB available https://www.mongodb.org/downloads
Please install MongoDB in C:\mongodb (during the installation choose custom and select C:\mongodb as the instllation destination)
You may add C:\MongoDB\bin\ to the Path System Variable.
Create the following folder: C:\data\db  . You may use mkdir c:\data\db   (this is where MongoDB will create the databases)

•	Download and install Robomongo https://robomongo.org/download  (this is a very good IDE to visually interact with MongoDB database)

•	Install other packages using Webstorm terminal window
npm install

To start MongoDB server, Open a commond line then:
cd "C:\MongoDB\bin"   (!!!use the path where you installed MongoDB)
mongod


Libraries needed for unit testing
npm install mocha --save-dev
npm install chai --save-dev