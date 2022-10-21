(function InsertData(){
chrome.storage.local.get(['key'], function(result) {

  let firstName=document.getElementById("first_name");

  let lastName = document.getElementById("last_name");

   let birthDate = document.getElementById("dateOfBirth");

   let passportNo = document.getElementById("passport_no");

   let issueDate = document.getElementById("pptIssueDate");

   let expiryDate = document.getElementById("pptExpiryDate");

   let issuePalace = document.getElementById("pptIssuePalace");
      
       firstName.value=result.key[0];
       lastName.value=result.key[1];
       birthDate.value=result.key[2];
       passportNo.value=result.key[3];
       issueDate.value=result.key[4];
       expiryDate.value=result.key[5];
       issuePalace.value=result.key[6];

});
})();

