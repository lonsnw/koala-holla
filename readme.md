Koala Holla
===========

# KOALA HOLLA

## Description

_Duration: 2 Week Sprint_

Our client, Koala Holla (1976 Llama Comma Drive, Walla Walla WA) is a non-profit dedicated to the ethical transitioning of koalas from the outdoors to urban areas where roofs exist.

Koala Holla has provided a table of their current residents.  They requested the following capabilities: 

 * Add a koala to the database
 * Mark the koala as ready for transfer, either before or after adding the koala to the database
 * Remove koalas from the database

This app is not currently deployed.

## Screen Shot

Application on load before use:
<br />
<image src=server/public/images/full-page.png width=80%>
<br />
Example of adding a new koala's information:
<br />
<image src=server/public/images/add-sample.png width=80%>
<br />
Confirmation on add:
<br />
<image src=server/public/images/add-confirm.png width=80%>
<br />
Confirmation on delete:
<br />
<image src=server/public/images/delete-confirm.png width=80%>
<br />
### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [PG](https://www.postgresql.org/)

## Installation

1. Create a database named `koala-holla`,
2. The queries in the `database.sql` file are set up to create the necessary table and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install` and `npm install pg`
4. Run `npm start` in your terminal

## Usage

The app allows users to add koalas to the database and indicate that the koala is ready for transfer using a checkbox.  If the koala becomes ready for transfer after being entered into the database, the user can indicate that change in status using the "Transfer ready" button.  This will update the transfer status to "Pending transfer," and the user can delete the koala's information once they have been transferred.

To prevent accidental deletion, there is an alert to confirm whether deletion was intentional when the user clicks the delete button.


## Built With

* Node
* Express
* SQL

## Support

If you have suggestions or issues, please contact me.