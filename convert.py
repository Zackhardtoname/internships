import io
import pytablewriter

def convert(filename, from_ext, to_ext):
    input_file = f"{filename}.{from_ext}"

    writer = pytablewriter.MarkdownTableWriter()
    writer.from_csv(input_file)

    with open(f"{filename}.{to_ext}", "w") as f:
        writer.stream = f
        writer.write_table()


if __name__ == '__main__':
    convert("internships", "csv", "md")