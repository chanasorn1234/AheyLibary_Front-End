var passname = document.getElementById('fname')
var pass_password = document.getElementById('pword')
var pass_confirmpassword = document.getElementById('cpword')
var passemail = document.getElementById('e_mail')
var userprofile = document.getElementById('user_profile')
var useremail = document.getElementById('email_profile')

//เจนข้อมูล user------------------------------------------------------------------------------------
userprofile.innerHTML = 'chanasorn1234'
useremail.innerHTML = 'chanasorn1234@gmail.com'

passname.innerHTML = 'Username\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0'+'xxx'
pass_password.innerHTML = 'Password\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0'+'xxx'
pass_confirmpassword.innerHTML = 'Confirm\xa0password\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0'+'xxx'
passemail.innerHTML = 'E-mail\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0'+'xxx'

//-------------------------------------------------------------------------------------------------

//เจนหนังสือที่อ่านค้างไว้---------------------------------------------------------------------------------
for(var i=0;i<=10;i++){
    var mom = document.getElementById('wrapper')
    var newdiv = document.createElement('div')
    newdiv.classList.add('itembook')
    mom.appendChild(newdiv)
    var child_div = document.createElement('div')
    child_div.classList.add('picture')
    newdiv.appendChild(child_div)
    var img = document.createElement('img')
    img.src ="https://www.cp.eng.chula.ac.th/books/wp-content/uploads/sites/5/2018/08/python_cover_v2.png"
    child_div.appendChild(img);
    img.style.width = "150px"
    img.style.height = "200px"
    var butt = document.createElement('button')
    butt.classList.add('btn')
    butt.id = 'butt'+i.toString()
    butt.innerHTML = 'อ่านต่อ'
    butt.style.width = "100px"
    butt.style.backgroundColor = "green"
    butt.style.color = "white"
    newdiv.appendChild(butt)
}
//--------------------------------------------------------------------------------------------------------------

//เจนกระทู้ของuser-------------------------------------------------------------------------------------------
for(var j=0;j<=5;j++){
    var mom3 = document.getElementById('wrapper2')
    var tchild1 = document.createElement('div')
    tchild1.classList.add('itemthread')
    mom3.appendChild(tchild1)
    var t_row = document.createElement('div')
    tchild1.appendChild(t_row)
    var timg =  document.createElement('img')
    timg.id = 't_imger'
    t_row.appendChild(timg)
    timg.src = "https://www.cp.eng.chula.ac.th/books/wp-content/uploads/sites/5/2018/08/python_cover_v2.png"
    t_row.appendChild(timg)
    timg.style.width = "150px"
    timg.style.height = "200px"
    timg.style.marginLeft = "30px"
    timg.style.verticalAlign = "top"
    var tbox_text = document.createElement('div')
    tbox_text.id = 't_boxtext'
    tbox_text.style.marginLeft = "25px"
    t_row.appendChild(tbox_text)
    tbox_text.innerHTML = 'Another instance of placeholder content for this other custom component. It is intended to mimic what some real-world content would look like, and we are using it here to give the component a bit of body and size. (เนื้อหา)'
    var tbutt = document.createElement('button')
    tbutt.id = "tbtt"+j.toString()
    tbutt.classList.add('btn')
    tbox_text.appendChild(tbutt)
    tbutt.style.backgroundColor = "green"
    tbutt.style.color = "white"
    tbutt.style.marginLeft = "55rem"
    tbutt.style.marginTop = "5rem"
    tbutt.style.height = "40px"
    tbutt.innerHTML = "ไปที่กระทู้"

}
//---------------------------------------------------------------------------------------------------------------


