var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
    
         'article-one' : {
            title:"article-one|sharath chandra",
            heading:"article-one",
            date: "Aug 25,2017",
            content:   `<p>
                            Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi
                        </p>
                        <p>
                            Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi
                        </p>
                        <p>
                            Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi
                        </p>`
            
        },
        'article-two':{title:"article-two|sharath chandra",
            heading:"article-two",
            date: "Aug 25,2017",
            content:   `<p>
                            Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi
                        </p>
                        <p>
                            Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi
                        </p>
                        <p>
                            Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi
                        </p>`
            },
        'article-three':{
            title:"article-three|sharath chandra",
            heading:"article-three",
            date: "Aug 25,2017",
            content:   `<p>
                            Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi
                        </p>
                        <p>
                            Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi
                        </p>
                        <p>
                            Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi Hi today is a wonderful day happy ganesh chaturthi
                        </p>`
            }
};
function createTemplate (data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="view port" content="width=device-width,initial-scale=1">
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        
                <a href='/'>Home</a>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                ${content}
        </div>
    </body>
</html>
    

`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename',function (req,res) {
   var articlename= req.params.articlename;
   res.send(createTemplate(articles[articlename]));
});
var couter =0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(80, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
