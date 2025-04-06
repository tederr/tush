// script.js
let currentStep = 0;
function showNext() {
  const totalSteps = 19;
  if (currentStep <= totalSteps) {
    const current = document.getElementById(`step${currentStep}`);
    const next = document.getElementById(`step${currentStep + 1}`);
    if (current) current.classList.add('hidden');
    if (next) next.classList.remove('hidden');
    currentStep++;
  }
}
