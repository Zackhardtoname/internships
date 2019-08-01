fin = open("internships.md", "r")
internships = fin.read()
fin.close()

fin = open("repo_info.md", "r")
repo_info = fin.read()
fin.close()

fout = open("README.md", "w")
fout.write(repo_info)
fout.write(internships)
fout.close()