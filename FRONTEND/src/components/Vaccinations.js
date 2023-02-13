import measles from "../assets/img/measles.png";
import vitamin from "../assets/img/vitamin.png";
import phbv from "../assets/img/phbv.png";
import opv from "../assets/img/polio.png";
import pcv from "../assets/img/pcv.png";
import bcg from "../assets/img/bcg.png";

const Vaccinations = [
  {
    id: 1,
    name: "Meningococcal A conjugate vaccine",
    home: "Meningococcal conjugate (MenACWY) vaccine protects against four types (serogroups A, C, W, and Y)",
    description:
      "Meningococcal conjugate (MenACWY) vaccine protects against four types (serogroups A, C, W, and Y) of Neisseria meningitidis bacteria.",
    image: measles,
  },
  {
    id: 2,
    name: "DTwP-Hib-HepB (Whole cell) vaccine",
    home: "DTwP-Hib-HepB is a vaccine for diphtheria, tetanus, pertussis, Haemophilus influenzae type b and hepatitis B.",
    description:
      "DTwP-Hib-HepB is a vaccine for diphtheria, tetanus, pertussis, Haemophilus influenzae type b and hepatitis B. Babies can catch these serious diseases from birth so it is important to protect them as soon as possible",
    image: measles,
  },
  {
    id: 3,
    name: "BCG (Baccille Calmette Guérin) vaccine",
    home: "Bacille Calmette-Guérin (BCG) is a vaccine for tuberculosis (TB) disease.",
    description:
      "Bacille Calmette-Guérin (BCG) is a vaccine for tuberculosis (TB) disease. It is used to prevent childhood tuberculous meningitis and miliary disease.",
    image: bcg,
  },
  {
    id: 4,
    name: "IPV (Inactivated polio vaccine)",
    home: "IPV is a vaccine for Polio. It protects against severe disease caused by poliovirus.",
    description:
      "IPV is a vaccine for Polio. It protects against severe disease caused by poliovirus.",
    image: measles,
  },
  {
    id: 5,
    name: "Measles vaccine",
    home: "Measles can be prevented with MMR vaccine.",
    description:
      "Measles can be prevented with MMR vaccine. The vaccine protects against three diseases: measles, mumps, and rubella.",
    image: measles,
  },
  {
    id: 6,
    name: "OPV (Oral polio vaccine)",
    home: "OPV is a vaccine for Polio. It protects against severe disease caused by poliovirus.",
    description:
      "OPV is a vaccine for Polio. It protects against severe disease caused by poliovirus.",
    image: opv,
  },
  {
    id: 7,
    name: "PCV-10 vaccine",
    home: "Pneumococcal polyvalent vaccine is an active immunizing agent used to prevent infection by pneumococcal bacteria.",
    description:
      "Pneumococcal polyvalent vaccine is an active immunizing agent used to prevent infection by pneumococcal bacteria.",
    image: pcv,
  },
  {
    id: 8,
    name: "Pediatric Hepatitis B vaccine",
    home: "Hepatitis B Vaccine prevents infection of the liver caused by the hepatitis virus.",
    description:
      "Hepatitis B Vaccine prevents infection of the liver caused by the hepatitis virus.",
    image: phbv,
  },
  {
    id: 9,
    name: "Vitamin A supplements",
    home: "Vitamin A is needed for the proper growth and functioning of many parts of the body.",
    description:
      "Vitamin A is needed for the proper growth and functioning of many parts of the body, including the eyes, skin, and immune system.",
    image: vitamin,
  },
  {
    id: 10,
    name: "YF (Yellow fever) vaccine",
    home: "Yellow fever vaccine is a vaccine that protects against yellow fever.",
    description:
      "Yellow fever vaccine is a vaccine that protects against yellow fever. Yellow fever is a viral infection that occurs in Africa and South America. ",
    image: measles,
  },
];

export default Vaccinations;
