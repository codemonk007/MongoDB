db.runCommand({ logRotate : 1 });

tail -f /var/log/mongodb/mongod.log

Execution statementrs :
db.getCollection('GanapatiTest').find({}).explain('executionStats');

Creating an index is the best option for fast retrieval .
db.user.createIndex({ country: 1 });

here are the few steps which might throw error or cause mongo db drawbacks 
    Inappropriate schema design patterns
    Improper use of or no use of indexing strategies
    Inadequate hardware
    Replication lag
    Poorly performing querying techniques

Optimising mongo db 
1.   Check Your MongoDB Log
2.   Analyze Your Queries
3.   Add Appropriate Indexes
4.   Be Wary When Sorting
5.  Create Two or More Connection Objects
        one to handle the majority of fast queries
        one to handle slower document inserts and updates
        one to handle complex report generation.
6. Set Maximum Execution Times
    db.user.find({ city: /^A.+/i }).maxTimeMS(100);
7. Suggestion 4: Use Short Names for Your Fields
8: Avoid Sharding if Possible
9. chec k mongo db global lock  
    db.serverStatus().globalLock
    db.serverStatus().locks
10. Examine the memory.
    db.serverStatus().mem
    By default, MongoDB will reserve 50 percent of the available memory for the WiredTiger data cache
11. Monitor the number of currebnt Connections
    db.serverStatus().connections
12. This is probably the best thing you can do to improve the performance of a query. Mongoose allows you to add .lean() at the end of your queries which dramatically improves your query’s performance by returning plain JSON objects instead of Mongoose Documents. 
13. use select() instead of find if only one feild is required 
    Model.find({type: "Animal"}).select({name: 1})

Processing 2 Billion Documents A Day And 30TB A Month With MongoDB
    MongoDB doesn’t really have many bottlenecks when it comes to CPU because CPU bound operations are rare (usually things like building indexes), but what really causes problem is CPU steal - when other guests on the host are competing for the CPU resources.
    1. Use dedicated hardware, and SSDs
    2. Use multiple databases to benefit from improved concurrency
    3. Use hash-based sharding for uniform distribution