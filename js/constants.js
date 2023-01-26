export const easternAfrica = [
  "Djibouti",
  "Seychelles",
  "Comoros",
  "Tanzania",
  "Kenya",
  "Uganda",
  "Eritrea",
  "Mozambique",
  "Madagascar",
  "Malawi",
  "Zambia",
  "Somalia",
  "Zimbabwe",
  "Rwanda",
  "Mauritius",
  "Burundi",
  "Ethiopia",
  "South Sudan",
];

export const middleAfrica = [
  "DR Congo",
  "Congo",
  "Central African Republic",
  "Angola",
  "Cameroon",
  "Gabon",
  "Sao Tome & Principe",
  "Chad",
  "Equatorial Guinea",
];

export const northernAfrica = [
  "Libya",
  "Algeria",
  "Sudan",
  "Morocco",
  "Tunisia",
  "Egypt",
];

export const southernAfrica = [
  "South Africa",
  "Namibia",
  "Botswana",
  "Lesotho",
  "Eswatini",
];
export const westernAfrica = [
  "Sahrawi Arab Democratic Republic",
  "Togo",
  "Sierra Leone",
  "Cabo Verde",
  "Liberia",
  "Mauritania",
  "Ghana",
  "Côte d'Ivoire",
  "Niger",
  "Gambia",
  "Burkina Faso",
  "Nigeria",
  "Mali",
  "Guinea-Bissau",
  "Senegal",
  "Guinea",
  "Benin",
];
export const regions = {
  "Northern Africa": [northernAfrica],
  "Southern Africa": [southernAfrica],
  "Eastern Africa": [easternAfrica],
  "Western Africa": [westernAfrica],
};
export const africanCountries = [
  ...northernAfrica,
  ...southernAfrica,
  ...middleAfrica,
  ...easternAfrica,
  ...westernAfrica,
].sort();
