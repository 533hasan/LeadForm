// ===============================
// Ensure dataLayer exists
// ===============================
window.dataLayer = window.dataLayer || [];

// ===============================
// Lead Form Submit Tracking
// ===============================
document.getElementById("leadForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form values
    const name = document.getElementById("name")?.value || "";
    const email = document.getElementById("email")?.value || "";
    const phone = document.getElementById("phone")?.value || "";
    const message = document.getElementById("message")?.value || "";

    // Push lead event to dataLayer
    dataLayer.push({
        event: "lead_form_submit",
        form_name: "Main Lead Form",
        lead_name: name,
        lead_email: email,
        lead_phone: phone,
        lead_message: message,
        page_url: window.location.href
    });

    // Redirect to Thank You page
    window.location.href = "thankyou.html";
});

// ===============================
// Call Me Button Tracking
// ===============================
function callMe() {
    dataLayer.push({
        event: "call_button_click",
        phone_number: "018710855",
        page_url: window.location.href
    });

    window.location.href = "tel:018710855";
}

// ===============================
// Phone Number Link Tracking
// ===============================
function trackPhoneClick() {
    dataLayer.push({
        event: "phone_number_click",
        phone_number: "018710855",
        page_url: window.location.href
    });
}
