$(function () {
	// sessionPostWithRetries({
	// 	url : "https://webcull.com/api/load",
	// 	post : {}
	// }, 1)
	// .then(function (arrData) {
	// 	if (arrData.no_user)
	// 		paging("accounts-page");
	// 	else if(arrData.stacks)
			paging("bookmark-page");
	// });
});
/**
// Load session
getCookies("https://webcull.com", "__DbSessionNamespaces", function(session_hash) {
	fetch("https://webcull.com/accounts", {
		method: 'post',
		credentials : 'omit',
		headers: {
			"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		body: 'proc=getAccounts&__DbSessionNamespaces=' + session_hash
	})
	.then(function(response) {
    		return response.text();
  	})
	.then(function (data) {
		alert(data);
		console.log('Request succeeded with JSON response', data);
	})
	.catch(function (error) {
		console.log('Request failed', error);
	});
});




console.log(chrome.cookies);


/*$(function () {
	
});*/