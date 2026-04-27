// ==================== CONTACT FORM ====================

document.addEventListener('DOMContentLoaded', () => {
    initForm();
    initCharCount();
});

// ── Character counter for textarea ────────────────
function initCharCount() {
    const textarea = document.getElementById('message');
    const counter  = document.getElementById('char-count');
    if (!textarea || !counter) return;

    textarea.addEventListener('input', () => {
        const len = textarea.value.length;
        counter.textContent = `${len} / 2000`;
        counter.className = 'char-count';
        if (len > 1800) counter.classList.add('warn');
        if (len >= 2000) counter.classList.add('limit');
    });
}

// ── Validation helpers ────────────────────────────
function showError(fieldId, msg) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);
    if (input) input.classList.add('error');
    if (error) error.textContent = msg;
}

function clearError(fieldId) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);
    if (input) input.classList.remove('error');
    if (error) error.textContent = '';
}

function validateForm() {
    let valid = true;

    // Name
    const name = document.getElementById('name').value.trim();
    clearError('name');
    if (!name) {
        showError('name', 'Please enter your name.');
        valid = false;
    } else if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters.');
        valid = false;
    }

    // Email
    const email = document.getElementById('email').value.trim();
    clearError('email');
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        showError('email', 'Please enter your email address.');
        valid = false;
    } else if (!emailRe.test(email)) {
        showError('email', 'Please enter a valid email address.');
        valid = false;
    }

    // Message
    const message = document.getElementById('message').value.trim();
    clearError('message');
    if (!message) {
        showError('message', 'Please write a message before sending.');
        valid = false;
    } else if (message.length < 10) {
        showError('message', 'Message must be at least 10 characters.');
        valid = false;
    }

    return valid;
}

// ── Clear errors on input ─────────────────────────
function initForm() {
    ['name', 'email', 'message'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', () => clearError(id));
    });

    const form = document.getElementById('contact-form');
    if (form) form.addEventListener('submit', handleSubmit);
}

// ── Form submission (AJAX to Formspree) ───────────
async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    const form    = document.getElementById('contact-form');
    const btn     = document.getElementById('submit-btn');
    const label   = btn.querySelector('.submit-label');
    const icon    = btn.querySelector('.submit-icon');
    const loading = btn.querySelector('.submit-loading');

    // Show loading state
    btn.disabled  = true;
    label.style.display  = 'none';
    icon.style.display   = 'none';
    loading.style.display = 'inline';

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method:  'POST',
            body:    formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            // Hide form, show success
            form.style.display = 'none';
            document.getElementById('form-success').style.display = 'block';
        } else {
            const data = await response.json();
            const msg = data?.errors?.[0]?.message || 'Something went wrong. Please try again.';
            alert(`⚠️ ${msg}`);
            resetBtn(btn, label, icon, loading);
        }
    } catch {
        alert('⚠️ Network error. Please check your connection and try again.');
        resetBtn(btn, label, icon, loading);
    }
}

function resetBtn(btn, label, icon, loading) {
    btn.disabled          = false;
    label.style.display   = 'inline';
    icon.style.display    = 'inline';
    loading.style.display = 'none';
}

// ── Reset form (Send Another) ─────────────────────
function resetForm() {
    const form    = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    const btn     = document.getElementById('submit-btn');
    const label   = btn.querySelector('.submit-label');
    const icon    = btn.querySelector('.submit-icon');
    const loading = btn.querySelector('.submit-loading');

    form.reset();
    document.getElementById('char-count').textContent = '0 / 2000';
    ['name', 'email', 'message'].forEach(clearError);

    success.style.display = 'none';
    form.style.display    = 'block';
    resetBtn(btn, label, icon, loading);
}
