// Lead Form Submit
document.getElementById("leadForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    dataLayer.push({
        event: "lead_form_submit",
        form_name: "Lead Form",
        page: "Home"
    });

    window.location.href = "thankyou.html";
});

// Call Me Button
function callMe() {
    dataLayer.push({
        event: "call_button_click",
        phone_number: "018710855",
        page: document.title
    });

    window.location.href = "tel:018710855";
}

// Phone Number Click
function trackPhoneClick() {
    dataLayer.push({
        event: "phone_number_click",
        phone_number: "018710855",
        page: document.title
    });
}
