# MedFinder - Smart Medicine Locator

A comprehensive web application that helps users find medicines at nearby pharmacies while promoting environmental sustainability through eco-friendly recommendations and carbon footprint tracking.

## 🌟 Features

### For Users (Patients)
- **Real-time Medicine Search**: Find available medicines at nearby pharmacies instantly
- **Eco-Friendly Recommendations**: Get pharmacy suggestions that minimize travel distance and reduce carbon emissions
- **Refill & Stock-Up Reminders**: Timely notifications for medication refills
- **Sustainability Dashboard**: Track your environmental impact and CO₂ savings
- **AI Health Assistant**: Get general health information and guidance
- **User Reviews & Ratings**: Share experiences and help others make informed choices

### For Pharmacy Administrators
- **Inventory Management**: Real-time stock updates and expiry tracking
- **Demand Forecasting**: AI-powered predictions to optimize stock levels
- **Order Management**: Process and track customer orders efficiently
- **Performance Analytics**: Monitor sales, ratings, and customer satisfaction
- **Eco Score Tracking**: Measure and improve sustainability practices

### For Super Administrators
- **User Management**: Manage patient accounts and verification
- **Pharmacy Management**: Approve and monitor pharmacy registrations
- **System Analytics**: Comprehensive reports and insights
- **Configuration Settings**: Customize system-wide parameters
- **Security & Compliance**: Ensure data protection and regulatory compliance

## 🚀 Technology Stack

- **Frontend**: React.js 18 with modern hooks
- **Routing**: React Router v6
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Charts**: Recharts for data visualization
- **State Management**: React Context API
- **Backend Ready**: FastAPI (planned integration)
- **Database**: MySQL (planned integration)
- **Maps**: Google Maps API (planned integration)

## 📁 Project Structure

```
src/
├── components/           # Shared components
│   ├── Layout.js        # Main layout wrapper
│   ├── Navigation.js    # Navigation bar
│   └── Footer.js        # Footer component
├── contexts/            # React contexts
│   └── AuthContext.js   # Authentication context
├── pages/               # Page components
│   ├── auth/           # Authentication pages
│   ├── user/           # User pages
│   ├── pharmacy/       # Pharmacy admin pages
│   └── admin/          # Super admin pages
├── data/               # Mock data
│   └── mockData.js     # Development data
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd medfinder-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
# or
yarn build
```

## 🎨 Design System

The application uses a comprehensive design system built with Tailwind CSS:

### Color Palette
- **Primary**: Blue tones for main actions and branding
- **Secondary**: Gray tones for text and backgrounds
- **Success**: Green for positive states
- **Warning**: Amber for caution states
- **Danger**: Red for error states

### Typography
- **Font**: Inter (system font stack)
- **Headings**: Bold weights with clear hierarchy
- **Body**: Regular weight for readability

### Components
- **Buttons**: Multiple variants (primary, secondary, success, warning, danger)
- **Cards**: Consistent spacing and shadows
- **Forms**: Standardized inputs with validation states
- **Badges**: Status indicators and labels

## 🔐 Authentication & Authorization

The application supports three user roles:

1. **Normal User (Patient)**
   - Search medicines and pharmacies
   - View sustainability dashboard
   - Manage profile and preferences

2. **Pharmacy Administrator**
   - Manage inventory and orders
   - View demand forecasts
   - Update pharmacy information

3. **Super Administrator**
   - Manage users and pharmacies
   - Access system reports
   - Configure system settings

## 🌱 Sustainability Features

MedFinder incorporates several sustainability-focused features:

- **Carbon Footprint Tracking**: Calculate and display CO₂ emissions saved
- **Eco-Friendly Routing**: Suggest pharmacies with minimal environmental impact
- **Waste Reduction**: Help reduce medicine waste through better stock management
- **Green Pharmacy Recognition**: Highlight pharmacies with high eco-scores
- **Educational Content**: Provide tips for sustainable healthcare practices

## 📊 Analytics & Reporting

### User Analytics
- Search patterns and popular medicines
- Geographic distribution of users
- Environmental impact metrics
- User engagement and retention

### Pharmacy Analytics
- Sales performance and trends
- Inventory turnover rates
- Customer satisfaction metrics
- Eco-score improvements

### System Analytics
- Platform usage statistics
- Performance metrics
- Security and compliance reports
- Financial analytics

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_ENABLE_ANALYTICS=true
```

### Tailwind Configuration
The `tailwind.config.js` file contains the complete design system configuration, including:
- Custom color palette
- Extended spacing and typography
- Component utilities
- Responsive breakpoints

## 🧪 Testing

The application is structured to support comprehensive testing:

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 📱 Responsive Design

MedFinder is fully responsive and optimized for:
- **Desktop**: 1200px+ with full functionality
- **Tablet**: 768px-1199px with adapted layouts
- **Mobile**: <768px with touch-optimized interface

## 🚀 Deployment

### Frontend Deployment
The frontend can be deployed to various platforms:

1. **Netlify**
   ```bash
   npm run build
   # Deploy the build/ folder to Netlify
   ```

2. **Vercel**
   ```bash
   npm run build
   # Deploy the build/ folder to Vercel
   ```

3. **AWS S3 + CloudFront**
   ```bash
   npm run build
   # Upload build/ folder to S3 and configure CloudFront
   ```

### Backend Integration
The frontend is designed to integrate seamlessly with a FastAPI backend. Key integration points:
- Authentication endpoints
- Medicine search API
- Pharmacy management API
- Analytics and reporting API

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use ES6+ features
- Follow React best practices
- Maintain consistent indentation (2 spaces)
- Write meaningful commit messages
- Include comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation for common issues

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Complete UI implementation
- ✅ Mock data and state management
- ✅ Responsive design
- ✅ Basic functionality

### Phase 2 (Backend Integration)
- 🔄 FastAPI backend development
- 🔄 Database integration
- 🔄 Real-time features
- 🔄 Authentication system

### Phase 3 (Advanced Features)
- 📋 Google Maps integration
- 📋 Real-time inventory updates
- 📋 Advanced analytics
- 📋 Mobile app development

### Phase 4 (Enhancements)
- 📋 AI-powered recommendations
- 📋 Telemedicine integration
- 📋 Insurance integration
- 📋 International expansion

## 🌟 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide React for beautiful icons
- The open-source community for inspiration and tools

---

**MedFinder** - Making healthcare accessible while protecting our planet 🌍💚
