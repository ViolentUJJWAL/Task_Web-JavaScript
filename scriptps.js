let arr = [
`<b>“Life is waiting for you, give your best shot.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“If you have more then you need, simply share it with those who need it the most.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“Success comes from experiences, experiences come from bad experiences.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“What people think about you is not important. What you think about yourself means everything.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“Learn to control your thoughts or your thoughts will control you.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“Education is not just about gathering knowledge, but more so about learning how to think.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“Don’t be too serious about what you think, it's just a point of view.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“Always remember, you are bigger than your problems.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“You might have failed but you’re not a failure until you give up.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“Stop criticizing yourself for your failures and start appreciating yourself for your achievements.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“The ability to detach yourself from your thoughts is your ticket to freedom.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“Success always hugs you in private, but failure always slaps you in the public and that's life.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“Stop doubting yourself, work hard, make it happen.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“Be powerful not to dominate others, but to conquer yourself.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“You are the answer to all your questions.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“Those who cannot change their minds cannot change anything.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“Make your problems adventures and achieve greatness in every situation in life.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“The person who knows everything about why and what am I doing and how to do it then nobody can stop him.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“Meditation should not be torture. It must be fun! Start small, five to ten minutes a day is a great start”</b>. <br>- <i>Sandeep Maheshwari</i>`,
`<b>“If you are not afraid of losing, nobody can ever beat you.”</b> <br>- <i>Sandeep Maheshwari</i>`,
`<b>“Smile to change the world, don’t let the world change your smile.”</b> <br>- <i>Sandeep Maheshwari</i>`
]
let j = Math.floor(Math.random() *20)
motiv.innerHTML=arr[j]

let timeId = setInterval(function(){
	motiv.innerHTML=arr[Math.floor(Math.random() *20)]
}, 10000)

let timeId2 = setInterval(function(i){
	console.log("time")
}, 1000)

let x = function(){
	clearInterval(timeId)
	clearInterval(timeId2)
	alert("Stop Motivational Quotes")
}

let a = document.body.childNodes[3].childNodes
a= Array.from(a)

a[3].addEventListener("click", function(){
	contener2.hidden = false
	alert("BookMark")
})

a[5].addEventListener('click', x)

a[7].addEventListener('click', function(){
	bulb.firstElementChild.classList.toggle("onbulb")
})

document.getElementById("book").addEventListener('click', function(){
	contener2.hidden = true
})

let b = document.getElementById("contener3").childNodes

b[1].addEventListener('click', function(){
	clearInterval(timeId)
	clearInterval(timeId2)
	j--
	if (j<0){
		j=20
	}
	console.log(j)
	motiv.innerHTML=arr[j]
})

b[3].addEventListener('click', x)

b[5].addEventListener('click', function(){
	clearInterval(timeId)
	clearInterval(timeId2)
	j++
	if (j>20){
		j=0
	}
	console.log(j)
	motiv.innerHTML=arr[j]
})
