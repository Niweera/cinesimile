import re

from dotenv import load_dotenv
import os
import requests
import streamlit as st
from streamlit_searchbox import st_searchbox

st.set_page_config(page_title="CineSimile", page_icon="🎬")

# Load environment variables
load_dotenv()

# API Base URL
API_BASE_URL = os.getenv("FLASK_API_URL")  # Replace with your Flask API URL


# Function to check API accessibility
def is_api_accessible():
    try:
        response = requests.get(API_BASE_URL)
        return response.status_code == 200
    except:
        return False


# Check if the API is accessible
api_accessible = is_api_accessible()


# Function to get movie suggestions
def get_movie_suggestions(query):
    response = requests.get(f"{API_BASE_URL}/suggest?query={query}")
    if response.status_code == 200:
        suggestions = response.json()
        return [f"{s['Name']} ({s['Date']})" for s in suggestions]
    return []


# Function to get movie recommendations
def get_movie_recommendations(movie_name, movie_year, engine):
    response = requests.get(
        f"{API_BASE_URL}/recommend/{engine}?name={movie_name}&year={movie_year}"
    )
    if response.status_code == 200:
        return response.json()
    return []


# Define a wrapper function for get_movie_suggestions to be used in st_searchbox
def search_function(query):
    if query:
        return get_movie_suggestions(query)
    return []


# Streamlit UI

st.title("🎬 CineSimile")
st.subheader("AI is here to take over the world.")
st.subheader("In the meantime, here's a good movie to watch!")

# Disable UI if API is not accessible
if not api_accessible:
    st.error("CineSimile-API is currently inaccessible. Please try again later.")
    st.stop()

# Movie name input with autocomplete suggestions
st.write("Enter the name of a movie")

selected_movie = st_searchbox(
    label="",
    search_function=search_function,
    placeholder="Start typing...",
    help_text="Select a movie from the list",
    clear_on_submit=False,
)

st.write("Find similar movies using:")
# Buttons for each recommendation engine
engines = ["cosine", "euclidean", "pearson", "jaccard", "manhattan"]
# Create a row of columns for the buttons
selected_engine = None
cols = st.columns(len(engines))
for idx, engine in enumerate(engines):
    with cols[idx]:
        if st.button(engine.capitalize(), use_container_width=True):
            selected_engine = engine

# Display recommendations
if selected_engine and selected_movie:
    year_match = re.search(r"\((\d{4})\)", selected_movie)

    if not year_match:
        st.error("Please select a movie with a valid year")

    movie_year = int(year_match.group(1))
    movie_name = selected_movie.replace(year_match.group(0), "").strip()

    similar_movies = get_movie_recommendations(movie_name, movie_year, selected_engine)

    # Display the movies and their posters horizontally
    cols = st.columns(len(similar_movies))  # Create columns
    for idx, movie in enumerate(similar_movies):
        with cols[idx]:
            st.image(
                movie.get("poster", {}).get(
                    "poster",
                    "https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg",
                )
            )
            st.markdown(f"**{movie['name']} ({movie['year']})**")
elif selected_engine and not selected_movie:
    st.error("Please enter and select a movie name from the suggestions")
