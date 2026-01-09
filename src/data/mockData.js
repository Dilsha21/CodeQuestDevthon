// Mock data for development and testing

export const mockMedicines = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    manufacturer: 'MediCorp',
    category: 'Pain Relief',
    description: 'Pain reliever and fever reducer',
    dosage: '500mg tablets',
    sideEffects: 'Rare but may include rash, nausea',
    prescriptionRequired: false,
    priceRange: { min: 8.99, max: 15.99 },
    commonUses: ['Headache', 'Fever', 'Muscle pain', 'Menstrual cramps']
  },
  {
    id: 2,
    name: 'Amoxicillin 250mg',
    manufacturer: 'PharmaCo',
    category: 'Antibiotics',
    description: 'Antibiotic for bacterial infections',
    dosage: '250mg capsules',
    sideEffects: 'Nausea, diarrhea, allergic reactions',
    prescriptionRequired: true,
    priceRange: { min: 12.99, max: 25.99 },
    commonUses: ['Bacterial infections', 'Ear infections', 'Throat infections']
  },
  {
    id: 3,
    name: 'Ibuprofen 400mg',
    manufacturer: 'HealthLabs',
    category: 'Pain Relief',
    description: 'NSAID for pain and inflammation',
    dosage: '400mg tablets',
    sideEffects: 'Stomach upset, dizziness',
    prescriptionRequired: false,
    priceRange: { min: 6.99, max: 12.99 },
    commonUses: ['Arthritis', 'Menstrual pain', 'Dental pain', 'Fever']
  },
  {
    id: 4,
    name: 'Vitamin D3',
    manufacturer: 'NutriWell',
    category: 'Vitamins',
    description: 'Vitamin D supplement for bone health',
    dosage: '1000 IU tablets',
    sideEffects: 'Rare at recommended doses',
    prescriptionRequired: false,
    priceRange: { min: 8.99, max: 20.99 },
    commonUses: ['Vitamin D deficiency', 'Bone health', 'Immune support']
  },
  {
    id: 5,
    name: 'Metformin 500mg',
    manufacturer: 'DiabCare',
    category: 'Diabetes',
    description: 'Oral diabetes medication',
    dosage: '500mg tablets',
    sideEffects: 'GI upset, metallic taste',
    prescriptionRequired: true,
    priceRange: { min: 10.99, max: 25.99 },
    commonUses: ['Type 2 diabetes', 'PCOS', 'Prediabetes']
  },
  {
    id: 6,
    name: 'Lisinopril 10mg',
    manufacturer: 'CardioHealth',
    category: 'Cardiovascular',
    description: 'ACE inhibitor for blood pressure',
    dosage: '10mg tablets',
    sideEffects: 'Dry cough, dizziness, fatigue',
    prescriptionRequired: true,
    priceRange: { min: 15.99, max: 35.99 },
    commonUses: ['High blood pressure', 'Heart failure', 'Kidney protection']
  },
  {
    id: 7,
    name: 'Atorvastatin 20mg',
    manufacturer: 'CholesterolCare',
    category: 'Cardiovascular',
    description: 'Statin medication for cholesterol',
    dosage: '20mg tablets',
    sideEffects: 'Muscle pain, liver enzyme changes',
    prescriptionRequired: true,
    priceRange: { min: 25.99, max: 55.99 },
    commonUses: ['High cholesterol', 'Heart disease prevention']
  },
  {
    id: 8,
    name: 'Omeprazole 20mg',
    manufacturer: 'GastroHealth',
    category: 'Gastrointestinal',
    description: 'Proton pump inhibitor for acid reflux',
    dosage: '20mg capsules',
    sideEffects: 'Headache, diarrhea, abdominal pain',
    prescriptionRequired: false,
    priceRange: { min: 12.99, max: 28.99 },
    commonUses: ['GERD', 'Stomach ulcers', 'Acid reflux']
  }
];

