const details= document.getElementById('details')

const ul=document.querySelector('ul')

details.addEventListener('submit',store)
function store(e)
{
    e.preventDefault();
    const name=event.target.name.value
    const email=event.target.email.value
    let users={
        name,
        email
    }
    localStorage.setItem(users.email,JSON.stringify(users))

    showData(users);




}




window.addEventListener('DOMContentLoaded',()=>{

    const localStoragekeys=Object.keys(localStorage)

    const  localStorageObj=localStorage;

	@@ -31,10 +32,17 @@ window.addEventListener('DOMContentLoaded',()=>{

function showData(user)

{

    const parentNode=document.getElementById('listUsers');

    // if(localStorage.getItem(user.email) !== null){

    //     removeUserFromScreen(user.email)

    // }

    const childHTML=`<li id=${user.email}> ${user.name} - ${user.email}

    <button onclick=deleteuser('${user.email}')>X</button>

    <button onclick=editUser('${user.email}','${user.name}')>✎</button>

    </li>`

    parentNode.innerHTML=parentNode.innerHTML+childHTML

    //for clear inpusts

    document.getElementById('email').value=""

    document.getElementById('name').value="";

}

function deleteuser(emailId){

localStorage.removeItem(emailId)
    removeOnScreem(emailId)
}

function removeOnScreem(emailId)
{
    const parentNode=document.getElementById('listUsers')

    const childNode=document.getElementById(emailId)

    parentNode.removeChild(childNode)




}

function editUser(emailId,name)

{

    document.getElementById('email').value=emailId

    document.getElementById('name').value=name;

    //to ramove wrong details

    deleteuser(emailId)




}