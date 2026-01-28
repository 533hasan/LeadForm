document.getElementById("leadForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // 🔥 dataLayer push for Lead Form
    dataLayer.push({
        event: "lead_form_submit",
        lead_name: name,
        lead_email: email,
        lead_phone: phone,
        lead_message: message,
        form_name: "Main Lead Form",
        page_url: window.location.href
    });

    // Redirect after tracking
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
