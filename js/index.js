$(document).ready(function () {
	$("#thankyou").hide();
	$("#thankyouclose").hide();
	$("#page2").hide();
	$("#page3").hide();
	$("#page4").hide();
	$("#thankyouclosepayment").hide();
	$("#thankyoupayment").hide();
	 pageno = 1;
	// localStorage.clear();
	 
	$.getScript('https://www.google.com/recaptcha/api.js?render=6LdvzAgbAAAAACInRSIq2h_Ow9CG3pkZkoYuYckN');
	
	var popup = sessionStorage.getItem("showpopup");
	if(popup == "true")
	{
		$("#popup").hide();
	}
	else{
		$("#popup").show();
	}
})


function getvalue(){
	var data = {Name:'',
				Email: ''
				};
	
	 data.Name = document.getElementById('Namepopup').value;
	data.Email = document.getElementById('Emailpopup').value;
	if (data.Name == "") {
		alert("Name is Required!!")
		return;
	}
	if (data.Email == "") {
		alert("Email is required!!")
		return;
	}
	
	sendEmail(data);
	}
	function sendEmail(data){
	Email.send({
		Host : "email-smtp.us-east-2.amazonaws.com",
		Username : "AKIAUZBTMXU32NJ56RV3",
		Password : "BGGvRCSAnPiSOgCuP0PVI6Ds6rj2DTF80EFMmUeNzKeC",		
		To : 'contact@itsmtrainingacademy.com',
		From : "contact@itsmtrainingacademy.com",
		Subject : "There is query request from Popup window page",
		Body : "Contact Name : "+ data.Name  +"<br>"+
				" Contact Email : " + data.Email 
				
	}).then(
		message => console.log(message),
		$("#thankyou").show(),
		$("#popupmsg").hide()

	);
	
	
	
	
	
	}

function showpage(pagenum)
{
	pageno = pagenum;
	var page = "#page"+pagenum;
	$("#page1").hide();
	$("#page2").hide();
	$("#page3").hide();
	$("#page4").hide();
	$(page).show();
}
function priviuspage(){
	if(pageno == 1)
	{
		return;
	}
	$("#page1").hide();
	$("#page2").hide();
	$("#page3").hide();
	$("#page4").hide();
	 pageno = pageno -1;
	var page = "#page"+pageno;
	$(page).show();
}
function nextpage(){
	$("#page1").hide();
	$("#page2").hide();
	$("#page3").hide();
	$("#page4").hide();
	 pageno = pageno +1;
	var page = "#page"+pageno;
	$(page).show();
}

function savepopuptolocal(){
	sessionStorage.setItem("showpopup","true");
	
}
// const apiurl = 'http://localhost:3000/';
const apiurl = 'https://api.itsmtrainingacademy.com/';
const sitekey = '6LdvzAgbAAAAACInRSIq2h_Ow9CG3pkZkoYuYckN';

