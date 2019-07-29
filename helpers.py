import pandas as pd
import numpy as np

def add_index_col(filename):
    path = f"./{filename}.csv"
    df = pd.read_csv(path)
    df.sort_values(by=['Name'], inplace=True)

    # make the index col start from 1
    df.index += 1
    df.to_csv(f"./{filename}_temp.csv", index=True, index_label="Index")