export const mockPharmacies = [
  {
    id: 1,
    name: 'HealthPlus Pharmacy',
    address: '123 Main St, Downtown, City 12345',
    phone: '+1 234-567-8901',
    email: 'info@healthplus.com',
    website: 'www.healthpluspharmacy.com',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    rating: 4.5,
    totalReviews: 234,
    operatingHours: {
      monday: '8:00 AM - 10:00 PM',
      tuesday: '8:00 AM - 10:00 PM',
      wednesday: '8:00 AM - 10:00 PM',
      thursday: '8:00 AM - 10:00 PM',
      friday: '8:00 AM - 10:00 PM',
      saturday: '9:00 AM - 9:00 PM',
      sunday: '9:00 AM - 6:00 PM'
    },
    services: ['Prescription Filling', 'Health Consultation', 'Vaccination', 'Health Screening'],
    ecoScore: 85,
    licenseNumber: 'PH-2024-001',
    established: '2010',
    status: 'active',
    verificationStatus: 'verified',
    contactPerson: 'Dr. Sarah Johnson',
    inventory: [
      { medicineId: 1, stock: 45, price: 12.99, lastUpdated: '2024-01-08' },
      { medicineId: 2, stock: 12, price: 18.49, lastUpdated: '2024-01-07' },
      { medicineId: 4, stock: 67, price: 15.99, lastUpdated: '2024-01-08' },
      { medicineId: 5, stock: 28, price: 22.49, lastUpdated: '2024-01-06' }
    ]
  },
  {
    id: 2,
    name: 'MediCare Center',
    address: '456 Oak Ave, Westside, City 12345',
    phone: '+1 234-567-8902',
    email: 'contact@medicare.com',
    website: 'www.medicarecenter.com',
    coordinates: { lat: 40.7580, lng: -73.9855 },
    rating: 4.8,
    totalReviews: 312,
    operatingHours: {
      monday: '9:00 AM - 9:00 PM',
      tuesday: '9:00 AM - 9:00 PM',
      wednesday: '9:00 AM - 9:00 PM',
      thursday: '9:00 AM - 9:00 PM',
      friday: '9:00 AM - 9:00 PM',
      saturday: '9:00 AM - 7:00 PM',
      sunday: '10:00 AM - 5:00 PM'
    },
    services: ['Prescription Filling', 'Compounding', 'Delivery', 'Diabetes Care'],
    ecoScore: 92,
    licenseNumber: 'PH-2024-002',
    established: '2015',
    status: 'active',
    verificationStatus: 'verified',
    contactPerson: 'Dr. Michael Chen',
    inventory: [
      { medicineId: 1, stock: 38, price: 11.49, lastUpdated: '2024-01-08' },
      { medicineId: 2, stock: 18, price: 19.99, lastUpdated: '2024-01-07' },
      { medicineId: 3, stock: 52, price: 9.99, lastUpdated: '2024-01-08' },
      { medicineId: 6, stock: 22, price: 28.99, lastUpdated: '2024-01-06' }
    ]
  },
  {
    id: 3,
    name: 'QuickMeds',
    address: '789 Pine Rd, North District, City 12345',
    phone: '+1 234-567-8903',
    email: 'hello@quickmeds.com',
    website: 'www.quickmeds.com',
    coordinates: { lat: 40.7489, lng: -73.9680 },
    rating: 4.2,
    totalReviews: 156,
    operatingHours: {
      monday: '7:00 AM - 11:00 PM',
      tuesday: '7:00 AM - 11:00 PM',
      wednesday: '7:00 AM - 11:00 PM',
      thursday: '7:00 AM - 11:00 PM',
      friday: '7:00 AM - 11:00 PM',
      saturday: '8:00 AM - 10:00 PM',
      sunday: '8:00 AM - 8:00 PM'
    },
    services: ['24/7 Service', 'Delivery', 'Online Orders', 'Emergency Prescriptions'],
    ecoScore: 78,
    licenseNumber: 'PH-2023-156',
    established: '2018',
    status: 'active',
    verificationStatus: 'verified',
    contactPerson: 'Dr. Emily Davis',
    inventory: [
      { medicineId: 3, stock: 0, price: 13.99, lastUpdated: '2024-01-05' },
      { medicineId: 4, stock: 45, price: 14.99, lastUpdated: '2024-01-08' },
      { medicineId: 7, stock: 15, price: 45.99, lastUpdated: '2024-01-07' }
    ]
  },
  {
    id: 4,
    name: 'Green Pharmacy',
    address: '321 Elm St, Eco District, City 12345',
    phone: '+1 234-567-8904',
    email: 'info@greenpharmacy.com',
    website: 'www.greenpharmacy.com',
    coordinates: { lat: 40.7282, lng: -73.9942 },
    rating: 4.7,
    totalReviews: 189,
    operatingHours: {
      monday: '8:00 AM - 8:00 PM',
      tuesday: '8:00 AM - 8:00 PM',
      wednesday: '8:00 AM - 8:00 PM',
      thursday: '8:00 AM - 8:00 PM',
      friday: '8:00 AM - 8:00 PM',
      saturday: '9:00 AM - 6:00 PM',
      sunday: '10:00 AM - 4:00 PM'
    },
    services: ['Organic Products', 'Eco-Friendly', 'Recycling Program', 'Sustainable Practices'],
    ecoScore: 95,
    licenseNumber: 'PH-2023-145',
    established: '2020',
    status: 'active',
    verificationStatus: 'verified',
    contactPerson: 'Dr. Robert Green',
    inventory: [
      { medicineId: 1, stock: 42, price: 12.49, lastUpdated: '2024-01-08' },
      { medicineId: 4, stock: 58, price: 16.99, lastUpdated: '2024-01-08' },
      { medicineId: 5, stock: 31, price: 23.99, lastUpdated: '2024-01-07' }
    ]
  }
];