function getsurvey() {
	grecaptcha.execute(sitekey, { action: 'homepage' }).then(function (token) {
		var ele1 = document.getElementsByName("inlineRadioOptions");
		for (i = 0; i < ele1.length; i++) {
			if (ele1[i].checked) {
				var first = ele1[i].value;
			}

		}

		var ele3 = document.getElementsByName("inlineRadioOptions3");
		for (i = 0; i < ele3.length; i++) {
			if (ele3[i].checked) {
				var third = ele3[i].value;
			}

		}
		var ele4 = document.getElementsByName("inlineRadioOptions4");
		for (i = 0; i < ele4.length; i++) {
			if (ele4[i].checked) {
				var fouth = ele4[i].value;
			}

		}
		var ele5 = document.getElementsByName("inlineRadioOptions5");
		for (i = 0; i < ele5.length; i++) {
			if (ele5[i].checked) {
				var fifth = ele5[i].value;
			}

		}
		if (!fifth || !fouth || !third || !first) {
			alert("All Options are Required!!");
			return;
		}
		var Name = document.getElementById("name").value;
		var Email = document.getElementById("email").value;
		var Massage = "";
		Massage = document.getElementById("message-text").value;
		if (!Name || !Email) {
			alert("All Field Required!!");
			return;
		}
		var data = {};
		data.ans1 = "Do you enjoy learning and growing? :" + first;
		data.ans2 = "Do you enjoy working in team towards a same goal? :" + third;
		data.ans3 = "Do you like solving problems? :" + fouth;
		data.ans4 = "Do you like making a difference? :" + fifth;
		data.Name = Name;
		data.Email = Email;
		if (!Name || !Email) {
			alert("Name, Email Required!!");
			return;
		}


		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.Email)) {
			alert("Enter Valid Email Id")
			return;
		}
		data.Massage = Massage;
		const captcha = token;
		if (!captcha) {
			console.log("Wronge site key");
			return;
		}
		data.captcha = captcha;
		$.post(apiurl + 'sendemailfromsurvey', data, function (result) {
			console.log(result);
			if (result.success == false) {
				alert(result.msg);
				return;
			}
			else {
				$("#thankyou").show();
				$("#form").hide();
				$("#futer").hide();
				$("#formclose").hide();
				$("#thankyouclose").show();

			}
		})

	})
	// sendEmail(data);
}
function trainingpagecontact() {
	grecaptcha.execute(sitekey, { action: 'homepage' }).then(function (token) {
		var data = {};
		data.Name = document.getElementById('name').value;
		data.Phone = document.getElementById('phone').value;
		data.Email = document.getElementById('email').value;
		data.Massage = document.getElementById('message-text').value;
		if (data.Name == "") {
			alert("Name is Required!!")
			return;
		}
		if (data.Phone == "") {
			alert("phone is Required!!")
			return;
		}

		if (data.Email == "") {
			alert("Email is required!!")
			return;
		}
		var numbers = /^[0-9]+$/;
		if (!data.Phone.match(numbers)) {
			alert("Enter Valid Phone Numbers")
			return;
		}

		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.Email)) {
			alert("Enter Valid Email Id")
			return;
		}
		const captcha = token;
		if (!captcha) {
			console.log("Wronge site key");
			return;
		}
		data.captcha = captcha;
		$.post(apiurl + 'sendemailfromtraining', data, function (result) {
			console.log(result);
			if (result.success == false) {
				alert(result.msg);
				return;
			}
			else {
				alert("Request submit successfully!!");
			}
		})
	})
}


function getintouch() {
	grecaptcha.execute(sitekey, { action: 'homepage' }).then(function (token) {

		var data = {};
		data.Email = document.getElementById("subemail").value;
		console.log(data.Email);

		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.Email)) {
			alert("Enter Valid Email Id")
			return;
		}
		const captcha = token;
		if (!captcha) {
			console.log("Wronge site key");
			return;
		}
		data.captcha = captcha;
		$.post(apiurl + 'sendemailsuscribeemail', data, function (result) {
			console.log(result);
			if (result.success == false) {
				alert(result.msg);
				return;
			}
			else {
				$("#thankyou").show();
				// alert("Request submit successfully!!");
			}
		})
	})
}

function submitcontactform() {
	grecaptcha.execute(sitekey, { action: 'homepage' }).then(function (token) {

		var data = {};
		data.Name = document.getElementById('name').value;
		data.Phone = document.getElementById('phone').value;
		data.Email = document.getElementById('email').value;
		data.people = document.getElementById('people').value;
		data.industry = document.getElementById('industry').value;
		if (data.Name == "") {
			alert("Name is Required!!")
			return;
		}
		if (data.Phone == "") {
			alert("phone is Required!!")
			return;
		}

		if (data.Email == "") {
			alert("Email is required!!")
			return;
		}
		if (data.people == "") {
			alert("people is required!!")
			return;
		}
		if (data.industry == "") {
			alert("Industry is required!!")
			return;
		}
		var numbers = /^[0-9]+$/;
		if (!data.Phone.match(numbers)) {
			alert("Enter Valid Phone Numbers")
			return;
		}

		if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.Email)) {
			alert("Enter Valid Email Id")
			return;
		}

		const captcha = token;
		if (!captcha) {
			console.log("Wronge site key");
			return;
		}
		data.captcha = captcha;
		$.post(apiurl + 'sendemailcontactus', data, function (result) {
			console.log(result);
			if (result.success == false) {
				alert(result.msg);
				return;
			}
			else {
				// alert("Request submit successfully!!");
				$("#thankyou").show();
		$("#form").hide();
		$("#futter").hide();
			}
		})
		
	})
}

