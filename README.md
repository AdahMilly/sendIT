# SendIT
Send-IT is a courier service that helps users deliver parcels to different destinations. Send-IT provides courier quotes based on weight categories.
Required Features

## Application features
 
  -   Users can create an account and log in.
  -  Users can create a parcel delivery order.
  -   Users can change the destination of a parcel delivery order.
  -   Users can cancel a parcel delivery order.
  -  Users can see the details of a delivery order.
  -   Admin can change the status and present location of a parcel delivery order.

 ## Optional Features

  -  The application should display a Google Map with Markers showing the pickup location and the destination.
  -  The application should display a Google Map with a line connecting both Markers (pickup location and the destination).
  -  The application should display a Google Map with computed travel distance and journey duration between the pickup location and the destination.
   - The user gets real-time email notification when Admin changes the status of their parcel.
   - The user gets real-time email notification when Admin changes the present location their parcel.


The following endpoints should be available for use once the API is complete.

| EndPoint                          | Functionality                     |
| --------------------------------- | --------------------------------- |
| GET    /parcels      | Fetch all parcel delivery order            |
| GET     /parcel/v1/parcelId          | Fetch a specific delivery order |                    |
|                                   |                                   |
| GET    /users/userId/parcels         | Fetch all parcel delivery order by a specific user                |
| PUT      /parcels/parcelId/cancel         | Cancel the specific parcel delivery order                |
| POST      /parcels     | Create a parcel delivery order                   |

**NB:**

  -  The user can only cancel or change the destination of a parcel delivery when the parcel’s status is yet to be marked as delivered.
  -  Only the user who created the parcel delivery order can cancel the order.


## Technologies Used

[Expressjs](https://expressjs.com/) Framework

[Jestjs](https://jestjs.io/) Testing Framework

[Sequelize](http://docs.sequelizejs.com/) ORM

[Javascript](https://en.wikipedia.org/wiki/JavaScript) language

[HTML](https://en.wikipedia.org/wiki/HTML) 

[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)


### Contributing to the application

 1. clone the repo

   ```sh
    git clone https://github.com/AdahMilly/sendIT
   ```

 2. Set up the app locally (Refer *Getting started with the application* above)
 3. Create a branch from develop

   ```sh
   git checkout -b feature/<name-of-the-feature> (e.g feature/implement-user-login)
   ```

 4. Work on the task and push your changes to github repo.

   ```sh
   git add .

   git commit



   git push origin feature/<name-of-the-feature> (e.g feature/implement-user-login)
   ```

 5. Open a Pull Request to develop and a provide a very detail description of your PR.

 For more info refer [Getting started with Git and Github](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6).

 ### Other Ways to contribute

  1. Review open PRs
  2. Open an [issue](https://help.github.com/en/articles/about-issues)