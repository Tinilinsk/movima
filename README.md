# 🧠 Movie Database Application
The Movie Database Application is a comprehensive web application designed to manage and provide access to a vast collection of movie data. This application aims to solve the problem of efficiently storing, retrieving, and manipulating movie information, making it easier for users to explore and discover new movies. The core features of this application include user authentication, movie browsing, searching, and rating, as well as administrative tools for managing movie data and user accounts.

## 🚀 Features
- **User Authentication**: Secure login and registration system with JSON Web Tokens (JWT) for authentication and authorization.
- **Movie Browsing**: Users can browse through a vast collection of movies, filtered by genre, release year, or rating.
- **Movie Searching**: Advanced search functionality allows users to find specific movies by title, director, or cast.
- **Movie Rating**: Users can rate movies, and the application displays the average rating for each movie.
- **Administrative Tools**: Authorized administrators can add, update, or delete movie data, as well as manage user accounts.

## 🛠️ Tech Stack
- **Backend**: Java, Spring Boot, Spring Data JPA, Spring Security
- **Frontend**: TypeScript, React
- **Database**: MySQL
- **Build Tool**: Maven
- **Dependencies**: JJWT, Spring Boot Starter Web, Spring Boot Starter Data JPA, Spring Security

## 📦 Installation
### Prerequisites
- Java 11 or higher
- Maven 3.6 or higher
- MySQL 8.0 or higher
- Node.js 14 or higher
- npm 6 or higher

### Setup Instructions
1. Clone the repository: `git clone https://github.com/your-repo/movie-database-application.git`
2. Navigate to the backend directory: `cd movie-database-application/backend`
3. Build the backend application: `mvn clean package`
4. Start the backend application: `java -jar target/backend-0.0.1-SNAPSHOT.jar`
5. Navigate to the frontend directory: `cd movie-database-application/frontend`
6. Install dependencies: `npm install`
7. Start the frontend application: `npm start`

## 💻 Usage
1. Open a web browser and navigate to `http://localhost:3000`
2. Register a new user account or log in with an existing account
3. Browse through the movie collection, search for specific movies, and rate your favorite movies
4. Authorized administrators can access the administrative tools by navigating to `http://localhost:3000/admin`

## 📂 Project Structure
```markdown
movie-database-application
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   ├── resources
│   │   │   └── webapp
│   │   └── test
│   │       ├── java
│   │       └── resources
│   ├── target
│   └── pom.xml
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── containers
│   │   ├── images
│   │   ├── index.js
│   │   ├── index.css
│   │   └── App.js
│   ├── package.json
│   └── README.md
└── README.md
```

## 📸 Screenshots

## 🤝 Contributing
Contributions are welcome! Please submit a pull request with your changes and a brief description of what you've added or fixed.

## 📝 License
This project is licensed under the MIT License.

## 📬 Contact
For any questions or concerns, please contact us at [tema.ryabkov@gmail.com](tema.ryabkov@gmail.com).