export const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 234-567-8901',
    dateOfBirth: '1985-05-15',
    address: '123 User St, City 12345',
    registrationDate: '2024-01-05',
    lastActive: '2024-01-08',
    status: 'active',
    verificationStatus: 'verified',
    totalOrders: 45,
    totalSpent: 1250.50,
    co2Saved: 2.3,
    preferences: {
      notifications: true,
      emailUpdates: true,
      locationSharing: true
    },
    medicalHistory: {
      allergies: ['Penicillin'],
      conditions: ['Hypertension'],
      currentMedications: ['Lisinopril 10mg']
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    phone: '+1 234-567-8902',
    dateOfBirth: '1990-08-22',
    address: '456 User Ave, City 12345',
    registrationDate: '2024-01-03',
    lastActive: '2024-01-07',
    status: 'active',
    verificationStatus: 'verified',
    totalOrders: 32,
    totalSpent: 890.75,
    co2Saved: 1.8,
    preferences: {
      notifications: true,
      emailUpdates: false,
      locationSharing: true
    },
    medicalHistory: {
      allergies: [],
      conditions: ['Type 2 Diabetes'],
      currentMedications: ['Metformin 500mg']
    }
  }
];

export const mockOrders = [
  {
    id: 1,
    userId: 1,
    pharmacyId: 1,
    medicines: [
      { medicineId: 1, quantity: 2, price: 12.99 },
      { medicineId: 4, quantity: 1, price: 15.99 }
    ],
    totalAmount: 41.97,
    status: 'completed',
    orderDate: '2024-01-08',
    deliveryDate: '2024-01-08',
    deliveryMethod: 'pickup',
    prescriptionRequired: false,
    paymentMethod: 'credit_card',
    carbonImpact: 0.2
  },
  {
    id: 2,
    userId: 2,
    pharmacyId: 2,
    medicines: [
      { medicineId: 2, quantity: 1, price: 19.99 },
      { medicineId: 6, quantity: 1, price: 28.99 }
    ],
    totalAmount: 48.98,
    status: 'processing',
    orderDate: '2024-01-08',
    deliveryDate: '2024-01-09',
    deliveryMethod: 'delivery',
    prescriptionRequired: true,
    paymentMethod: 'insurance',
    carbonImpact: 0.3
  }
];

