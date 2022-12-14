
(function InsertData() {
  chrome.storage.local.get(['key'], function (result) {
    let userEmail = document.getElementsByName('user_email')[0];
    let userPassword = document.getElementsByName('user_password')[0];
    
    
    let firstName = document.getElementById("first_name");

    let lastName = document.getElementById("last_name");

    let birthDate = document.getElementById("dateOfBirth");

    let passportNo = document.getElementById("passport_no");

    let issueDate = document.getElementById("pptIssueDate");

    let expiryDate = document.getElementById("pptExpiryDate");

    let issuePalace = document.getElementById("pptIssuePalace");
    if(userEmail!=undefined && userPassword!=undefined){
      userEmail.value = result.key[0];
      userPassword.value = result.key[1];
    }
    if(userEmail==undefined || userPassword==undefined){
    firstName.value = result.key[2];
    lastName.value = result.key[3];
    birthDate.value = result.key[4];
    passportNo.value = result.key[5];
    issueDate.value = result.key[6];
    expiryDate.value = result.key[7];
    issuePalace.value = result.key[8];
    }

  });
})();









