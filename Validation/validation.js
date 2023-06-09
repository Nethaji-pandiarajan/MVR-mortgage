
/// Send Mail 

function sendingMail(params) {

    var serviceId = "service_43gm6nh";
    var templateId = "template_m2ou66a";

    emailjs.send(serviceId, templateId, params).then((res) => {
        alert("Your Message sent successfully");
    })
        .catch((err) => console.log(err));

}

//////////// Common Validation

function onlyCharacters(text) {

    var alphaExp = /^[a-zA-Z]+$/;
    if (text.match(alphaExp)) {
        return true;
    } else {
        alert("Please enter only alphabets");
        return false;
    }
}

function emailValidation(email) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
        return true;
    } else {
        alert("Please enter valid email");
        return false;
    }

}

function numberValidation(number) {
    var numRegex = /^[0-9]*$/;
    if (number.match(numRegex)) {
        return true;
    } else {
        alert("Please enter numeric values");
        return false;
    }
}

function phoneNumberValidation(phone) {

}

function validateZipCode(zipCode) {

}
// Contact page validation


function CheckhomeContactValidation() {

    var Name = document.getElementById('contactName').value;
    var email = document.getElementById('contactEmail').value;
    var subject = document.getElementById('contactSubject').value;
    var Message = document.getElementById('contactMessage').value;

    if (!Name) {
        alert('Please enter valid name');
        return false;
    } else {
        onlyCharacters(Name);
    }

    if (!email) {
        alert('Please enter email');
        return false;
    } else {
        emailValidation(email);
    }

    if (!subject) {
        alert('Please enter subject');
        return false;
    } else {
        onlyCharacters(subject);
    }

    var message = "subject :" +subject + "," + "message :" + Message;

    createEmailParam(Name,email,message);

}

function createEmailParam(name,email,message){
    
    var params = {
        name: name,
        email: email,
        message: message
    }

    sendingMail(params);

}

// Get a quote validation

function CheckQuoteValidation() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('yourEmail').value;
    var Phone = document.getElementById('phoneNumber').value;
    var loanAmount = document.getElementById('loanAmount').value;
    var propertyValue = document.getElementById('propertyValue').value;
    var loanTerm = document.getElementById('loanTerm').value;
    var creditHistroy = document.getElementById('creditHistory').value;

    if (!firstName) {
        alert('Please enter valid name');
        return false;
    } else {
        onlyCharacters(firstName);
    }

    if (!lastName) {
        alert('Please enter valid name');
        return false;
    } else {
        onlyCharacters(lastName);
    }

    if (!email) {
        alert('Please enter email');
        return false;
    } else {
        emailValidation(email);
    }

    if (!Phone) {
        alert('Please enter Phone');
        return false;
    } else {
        //Need to add us phone number 

    }

    if (!loanAmount) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(loadAmount);
    }

    if (!propertyValue) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(propertyValue);
    }

    if (!creditHistroy) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(creditHistroy);
    }

    var name = firstName + " " + lastName


    // var inputs = [{
    //     "Phone": Phone,
    //     "loanAmount": loanAmount,
    //     "propertyValue": propertyValue,
    //     "loanTerm": loanTerm,
    //     "creditHistroy": creditHistroy,
    // }]

    var message = "Phone :" + Phone + "," + "loanAmount :" + loanAmount + "," + "propertyValue: " + propertyValue + "," + "loanTerm :" + loanTerm + "," +"creditHistroy:" + creditHistroy;

    createEmailParam(name,email,message);

}


// Validation for check Home value Estimation

function CheckHomeValueEstimationValidation() {

    var fullName = document.getElementById('yourFullName').value;
    var email = document.getElementById('yourEmailAddress').value;
    var phoneNumber = document.getElementById('yourPhoneNumber').value;
    var propertyAddress = document.getElementById('propertyAddress').value;
    var propertyType = document.getElementById('yourPropertyType').value;
    var builtYear = document.getElementById('buildYear').value;
    var propertyUsed = document.getElementById('yourPropertyBeUsed').value;
    var resonForRequest = document.getElementById('reasonForRequest').value;
    var additionInfo = document.getElementById('additionalInformation').value;

    if (!fullname) {
        alert('Please enter valid name');
        return false;
    } else {
        onlyCharacters(fullname);
    }

    if (!propertyAddress) {
        alert('Please enter valid name');
        return false;
    } else {
        onlyCharacters(propertyAddress);
    }

    if (!email) {
        alert('Please enter email');
        return false;
    } else {
        emailValidation(email);
    }

    if (!phoneNumber) {
        alert('Please enter Phone');
        return false;
    } else {
        //Need to add us phone number 

    }

    if (!builtYear) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(builtYear);
    }

    if (!additionInfo) {
        alert('Please enter valid name');
        return false;
    } else {
        onlyCharacters(additionInfo);
    }

    // var inputs = [{
    //     "Phone": phoneNumber,
    //     "propertyAddress": propertyAddress,
    //     "propertyType": propertyType,
    //     "builtYear": builtYear,
    //     "propertyUsed": propertyUsed,
    //     "resonForRequest": resonForRequest,
    //     "additionInfo": additionInfo
    // }]

    var message = "Phone :" + phoneNumber + "," + "propertyAddress :" + propertyAddress + "," + "propertyType: " + propertyType + "," + "builtYear :" + builtYear + "," +"propertyUsed:" + propertyUsed +","+ "resonForRequest:" + resonForRequest + ","+ "additionInfo:" +additionInfo;

    createEmailParam(name,email,message);

}



