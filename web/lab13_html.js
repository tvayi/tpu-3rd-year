let links=document.getElementsByTagName('a')
let hrefs = [];
for (var i = 0; i<links.length; i++)
{   
    hrefs.push([links[i].getAttribute("href"), links[i].innerHTML]);
}


console.log(hrefs)

/*
<!DOCTYPE HTML>
<html>
  <head>
   <meta charset="utf-8">
   <title>Тег LINK</title>  
   <link href="headerlink.com">
   <a href="/headerlink">Link header text</a>
  </head> 
  <body>
    <div class="col-md-2" id="myName1">
      <p>
        <a href="/link1">Link 1 text</a>
        <a href="/link2">Link 2 text</a>
        <a href="/link3">Link 3 text</a>
      </p>
    </div>
  </body>
</html>
*/
