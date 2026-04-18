const countries = [

  { value: "AU", label: "Australia" },

  { value: "AT", label: "Austria" },

  { value: "BE", label: "Belgium" },

  { value: "BR", label: "Brazil" },

  { value: "CA", label: "Canada" },

  { value: "CL", label: "Chile" },

  { value: "CZ", label: "Czech Republic" },

  { value: "DK", label: "Denmark" },

  { value: "EE", label: "Estonia" },

  { value: "FR", label: "France" },

  { value: "DE", label: "Germany" },

  { value: "GB", label: "Great Britain" },

  { value: "GR", label: "Greece" },

  { value: "IE", label: "Ireland" },

  { value: "IL", label: "Israel" },

  { value: "IT", label: "Italy" },

  { value: "LU", label: "Luxembourg" },

  { value: "MX", label: "Mexico" },

  { value: "MC", label: "Monaco" },

  { value: "NL", label: "Netherlands" },

  { value: "NZ", label: "New Zealand" },

  { value: "NO", label: "Norway" },

  { value: "PE", label: "Peru" },

  { value: "PL", label: "Poland" },

  { value: "SG", label: "Singapore" },

  { value: "ZA", label: "South Africa" },

  { value: "ES", label: "Spain" },

  { value: "SE", label: "Sweden" },

  { value: "CH", label: "Switzerland" },

  { value: "TR", label: "Turkey" },

  { value: "AE", label: "United Arab Emirates" },

  { value: "US", label: "United States" },

];



const header = document.querySelector('.header');



const logo = document.createElement('a');

logo.className = 'header-logo';





const title = document.createElement('h1');

title.className = 'header-title';

title.innerHTML = 'FIND BEST EVENTS <br> AROUND THE WORLD';



const form = document.createElement('form');

form.className = 'header-form';



const input = document.createElement('input');

input.type = 'text';

input.className = 'header-input';

input.placeholder = 'Start searching';



const select = document.createElement('select');

select.className = 'header-select';



const defaultOption = document.createElement('option');

defaultOption.value = "";

defaultOption.textContent = "Choose country";

defaultOption.disabled = true;

defaultOption.selected = true;

select.appendChild(defaultOption);



countries.forEach(country => {

  const option = document.createElement('option');

  option.value = country.value;

  option.textContent = country.label;

  select.appendChild(option);

});



form.append(input, select);

header.append(logo, title, form);