/// Check validation for Refinance Analysis

function checkRefinanceAnalysisValidation() {

    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('emailAddress').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var zipCode = document.getElementById('zipCode').value;
    var propertyType = document.getElementById('propertyType').value;
    var creditScore = document.getElementById('creditScore').value;
    var purchaseYear = document.getElementById('purchaseYear').value;
    var estimatedPropertyValue = document.getElementById('estimatedPropertyValue').value;
    var remainingMoratgeBalance = document.getElementById('remainingMoratgeBalance').value;
    var curentMortageInterestRate = document.getElementById('curentMortageInterestRate').value;
    var secondMoratage = document.getElementById('secondMoratage').value;
    var propertyUsed = document.getElementById('propertyBeUsed').value;
    var borrowAdditionalCash = document.getElementById('borrowAdditionalCash').value;
    var yourEmployeeStatus = document.getElementById('yourEmployeeStatus').value;
    var qualifyingAnnualIncome = document.getElementById('qualifyingAnnualIncome').value;

    if (!fullName) {
        alert('Please enter valid name');
        return false;
    } else {
        onlyCharacters(fullname);
    }

    if (!email) {
        alert('Please enter email');
        return false;
    } else {
        emailValidation(email);
    }

    if (!phoneNumber) {
        alert('Please enter Phone');
        return false;
    } else {
        //Need to add us phone number 

    }

    if (!zipCode) {
        alert('Invalid Zip code');
        return false;
    } else {
        validateZipCode(zipCode);
    }

    if (!propertyAddress) {
        alert('Please enter valid name');
        return false;
    } else {
        onlyCharacters(propertyAddress);
    }

    if (!creditScore) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(creditScore);
    }

    if (!purchaseYear) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(purchaseYear);
    }

    if (!estimatedPropertyValue) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(estimatedPropertyValue);
    }

    if (!remainingMoratgeBalance) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(remainingMoratgeBalance);
    }

    if (!curentMortageInterestRate) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(curentMortageInterestRate);
    }

    if (!qualifyingAnnualIncome) {
        alert('please enter valid inputs');
        return false;
    } else {
        numberValidation(qualifyingAnnualIncome);
    }

    // var inputs = [{
    //     "Phone": phoneNumber,
    //     "zipCode": zipCode,
    //     "propertyType": propertyType,
    //     "creditScore": creditScore,
    //     "purchaseYear": purchaseYear,
    //     "estimatedPropertyValue": estimatedPropertyValue,
    //     "remainingMoratgeBalance": remainingMoratgeBalance,
    //     "curentMortageInterestRate": curentMortageInterestRate,
    //     "secondMoratage": secondMoratage,
    //     "propertyUsed": propertyUsed,
    //     "borrowAdditionalCash": borrowAdditionalCash,
    //     "yourEmployeeStatus": yourEmployeeStatus,
    //     "qualifyingAnnualIncome": qualifyingAnnualIncome
    // }]

    var message = "Phone :" + phoneNumber + "," + "zipCode :" + zipCode + "," + 
    "propertyType: " + propertyType + "," + "creditScore :" + creditScore + "," +"purchaseYear:" + 
    purchaseYear +","+ "estimatedPropertyValue:" + estimatedPropertyValue + ","+ "remainingMoratgeBalance:" +remainingMoratgeBalance
    + "curentMortageInterestRate :" + curentMortageInterestRate + "," + "secondMoratage" + secondMoratage +"," + "propertyUsed:" + propertyUsed
    + "borrowAdditionalCash:" + borrowAdditionalCash + ","+ "yourEmployeeStatus: " +yourEmployeeStatus + ","+ "qualifyingAnnualIncome:" + qualifyingAnnualIncome;

    createEmailParam(name,email,message);

}


