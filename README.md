# MongoDB Migration Node Script
edX Module 3 Assignment Lab: MongoDB Migration Node Script

The assignment lab for this module is to build a migration script to move data from one MongoDB database to another.

> You work at a Bitcoin exchange company. For some reason, the customer data is missing its full address. You have customer data only with the street address (building number and street name) but no city, state, country. Also, phone numbers are missing too. Luckily, your friends were able to restore the address information from a backup replica of a MongoDB instance. You need to write a migration/restoration script which will merge the data from the two sources.

> You have millions of records so you need to create a script which can run queries to the database in parallel. You don't know what is the optimal number of customers to insert into a database at a time so you need to write the program to allow for a variable number of documents to be able to be updated at once. This will help to determine if it's better to update in groups of 10, 50 or maybe 500 at a time.

> You are provided with two sample JSON files customer-data.json and customer-address-data.json which contain 1000 documents/objects (remember, the real data will have 1000000+ objects). Assume that the order of the objects in each file correlates to objects in the other file.

## Source
This the Module 03 exercise from the edX Course 'Introduction to NodeJS'

## Installation Requirements
1. Requires NodeJS installed
2. Clone repository to a local directory - `git clone <PATH TO GITHUB REPO>`
3. Run `npm i` to install dependencies

## To run the routine from the CLI
1. `node migrate-data.js` from within the folder containing the cloned code
