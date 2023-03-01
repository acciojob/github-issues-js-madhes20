//your code here


let i = 0;

fetch('https://api.github.com/repositories/1296269/issues?page=$%7BpageNumberHere%7D&per_page=5')
.then((response) => response.json())
.then((data) =>{
    let myData = data;
    console.log(data);
    console.log(i)
    console.log(myData[i].url);
    let issue = document.getElementById('issue')
    issue.innerHTML = `<a href ="${myData[i].url}">Issue ${i+1} </a>`
    let pno = document.getElementById('pno');
    pno.innerHTML = `<p>Page number ${i+1}</p>`
})


function next(){
    
    fetch('https://api.github.com/repositories/1296269/issues?page=$%7BpageNumberHere%7D&per_page=5')
    .then((response) => response.json())
    .then((data) =>{
        if((i+1) < data.length)
        {
            i = i+1;
            let myData = data;
            console.log(i)
            console.log(myData[i].url);
            let issue = document.getElementById('issue')
            issue.innerHTML = `<a href ="${myData[i].url}">Issue ${i+1} </a>` 

            let pno = document.getElementById('pno');
            pno.innerHTML = `<p>Page number ${i+1}</p>`
        }
        
    })
}


function prev(){
    
    fetch('https://api.github.com/repositories/1296269/issues?page=$%7BpageNumberHere%7D&per_page=5')
    .then((response) => response.json())
    .then((data) =>{
        if((i-1)>= 0)
        {
            i = i-1;
            let myData = data;
            console.log(i)
            console.log(myData[i].url);
            let issue = document.getElementById('issue')
            issue.innerHTML = `<a href ="${myData[i].url}">Issue ${i+1} </a>` 
            let pno = document.getElementById('pno');
            pno.innerHTML = `<p>Page number ${i+1}</p>`

        }
        
    })

}

