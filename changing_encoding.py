import codecs

def change_encoding(path, source_encoding='ascii', target_encoding="utf-8"):
    BLOCKSIZE = 1048576  # or some other, desired size in bytes
    with codecs.open(path, "r", source_encoding) as sourceFile:
        with codecs.open("path.csv", "w", target_encoding) as targetFile:
            while True:
                contents = sourceFile.read(BLOCKSIZE)
                if not contents:
                    break
                targetFile.write(contents)

if __name__ == '__main__':
    try:
        change_encoding("internships.csv")
    except:
        pass