1. db.Employee.find({})
3.db.getCollection('GanapatiTest').find({"favoriteFruit" :"banana"})
4.db.getCollection('GanapatiTest').find({"favoriteFruit" :"banana"}).limit(5)
6.db.getCollection('GanapatiTest').find({"age":{$lt:28}});
7.db.getCollection('GanapatiTest').find({"age":{$gt:28,$lt:80}})
8.db.getCollection('GanapatiTest').find({$and:[{"eyeColor" : "brown"},{age:{$gt:28,$lt:50}}]})
9.db.getCollection('GanapatiTest').find({"name":{$regex:/^Alison/}})
10.db.getCollection('GanapatiTest').find({$or:[{"company.title":"YURTURE"},{"company.title":"DIGITALUS"}])
11.db.getCollection('GanapatiTest').find({"company.title" : "YURTURE"},{"name":1,"age":1,"_id":0})
12. db.getCollection('GanapatiTest').find({}).count()
13.db.getCollection('GanapatiTest').aggregate([{"$match":{"age":{$gt:25}}},{"$group":{"_id":{ x : "$_id","age":"$age"}}}])
14.db.getCollection('GanapatiTest').aggregate([{"$match":{"age":{$gt:30}}},{ $group: { _id: "$index",total: { $sum: "$age" } } }])
15.db.myCollection.update({}, {$set: {"StockA": 20,"StockB": 20}}, false, true)
16.db.getCollection('GanapatiTest').aggregate([{$group : {_id:"$name",TotalStocks: {$sum: {"$add": ["$StockA","$StockB"]}}}}])
17.db.getCollection('GanapatiTest').aggregate([{$group : {_id:"$name",TotalStocks: {$sum: {"$multiply": ["$StockA","$StockB","$age"]}}}}])
18.db.getCollection('GanapatiTest').find({}).sort({"name":1})
19.db.getCollection('GanapatiTest').aggregate([{$sort:{"name":1}}])
20.db.getCollection('GanapatiTest').aggregate([{$sort:{"_id":-1}},{$limit:5}])
21.db.getCollection('GanapatiTest').aggregate([{"$group":{_id:"$name",SUM:{$sum:{$add:["$StockA""$StockB"}
}}},{$sort:{"_id":1}}])
22.db.getCollection('GanapatiTest').aggregate([{"$group":{_id:"$name",SUM:{$sum:{$add:["$StockA""$StockB"}
}}},{$sort:{"_id":1}},{"$limit":5}])

