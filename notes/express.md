express hai nodejs per chalne wala frame work hai
#routing;-Certainly! In simple terms, routing in Express.js is like giving directions to your web application. Imagine your web app as a city, and different paths (URLs) lead to different places (functions) in that city. / this is rout

#middleware-:
middle ware ka use ham ta karte jab hame koi request ko aag bhjne se phele us request ke data ke sth kuch karna hota hai jaise ki user login hai to req aage paas kar do next();
otherwise res() m redirected to login page just like that we do alot of task date to take from req location etc

#dynamic routing:- dynamic routing means whena a url have to rpeating same thing just like profile/adil, profile/faisal , profile/shadmeen then we use dynamic routing
app.get("/profile:username", function(req,res){
res.send(`hello is m from dynamic rout $(rea.params.usename)`)
})
