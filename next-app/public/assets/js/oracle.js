document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.oracle-step');
  const options = document.querySelectorAll('.oracle-opt');
  const nextBtn = document.getElementById('oracleNext');
  const prevBtn = document.getElementById('oraclePrev');
  const resultDiv = document.getElementById('oracleResult');
  const resultText = document.getElementById('oracleRecText');
  const wizardContent = document.getElementById('oracleWizardContent');
  
  if (!nextBtn || !prevBtn || !steps.length) return;

  let currentStep = 0;
  let selections = {};

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const stepEl = opt.closest('.oracle-step');
      if (!stepEl) return;
      const stepId = stepEl.dataset.step;
      // Deselect others in the same step
      const optionsContainer = opt.closest('.oracle-options');
      if (optionsContainer) {
        optionsContainer.querySelectorAll('.oracle-opt').forEach(o => o.classList.remove('selected'));
      }
      opt.classList.add('selected');
      selections[stepId] = opt.dataset.val;
      nextBtn.disabled = false;
    });
  });

  nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
      steps[currentStep].classList.remove('active');
      currentStep++;
      steps[currentStep].classList.add('active');
      nextBtn.disabled = !selections[steps[currentStep].dataset.step];
      prevBtn.style.visibility = 'visible';
    } else {
      showResult();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      steps[currentStep].classList.remove('active');
      currentStep--;
      steps[currentStep].classList.add('active');
      nextBtn.disabled = false;
      if (currentStep === 0) prevBtn.style.visibility = 'hidden';
    }
  });

  function showResult() {
    if (wizardContent) wizardContent.style.display = 'none';
    if (resultDiv) resultDiv.style.display = 'block';
    
    let recommendation = "";
    if (selections.goal === 'Investment') {
      recommendation = "The 2.25 BHK Smart-Study layout is optimized for high rental yield and fast capital appreciation in the Tathawade IT corridor.";
    } else if (selections.space === 'Study') {
      recommendation = "The 2.25 BHK configuration with its dedicated Smart-Study space is perfect for your Work-From-Home needs.";
    } else {
      recommendation = "The 3.25 BHK Ultra-Premium layout offers the massive balcony and luxury space your family deserves.";
    }
    
    if (resultText) resultText.innerText = recommendation;
  }
});
