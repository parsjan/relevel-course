/*console.log(document); //it allows us to target whole document object 
console.log(document.title);// it target the title of html
console.log(document.head);//it target the head of html
console.log(document.body);// it target the body of html 
Document.title='hello buddy';
console.log(Document.title);
console.log(document.all);// it allows us to convert all the elements of dom in an array 
console.log(document.all[4]);// we can target the elements using indexes of the particular element 
document.all[4].textContent='by bro';
console.log(document.all[4]);
console.log(document.URL);// it returns the url of the web page 
console.log(document.domain);// it returns the domain of the web page
console.log(document.documentURI);
console.log(document.doctype.name);// it returns the doctype of the html
console.log(document.forms);// it target forms 
console.log(document.links);// it tells us how many anchor tags are there in our whole html and convert it   into an array . also we can access them using indexes 
console.log(document.images);// it tells us how many images are there in whole html and convert it into an array .also we can access the specific image using indexes
*/



/*console.log(document.getElementById('main'));
var test=document.getElementById('main');
test.textContent='heello dude';
test.innerHTML='<h6> hello dudeee</h6>';
test.style.borderBottom='solid 3px #000';
*/

/*console.log(document.getElementsByClassName('todo'));
console.log(document.getElementsByClassName('todo[1]'));

var listele=document.getElementsByClassName('todo');
listele[1].textContent='achintya';
listele[0].style.backgroundColor='red';
/*listele.style.backgroundColor='yellow';/*this will give error because the listele is an array and to colour all the elements of array we have to iterate using for loop*/
/*for(var i=0; i<listele.length;i++){
  listele[i].style.backgroundColor='yellow';
}*/