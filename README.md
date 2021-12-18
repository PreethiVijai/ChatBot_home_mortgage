The conversational AI I have designed is
 https://chats.landbot.io/v3/H-1074075-FJ1Q5IWSEID48QGN/index.html

The node js server is deployed on heroku:
https://protected-mountain-15437.herokuapp.com/

1. The experience could be made more engaging by providing multiple options at once, rather than sequential chats where they have to enter their name before processing.  Output of a statistical data or chart to show the home price hot spots near the cities so that they can look at their other options.

2. Because of time constraints and resource constraints, I used a csv file for statistical data, but ideally this will have to be loaded into a database. A service to generate data from various sources can be used to feed the data into the database. For millions of users, deploying the database on cloud and services on a cloud based architecture provides options to avoid network congestion by increasing the number of replicas for the clusters and using a load balancer with consistent hashing to ensure that the load is balanced equally across all the clusters. Other approaches would be to have a master- slave architecture, having data centers in different regions as a fail support to ensure availability to the users.

3. For the back end I would consider nestJS/nodeJS with typescript. nodeJS provides an option of asynchronous processing along with typescripting which would ensure data formats to be defined. Another option would be nestJS which provides good modularity using controllers and services. It is also useful to have a third party integration with an authorization server to ensure that the web server api endpoints are secure. I would also suggest cloud deployment, as data analytics requires large growing databases which can be easily managed on cloud.
