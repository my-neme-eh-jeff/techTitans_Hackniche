import re
import pandas as pd
# import nltk
# import random
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from nltk import word_tokenize
from nltk.corpus import stopwords


def get_bestseller(user_preference: str, df: pd.DataFrame, col_name: str):
    # on sales data
    r_list = []
    tfidf_vectorizer = TfidfVectorizer()
    tfidf_matrix = tfidf_vectorizer.fit_transform(df[col_name].astype(str))
    user_vector = tfidf_vectorizer.transform([' '.join(user_preference)])
    cosine_similarities = linear_kernel(user_vector, tfidf_matrix).flatten()

    df['SimilarityScore'] = cosine_similarities
    recommended_items = df.sort_values(by='SimilarityScore', ascending=False)

    top_recommendations = recommended_items.head(5)
    # print("-------------------")
    # print("Top bestsellers:")
    for index, row in top_recommendations.iterrows():
        r_list.append(row['items'])
    return r_list[0:3]


def get_recommendation(user_preference: str, menucard: pd.DataFrame):
    # on menu card
    r_list = []
    tfidf_vectorizer = TfidfVectorizer()
    tfidf_matrix = tfidf_vectorizer.fit_transform(
        menucard['receipe'].astype(str))
    user_vector = tfidf_vectorizer.transform([' '.join(user_preference)])
    cosine_similarities = linear_kernel(user_vector, tfidf_matrix).flatten()

    menucard['SimilarityScore'] = cosine_similarities
    recommended_items = menucard.sort_values(by='SimilarityScore',
                                             ascending=False)

    top_recommendations = recommended_items.head(5)
    # print("Top Recommended Menu Items:")
    # print(top_recommendations)
    for index, row in top_recommendations.iterrows():
        # print(row['Title'], "-", row['receipe'], "(Similarity Score:", row['SimilarityScore'], ")")
        if not pd.isna(row['Title']):
            r_list.append(row['Title'])
    return r_list


def custom_lemmatize(df, colname):

    #tokenizing the words for lemmatization and removing stopwords
    df[colname] = df[colname].apply(word_tokenize)
    df[colname] = df[colname].apply(
        lambda x:
        [word for word in x if word not in set(stopwords.words('english'))])

    # joining the words after lemmatization and stopword removal
    df[colname] = df[colname].apply(lambda x: ' '.join(x))

    return df


def post_process_column_values(df, column_name):

    df[column_name] = df[column_name].apply(lambda x: x.strip())

    # Define a regular expression pattern to match parentheses and their contents
    pattern = re.compile(r'\([^)]*\)')

    # Apply the regular expression pattern to remove parentheses and their contents from each cell in the specified column
    df[column_name] = df[column_name].apply(
        lambda x: re.sub(pattern, '', str(x)))

    # Remove `Add On` from end
    df[column_name] = df[column_name].apply(lambda x: x.replace(' Add On', ''))

    # Remove `y Gm` from end
    df[column_name] = df[column_name].apply(
        lambda x: re.sub(r'\s*\d+\s*Gm$', '', x))

    # Remove `y Pc` from end
    df[column_name] = df[column_name].apply(
        lambda x: re.sub(r'\s*\d+\s*(Pcs?|Pc(s)?)', '', x))

    # Remove word `With` and after `With`
    df[column_name] = df[column_name].apply(
        lambda x: re.sub(r'\s*With.*', '', x))

    df[column_name] = df[column_name].apply(lambda x: x.strip())
    return df
