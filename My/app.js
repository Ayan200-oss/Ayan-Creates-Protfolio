function toggleMenu() {
  const menu = document.getElementById("navLinks");
  const btn = document.getElementById("menuBtn");

  menu.classList.toggle("active");
  btn.classList.toggle("active");

  // Change icon
  if (btn.classList.contains("active")) {
    btn.innerHTML = "✖";
  } else {
    btn.innerHTML = "☰";
  }
}


const mask = document.querySelector("#div-mask-back");
const tl = gsap.timeline();

tl.to(mask, {
  "--m1": "20%",
  delay: 2,
  duration: 0.5,
  ease: "back.out(2)"
}).to(mask, {
  "--m2": "30%",
  duration: 0.5,
  delay: 0.5,
  ease: "back.out(2)"
});

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);

  gsap.to(mask, {
    "--x": `${x}%`,
    "--y": `${y}%`,
    duration: 0.3,
    ease: "sine.out"
  });
});

/* CREDIT */
// background animation : https://codepen.io/alvarotrigo/pen/GRvYNax
// mask : https://codepen.io/kartikth40/pen/XWMOReZ


document.getElementById("year").innerHTML = new Date().getFullYear();


 let currentStep = 1;
        const totalSteps = 4;

        function updateProgress() {
            const progress = (currentStep / totalSteps) * 100;
            document.getElementById('progressFill').style.width = progress + '%';
            
            const stepElement = document.querySelector('.form-step');
            stepElement.textContent = `STEP ${currentStep} OF ${totalSteps}`;
        }

        function selectRadio(name, value, element) {
            // Clear previous selections
            const group = element.parentElement;
            group.querySelectorAll('.radio-item').forEach(item => {
                item.classList.remove('selected');
            });

            // Select current item
            element.classList.add('selected');
            element.querySelector('input[type="radio"]').checked = true;

            // Handle conditional logic
            handleConditionalLogic(name, value);
            
            // Update step based on selections
            updateCurrentStep();
            updateProgress();
        }

        function toggleCheckbox(element) {
            const checkbox = element.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            
            if (checkbox.checked) {
                element.classList.add('selected');
            } else {
                element.classList.remove('selected');
            }
        }

        function handleConditionalLogic(name, value) {
            if (name === 'needWebsite') {
                const websiteDetails = document.getElementById('websiteDetails');
                const websiteFeatures = document.getElementById('websiteFeatures');
                const alternativeServices = document.getElementById('alternativeServices');

                if (value === 'yes') {
                    // Show website-related fields
                    setTimeout(() => {
                        websiteDetails.classList.add('show');
                    }, 100);
                    setTimeout(() => {
                        websiteFeatures.classList.add('show');
                    }, 200);
                    
                    // Hide alternative services
                    alternativeServices.classList.remove('show');
                } else {
                    // Hide website-related fields
                    websiteDetails.classList.remove('show');
                    websiteFeatures.classList.remove('show');
                    
                    // Show alternative services
                    setTimeout(() => {
                        alternativeServices.classList.add('show');
                    }, 100);
                }
            }
        }

        function updateCurrentStep() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const needWebsite = document.querySelector('input[name="needWebsite"]:checked');
            
            // Step 1: Basic info
            if (!name || !email) {
                currentStep = 1;
                return;
            }
            
            // Step 2: Website question
            if (!needWebsite) {
                currentStep = 2;
                return;
            }
            
            // Step 3: Website details or alternative services
            if (needWebsite.value === 'yes') {
                // For website path, we can go directly to step 4 after selection
                currentStep = 4;
            } else {
                // For non-website path, check if service type is selected
                const serviceType = document.querySelector('input[name="serviceType"]:checked');
                if (!serviceType) {
                    currentStep = 3;
                } else {
                    currentStep = 4;
                }
            }
        }


        





