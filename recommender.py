import pandas as pd
import nltk
import random
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from helper import get_bestseller, get_recommendation, post_process_column_values, custom_lemmatize
import streamlit as st
from streamlit import session_state as session
import os

sales_df = pd.read_csv('./dataset/sales.csv')
menu_df = pd.read_csv('./dataset/menuCard.csv')


# item_df = sales_df.loc[:, ['Invoice No.', 'Item Name']]
# item_df.columns = ['user_id', 'items']
# cleaned_item_df = post_process_column_values(item_df, 'items')
# processed_item_df = custom_lemmatize(cleaned_item_df, 'items')

# # # Merge columns
# processed_item_df['items'] = processed_item_df['items'] + ' - ' + sales_df[
#     'Category'].astype(str)
# processed_item_df.to_csv('./dataset/tfidf_item_df.csv')

@st.cache_data(persist=True, show_spinner=False)
def load_data():
    """
    load and cache data
    :return: tfidf data
    """
    tfidf_data = pd.read_csv("./dataset/tfidf_item_df.csv", index_col=0)
    return tfidf_data

# re = get_recommendation('cold stuff', menu_df)
# print(re)


dataframe = None

st.title("""Recommendation system :coffee:.""")

st.text("")
st.text("")
st.text("")
st.text("")

session.options = st.multiselect(label="Select preference", options=['Hot beverage','Cold Beverage', 'Coffee','Chocolate','Milk','Sweet'])
pref = ''.join(session.options)

st.text("")
st.text("")

session.slider_count = st.slider(label="count", min_value=2, max_value=5)

st.text("")
st.text("")

buffer1, col1, buffer2 = st.columns([1.45, 1, 1])


with st.container():
        col1, col2 = st.columns(2)
        with col1:
            is_clicked_b = col1.button(label=":green[Get Best Sellers]")
        with col2:
            is_clicked_r = col1.button(label=":orange[Get Recommendation]",type="secondary")


if is_clicked_r:
    with st.spinner("Retrieving recommendations..."):
        bs = get_recommendation(pref, menu_df)
        bs = bs[:session.slider_count]
        st.write("Recommended Items:")
        for item in bs:
            st.write(item)

if is_clicked_b:
    with st.spinner("Fetching best sellers..."):
        processed_item_df = load_data()
        bs = get_bestseller(pref, processed_item_df, 'items')
        bs = bs[:session.slider_count]
        st.write("Best-Selling Items:")
        for item in bs:
            st.write(item)
        
st.text("")
st.text("")
st.text("")
st.text("")

if dataframe is not None:
    st.table(dataframe)
