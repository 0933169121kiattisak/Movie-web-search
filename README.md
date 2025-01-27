# Let me break down the core concepts of this Movie Search project:
 1. Project Overview
    - This is a React-based movie search application that uses the OMDB (Open Movie Database) API to search for and display movie information. Users can search for movies and view their details
 2. Key Components
    - App.js: Main component managing the application state and logic
    - Search.js: Component for the search input functionality
    - Detail.js: Component for displaying detailed movie information
 3. Core Functionality
    - State Management
      ``` const [state, setState] = useState({
          const [state, setState] = useState({
          searchQuery: '',
          results: [],
          selected: {}
          });
      ```
   - Search Implementation
     - Users can type movie names in the search bar
     - Search is triggered when Enter key is pressed
     - Uses axios to make API calls to OMDB
     - Results are displayed as movie cards with posters
   - Detail View
     - Clicking on a movie card shows detailed information
     - Displays title, year, rating, poster, and plot
     - Can be closed to return to search results
4. Key Technical Features
   - API Integration: Uses axios for HTTP requests to OMDB API
   - Event Handling:
     - Input change handling (searchInput)
     - Enter key press detection (search)
     - Click handling for movie selection (openDetail)
  - Conditional Rendering: Shows/hides detail view based on selection
  - State Updates: Uses proper React state management with prevState
5. Data Flow
   ``` User Input → API Call → Update State → Render Results → Select Movie → Show Details ```




