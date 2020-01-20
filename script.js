

function calculate(form) {
    var applicantName = form.applicantName.value;
    var applicantIncome = form.applicantIncome.value;
    var coApplicantName = form.coApplicantName.value;
    var coApplicantIncome = form.coApplicantIncome.value;

    var resultSpace = document.getElementById("resultSpace");
    //clearing the result space
    resultSpace.innerHTML = "";

    //the following code creates a div element to display the spinner(that indicates loading). This has to be done each time this funtion is called.
    var div1 = document.createElement("div");
    var att1 = document.createAttribute("class");
    att1.value = "spinner-border";
    div1.setAttributeNode(att1);
    var att2 = document.createAttribute("role");
    att2.value = "status";
    div1.setAttributeNode(att2);

    var span1 = document.createElement("span");
    var att3 = document.createAttribute("class");
    att3.value = "sr-only";
    span1.setAttributeNode(att3);
    var node = document.createTextNode("Loading...");
    span1.appendChild(node);

    div1.appendChild(span1);
    resultSpace.appendChild(div1);

    //invoke the modal(alert-box) from here.
    $("#resultModalCenter").modal();

    //API call
    var proxyUrl = 'https://lit-brushlands-56829.herokuapp.com/',
        targetUrl = "https://loan-status-api.herokuapp.com/calculate?ApplicantIncome=" + applicantIncome + "&CoapplicantIncome=" + coApplicantIncome;

    var request = new XMLHttpRequest();
    request.open('GET', proxyUrl + targetUrl, true)
    request.onload = function () {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        console.log(this.response);
        var res = "";
        if (data == "1") {
            res = "Congratulations!! Your loan is likely to be approved!"
        } else if (data == "0") {
            res = "Sorry! Your loan is less likely to be approved!"
        } else {
            res = "Sorry! Some error occured. Please try again."
        }
        document.getElementById('resultSpace').innerHTML = res;

    }

    request.send()
}