///  Check pre-approval letter validation

function checkpreApprovalLetterValidation() {

    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var zipCode = document.getElementById('zipCode').value;
    var propertyType = document.getElementById('propertyType').value;
    var firstTimeHomebuyer = document.getElementById('firstTimeHomebuyer').value;
    var currentPropertyPurchaseSituation = document.getElementById('currentPropertyPurchaseSituation').value;
    var propertyBeUsed = document.getElementById('propertyBeUsed').value;
    var propertyValue = document.getElementById('propertyValue').value;
    var loanTerm = document.getElementById('loanTerm').value;
    var creditScore = document.getElementById('creditScore').value;
    var employementStatus = document.getElementById('employementStatus').value;
    var additionalInformation = document.getElementById('additionalInformation').value;

    if (!fullName) {
        alert('Please enter valid name');
        return false;
    } else {
        onlyCharacters(fullname);
    }

    if (!email) {
        alert('Please enter email');
        return false;
    } else {
        emailValidation(email);
    }

    if (!phoneNumber) {
        alert('Please enter Phone');
        return false;
    } else {
        //Need to add us phone number 

    }

    if (!zipCode) {
        alert('Invalid Zip code');
        return false;
    } else {
        validateZipCode(zipCode);
    }

    if (!propertyValue) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(propertyValue);
    }

    if (!creditScore) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(creditScore);
    }


    if (!additionalInformation) {
        alert('Please enter valid name');
        return false;
    } else {
        onlyCharacters(additionalInformation);
    }

    // var inputs = [{
    //     "Phone": phoneNumber,
    //     "zipCode": zipCode,
    //     "propertyType": propertyType,
    //     "firstTimeHomebuyer": firstTimeHomebuyer,
    //     "currentPropertyPurchaseSituation": currentPropertyPurchaseSituation,
    //     "propertyBeUsed": propertyBeUsed,
    //     "propertyValue": propertyValue,
    //     "loanTerm": loanTerm,
    //     "creditScore": creditScore,
    //     "employementStatus": employementStatus,
    //     "additionalInformation": additionalInformation
    // }]

    var message = "Phone :" + phoneNumber + "," + "zipCode :" + zipCode + "," + 
    "propertyType: " + propertyType + "," + "firstTimeHomebuyer :" + firstTimeHomebuyer + "," +"currentPropertyPurchaseSituation:" + 
    currentPropertyPurchaseSituation +","+ "propertyBeUsed:" + propertyBeUsed + ","+ "propertyValue:" +propertyValue
    + "loanTerm :" + loanTerm + "," + "creditScore" + creditScore +"," + "employementStatus:" + employementStatus
    + "additionalInformation:" + additionalInformation ;

    createEmailParam(name,email,message);

}


