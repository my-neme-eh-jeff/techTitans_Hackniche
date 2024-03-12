import pandas as pd

def convert_to_quoted_strings(df):
    """
    Converts all values in a DataFrame to strings enclosed in double quotes.
    
    Parameters:
    - df: The DataFrame to convert.
    
    Returns:
    - A new DataFrame with all values converted to strings enclosed in double quotes.
    """

    return df.map(lambda x : f'"{x}"')


def postProcessTAPEXResult(output):
    return str(output[0])
