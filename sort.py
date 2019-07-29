import pandas as pd

def sort(filename):
    path = f"./{filename}.csv"
    df = pd.read_csv(path)
    df.sort_values(by=['Name'], inplace=True)
    df.to_csv(path, index=False)

if __name__ == '__main__':
    sort("internships")