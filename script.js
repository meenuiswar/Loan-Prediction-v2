

function calculate(form) {
    var applicantName = form.applicantName.value;
    var applicantIncome = form.applicantIncome.value;
    var coApplicantName = form.coApplicantName.value;
    var coApplicantIncome = form.coApplicantIncome.value;

    $("#resultModalCenter").modal();
    var proxyUrl = 'https://lit-brushlands-56829.herokuapp.com/',
        targetUrl = "https://loan-status-api.herokuapp.com/calculate?ApplicantIncome=" + applicantIncome + "&CoapplicantIncome=" + coApplicantIncome;

    var request = new XMLHttpRequest();
    request.open('GET', proxyUrl + targetUrl, true)
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
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