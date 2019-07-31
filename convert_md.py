import os
import pytablewriter
import helpers

def convert(filename, from_ext, to_ext):
    # provide index for the md file
    helpers.add_index_col(filename)

    indexed_filename = f"{filename}_temp.{from_ext}"
    writer = pytablewriter.MarkdownTableWriter()
    writer.from_csv(indexed_filename)

    with open(f"./{filename}.{to_ext}", "w") as f:
        writer.table_name = "Internships"
        writer.stream = f
        writer.write_table()

    # for some reason can't remove it inside the convert function
    # remove the index csv file
    # os.remove(indexed_filename)

if __name__ == '__main__':
    convert("internships", "csv", "md")