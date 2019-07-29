import os
import pytablewriter
import helpers

def convert(filename, from_ext, to_ext):
    # provide index for the md file
    helpers.add_index_col(filename)

    input_file = f"{filename}_temp.{from_ext}"
    writer = pytablewriter.MarkdownTableWriter()
    writer.from_csv(input_file)

    with open(f"./{filename}.{to_ext}", "w") as f:
        writer.table_name = "Internships"
        writer.stream = f
        writer.write_table()

    # remove the index csv file
    os.remove(input_file)

if __name__ == '__main__':
    convert("internships", "csv", "md")