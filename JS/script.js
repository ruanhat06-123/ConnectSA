document.addEventListener("DOMContentLoaded", () => {
  // Get the main UI elements used by the directory and contact form.
  const searchInput = document.getElementById("serviceSearch");
  const searchButton = document.getElementById("searchButton");
  const searchStatus = document.getElementById("searchStatus");
  const townFilter = document.getElementById("townFilter");
  const serviceGrid = document.getElementById("serviceGrid");

  // Define the available services and their details for the directory.
  const serviceEntries = [
    {
      service: "Chris Hani Baragwanath Hospital",
      category: "Health",
      town: "Johannesburg",
      description: "Tertiary healthcare and specialist medical support.",
      address: "26 Chris Hani Rd, Diepkloof 319-Iq, Soweto, 1864, Johannesburg, Gauteng",
      phone: "N/A",
      googleQuery: "Chris Hani Baragwanath Hospital Johannesburg",
    },
    {
      service: "Legal Aid SA Johannesburg Local Office",
      category: "Legal",
      town: "Johannesburg",
      description: "State legal aid and legal support services.",
      address: "29 De Beer St, Braamfontein, Johannesburg, 2017, Gauteng",
      phone: "N/A",
      googleQuery: "Legal Aid SA Johannesburg Local Office",
    },
    {
      service: "NYDA Johannesburg Branch",
      category: "Youth",
      town: "Johannesburg",
      description: "Youth services and development support.",
      address: "28 Harrison St, Marshalltown, Johannesburg, 2001, Gauteng",
      phone: "N/A",
      googleQuery: "NYDA Johannesburg Branch",
    },
    {
      service: "SASSA Gauteng Regional Office",
      category: "Community",
      town: "Johannesburg",
      description: "Welfare and social grant support services.",
      address: "28 Harrison St, Marshalltown, Johannesburg, 2001, Gauteng",
      phone: "N/A",
      googleQuery: "SASSA Gauteng Regional Office",
    },
    {
      service: "Social Housing Regulatory Authority (SHRA)",
      category: "Housing",
      town: "Johannesburg",
      description: "Housing oversight and affordable housing support.",
      address: "32 Princess of Wales Terrace, Parktown, Johannesburg, 2193, Gauteng",
      phone: "N/A",
      googleQuery: "Social Housing Regulatory Authority Johannesburg",
    },
    {
      service: "Tygerberg Hospital",
      category: "Health",
      town: "Cape Town",
      description: "Tertiary healthcare and specialist medical support.",
      address: "Francie Van Zijl Dr, Parow Valley, Cape Town, 7505, Western Cape",
      phone: "N/A",
      googleQuery: "Tygerberg Hospital Cape Town",
    },
    {
      service: "Legal Aid SA Cape Town Local Office",
      category: "Legal",
      town: "Cape Town",
      description: "State legal aid and legal support services.",
      address: "60 St George's Mall, Cape Town CBD, 8001, Western Cape",
      phone: "N/A",
      googleQuery: "Legal Aid SA Cape Town Local Office",
    },
    {
      service: "NYDA Cape Town Branch",
      category: "Youth",
      town: "Cape Town",
      description: "Youth services and development support.",
      address: "Century Boulevard, Precinct 1, Century City, Cape Town, 7441, Western Cape",
      phone: "N/A",
      googleQuery: "NYDA Cape Town Branch",
    },
    {
      service: "SASSA Western Cape Office",
      category: "Community",
      town: "Cape Town",
      description: "Welfare and social grant support services.",
      address: "Golden Acre Building, Adderley St, Cape Town CBD, 8001, Western Cape",
      phone: "N/A",
      googleQuery: "SASSA Western Cape Office",
    },
    {
      service: "MES Cape Town Day-Service Centre",
      category: "Community",
      town: "Cape Town",
      description: "Urban relief and community support services.",
      address: "2 AJ West Street, Bellville, Cape Town, 7530, Western Cape",
      phone: "N/A",
      googleQuery: "MES Cape Town Day-Service Centre",
    },
    {
      service: "Inkosi Albert Luthuli Central Hospital",
      category: "Health",
      town: "Durban",
      description: "Tertiary healthcare and specialist medical support.",
      address: "800 Vusi Mzimela Rd, Mayville, Durban, 4091, KwaZulu-Natal",
      phone: "N/A",
      googleQuery: "Inkosi Albert Luthuli Central Hospital Durban",
    },
    {
      service: "Legal Aid SA Durban Local Office",
      category: "Legal",
      town: "Durban",
      description: "State legal aid and legal support services.",
      address: "303 Anton Lembede St, Durban CBD, 4001, KwaZulu-Natal",
      phone: "N/A",
      googleQuery: "Legal Aid SA Durban Local Office",
    },
    {
      service: "UKZN Law Clinic",
      category: "Education",
      town: "Durban",
      description: "University-based legal clinic and education support.",
      address: "Howard College Campus, Mazisi Road, Glenwood, Durban, 4041, KwaZulu-Natal",
      phone: "N/A",
      googleQuery: "UKZN Law Clinic Durban",
    },
    {
      service: "NYDA Durban Branch",
      category: "Youth",
      town: "Durban",
      description: "Youth services and development support.",
      address: "Smart Exchange Building, 5 Walnut Rd, Durban CBD, 4001, KwaZulu-Natal",
      phone: "N/A",
      googleQuery: "NYDA Durban Branch",
    },
    {
      service: "SASSA KZN Regional Office",
      category: "Community",
      town: "Pietermaritzburg",
      description: "Welfare and social grant support services.",
      address: "1 Bank Street, Pietermaritzburg, 3201, KwaZulu-Natal",
      phone: "N/A",
      googleQuery: "SASSA KZN Regional Office Pietermaritzburg",
    },
    {
      service: "Universitas Academic Hospital",
      category: "Health",
      town: "Bloemfontein",
      description: "Tertiary healthcare and specialist medical support.",
      address: "1 Logeman St, Universitas, Bloemfontein, 9301, Free State",
      phone: "N/A",
      googleQuery: "Universitas Academic Hospital Bloemfontein",
    },
    {
      service: "Legal Aid SA Bloemfontein Local Office",
      category: "Legal",
      town: "Bloemfontein",
      description: "State legal aid and legal support services.",
      address: "Corner of Aliwal & Charles Streets, Bloemfontein CBD, 9301, Free State",
      phone: "N/A",
      googleQuery: "Legal Aid SA Bloemfontein Local Office",
    },
    {
      service: "NYDA Bloemfontein Branch",
      category: "Youth",
      town: "Bloemfontein",
      description: "Youth services and development support.",
      address: "98 Zastron Street, Bloemfontein CBD, 9301, Free State",
      phone: "N/A",
      googleQuery: "NYDA Bloemfontein Branch",
    },
    {
      service: "SASSA Free State Office",
      category: "Community",
      town: "Bloemfontein",
      description: "Welfare and social grant support services.",
      address: "African Life Building, 75 St Andrew St, Bloemfontein, 9301, Free State",
      phone: "N/A",
      googleQuery: "SASSA Free State Office Bloemfontein",
    },
    {
      service: "Livingstone Tertiary Hospital",
      category: "Health",
      town: "Gqeberha",
      description: "Tertiary healthcare and specialist medical support.",
      address: "Lindsay Rd, Korsten, Gqeberha, 6020, Eastern Cape",
      phone: "N/A",
      googleQuery: "Livingstone Tertiary Hospital Gqeberha",
    },
    {
      service: "Legal Aid SA Gqeberha Local Office",
      category: "Legal",
      town: "Gqeberha",
      description: "State legal aid and legal support services.",
      address: "Prudential Building, 40 Church St, Gqeberha CBD, 6001, Eastern Cape",
      phone: "N/A",
      googleQuery: "Legal Aid SA Gqeberha Local Office",
    },
    {
      service: "NYDA East London Branch",
      category: "Youth",
      town: "East London",
      description: "Youth services and development support.",
      address: "31 Malcomess Park, St George's Rd, Southernwood, East London, 5201, Eastern Cape",
      phone: "N/A",
      googleQuery: "NYDA East London Branch",
    },
    {
      service: "SASSA Eastern Cape Head Office",
      category: "Community",
      town: "Bhisho",
      description: "Welfare and social grant support services.",
      address: "Bisho Office Park, 20 Independent Ave, Bhisho, 5605, Eastern Cape",
      phone: "N/A",
      googleQuery: "SASSA Eastern Cape Head Office Bhisho",
    },
    {
      service: "Pietersburg Provincial Hospital",
      category: "Health",
      town: "Polokwane",
      description: "Tertiary healthcare and specialist medical support.",
      address: "Hospital St, Polokwane Central, Polokwane, 0700, Limpopo",
      phone: "N/A",
      googleQuery: "Pietersburg Provincial Hospital Polokwane",
    },
    {
      service: "Legal Aid SA Polokwane Local Office",
      category: "Legal",
      town: "Polokwane",
      description: "State legal aid and legal support services.",
      address: "BIC Center, 85 Bodenstein St, Polokwane, 0699, Limpopo",
      phone: "N/A",
      googleQuery: "Legal Aid SA Polokwane Local Office",
    },
    {
      service: "NYDA Polokwane Branch",
      category: "Youth",
      town: "Polokwane",
      description: "Youth services and development support.",
      address: "68 Hans Van Rensburg St, Polokwane Central, Polokwane, 0700, Limpopo",
      phone: "N/A",
      googleQuery: "NYDA Polokwane Branch",
    },
    {
      service: "SASSA Limpopo Office",
      category: "Community",
      town: "Polokwane",
      description: "Welfare and social grant support services.",
      address: "48 Landros Mare St, Polokwane Central, Polokwane, 0700, Limpopo",
      phone: "N/A",
      googleQuery: "SASSA Limpopo Office Polokwane",
    },
    {
      service: "Mafikeng Provincial Hospital",
      category: "Health",
      town: "Mahikeng",
      description: "Tertiary healthcare and specialist medical support.",
      address: "Corner of Hector Peterson & University Dr, Mmabatho, Mahikeng, 2735, North West",
      phone: "N/A",
      googleQuery: "Mafikeng Provincial Hospital Mahikeng",
    },
    {
      service: "Legal Aid SA Mafikeng Local Office",
      category: "Legal",
      town: "Mahikeng",
      description: "State legal aid and legal support services.",
      address: "74 Shippard St, Mahikeng CBD, 2745, North West",
      phone: "N/A",
      googleQuery: "Legal Aid SA Mafikeng Local Office",
    },
    {
      service: "NYDA Rustenburg Branch",
      category: "Youth",
      town: "Rustenburg",
      description: "Youth services and development support.",
      address: "101 Steen St, Rustenburg CBD, 0299, North West",
      phone: "N/A",
      googleQuery: "NYDA Rustenburg Branch",
    },
    {
      service: "SASSA North West Office",
      category: "Community",
      town: "Mahikeng",
      description: "Welfare and social grant support services.",
      address: "Master Centre, Industrial Site, Mahikeng, 2745, North West",
      phone: "N/A",
      googleQuery: "SASSA North West Office Mahikeng",
    },
    {
      service: "Rob Ferreira Hospital",
      category: "Health",
      town: "Mbombela",
      description: "Regional healthcare support and referrals.",
      address: "Corner of Madiba Dr & Piet Retief St, Mbombela, 1200, Mpumalanga",
      phone: "N/A",
      googleQuery: "Rob Ferreira Hospital Mbombela",
    },
    {
      service: "Legal Aid SA Mbombela Local Office",
      category: "Legal",
      town: "Mbombela",
      description: "State legal aid and legal support services.",
      address: "40 Brown St, Mbombela CBD, 1201, Mpumalanga",
      phone: "N/A",
      googleQuery: "Legal Aid SA Mbombela Local Office",
    },
    {
      service: "NYDA Nelspruit Branch",
      category: "Youth",
      town: "Mbombela",
      description: "Youth services and development support.",
      address: "Office P3, Nedbank Centre, 30 Brown St, Mbombela, 1201, Mpumalanga",
      phone: "N/A",
      googleQuery: "NYDA Nelspruit Branch",
    },
    {
      service: "SASSA Mpumalanga Office",
      category: "Community",
      town: "Mbombela",
      description: "Welfare and social grant support services.",
      address: "18 Ferreira St, Nelspruit, Mbombela, 1200, Mpumalanga",
      phone: "N/A",
      googleQuery: "SASSA Mpumalanga Office Mbombela",
    },
    {
      service: "Robert Mangaliso Sobukwe Hospital",
      category: "Health",
      town: "Kimberley",
      description: "Tertiary healthcare and specialist medical support.",
      address: "114 Barkly Rd, Homestead, Kimberley, 8301, Northern Cape",
      phone: "N/A",
      googleQuery: "Robert Mangaliso Sobukwe Hospital Kimberley",
    },
    {
      service: "Legal Aid SA Kimberley Local Office",
      category: "Legal",
      town: "Kimberley",
      description: "State legal aid and legal support services.",
      address: "Corner of Stead & Knight Streets, Kimberley CBD, 8301, Northern Cape",
      phone: "N/A",
      googleQuery: "Legal Aid SA Kimberley Local Office",
    },
    {
      service: "NYDA Kimberley Branch",
      category: "Youth",
      town: "Kimberley",
      description: "Youth services and development support.",
      address: "Old Post Office Building, Market Square, Kimberley, 8301, Northern Cape",
      phone: "N/A",
      googleQuery: "NYDA Kimberley Branch",
    },
    {
      service: "SASSA Northern Cape Office",
      category: "Community",
      town: "Kimberley",
      description: "Welfare and social grant support services.",
      address: "95 Du Toitspan Rd, Kimberley CBD, 8301, Northern Cape",
      phone: "N/A",
      googleQuery: "SASSA Northern Cape Office Kimberley",
    },
  ];

  // Create the list of services displayed on the home page.
  const services = serviceEntries.map((entry) => ({ ...entry }));

  if (serviceGrid) {
    serviceGrid.innerHTML = services
      .map((service) => {
        const mapQuery = encodeURIComponent(service.googleQuery);
        return `
          <article class="service-card" data-service="${service.service}" data-category="${service.category}" data-town="${service.town}">
            <h3>${service.service}</h3>
            <span class="service-category">${service.category}</span>
            <p>${service.description}</p>
            <p><strong>Location:</strong> ${service.address}</p>
            <p><strong>Phone:</strong> ${service.phone}</p>
            <a class="map-link" href="https://www.google.com/maps?q=${mapQuery}" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
          </article>
        `;
      })
      .join("");
  }

  // Collect the rendered cards so filtering and search can work on them.
  const cards = Array.from(document.querySelectorAll(".service-card"));

  // Populate the town dropdown from the available service cards.
  const populateTownFilter = () => {
    if (!townFilter) {
      return;
    }

    const towns = [...new Set(cards
      .map((card) => card.dataset.town || "")
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b)))];

    const currentValue = townFilter.value;
    townFilter.innerHTML = '<option value="">All towns</option>' + towns
      .map((town) => `<option value="${town}">${town}</option>`)
      .join("");

    if (towns.includes(currentValue)) {
      townFilter.value = currentValue;
    } else {
      townFilter.value = "";
    }
  };

  // Filter cards based on the current search text and selected town.
  const updateSearchResults = () => {
    if (!searchInput || !searchStatus) {
      return;
    }

    const query = searchInput.value.trim().toLowerCase();
    const selectedTown = townFilter ? townFilter.value.trim() : "";
    let visibleCount = 0;

    cards.forEach((card) => {
      const text = `${card.dataset.service} ${card.dataset.category} ${card.dataset.town || ""}`.toLowerCase();
      const matchesQuery = text.includes(query);
      const matchesTown = selectedTown === "" || (card.dataset.town || "").toLowerCase() === selectedTown.toLowerCase();
      const matches = matchesQuery && matchesTown;

      card.classList.toggle("hidden", !matches);
      if (matches) {
        visibleCount += 1;
      }
    });

    if (query === "" && selectedTown === "") {
      searchStatus.textContent = "Showing all available services.";
    } else if (visibleCount === 0) {
      searchStatus.textContent = "No services found. Try a different search or town.";
    } else {
      const townMessage = selectedTown ? ` in ${selectedTown}` : "";
      searchStatus.textContent = `Showing ${visibleCount} matching service${visibleCount === 1 ? "" : "s"}${townMessage}.`;
    }
  };

  populateTownFilter();

  if (searchInput && searchButton) {
    searchButton.addEventListener("click", updateSearchResults);
    searchInput.addEventListener("input", updateSearchResults);
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        updateSearchResults();
      }
    });
  }

  if (townFilter) {
    townFilter.addEventListener("change", updateSearchResults);
  }

  // Handle contact form validation on the contact page when the form exists.
  // Handle contact form validation on the contact page when the form exists.
  const form = document.getElementById("contactForm");
  if (form) {
    const errors = {
      fullName: document.getElementById("error-fullName"),
      email: document.getElementById("error-email"),
      phone: document.getElementById("error-phone"),
      message: document.getElementById("error-message"),
    };
    const successMessage = document.getElementById("formSuccess");

    const setError = (field, message) => {
      const errorElement = errors[field];
      if (errorElement) {
        errorElement.textContent = message;
      }
    };

    const clearError = (field) => {
      const errorElement = errors[field];
      if (errorElement) {
        errorElement.textContent = "";
      }
    };

    const validateName = () => {
      const value = form.fullName.value.trim();
      if (value.length < 3) {
        setError("fullName", "Full name must be at least 3 characters.");
        return false;
      }
      clearError("fullName");
      return true;
    };

    const validateEmail = () => {
      const value = form.email.value.trim();
      if (!value || !value.includes("@") || !value.includes(".")) {
        setError("email", "Please enter a valid email address.");
        return false;
      }
      clearError("email");
      return true;
    };

    const validatePhone = () => {
      const value = form.phone.value.trim();
      if (!/^\d{10}$/.test(value)) {
        setError("phone", "Phone number must be exactly 10 digits.");
        return false;
      }
      clearError("phone");
      return true;
    };

    const validateMessage = () => {
      const value = form.message.value.trim();
      if (value.length < 20) {
        setError("message", "Message must be at least 20 characters.");
        return false;
      }
      clearError("message");
      return true;
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();
      const isMessageValid = validateMessage();

      if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
        if (successMessage) {
          successMessage.textContent = `Thank you, ${form.fullName.value.trim()}! We will be in touch soon.`;
        }
        form.reset();
        Object.keys(errors).forEach(clearError);
      }
    });
  }
});