function totalAmountCalc() {

    checkMandatoryField();
    var loanAmount = document.getElementById('loanAmount').value;
    var interestRate = document.getElementById('interestRate').value;
    var loanTerm = document.getElementById('loanTerm').value;
    var hoi = document.getElementById('homeInsurance').value;
    var ptax = document.getElementById('propertyTaxes').value;
    var hoa = document.getElementById('hoaDues').value;

    hoa = hoa * 1;


    var monthlyIR = interestRate / 1200;

    var monthlyval = loanTerm * 12;

    var mhoi = hoi / 12;

    var mptax = ptax / 12;
    var numbermptax = mptax;
    var numberStringmptax = numbermptax.toString(); // Convert number to string
    var splitCodemptax = numberStringmptax.split('.'); // Split the string at the decimal point
    var wholePartmptax = splitCodemptax[0];
    console.log(splitCodemptax[1]);
    if(splitCodemptax[1]){
        var decimalPartmptax = splitCodemptax[1].slice(0,2);
        var Totmptax = wholePartmptax+"."+decimalPartmptax
    }else{
        var Totmptax = wholePartmptax +".00"
    }
   
    var a = (1 + monthlyIR);

    var pow = Math.pow(a,monthlyval);

    var b = pow - 1;

    // var totalMonthlyValue = loanAmount / pow / [monthlyIR * b] + mhoi + mptax + hoa;
    var totalMonthlyValue = (loanAmount * (monthlyIR * pow) / b) + mhoi + mptax + hoa;
    var totalMontlyValueSplit = splitValues(totalMonthlyValue);

    if(totalMonthlyValue == NaN){
        document.getElementById('totalMonthlyPay').innerHTML = 'Please enter valid inputs';
        $('#totalMonthlyPay').css('color','red');
    }else{
        document.getElementById('totalMonthlyPay').innerHTML = '';
        document.getElementById('totalMonthlyPay').innerHTML = "$" + totalMontlyValueSplit;
        document.getElementById('totalMonthlyPay1').innerHTML = "$" + totalMontlyValueSplit;
        var str = totalMontlyValueSplit;
        var substr = str.split('.');
        var percentageValue = substr[1].slice(0,3);
        
    }

    var PrinAndInt = (loanAmount * (monthlyIR * pow) / b);
    var numberPrinAndInt = PrinAndInt;
    var numberStringPrinAndInt = numberPrinAndInt.toString(); // Convert number to string
    var splitCodePrinAndInt = numberStringPrinAndInt.split('.'); // Split the string at the decimal point
    var wholePartPrinAndInt = splitCodePrinAndInt[0];
    console.log(splitCodePrinAndInt[1]);
    if(splitCodePrinAndInt[1]){
        var decimalPartPrinAndInt = splitCodePrinAndInt[1].slice(0,2);
        var TotPrinAndInt = wholePartPrinAndInt+"."+decimalPartPrinAndInt
    }else{
        var TotPrinAndInt = wholePartmptax +".00"
    }
   
	
	
    var homeInsurance = mhoi;
    var numberhomeInsurance = homeInsurance;
    var numberStringhomeInsurance = numberhomeInsurance.toString(); // Convert number to string
    var splitCodehomeInsurance = numberStringhomeInsurance.split('.'); // Split the string at the decimal point
    var wholeParthomeInsurance = splitCodehomeInsurance[0];
    console.log(splitCodehomeInsurance[1]);
    if(splitCodehomeInsurance[1]){
        var decimalParthomeInsurance = splitCodehomeInsurance[1].slice(0,2);
        var TothomeInsurance = wholeParthomeInsurance+"."+decimalParthomeInsurance
    }else{
        var TothomeInsurance = wholeParthomeInsurance +".00"
    }

    document.getElementById('prinAndIn').innerHTML = '';
    document.getElementById('homeIns').innerHTML = '';
    document.getElementById('propTax').innerHTML = '';
    document.getElementById('hoaFees').innerHTML = '';

    document.getElementById('prinAndIn').innerHTML = "$" + TotPrinAndInt;
    document.getElementById('homeIns').innerHTML = "$" + TothomeInsurance;
    document.getElementById('propTax').innerHTML = "$" + Totmptax;
    document.getElementById('hoaFees').innerHTML = "$" + hoa;

	//myChart.data.datasets[0].data[4] = (totalMontlyValueSplit);
	myChart.data.datasets[0].data[0] = (TotPrinAndInt);
	myChart.data.datasets[0].data[1] = (TothomeInsurance);
	myChart.data.datasets[0].data[2] = (Totmptax);
	myChart.data.datasets[0].data[3] = (hoa);
	myChart.update();
    // document.getElementById('loanAmount').value = '';
    // document.getElementById('interestRate').value = '';
    // document.getElementById('loanTerm').value = '30';
    // document.getElementById('homeInsurance').value = '';
    // document.getElementById('propertyTaxes').value = '';
    // document.getElementById('hoaDues').value = '';
    // document.getElementById('propertyPurchasePrice').value = '';
    // document.getElementById('downPayment').value = '';
    // document.getElementById('pmiMonth').value = '';

}

function checkMandatoryField(){
    var loanAmount = document.getElementById('loanAmount').value;
    var interestRate = document.getElementById('interestRate').value;
    //var loanTerm = document.getElementById('loanTerm').value;
    var hoi = document.getElementById('homeInsurance').value;
    var ptax = document.getElementById('propertyTaxes').value;
    var hoa = document.getElementById('hoaDues').value;

    if (!loanAmount) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(loanAmount);
    }

    if (!interestRate) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(interestRate);
    }

    if (!hoi) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(hoi);
    }

    if (!ptax) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(ptax);
    }

    if (!hoa) {
        alert('please enter valid inputs')
        return false;
    } else {
        numberValidation(hoa);
    }

    
}

function splitValues(value){
    value = value.toString();
    var parts = value.split('.');
    var beforeDot = parts[0];
    var afterDot = value.slice(value.indexOf('.') + 1);
    var percentageValue = afterDot.substring(0, 2);

    var amount = beforeDot + "."+ percentageValue;

    return amount;

}