export const mockReviews = [
  {
    id: 1,
    userId: 1,
    pharmacyId: 1,
    rating: 5,
    comment: 'Great pharmacy with excellent service. Found my medicine quickly and staff was very helpful.',
    date: '2024-01-05',
    helpful: 12,
    verified: true
  },
  {
    id: 2,
    userId: 2,
    pharmacyId: 2,
    rating: 4,
    comment: 'Good selection of medicines and reasonable prices. The eco-friendly initiatives are commendable.',
    date: '2024-01-03',
    helpful: 8,
    verified: true
  },
  {
    id: 3,
    userId: 3,
    pharmacyId: 1,
    rating: 5,
    comment: 'Always have what I need in stock. The online inventory system is very accurate.',
    date: '2023-12-28',
    helpful: 15,
    verified: true
  }
];

export const mockSustainabilityTips = [
  {
    id: 1,
    title: 'Choose Nearby Pharmacies',
    description: 'Select the closest pharmacy with your medicine to minimize travel emissions.',
    category: 'transportation',
    impact: 'high',
    difficulty: 'easy',
    estimatedSavings: '0.5-1.5 kg CO₂ per visit'
  },
  {
    id: 2,
    title: 'Bundle Your Purchases',
    description: 'Buy multiple medicines in one trip to reduce the number of visits.',
    category: 'transportation',
    impact: 'medium',
    difficulty: 'easy',
    estimatedSavings: '0.3-0.8 kg CO₂ per bundled trip'
  },
  {
    id: 3,
    title: 'Check Stock Online',
    description: 'Verify availability before visiting to avoid wasted trips.',
    category: 'efficiency',
    impact: 'high',
    difficulty: 'easy',
    estimatedSavings: '0.2-0.5 kg CO₂ per avoided trip'
  },
  {
    id: 4,
    title: 'Proper Medicine Disposal',
    description: 'Dispose of expired medicines at designated collection points.',
    category: 'waste',
    impact: 'medium',
    difficulty: 'moderate',
    estimatedSavings: '0.1-0.3 kg CO₂ per proper disposal'
  },
  {
    id: 5,
    title: 'Use Generic Alternatives',
    description: 'Choose generic medicines when available to reduce manufacturing impact.',
    category: 'consumption',
    impact: 'low',
    difficulty: 'easy',
    estimatedSavings: '0.1-0.2 kg CO₂ per prescription'
  },
  {
    id: 6,
    title: 'Digital Prescriptions',
    description: 'Opt for e-prescriptions to reduce paper waste.',
    category: 'digital',
    impact: 'low',
    difficulty: 'easy',
    estimatedSavings: '0.05-0.1 kg CO₂ per prescription'
  }
];

export const mockChatbotResponses = {
  greetings: [
    "Hello! I'm your AI health assistant. How can I help you today?",
    "Hi there! I can help you find medicines, pharmacies, and provide health information.",
    "Welcome! I'm here to assist with your healthcare needs."
  ],
  medicineInfo: {
    headache: "For mild headaches, over-the-counter options include Paracetamol, Ibuprofen, or Aspirin. Always consult with a healthcare professional for persistent headaches.",
    fever: "Common fever reducers include Paracetamol and Ibuprofen. Stay hydrated and rest. Consult a doctor if fever persists for more than 3 days.",
    pain: "For general pain relief, Paracetamol and Ibuprofen are common options. Follow dosage instructions and consult a pharmacist if unsure."
  },
  emergency: "For medical emergencies, call your local emergency number immediately. This includes chest pain, difficulty breathing, severe bleeding, or loss of consciousness.",
  disclaimer: "I provide general information only and am not a substitute for professional medical advice. Always consult healthcare professionals for personal medical concerns."
};
