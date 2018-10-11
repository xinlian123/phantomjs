var page = require('webpage').create();
var fs = require('fs');
var resource = [];
var url = 'http://pu-mtfrsso-01.cac.com:8080/openam/saml2/jsp/idpSSOInit.jsp?metaAlias=/portal/idp&spEntityID=https://caps.creditacceptance.com/steps/saml/metadata&binding=urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST&NameIDFormat=urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified';
page.open(url, function (status) {
       if(status === "success") {	
	var title = page.evaluate(function(){
		return document.title;
	});
	fs.write('output.txt', title, 'w');
	console.log(title);
	page.evaluate(function(){
		
		document.getElementById("IDToken1").value="xlian";
		document.getElementById("IDToken2").value="Xiaobai21";
		var x = document.getElementsByClassName("button primary");
		x[0].click();
		
	});
	
	setTimeout(function(){phantom.exit()},20000);
      }
});

page.onResourceReceived = function(response) {
  if(response.stage == 'end'){
       return;
    }
  //if(response.url=="https://caid-test.fs.us2.oraclecloud.com/homePage/faces/FuseWelcome"){
	 // console.log("good");
  //}
 
  var title2 = page.evaluate(function(){
			return document.title;
		});
	 fs.write('output.txt', title2, 'a');	
	
	//	if (title2[i] == "Oracle Applications"){
	//		console.log("yes");
	//	}
	//	
		//console.log(title2);
	//console.log(response.status);
	//console.log(response.url);
   
  	
};