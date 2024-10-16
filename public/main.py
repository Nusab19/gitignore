import os
import json

files = os.listdir("data")
names = [i[:-10].replace('.', '_') for i in files]

names.sort()

with open("names.json", "w") as f:
    json.dump(names, f, ensure_ascii=0)

with open("names.txt", "w") as f:
	f.write(" ".join(names))
